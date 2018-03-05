import * as express from 'express'

import { Main } from "./main"

export namespace Routes {
    export const main = Main

    export function init(app: express.Express) {
        main.init(app)
    }
}