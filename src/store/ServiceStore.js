import { makeObservable, observable, computed, action, runInAction } from "mobx";
import Swal from "sweetalert2";

class ServiceStore {

  constructor() {
    makeObservable(this, {
      serviceData: observable,
      getServices: action,
      addServices: action,
    });
  }
  serviceData = [];
  service1 =
    {

      id: 1,
      name: "Digital marketing consulting",
      description:
        "Understand your goals, define a target audience, do an in-depth analysis, identify the challenges, opportunities and find a creative and clear strategy for your digital marketing.",
      price: "1300",
      duration: "60",
      imgService: "../src/assets/images/d.jpg"
    }
  service2 = {
    id: 2,
    name: "Organic website promotion",
    description:
      "Experts in writing SEO-optimized marketing content, including: research and optimization. In addition, they build a set of relevant links for promotion, perform monitoring, tracking and producing advanced reports.",
    price: "1200",
    duration: " 60 x 2",
    imgService: "../src/assets/images/c.jpg"

  }
  service3 = {
    id: 3,
    name: "Design and creation of landing pages",
    description:
      "We set up a landing page for you for various purposes such as: registering for a workshop, filling in details, purchasing and more. Depending on the goal, design creatively and write focused and effective.",
    price: "1500",
    duration: " 40 x 4",
    imgService: "../src/assets/images/b.jpg"
  }

  getServices = async () => {
    const responsePost1 = await fetch("http://localhost:8787/service", {
      method: "POST",
      body: JSON.stringify(this.service1),
      headers: {
        "Content-Type": "application/json"
      },
    })
    const responsePost2 = await fetch("http://localhost:8787/service", {
      method: "POST",
      body: JSON.stringify(this.service2),
      headers: {
        "Content-Type": "application/json"
      },
    })
    const responsePost3 = await fetch("http://localhost:8787/service", {
      method: "POST",
      body: JSON.stringify(this.service3),
      headers: {
        "Content-Type": "application/json"
      },
    })
    console.log("after post");
    const responseGet = await fetch("http://localhost:8787/services", {
      method: "Get",
      headers: {
        "Content-Type": "application/json"
      },
    })
    console.log("after get");
    this.serviceData = await responseGet.json();
  }

  addServices = async (service) => {
    console.log("service", service);
    console.log("service json", JSON.stringify(service));
    const response1 = await fetch("http://localhost:8787/service", {
      method: "POST",
      body: JSON.stringify(service),
      headers: {
        "Content-Type": "application/json",
      },

    });

    if (response1.ok) {
      this.serviceData = ([...this.serviceData, service])
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Service added successfully",
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Failed to add service",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
    console.log(response1.status)
    this.getServices()
  };
}

export default new ServiceStore();


