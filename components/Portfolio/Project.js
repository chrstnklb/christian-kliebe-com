import { RenderList } from "./Lines";

export default function Project({
  projectName,
  projectAppLink,
  projectDescription,
  projectCodeLink,
}) {
  return (
    <>
      <h2>{projectName}</h2>
      <a href={projectAppLink}>Link to application</a>
      <RenderList descriptionList={projectDescription}></RenderList>
      <a href={projectCodeLink}>Link to repository</a>
    </>
  );
}
