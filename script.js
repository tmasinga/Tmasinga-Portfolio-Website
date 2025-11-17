// Small interactive behaviors for the portfolio
document.addEventListener('DOMContentLoaded', () => {
  // Year
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const visible = navLinks.style.display === 'flex';
      navLinks.style.display = visible ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
    });
  }

  // Demo: "Load more" button - appends placeholder cards (you'll replace with real repo fetch)
  const showMore = document.getElementById('show-more');
  const projectsGrid = document.getElementById('projects-grid');
  if (showMore && projectsGrid) {
    showMore.addEventListener('click', () => {
      for (let i = 0; i < 3; i++) {
        const art = document.createElement('article');
        art.className = 'card project';
        art.innerHTML = `
          <a href="https://github.com/tmasinga" target="_blank" rel="noopener">
            <div class="project-thumb" style="background-image:url('https://via.placeholder.com/720x360?text=More+Project');"></div>
            <div class="project-body">
              <h3>More project</h3>
              <p>Placeholder project — replace with your repo link and screenshot.</p>
              <div class="tags"><span>Python</span><span>SQL</span></div>
            </div>
          </a>`;
        projectsGrid.appendChild(art);
      }
      showMore.disabled = true;
      showMore.textContent = 'Loaded';
    });
  }

  // Optional: fetch user's repos from GitHub API to populate projects (rate-limited)
  // Uncomment and customize if you want live repo loading.
  /*
  fetch('https://api.github.com/users/tmasinga/repos?per_page=6&sort=updated')
    .then(r => r.json())
    .then(repos => {
      // populate or map repos into project cards
      console.log('repos', repos);
    })
    .catch(()=>{});
  */
});