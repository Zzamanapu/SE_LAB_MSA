import { Router } from "express";
import { dashboardPageHandle, farmerPageHandle,  } from "../controllers/adminController.js";


const adminRouter = Router()


adminRouter.get('/dashboard', dashboardPageHandle)

adminRouter.get('/farmer', farmerPageHandle)

// adminRouter.get('/farmer', traderPageHandle)




export default adminRouter