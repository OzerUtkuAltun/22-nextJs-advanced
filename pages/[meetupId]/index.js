import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      alt={props.meetupData.alt}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}

// not: useRouter sadece functional component içerisinde kullanılabildiği için ona burada ulaşamıyoruz. Bunun yerinde context üzerinden erişebiliriz.
export async function getStaticProps(context) {
  // context burada req ve response tutmuyor. params tutuyor.

  const meetupId = context.params.meetupId;
  console.log(meetupId); // sadece terminalde gözükür.

  // fetch data for a single meetup

  return {
    props: {
      meetupData: {
        image:
          "https://www.targettraining.eu/wp-content/uploads/2019/02/meetings-practice.jpg",
        alt: "A first meetup",
        id: meetupId,
        title: "Title",
        address: "Address",
        description: "description",
      },
    },
  };
}

// dynamic page is export etmek zorundayız.
export async function getStaticPaths() {
  return {
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
    fallback: false, // false -> bütün meetupId value'larını karşılıyor. / true -> bazılarını karşılıyor
  };
}

export default MeetupDetails;
