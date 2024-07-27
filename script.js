function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    
    if (menu.classList.contains("open")) {
      menu.style.maxHeight = "0";
    } else {
      menu.style.maxHeight = menu.scrollHeight + "px";
    }
    
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  