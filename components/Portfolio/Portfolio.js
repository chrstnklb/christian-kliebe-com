import Project from "./Project";

export default function Portfolio() {
  return (
    <>
      <h1>Portfolio</h1>

      <Project
        projectName="My own company homepage"
        projectAppLink="https://christiankliebede.netlify.app/"
        projectDescription={[
          "Outcome ot this project was to have starting point.",
          "A start for clients like you to contact me.",
          "To discuss problems and possible solutions when working with me.",
        ]}
        projectCodeLink="https://github.com/chrstnklb/mvplan"
      ></Project>

      <p />
    </>
  );
}
