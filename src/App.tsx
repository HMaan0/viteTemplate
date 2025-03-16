import Background from "./components/Background/Background";
import Card from "./components/Card";
import About from "./sections/About";
import Contact from "./sections/Contact";
import HamburgerMenu from "./sections/Hamburger";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Work from "./sections/Work";
import data from "../data";
import components from "../component";
const App = () => {
  return (
    <>
      <div className="bg-red-100 flex-row flex justify-between items-start ">
        {components.navbar.hamburger && <HamburgerMenu></HamburgerMenu>}
        {components.navbar.navbar && <Navbar></Navbar>}
      </div>

      <Background />
      <div className=" flex justify-center items-center">
        <div className="mt-20 w-10/12 sm:w-7/12 flex flex-col gap-40">
          <section id="home" className="h-full  ">
            <Hero></Hero>
            {data.Github.github_username.length > 0 && (
              <div className="mt-64">
                <Card key={0}>
                  {/* @ts-expect-error Server Component */}
                  <GithubInfo></GithubInfo>
                </Card>
              </div>
            )}
          </section>
          {data.Work.map((work) => work.title.length > 0).at(0) && (
            <section id="work" className="h-full  ">
              <Work></Work>
            </section>
          )}
          {data.projectData
            .map((projects) => projects.title.length > 0)
            .at(0) && (
            <section id="projects" className="h-full ">
              <Projects></Projects>
            </section>
          )}
          {data.aboutData.description.length ||
          data.aboutData.skills.map((skill) => skill.length).at(0) ? (
            <section id="about" className="h-full ">
              <About></About>
            </section>
          ) : null}
          {data.contact.Email.length ||
          data.contact.Github.length ||
          data.contact.LinkedIn.length ||
          data.contact.Twitter.length > 0 ? (
            <section id="contact" className="h-full ">
              <Contact></Contact>
            </section>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default App;
