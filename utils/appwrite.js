import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://appwrite.nief.tech/v1')
    .setProject('6523108bcdd55f7088d3'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
