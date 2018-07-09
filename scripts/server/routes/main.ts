import * as express from 'express'

export namespace Main {
    export function init(app: express.Express) {
        simple(app, "*", "landing")
    }

    function simple(app: express.Express, from: string, to: string) {
        app.get(from, (req, res) => res.render(to))
    }
}