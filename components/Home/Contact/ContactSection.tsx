import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactSection = () => {
  return (
    <div id="Contact" className="pt-[12vh] -mt-[12vh] pb-16">
      <h1 className="w-fit text-center px-4 py-3 mx-auto text-white text-2xl sm:text-3xl md:text-4xl uppercase">
        Contact Me
      </h1>

      <div className="w-[90%] xl:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactSection;
