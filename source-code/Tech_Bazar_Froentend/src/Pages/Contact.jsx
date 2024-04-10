import { MdMessage } from "react-icons/md";
import styles from "./ContactForm.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const btn = ({ isOutline, icon, text }) => {
  return (
    <button className={isOutline ? styles.outline_btn : styles.primary_btn}>
      {icon}
      {text}
    </button>
  );
};

const ContactForm = () => {
  return (
    <>
      <div className={` container ${styles.contact_section}`}>
        <h1>Contact Us </h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nobis
          numquam officiis. Exercitationem nesciunt error ea, neque illo omnis?
          Labore tenetur ut velit. Voluptates odio nam ab fuga incidunt porro!
        </p>
      </div>
      <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_button}>
            <btn text="VIA MESSAGE" icon={<MdMessage fontSize="24px" />} />
            <btn text="VIA PHONE" icon={<FaPhoneAlt fontSize="24px" />} />
          </div>

          <btn
            isOutline={true}
            text="VIA EMAIL FORM"
            icon={<HiMail fontSize="24px" />}
          />

          <form>
            <div className={styles.form_controller}>
              <label htmlFor="name">Name</label>
              <input type="text" />
            </div>

            <div className={styles.form_controller}>
              <label htmlFor="name">Email</label>
              <input type="email" />
            </div>

            <div className={styles.form_controller}>
              <label htmlFor="Text">Name</label>
              <textarea type="text" rows={7} />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "end",
              }}
            >
              <btn text="SUBMIT" />
            </div>
          </form>
        </div>
        <div></div>
        <img
          style={{ width: "750px" }}
          src="https://unblast.com/wp-content/uploads/2020/09/Contact-Us-Vector-Illustration-Part-02-1.jpg"
          alt="contact-illustration"
        />
      </section>
    </>
  );
};
export default ContactForm;
