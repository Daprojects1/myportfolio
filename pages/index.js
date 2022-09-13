import AppButton from "../reusableComponents/AppButton";
import ToolComponent from "../reusableComponents/ToolComponent";
import skillsTools from "../constants/skillsTools";
import projects from "../constants/projects";
import WorkComponent from '../reusableComponents/WorkComponent'

export default function Home() {
  return (
    <div className="home-page">
      <div className="section-one" id="home">
        <div className="image-container">
        <div className="round-image">
          <img src="/peaceMemoji.png" alt="alternate image"/>
        </div>
        </div>
        <div className="section-one-text">
          <h2>{`I'm David,  and I'd love to work on your next project !`}</h2>
          <p>{'I am a Front-End developer who enjoys working with others to build responsive and dynamic web apps.'}</p>
          <AppButton
            title={'Get in touch'}
            onClick={''}
            type='button'
          />
        </div>
      </div>
      <div className="section-two" id="skills">
        <div className="skills-body">
          <h2>Skills & Tools</h2>
          <div className="tools-section">
            {skillsTools.map((s, i) => (
              <ToolComponent key={i} title={s?.title} icon={s?.icon} />
            ))}
          </div>
        </div>
      </div>
      {/* <div className="section-three" id="work">
        <div className="work-body">

        </div>
      </div> */}
      <WorkComponent
        src='/smileE.png'
        tools={['HTML5',  'Javascript','CSS3','React','Node Js','Rest APIs']}
        title='Blog App'
        description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.`}
      />
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
      <p></p>
    </div>
  )
}
