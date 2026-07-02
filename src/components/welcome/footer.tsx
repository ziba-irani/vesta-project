import { Typography } from "antd";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full bg-black text-white flex flex-col items-center justify-center py-5 md:px-0 px-3 text-center">
      <Typography className="text-white font-Lora text-base">
        developed by ZibaIrani
      </Typography>
      <div className="flex flex-col text-center items-center justify-center mt-2 gap-3">
        <div className="flex items-center gap-1">
          <FaGithub size={20} className="text-white" />
          <Typography className="text-greenColor">
            <a
              href="https://github.com/ziba-irani"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ddf272" }}
            >
              My Github
            </a>
          </Typography>
        </div>
        <div className="flex items-center gap-1">
          <FaLinkedin size={20} className="text-white" />
          <Typography className="text-greenColor">
            <a
              href="https://www.linkedin.com/in/ziba-irani-developr"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ddf272" }}
            >
              https://www.linkedin.com/in/ziba-irani-developr{" "}
            </a>
          </Typography>
        </div>
      </div>
    </div>
  );
}


