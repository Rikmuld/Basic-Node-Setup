import * as express from 'express'
import * as http from 'http'
import * as socket from 'socket.io'
import * as path from 'path'
import * as stylus from 'stylus'
import * as bodyParser from 'body-parser'

import { Setup } from "./setup"
import { SocketHandler } from "./sockets/socketHandler"
import { Routes } from "./routes/routes"

const app = express()
const server = http.createServer(app)
const io = socket(server)
 
Setup.setupExpress(app, __dirname + "/../")
SocketHandler.bindHandlers(app, io)
Routes.init(app)

Setup.startServer(server)
