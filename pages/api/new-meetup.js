
// pages/api altına http requestlerini karşılamak için route tanımlayabiliriz.
// Not: path bu olmalı.
// Bu kod server side'da kalacak client'a ulaşmayacak.
// request pathi -> api/new-meetup


function handler(req, res) {

    if( req.method === "POST") { 
        const data = req.body;

        const {title, image, address, description} = data;
    }
    
}

export default handler;