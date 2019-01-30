const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

//Header
const nav = document.querySelector('nav')
const navMenuLinks = document.querySelectorAll('nav a')

//Version 1 - for loop
// for (let i = 0; i < Array.from(navMenuLinks).length; i++) {
//   Array.from(navMenuLinks)[i].textContent = Object.values(siteContent.nav)[i]
// }

//Version 2 - forEach() method
Array.from(navMenuLinks).forEach((link, index) => {
  link.textContent = Object.values(siteContent.nav)[index]
})

//Task 4b: Utilize .appendChild() and .prepend() to add two new items to the navigation system
const homeLink = document.createElement('a')
homeLink.textContent = 'Home'
document.querySelector('nav').prepend(homeLink)

const loginLink = document.createElement('a')
loginLink.textContent = 'Login'
document.querySelector('nav').append(loginLink)

//Task 4a: change text color to green 
Array.from(document.querySelectorAll('nav a')).forEach(link => {
  link.style.color = 'green'
})


// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//CTA section
const cta = document.querySelector('.cta')
let ctaText = document.querySelector('.cta-text')
let ctaH1 = document.querySelector('.cta-text h1')
ctaH1.textContent = siteContent.cta.h1

let button = document.querySelector('button')
button.textContent = siteContent.cta.button

let ctaImage = document.getElementById('cta-img')
ctaImage.src = siteContent.cta["img-src"]

//Main Content section
//Content mapping functions
const dynamicContent = (content, criteria) => Object.entries(content)
  .filter(item => item[0].includes(criteria))
  .map(item => item[1])
//console.log(dynamicContent(siteContent['main-content'], 'h4'))

const addContent = (elem, content, criteria, cb) => {
  Array.from(elem).forEach((item, index) => {
    item.textContent = cb(content, criteria)[index]
  })
}

let contentHeading = document.querySelectorAll('.text-content h4')
addContent(contentHeading, siteContent['main-content'], 'h4', dynamicContent)

let contentParagraph = document.querySelectorAll('.text-content p')
addContent(contentParagraph, siteContent['main-content'], 'content', dynamicContent)

let middleImage = document.getElementById('middle-img')
middleImage.src = siteContent['main-content']['middle-img-src']


//Contact section
let contactHeading = document.querySelector('.contact h4')
contactHeading.textContent = siteContent.contact['contact-h4']
let contactParagraph = document.querySelectorAll('.contact p')

contactParagraph[0].textContent = siteContent.contact['address']
contactParagraph[1].textContent = siteContent.contact['phone']
contactParagraph[2].textContent = siteContent.contact['email']


//Footer
let footer = document.getElementsByTagName('footer')
let footerContent = document.querySelector('footer p')
footerContent.textContent = siteContent.footer.copyright

//Stretch Goal - Change style
const changeColorScheme = (darkColor, lightColor, fontColor, accentColor) => {
  document.querySelectorAll('h4').forEach(item => item.style.color = lightColor)
  document.querySelector('header').style.backgroundColor = darkColor
  document.querySelectorAll('nav a').forEach(item => item.style.color = fontColor)
  ctaH1.style.color = fontColor
  cta.style.backgroundColor = lightColor
  button.style.color = fontColor
  button.style.backgroundColor = accentColor
}

const changeLayout = (direction, align, margin, padding, display='none', borderRadius='25px') => {
  document.querySelector('header').style.paddingBottom = padding
  document.querySelector('header').style.flexDirection = direction
  document.querySelector('header').style.alignItems = align
  logo.style.display = display
  cta.style.margin = margin
  cta.style.padding = padding
  button.style.borderRadius = borderRadius
}

//Stretch Goal - change text on button click
button.addEventListener('click', () => {
  ctaH1.textContent = siteContent.cta.button
  changeColorScheme('#022140', '#265077', '#FFFFFF', '#51a7f8')
  changeLayout('column', 'center', 0, '20px')
})