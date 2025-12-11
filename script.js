// Basic interactions for the page

function scrollToSection(id){
  const el = document.getElementById(id);
  if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
}

function downloadHTML(){
  // Create a downloadable snapshot of the current HTML (single-file)
  const doctype = '<!doctype html>\n';
  const html = document.documentElement.cloneNode(true);
  // Remove script tag that would break when downloaded (to keep it simple)
  const scripts = html.querySelectorAll('script');
  scripts.forEach(s=>s.remove());
  const content = doctype + html.outerHTML;
  const blob = new Blob([content], {type:'text/html'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'index.html'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
}

// Optional: replace thumb placeholders with actual images if you add data-img on the .thumb elements
document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('.thumb').forEach((t,i)=>{
    const img = t.getAttribute('data-img');
    if(img){
      t.style.backgroundImage = 'url("'+img+'")';
      t.style.backgroundSize = 'cover';
      t.style.backgroundPosition = 'center';
      t.textContent = '';
    }
  });
});
