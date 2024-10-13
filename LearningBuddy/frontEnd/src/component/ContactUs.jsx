import React, { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
      // Here you would typically send the form data to a server
      // Reset form
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };
  return (
    <>
      <div className="flex w-full min-h-screen justify-center items-center dark:text-black">
        <div>
          <div className="flex flex-col md:flex-row space-y-2 mt-12  bg-gradient-to-tl from-purple-700 via-purple-100 to-slate-50 w-full max-w-5xl p-8 rounded-xl shadow-lg">
            <div className="flex flex-col space-y-2  justify-between">
              <div>
                <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
                <p className="text-sm mt-2 pr-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
                  voluptatem voluptates eveniet nostrum et sequi possimus autem
                </p>
              </div>
              <div className="inline-flex items-center">
                <ion-icon
                  class="text-xl mt-1  text-blue-600"
                  name="call"
                ></ion-icon>
                <span>+917384515707</span>
              </div>
              <div>
                <a
                  href="mailto:sudip.bhakta.123@gmail.com"
                  className="inline-flex space-x-2 items-center"
                >
                  <ion-icon
                    class="text-xl mt-1 text-blue-600"
                    name="mail-open"
                  ></ion-icon>
                  <span>sudip.bhakta.123@gmail.com</span>
                </a>
              </div>
              <div>
                <a
                  href="https://wa.me/qr/GJ67ZDCH4FH7B1 "
                  className="inline-flex space-x-2 items-center"
                >
                  <ion-icon
                    class="text-xl mt-1  text-green-600"
                    name="logo-whatsapp"
                  ></ion-icon>
                  <span>7384515707</span>
                </a>
              </div>
              <div className=" py-10 space-x-6 text-3xl   items-center">
                <a href="https://www.facebook.com/profile.php?id=100006558045363">
                  <ion-icon
                    class="text-blue-800 hover:text-black"
                    name="logo-facebook"
                  ></ion-icon>
                </a>
                <a href="https://www.linkedin.com/in/sudip-bhakta98">
                  <ion-icon
                    class="text-blue-600 hover:text-black"
                    name="logo-linkedin"
                  ></ion-icon>
                </a>
                <a href="https://www.instagram.com/s_bhaktaa/profilecard/?igsh=MWZtMTRucHpwN2wydg==">
                  <ion-icon
                    class="text-pink-600 hover:text-black"
                    name="logo-instagram"
                  ></ion-icon>
                </a>
              </div>
            </div>
            <div className="w-full">
              <div className=" bg-white rounded-xl shadow-lg p-8">
                <form
                  action=""
                  className="flex flex-col space-y-4"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label htmlFor="" className="text-sm">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter Your Name"
                      className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2  focus:ring-gray-400"
                    ></input>
                    {errors.name && (
                      <p className="text-red-600 text-sm">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="" className="text-sm">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Your Email"
                      className=" ring-1 ring-gray-300 w-full rounded-md mt-2 px-4 py-2 outline-none focus:ring-2  focus:ring-gray-400"
                    ></input>
                    {errors.email && (
                      <p className="text-red-600 text-sm">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="" className="text-sm">
                      Message
                    </label>
                    <textarea
                      type="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type Your Message"
                      className=" ring-1 ring-gray-300 w-full h-32 rounded-md mt-2 px-4 py-2 outline-none focus:ring-2  focus:ring-gray-400"
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-600 text-sm">{errors.message}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="text-white  bg-purple-700 hover:bg-blue-500 hover:text-black duration-300 border-none mt-6 px-3 py-2  rounded-md"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
