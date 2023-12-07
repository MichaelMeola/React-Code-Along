import { Invoice } from "./models.js";

const invoice1 = await Invoice.create({
    description: 'Content plan',
    rate: 50, 
    hours: 4
})

const invoice2 = await Invoice.create({
    description: 'Copy writing',
    rate: 50,
    hours: 2
})

const invoice3 = await Invoice.create({
    description: 'Website design',
    rate: 50,
    hours: 5
})

const invoice4 = await Invoice.create({
    description: 'Website development',
    rate: 100,
    hours: 5
})

