import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

function ContactUs() {
  return (
    <div className="th-bgGray-100 min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold th-textBlack">Get In Touch</h1>
      <p className="text-gray-500">
        Feel free to reach out — I'd love to hear from you.
      </p>

      <div className="flex flex-col gap-4 mt-4">
        <a
          href="mailto:zibairaniiii@gmail.com"
          className="flex items-center gap-3 text-lg th-textBlack hover:text-gray-600"
        >
          <FiMail size={20} /> zibairaniiii@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/ziba-irani-developr"
          target="_blank"
          className="flex items-center gap-3 text-lg th-textBlack hover:text-gray-600"
        >
          <FiLinkedin size={20} /> linkedin.com/in/ziba-irani-developr
        </a>
        <a
          href="https://github.com/ziba-irani"
          target="_blank"
          className="flex items-center gap-3 text-lg th-textBlack hover:text-gray-600"
        >
          <FiGithub size={20} /> github.com/ziba-irani
        </a>
      </div>
    </div>
  );
}

export default ContactUs;
