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

function HomePage(props) {
  // Not: useState, ve useEffect kullanarak db'den data getirme işlemi 2 cycle'da gerçekleşir
  // next.js html'i ilk cycle'da render ettiği için useEffect içerisinde data'yı getirme işleminin
  // yapılması önerilmez. Bu durum ayrıca SEO için de kötüdür.

  // pre rendering'in iki formu var; static generation ve server side rendering
  // NOT: static generation'da page component uygulama build aldığında renderlanır. (build edildikten sonra pre-rendered page değişmez. (defaultta))

  return <MeetupList meetups={props.meetups} />;
}


// sadece page componentlar'da çalışır. Diğer componentlerde çalışmaz.
// Bu kod sadece build zamanında çalışacak. Bu kod client'a hiç bir zaman iletilmez.
// Data'yı getirmek vs. için bu kısmı kullanacağız.

export async function getStaticProps() {

  // fetch data from an API

  return {  // her zaman bir obje dönülmeli.
    props: { // ismi props olmalı. Homepage'deki props'a refer eder.
      meetups: DUMMY_MEETUPS
    } ,
    revalidate: 10 // nextjs gelen request için bu sayfayı yeniden oluşturana kadar bekleyecek (second)
  }

}


// server'a her deploymenttan sonra çalışır. Server side rendering için kullanılır.
// export async function getServerSideProps(context) {

//   // revalidate set etmeye gerek yok. Çünkü burası her gelen istekten sonra yeniden çalışacak.
//   // context üzerinden req ve res'a erişilebilir.

//   const req = context.req;
//   const res = context.res;

//   console.log(req);
  
 
//   return {
//     props: {
//        meetups: DUMMY_MEETUPS
//       }
//   }

// }

export default HomePage;
