const project_container = document.getElementById("projects-container");

async function afficherRepo () {
    try {
        const reponse = await fetch("https://api.github.com/users/DialloMoahamed/repos?per_page=100");

        if (!reponse.ok) {
            throw new Error("Impossible de récupérer les dépôts GitHub");
        }

        const repo = await reponse.json();

        console.log(repo);

        project_container.innerHTML = "";

        repo.forEach(repositorie => {

            const language = repositorie.language || "Non précisé";
            const description = repositorie.description || "Aucune description disponible.";

                project_container.innerHTML += `
                        <div class="col-md-6 col-lg-4">
                        <div class="project-card" style="--card-color:#00D9FF;">
                            <div class="project-icon" style="color:#00D9FF;"><i class="bi bi-github"></i></div>
                            <div class="project-title">${repositorie.name}</div>

                            <div class="project-desc">
                                ${description}
                            </div>

                            <div class="project-tags">
                                <span class="tag">${language}</span>
                            </div>

                            <div class="project-actions">
                                <a class="project-btn project-btn-ghost"
                                    href="${repositorie.html_url}" target="_blank" rel="noopener">
                                    <i class="bi bi-github"></i> Code
                                </a>
                            </div>
                        </div>
                    </div>`
            
            console.log(repositorie.name);
        });
    } catch (error) {
        console.error("Erreur :", erreur);
        project_container.textContent =
            "Impossible de charger les projets pour le moment.";
    }

};

afficherRepo();