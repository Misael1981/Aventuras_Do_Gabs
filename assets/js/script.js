/**===== ASIDE =====**/
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const navItem = navList[i];

  navItem.addEventListener("click", function() {
    allSection.forEach(section => section.classList.remove("active"));

    const targetSection = document.querySelector(this.querySelector('a').getAttribute("href"));
    targetSection.classList.add("active");

    allSection.forEach(section => {
      if (section !== targetSection) {
        section.classList.add("back-section");
      }
    });

    navList.forEach(li => li.querySelector("a").classList.remove("active"));

    this.querySelector("a").classList.add("active");

    // Fecha o menu lateral em telas menores (se necessário)
    if (window.innerWidth < 1200) {
      asideSectionToggleBtn(); 
    }
  });
}