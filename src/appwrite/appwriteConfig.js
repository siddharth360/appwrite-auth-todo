import {Client, Account, Databases} from 'appwrite'

const client = new Client();

// client.setEndpoint("http://localhost/v1").setProject("64cb33f14544780b63b5")
client.setEndpoint("http://192.168.210.120/v1").setProject("64cb33f14544780b63b5")

export const account = new Account(client)

//Database

export const databases = new Databases(client, "64cb34030fb0ac8b6954")