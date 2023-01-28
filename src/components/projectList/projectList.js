import React, { useEffect, useState } from "react";

// styles
import "./projectList.css";

export default function ProjectList() {
  const [projectCategories, setProjectCategories] = useState(null);
  const [projects, setProjects] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // fetch project's categiries
    fetch("https://jarek-portfolio-strapi.herokuapp.com/api/categories?sort=id")
      .then((res) => res.json())
      .then(({ data }) => setProjectCategories(data));

    // fetch projects
    fetch(
      "https://jarek-portfolio-strapi.herokuapp.com/api/projects?populate=*"
    )
      .then((res) => res.json())
      .then(({ data }) => setProjects(data));
  }, []);

  console.log("projectCategories", projectCategories);
  console.log("projects", projects);

  return (
    <div className="project-list">
      {projects &&
        projectCategories &&
        projectCategories.map((cat) => {
          console.log("cat", cat);
          const { category } = cat.attributes;
          return (
            <div id="projects" className="project-list">
              <h1 key={cat.id}>{category}</h1>
              <div className="project-cart-list">
                {projects
                  .filter((project) => {
                    console.log(
                      "project categories",
                      project.attributes.categories.data
                    );
                    let projectCategoriesArray =
                      project.attributes.categories.data;
                    return projectCategoriesArray.find(
                      (p) => p.attributes.category === cat.attributes.category
                    );
                  })
                  .map((project) => {
                    let imageUrl = "";
                    if (
                      project.attributes.image.data !== null &&
                      project.attributes.image.data !== undefined
                    ) {
                      imageUrl = project.attributes.image.data.attributes.url;
                    }

                    const {
                      id,
                      imageAlt,
                      title,
                      description,
                      codeUrl,
                      previewUrl,
                    } = project.attributes;
                    return (
                      <div className="card" key={id}>
                        <img src={imageUrl} alt={imageAlt} />
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <div class="links">
                          <a href={codeUrl}>Code</a>
                          <a href={previewUrl}>Preview</a>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
    </div>
  );

  return <div>dddd</div>;
}
