import { DataTypes, Model } from "sequelize";
import connectToDB from "./db.js";
import url from 'url'
import util from 'util'

const db = await connectToDB('postgres:///invoices')

// MODELS GO HERE

class Invoice extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}

Invoice.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        description: {
            type: DataTypes.STRING   
        },
        rate: {
            type: DataTypes.INTEGER
        },
        hours: {
            type: DataTypes.INTEGER
        }
    }, {
        sequelize: db
    }
)




if (process.argv[1] === url.fileURLToPath(import.meta.url)) {
    console.log('Syncing database...');
    await db.sync();
    console.log('Finished syncing database!');
  }

// ADD MODELS TO EXPORT
export { Invoice }