window.sr = ScrollReveal();

// Animação da logo
sr.reveal('.logo', {
    origin: 'left',
    distance: '100px',
    duration: 1000
  });
  
sr.reveal('.mobile-menu-icon', {
    origin: 'right',
    distance: '100px',
    duration: 1000
  });
  

// Animação dos links da barra de navegação
sr.reveal('header nav a', {
  origin: 'bottom',
  distance: '500px',
  duration: 400,
  interval: 200 // Intervalo entre cada animação dos links
});

sr.reveal('.label', {
    origin: 'top',
    distance: '100px',
    duration: 1000
  });

window.sr = ScrollReveal({ reset: true });

// Animação de slide de cima para baixo para o texto "Olá"
sr.reveal('.text.fit-text', {
  origin: 'top',
  distance: '20px',
  duration: 3000
});

sr.reveal('.text.first-text', {
    origin: 'left',
    distance: '100px',
    duration: 3000
  });
  

// Animação de slide de baixo para cima para o texto "E eu sou um Web Desenvolvedor"
sr.reveal('.bottom, .text.sec-text', {
  origin: 'bottom',
  distance: '20px',
  duration: 3000
});

// Outras animações...
sr.reveal('.home-img', {
    origin: 'right',
    distance: '20px',
    duration: 3000
  });

  sr.reveal('.morebtn', {
    origin: 'top',
    distance: '20px',
    duration: 3000
  });

  //Sobre mim 

sr.reveal('.h1', {
  origin: 'bottom',
  distance: '20px',
  duration: 2000
});

sr.reveal('.about-me-img, .p', {
  origin: 'right',
  distance: '20px',
  duration: 2000
});

sr.reveal('.title', {
  origin: 'top',
  distance: '500px',
  duration: 400,
  interval: 200 // Intervalo entre cada animação dos links
});

sr.reveal('.fab', {
  origin: 'bottom',
  distance: '500px',
  duration: 400,
  interval: 200 // Intervalo entre cada animação dos links
});

sr.reveal('.title2', {
  origin: 'top',
  distance: '500px',
  duration: 1500
});

sr.reveal('.field, .send-email', {
  origin: 'bottom',
  distance: '500px',
  duration: 1800,
  interval: 200 // Intervalo entre cada animação dos links
});


sr.reveal('.h1-projetos ', {
  origin: 'top',
  distance: '20px',
  duration: 2000
});

sr.reveal('.container-projetos ', {
  origin: 'bottom',
  distance: '20px',
  duration: 2000
});


let Sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a [href*= ' + id + ']').classList.add('active');
        });
    };
}












const chk = document.getElementById('chk');
const body = document.body;
const sunIcon = document.getElementById('sun-icon');

// Verifica se o modo escuro está ativado no armazenamento local
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Define o estado do checkbox de acordo com o modo escuro
chk.checked = isDarkMode;

// Aplica o modo escuro se estiver ativado
if (isDarkMode) {
  body.classList.add('dark');
  sunIcon.classList.remove('fa-moon');
  sunIcon.classList.add('fa-sun');
}

// Função para alternar o modo escuro
function toggleDarkMode() {
  body.classList.add('dark-mode-transition');
  
  if (chk.checked) {
    body.classList.add('dark');
    sunIcon.classList.remove('fa-moon');
    sunIcon.classList.add('fa-sun');
    localStorage.setItem('darkMode', 'true');
  } else {
    body.classList.remove('dark');
    sunIcon.classList.remove('fa-sun');
    sunIcon.classList.add('fa-moon');
    localStorage.setItem('darkMode', 'false');
  }
  
  setTimeout(() => {
    body.classList.remove('dark-mode-transition');
  }, 300);
}

// Adiciona o evento de mudança ao checkbox
chk.addEventListener('change', toggleDarkMode);





























function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  let navItems = document.querySelectorAll('.mobile-menu ul li');
  let darkModeButton = document.querySelector('.dark-mode');

  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
    document.querySelector('.icon-mobile').src = "imagens/menu_white_36dp.svg";
    darkModeButton.classList.remove('show'); // Remover a classe para ocultar o botão de dark mode

    // Ocultar o menu responsivo
    menuMobile.style.display = 'none';
  } else {
    menuMobile.classList.add('open');
    document.querySelector('.icon-mobile').src = "imagens/close_white_36dp.svg";
    darkModeButton.classList.add('show'); // Adicionar a classe para exibir o botão de dark mode

    // Exibir o menu responsivo
    menuMobile.style.display = 'block';
  }
}







// Função para tratar o evento de clique nos links do menu
function handleMenuLinkClick() {
  // Código para fechar o menu responsivo
  var menuMobile = document.querySelector('.mobile-menu');
  menuMobile.classList.remove('open');
  document.querySelector('.icon-mobile').src = "imagens/menu_white_36dp.svg";
  document.querySelector('.dark-mode').classList.remove('show');
  menuMobile.style.display = 'none';
}

// Obtenha todos os links do menu
var menuLinks = document.querySelectorAll('.mobile-menu ul li a');

// Adicione o tratamento do evento de clique para cada link do menu
menuLinks.forEach(function(link) {
  link.addEventListener('click', handleMenuLinkClick);
});


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  let navItems = document.querySelectorAll('.mobile-menu ul li');
  let darkModeButton = document.querySelector('.dark-mode');

  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
    document.querySelector('.icon-mobile').src = "imagens/menu_white_36dp.svg";
    darkModeButton.classList.remove('show'); // Remover a classe para ocultar o botão de dark mode

    // Ocultar o menu responsivo
    menuMobile.style.display = 'none';
  } else {
    menuMobile.classList.add('open');
    document.querySelector('.icon-mobile').src = "imagens/close_white_36dp.svg";
    darkModeButton.classList.add('show'); // Adicionar a classe para exibir o botão de dark mode

    // Exibir o menu responsivo
    menuMobile.style.display = 'block';

    // Rolando a página para o topo
    scrollToTop();
  }
}








