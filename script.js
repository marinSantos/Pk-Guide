const miniMenu = document.getElementById('miniMenu')

function verticalMenu(){
  nav.classList.toggle('open')
}

miniMenu.addEventListener('click', verticalMenu)
miniMenu.addEventListener('toachstart', verticalMenu)


const mobile = document.getElementById('mobile')

function mobileMenu(){
  header.classList.toggle('active')
  cinza.classList.toggle('active')
}

mobile.addEventListener('click', mobileMenu)
mobile.addEventListener('toachstart', mobileMenu)

