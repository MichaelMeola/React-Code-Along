import { Invoice } from "./models.js";
import { Op } from "sequelize";

const allData = await Invoice.findAll()

const id = await Invoice.findByPk()

export { allData, id }
