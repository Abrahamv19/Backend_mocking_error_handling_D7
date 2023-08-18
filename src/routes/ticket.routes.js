/* import { Router } from 'express';
import { ticketsController } from '../controller/ticket.controller.js';
import { isLogged, isUser } from '../middleware/auth.js';

const routerTicket = Router();

routerTicket.get("/:cid/purchase", isLogged, isUser, ticketsController.checkOut);
routerTicket.post("/:cid/purchase", isLogged, isUser, ticketsController.addTicket); 
routerTicket.get("/purchase/:cid", isLogged, isUser, ticketsController.addTicket);



export default routerTicket; */