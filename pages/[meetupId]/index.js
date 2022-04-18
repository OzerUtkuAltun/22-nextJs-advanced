import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

function MeetupDetails(props) {
  return (
    <React.Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description}></meta>
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </React.Fragment>
  );
}

// not: useRouter sadece functional component içerisinde kullanılabildiği için ona burada ulaşamıyoruz. Bunun yerinde context üzerinden erişebiliriz.
export async function getStaticProps(context) {
  // context burada req ve response tutmuyor. params tutuyor.

  const meetupId = context.params.meetupId;
  console.log(meetupId); // sadece terminalde gözükür.

  const client = await MongoClient.connect(
    `mongodb+srv://utku:Umongo123..@mycluster.0gnlu.mongodb.net/meetups?retryWrites=true&w=majority`
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  }); // id'yi object id ile wraplemek gerekiyor

  client.close();

  // fetch data for a single meetup

  return {
    props: {
      meetupData: {
        title: selectedMeetup.title,
        id: selectedMeetup._id.toString(),
        description: selectedMeetup.description,
        image: selectedMeetup.image,
      },
    },
  };
}

// dynamic page is export etmek zorundayız.
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    `mongodb+srv://utku:Umongo123..@mycluster.0gnlu.mongodb.net/meetups?retryWrites=true&w=majority`
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray(); // parametre olarak verilen ilk obje
  // filter criteria biz herhangi bir filter uygulamak istemediğimiz için boş bıraktık.
  // İkinci objeyi ise sadecce _id değerlerini çekmek istediğimiz için verdik.

  client.close();

  return {
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  
    fallback: "blocking", // false -> bütün meetupId value'larını karşılıyor. / true -> bazılarını karşılıyor
    // deploy ettikten ve yeni toplantı ekledikten sonra detay sayfasına gitmeye
    // çalıştığımızda 404 attı. Çözmek için fallback'e blocking veya true verilebilir.
  };


  /* 

    ESKI HALİ: params keyi önemli!!!!!!!!!!!!!!!!!!!!!!!!!

    paths: [
      {
        params: {
          meetupId: "m1", // şu anlık hard code
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
      {
        params: {
          meetupId: "m3", // bu tanımlama yapılmazsa 404 döner.
        },
      },
    ],

  */
}

export default MeetupDetails;
