import { toast } from 'react-toastify';
import conf from '../conf/Conf.js'
import { Client, Account, ID } from "appwrite";

//class to create user 

export class AuthService{

    client = new Client();

    account;

    //we want the account to be created only when there is an instance of the class created

    constructor(){

        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({email, password, name})
    {
        try{
            
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            //login if the account is created
            if(userAccount){
                //we are returning this function so that we can call it wherever req.
                console.log("reached")
                return this.login({email, password});
            }
            else{
                return userAccount
            }
        }
        catch(error){
            console.log("error here")
            toast.error("User Already Exists!!")
            throw error;
        }
        
    }

    async login({email, password}){

        try{
            
            return await this.account.createEmailPasswordSession(email, password);
            //console.log("error")
            
        }
        catch(error){
            toast.error(error.message)
            throw error
        }
    }

   // check current user
    async getCurrentUser(){
        try{
            //returns the current account, which will be verified and handled in the frontend.
            //if no account returns null, if try catch doesn't executes, returns null 
            return this.account.get();
        }
        catch(error){
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    //delete session or logout
    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

//creating and exporting an object
const authService = new AuthService();

export default authService;