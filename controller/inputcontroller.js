import { userList } from "../model/inputModel.js";


export function handler(req,res) {
    const userData=userList()
    res.render('input',{users:userData});
} 
