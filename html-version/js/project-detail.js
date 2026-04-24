/* ============================================
   PROJECT DETAIL - Populate page from URL param
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Ambil project ID dari URL (?id=restablog)
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');

    // Cek apakah project ada di data
    if (!projectId || !projectsData[projectId]) {
        document.getElementById('pd-title').textContent = 'Proyek Tidak Ditemukan';
        document.getElementById('pd-subtitle').textContent = 'Silakan kembali ke halaman portfolio.';
        return;
    }

    const project = projectsData[projectId];

    // Update page title
    document.title = `${project.title} | Resta Fahlefi`;

    // Populate hero
    document.getElementById('pd-category').textContent = project.category;
    document.getElementById('pd-title').textContent = project.title;
    document.getElementById('pd-subtitle').textContent = project.subtitle;

    // Populate main image
    const img = document.getElementById('pd-image');
    img.src = project.image;
    img.alt = project.title;

    // Populate description
    document.getElementById('pd-description').innerHTML = project.description;

    // Populate features
    const featuresList = document.getElementById('pd-features');
    featuresList.innerHTML = project.features
        .map(f => `<li><div class="feature-text"><strong style="color:var(--clr-accent-1); font-size:var(--fs-base);">${f.name}</strong><br><span style="margin-top:4px; display:inline-block;">${f.desc}</span></div></li>`)
        .join('');

    // Populate sidebar
    const techContainer = document.getElementById('pd-tech');
    techContainer.innerHTML = project.tech
        .map(t => `<span class="tag">${t}</span>`)
        .join('');

    document.getElementById('pd-type').textContent = project.category;
    document.getElementById('pd-year').textContent = project.year;
    document.getElementById('pd-status').textContent = project.status;

    // Populate screenshots gallery
    const gallery = document.getElementById('pd-screenshots');
    gallery.innerHTML = project.screenshots
        .map(s => `
            <div class="pd-gallery__item">
                <img src="${s.src}" alt="${s.caption}" loading="lazy">
                <div class="pd-gallery__caption">${s.caption}</div>
            </div>
        `).join('');

    // Populate pages list
    const pagesList = document.getElementById('pd-pages-list');
    pagesList.innerHTML = project.pages
        .map(p => `
            <div class="pd-page-card">
                <div class="pd-page-card__icon">${p.icon}</div>
                <div class="pd-page-card__name">${p.name}</div>
                <div class="pd-page-card__desc">${p.desc}</div>
            </div>
        `).join('');
});
