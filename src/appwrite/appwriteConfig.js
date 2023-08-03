import {Client, Account, Databases} from 'appwrite'

const client = new Client();

// client.setEndpoint("http://localhost/v1").setProject("64cb33f14544780b63b5")
client.setEndpoint("https://cloud.appwrite.io/v1").setProject("64cbe2966b5d91fb93d5")

export const account = new Account(client)

//Database

export const databases = new Databases(client, "64cbe2e6b5ac467a2802")