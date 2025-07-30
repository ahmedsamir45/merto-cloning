let up = document.querySelector("#up")

up.addEventListener("click", ()=>{
    window.scrollTo(0,0)
})

window.addEventListener("scroll" , () =>{
    if(window.scrollY>=500) up.classList.remove("d-none")
        else up.classList.add("d-none")

})

const burger = document.getElementById('burgerToggle');
const burgerIcon = burger.querySelector('i');
const header = document.querySelector('header');
const navbar = document.querySelector('nav.navbar');

let headerVisible = true; // Changed to true to show header initially

// Show header on page load
document.addEventListener('DOMContentLoaded', () => {
  header.style.position = 'fixed';
  header.style.top = navbar.offsetHeight + 'px';
  header.style.opacity = '1';
});

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (scrollY > 500) {
    navbar.classList.add('fixed-nav');
    burger.style.display = 'block';
    

    if (headerVisible) {
      header.style.position = 'fixed';
      header.style.top = navbar.offsetHeight + 'px';
      header.style.opacity = '1';
    } else {
      header.style.top = '-100px';
      header.style.opacity = '0';
    }
  } 
  else if (scrollY > 100 && scrollY <= 500) {

    navbar.classList.remove('fixed-nav');
    burger.style.display = 'none';
    header.style.top = '-100px';
    header.style.opacity = '0';
    headerVisible = false;
    burgerIcon.classList.replace('fa-xmark', 'fa-bars');
  } 
  else {

    navbar.classList.remove('fixed-nav');
    burger.style.display = 'none';
    header.style.position = 'fixed';
    header.style.top = navbar.offsetHeight + 'px';
    header.style.opacity = '1';
    headerVisible = true;
    burgerIcon.classList.replace('fa-xmark', 'fa-bars');
  }
});

burger.addEventListener('click', () => {
  headerVisible = !headerVisible;
  
  if (headerVisible) {
    // Show header fixed below navbar
    header.style.position = 'fixed';
    header.style.top = navbar.offsetHeight + 'px';
    header.style.opacity = '1';
    burgerIcon.classList.replace('fa-bars', 'fa-xmark');
  } else {

    header.style.top = '-100px';
    header.style.opacity = '0';
    burgerIcon.classList.replace('fa-xmark', 'fa-bars');
  }
});



  document.querySelectorAll('.color-option').forEach(option => {
            option.addEventListener('click', function() {
                document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Navigation arrows (placeholder functionality)
        document.querySelector('.nav-arrow.prev').addEventListener('click', function() {
            console.log('Previous image');
            // Add your image navigation logic here
        });



                function changeMainImage(imageSrc, clickedElement) {
            // Update main image
            document.getElementById('mainProductImage').src = imageSrc;
            
            // Update active option
            document.querySelectorAll('.image-option').forEach(option => {
                option.classList.remove('active');
            });
            clickedElement.classList.add('active');
        }
