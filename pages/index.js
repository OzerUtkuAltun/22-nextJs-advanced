//  index.js özel bir isim. pages altındaki index.js uygulamanın giriş sayfasıdır.

import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    image:
      "https://www.targettraining.eu/wp-content/uploads/2019/02/meetings-practice.jpg",
    title: "Meeting 1",
    address: "sample address 1",
    description: "This is a meetup",
  },
  {
    id: "m2",
    image:
      "https://www.targettraining.eu/wp-content/uploads/2019/02/meetings-practice.jpg",
    title: "Meeting 2",
    address: "sample address 2",
    description: "This is a meetup",
  },
  {
    id: "m3",
    image:
      "https://www.targettraining.eu/wp-content/uploads/2019/02/meetings-practice.jpg",
    title: "Meeting 3",
    address: "sample address 3",
    description: "This is a meetup",
  },
  {
    id: "m4",
    image:
      "https://www.targettraining.eu/wp-content/uploads/2019/02/meetings-practice.jpg",
    title: "Meeting 4",
    address: "sample address 4",
    description: "This is a meetup",
  },
];

function HomePage() {


  // Not: useState, ve useEffect kullanarak db'den data getirme işlemi 2 cycle'da gerçekleşir
  // next.js html'i ilk cycle'da render ettiği için useEffect içerisinde data'yı getirme işleminin
  // yapılması önerilmez.

  return <MeetupList meetups={DUMMY_MEETUPS} />
}
export default HomePage;
