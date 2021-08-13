import React from "react";

function Contact() {
  return (
    <>
      <div clasaName="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  First Name
                </label>
                <input
                  type="First Name"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your First Name"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Last Name
                </label>
                <input
                  type="Last Name"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone Number
                </label>
                <input
                  type="Phone"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <p class="footer">New Jersey  |     (484) 855-8660    |    GurjantSRiar@gmail.com<br/>
 <h5>Gurjant S Riar</h5></p>
    </>
  );
}
export default Contact;
