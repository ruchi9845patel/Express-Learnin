import { MongoClient } from "mongodb";

const url="mongodb+srv://ruchi9845patel_db_user:sh2OAAscTp65lSfE@cluster0.eihh2lc.mongodb.net/?appName=Cluster0"
const database="school";
const collection="student";
const client= new MongoClient(url)
client.connect().then(()=>{
    console.log("---------connect-----------")
})

async function dbconnection() {
    const db=client.db(database)
    const collectResult=db.collection(collection)
    const result= await collectResult.find().toArray();
    console.log(result)
}

dbconnection()