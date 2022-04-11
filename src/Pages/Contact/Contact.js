import "./Contact.css";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
const Contact = () => {
  const handleOnSubmit = (e) => {
    // let { vipul, vishal, vipin } = process.env;
    // console.log(vipul);
    const SERVICE_ID = "service_qqvvjbr";
    const TEMPLATE_ID = "template_knp3unf";
    const USER_ID = "2M_ExPTop0_aemC9p";
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };
  return (
    <div className="d-flex main_content">
      <div className="row">
        <div className="col-lg-6  register-contect">
          <h1 className="text-center">WE ARE HERE FOR YOU !</h1>
          <p className="text-right">Dream it, Believe it, Do it</p>

          <div className=" footer-nos text-center records">
            <div>
              <h1>25+</h1>
              <p>Mentores</p>
            </div>
            <div>
              <h1>100+</h1>
              <p>Internships</p>
            </div>
            <div>
              <h1>200+</h1>
              <p>Placements</p>
            </div>
          </div>
        </div>

        <div className="col-lg-6 register-form">
          <form onSubmit={handleOnSubmit} className="gform">
            <h4>GET IN TOUCH</h4>
            <h6 className="mb-4">Fill below details to speak with our team.</h6>
            <p>We'll never share your information with anyone else.</p>

            <div className="mb-2 form-group">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
                placeholder="Full Name"
              />
            </div>
            <div className="mb-2 form-group ">
              <input
                type="email"
                required
                className="form-control"
                // onChange={(e) => setEmail(e.target.value)}
                name="user_email"
                id="staticEmail"
                aria-describedby="emailHelp"
                placeholder="Email ID"
              />
            </div>

            <div className="form-group mb-2">
              <input
                type="number"
                className="form-control"
                // id="phone-number"
                name="phone_number"
                placeholder="Contact Number"
              />
            </div>
            <div className="form-group mb-2">
              <textarea
                name="message"
                required
                className="form-control"
                cols="7"
                rows="5"
                placeholder="Message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary form-control fs-5">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
