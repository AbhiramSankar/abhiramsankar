import handleContact from './api/contact'
import maintenanceUnlocked from './api/maintenance'

const workerMain = {
  fetch(req, env) {
    const url = new URL(req.url)
    const route = `${req.method} ${url.pathname}`

    switch (route) {
      case 'POST /api/maintenance/unlock':
        return maintenanceUnlocked(req, env)
      case 'POST /api/contact':
        return handleContact(req, env)
      default:
        return Response.json(
          {
            success: false,
            msg: "API route not found. Congratulations, you've discovered unfinished backend work. Or did you invent an endpoint and forget to build it",
          },
          {
            status: 404,
          }
        )
    }
  },
}

export default workerMain
