import { observable, computed, action, makeObservable, runInAction } from 'mobx';
import Swal from 'sweetalert2'
class MeetingStore {
    meetingData = [];

    constructor() {
        makeObservable({
            meetingData: observable,
            getMeeting: action,
            addMeeting: action,
        })
    }
    getMeeting = async () => {
        const responseGet = await fetch("http://localhost:8787/appointments", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });
        console.log("after get")
        this.meetingData = await responseGet.json();
        const sortedData = [...this.meetingData].sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));
        this.meetingData = sortedData;
    }
    addMeeting(meeting) {
        fetch("http://localhost:8787/appointment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(meeting),
        }).then((response) => {
                if (response.status === 200) {
                    this.meetingData.push(meeting);

                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `A meeting was scheduled \nfor ${meeting.dateTime}`,
                        showConfirmButton: false,
                    
                    });

                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "The date is catched, please choose other one!",

                    });
                }
            })

    }


}
export default new MeetingStore();


