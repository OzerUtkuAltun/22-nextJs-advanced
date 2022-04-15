import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return <MeetupDetail image={meetupData.image}
  alt = {meetupData.alt}
  title= {meetupData.title}
  address = {meetupData.address}
  description = {meetupData.description}
  />  
}


// not: useRouter sadece functional component içerisinde kullanılabildiği için ona burada ulaşamıyoruz. Bunun yerinde context üzerinden erişebiliriz.
export async function getStaticProps(context) {

  // context burada req ve response tutmuyor. params tutuyor.

  const meetupId = context.params.meetupId;
  console.log(meetupId);

 // fetch data for a single meetup

 return {
   props: {
     meetupData: {
      image:"https://www.targettraining.eu/wp-content/uploads/2019/02/meetings-practice.jpg",
      alt: "A first meetup",
      id: meetupId,
      title: "Title",
      address: "Address",
      description: "description"
     }
   }
 }

}



export default MeetupDetails;
