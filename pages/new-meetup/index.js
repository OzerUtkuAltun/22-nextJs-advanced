// domain.com/new-meetup -> burada nested pathler için subfolder approach'ı seçtik.

import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {

    function addMeetupHandler(enteredMeetupData) {
        console.log(enteredMeetupData);
    }

  return <NewMeetupForm onAddMeetup={addMeetupHandler}/>;
}

export default NewMeetupPage;
