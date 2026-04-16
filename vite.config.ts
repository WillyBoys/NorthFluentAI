import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { handlePromptImproverRequest } from './server/promptImprover'

function promptImproverDevApi(): Plugin {
  return {
    name: 'prompt-improver-dev-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url?.startsWith('/api/improve-prompt')) {
          next()
          return
        }

        const body = await new Promise<string>((resolve, reject) => {
          const chunks: Buffer[] = []

          req.on('data', (chunk) => {
            chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
          })

          req.on('end', () => {
            resolve(Buffer.concat(chunks).toString('utf8'))
          })

          req.on('error', reject)
        })

        const request = new Request(`http://localhost${req.url}`, {
          method: req.method,
          headers: {
            'content-type': req.headers['content-type'] || 'application/json',
          },
          body:
            req.method === 'GET' || req.method === 'HEAD' ? undefined : body,
        })

        const response = await handlePromptImproverRequest(request)
        const responseText = await response.text()

        res.statusCode = response.status
        response.headers.forEach((value, key) => {
          res.setHeader(key, value)
        })
        res.end(responseText)
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  process.env.GEMINI_API_KEY ??= env.GEMINI_API_KEY
  process.env.GEMINI_MODEL ??= env.GEMINI_MODEL

  return {
    base: './',
    plugins: [react(), promptImproverDevApi()],
  }
})
