import { observable, action, computed, makeObservable } from 'mobx';
import Swal from 'sweetalert2';
class BusinessStore {
  data = {};
  constructor() {
    makeObservable(this, {
      data: observable,
      updateDetails: action,
      initData: action,
      initialData: action

    });
  }
  updateDetails = async (details) => {
    const response = await fetch("http://localhost:8787/businessData", {
      method: "POST",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.statusText);
    if (response.status === 200) {
      this.data = details;
      Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("The details have been saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Your details have been successfully entered!", "", "info");
        }
      });
    }
  };

  initData = async (details) => {
    const response = await fetch("http://localhost:8787/businessData", {
      method: "POST",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.statusText);
    if (response.status === 200) {
      this.data = details;
    }
  };
  initialData = async () => {
    const response = await fetch("http://localhost:8787/businessData");
    const data = await response.json();
    console.log(data);
    this.data = data;
    console.log("data", this.data);
  };
}
export default new BusinessStore();







