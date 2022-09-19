/* eslint-disable react/no-unknown-property */
import AppButton from "../reusableComponents/AppButton";
import ToolComponent from "../reusableComponents/ToolComponent";
import skillsTools from "../constants/skillsTools";
import projects from "../constants/projects";
import WorkComponent from '../reusableComponents/WorkComponent'
import ContactForm from "../components/ContactForm";
import { Canvas, useFrame } from 'react-three-fiber'
import Sphere from "../components/Sphere";
import CanvasBody from '../components/Canvas'
import Box from "../components/Box";
import Head from "next/head";

export default function Home() {
  const changeCurrentPage = (e, page) => {
    document?.getElementById(page)?.scrollIntoView();

  };

  return (
    <>
      <Head>
      <link rel='shortcut icon' href='codeSlash.svg'/>
      </Head>
    <div className="home-page">
      <div className=" section section-one" id="home">
        <div className="image-container">
        <div className="round-image">
            {/* <img src="/peaceMemoji.png" alt="alternate image"/> */}
            <CanvasBody design={<Sphere/>}>
            </CanvasBody>

        </div>
        </div>
        <div className="section-one-text">
          <h2>{`I'm David,  and I'd love to work on your next project !`}</h2>
          <p>{'I am a Front-End developer who enjoys working with others to build responsive and dynamic web apps.'}</p>
          <AppButton
            title={'Get in touch'}
            onClick={(e)=> changeCurrentPage(e,'getInTouch') }
            type='button'
          />
        </div>
        <div className="scroll-down">
          <div className="main-slide">Skills & Tools</div>
          <span className="scroll-down-arrow"></span>
        </div>
      </div>
      <div className="section section-two" id="skills">
        <div className="skills-body">
          <h2>Skills & Tools</h2>
          <div className="tools-section">
            {skillsTools.map((s, i) => (
              <ToolComponent key={i} title={s?.title} icon={s?.icon} />
            ))}
          </div>
        </div>
        <div className="scroll-down directToProjects">
          <div className="main-slide">Projects</div>
          <span className="scroll-down-arrow"></span>
        </div>
      </div>
      {projects?.map((p,i) => (
        <WorkComponent
          key={i}
          src={p?.src}
          title={p?.title}
          tools={p?.tools}
          description={p?.description}
          codeUrl={p?.codeUrl}
          websiteUrl={p?.websiteUrl}
        />
      ))}
      <div className="section contact-section" id="getInTouch">
        <div className="contact-body">
          <div class='canvas-img'>
          <CanvasBody design={<Box/>}/>
          </div>
          <ContactForm />
        </div>
     
      </div>
    </div>
    </>
  )
}
