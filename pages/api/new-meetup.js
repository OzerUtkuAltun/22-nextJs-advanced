// pages/api altına http requestlerini karşılamak için route tanımlayabiliriz.
// Not: path bu olmalı.
// Bu kod server side'da kalacak client'a ulaşmayacak.
// request pathi -> api/new-meetup

import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    sendDataToDb(req, res, data);
  }
}


const sendDataToDb = async (req, res, data) => {

    const { title, image, address, description } = data;

    const client = await MongoClient.connect(
        `mongodb+srv://utku:Umongo123..@mycluster.0gnlu.mongodb.net/meetups?retryWrites=true&w=majority`
      );
  
      const db = client.db();
      const meetupsCollection = db.collection("meetups");

      if(title, image, address, description) {
        await meetupsCollection.insertOne(data);
        client.close();
        res.status(201).json({ message: "Meetup inserted." });
    } else {
        res.status(400).json({message: "title, image, address and description fields cannot be empty"})
    } 
}

export default handler;
