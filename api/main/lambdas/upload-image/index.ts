import schema from '@/main/lambdas/upload-image/schema'
import { handlerPath } from '@/libs/handlerResolver'

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'image/create',
        request: {
          schema: {
            'application/json': schema
          }
        }
      }
    }
  ]
}
