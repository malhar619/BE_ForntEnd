import { Client, Account } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65ad25d16866a7df883d');  

export const account = new Account(client);

export default client;