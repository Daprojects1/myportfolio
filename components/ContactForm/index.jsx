import { useFormik } from "formik";
import AppButton from "../../reusableComponents/AppButton";
import Input from "../../reusableComponents/Input";
import { toast } from "react-toastify";
import * as Yup from "yup";

const ContactForm = ({}) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };
  const formik = useFormik({
    initialValues,
    onSubmit: async (val) => {
      const response = await fetch(`${window?.location.href}api/mail`, {
        method: "POST",
        body: JSON.stringify(val),
      });

      const json = await response.json();

      console.log(json);
      if (!response.ok) {
        toast.error(json?.message || "Sorry somethin went wrong");
      }
      if (response.ok) {
        toast.success(json?.message || "Success !");
        resetForm();
      }
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Please enter a first Name"),
      lastName: Yup.string().required("Please enter a last Name"),
      email: Yup.string().required("Please enter your email"),
      message: Yup.string().required("Please enter a message"),
    }),
  });

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    resetForm,
  } = formik;
  return (
    <div className="contact-form">
      <h2>Get in touch</h2>
      <div className="form-inputs">
        <div className="namesInput">
          <Input
            placeholder="First Name"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            name="firstName"
            value={values.firstName}
          />
          <Input
            placeholder="Last Name"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            name="lastName"
            value={values.lastName}
          />
          {(errors.firstName && (
            <div className="error-msg">
              {touched.firstName && errors.firstName}
            </div>
          )) ||
            (errors.lastName && (
              <div className="error-msg">
                {touched.lastName && errors.lastName}
              </div>
            ))}
        </div>
        <Input
          placeholder="Email"
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          name="email"
          errors={errors.email}
          value={values.email}
          touched={touched.email}
        />
        <div className="text-area">
          <textarea
            placeholder="Message"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            name="message"
            value={values.message}
          />
          <div className="error-msg">{touched.message && errors.message}</div>
        </div>
      </div>
      <AppButton title={"send"} onClick={handleSubmit} />
    </div>
  );
};

export default ContactForm;
