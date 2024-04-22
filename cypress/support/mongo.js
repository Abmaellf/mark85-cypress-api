
// import { MongoClient } from 'mongodb';
const{ MongoClient} = require ('mongodb')

const mongoUri = `mongodb+srv://abmaelqax:Abmaelxperience@cluster0.nmaphmy.mongodb.net/markdb?retryWrites=true&w=majority&appName=Cluster0`

    const client = new MongoClient(mongoUri);

    async function connect() {
        await client.connect()

        return client.db('markdb')
    }

    async function disconnect() {
        await client.disconnect()
    }
module.exports = {connect, disconnect }

