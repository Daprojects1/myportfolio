import skillsTools from "../../constants/skillsTools";
import { Slide } from "react-animated-components";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useInView } from "react-intersection-observer";
import AppButton from "../AppButton";
import { useRouter } from "next/router";

const WorkComponent = ({
  src,
  title,
  description,
  tools,
  codeUrl = "",
  websiteUrl = "",
}) => {
  const router = useRouter();
  const allTools = skillsTools.filter((t) => {
    return tools?.includes(t.title);
  });

  return (
    <div className="workComponent">
      <AnimationOnScroll animateIn=" animate__fadeInLeft">
        <img src={src} alt="work image" />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInRight">
        <div className="content">
          <h2>{title}</h2>
          <div>{description}</div>
          <div className="icons">
            {allTools?.map((t, i) => (
              <div key={i}>{t.icon}</div>
            ))}
          </div>
          <div className="workComp-btns">
            {codeUrl && <p onClick={() => router.push(codeUrl)}>Code</p>}
            {websiteUrl && (
              <p onClick={() => router.push(websiteUrl)}>Website</p>
            )}
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default WorkComponent;
