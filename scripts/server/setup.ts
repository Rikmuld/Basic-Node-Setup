import * as http from "http"
import * as express from "express"
import * as path from 'path'
import * as stylus from 'stylus'
import * as bodyParser from 'body-parser'

export namespace Setup {
    export function startServer(server: http.Server) {
        server.listen(3000)
    }

    export function setupExpress(app: express.Express, root: string) {
        const viewsDir = path.join(root, 'views')
        const publicDir = path.join(root, 'public')

        app.set('view engine', 'pug')
        app.set('views', viewsDir)
        app.use(bodyParser.urlencoded({ extended: true }))
        app.use(bodyParser.json())
        app.use(stylus.middleware(publicDir))
        app.use(express.static(publicDir))
    }
}