const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-mobile-links')[0];
const navbarInactive = document.getElementsByClassName('mobile-navbar')[0];
const navbarSignup = document.getElementsByClassName('navbar-mobile-signup')[0];
// Customer story mobile
const leftArrow = document.querySelector(".fa-arrow-left");
const rightArrow = document.querySelector(".fa-arrow-right");
const bubbles = document.getElementsByClassName("bbl");
const customerImg = document.querySelector(".customer-story-img")
// Customer story desktop
const smbs = document.querySelector('.customer-story-list').children[0];
const startups = document.querySelector('.customer-story-list').children[1];
const agencies = document.querySelector('.customer-story-list').children[2];
const ecommerce = document.querySelector('.customer-story-list').children[3];
const enterprise = document.querySelector('.customer-story-list').children[4];
// List of customer story links
const listCustomerStory = document.querySelector('.customer-story-list').getElementsByTagName('p')

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    navbarInactive.classList.toggle('active');
    navbarSignup.classList.toggle('active');
});

// Function that creates the customer slideshow stories and makes the
// bubbles and arrows functional
function bubbleCustomerStory () {

}

// Left arrow function for bubbles
leftArrow.addEventListener("click", function () {
    for (let i = 0; i < bubbles.length; i++) {
        if (bubbles[0].classList.contains('fa-solid')) {
            // Removes active bubble styling for current element
            bubbles[0].classList.remove('fa-solid');
            bubbles[0].classList.remove('fa-xl');
            bubbles[0].classList.add('fa-regular');
            bubbles[0].style.color = '#1f1f1f';
            // Adds active bubble styling for element to the beginning
            bubbles[bubbles.length - 1].classList.add('fa-solid');
            bubbles[bubbles.length - 1].classList.add('fa-xl');
            bubbles[bubbles.length - 1].classList.remove('fa-regular');
            bubbles[bubbles.length - 1].style.color = '#0a990b';
            // Adds bubble 1 image
            customerImg.style.backgroundImage = 'url("https://corp-backend.brevo.com/wp-content/uploads/2023/07/enterprise_2x.webp")';
            document.querySelector('.customer-quote').innerText = `"BrevoPlus is absolutely key in allowing us to engage with guests, get their feedback, and optimize our services."`;
            document.querySelector('.customer-name').innerText = 'Andy Walker';
            document.querySelector('.customer-title').innerText = 'Chief of Staff at Yumpingo';
            break;
        } else if (bubbles[i].classList.contains('fa-solid')) {
            // Removes active bubble styling for current element
            bubbles[i].classList.remove('fa-solid');
            bubbles[i].classList.remove('fa-xl');
            bubbles[i].classList.add('fa-regular');
            bubbles[i].style.color = '#1f1f1f';
            // Adds active bubble styling for element to the left
            bubbles[i - 1].classList.add('fa-solid');
            bubbles[i - 1].classList.add('fa-xl');
            bubbles[i - 1].classList.remove('fa-regular');
            bubbles[i - 1].style.color = '#0a990b';
            if (i - 1 === 0) {
                customerImg.style.backgroundImage = 'url("images/SMBS-1.jpg")'
            document.querySelector('.customer-quote').innerText = `""Brevo is fantastic for keeping clients informed of upcoming shoots and the status of portrait collections. Plus, it offers great deliverability!""`;
            document.querySelector('.customer-name').innerText = 'Danie Wigzell';
            document.querySelector('.customer-title').innerText = 'Owner at Pop-Up Portraits';
            } else if (i - 1 === 1) {
                customerImg.style.backgroundImage = 'url("https://corp-backend.brevo.com/wp-content/uploads/2023/07/startups_2x.webp")';
                document.querySelector('.customer-quote').innerText = `"The email dashboard is so detailed! I love to go there, check the stats, and see how contacts are engaging with our content."`;
                document.querySelector('.customer-name').innerText = 'Simón Gómez';
                document.querySelector('.customer-title').innerText = 'Growth Marketer at Tributi';
            } else if (i - 1 === 2) {
                customerImg.style.backgroundImage = 'url("https://corp-backend.brevo.com/wp-content/uploads/2023/07/agencies_1x.webp")';
                document.querySelector('.customer-quote').innerText = `"Brevo lets us create personalized experiences for every single contact. The multichannel automation features are super powerful!"`;
                document.querySelector('.customer-name').innerText = 'Lillie Mazitova';
                document.querySelector('.customer-title').innerText = 'Project Manager at RocketConseil';
            } else if (i - 1 === 3) {
                customerImg.style.backgroundImage = 'url("https://corp-backend.brevo.com/wp-content/uploads/2023/07/ecommerce_1x.webp")';
                document.querySelector('.customer-quote').innerText = `"Marketing is about sending the right message at the right time. Brevo's easy-to use platform lets us do exactly that."`;
                document.querySelector('.customer-name').innerText = 'Inès Marotte';
                document.querySelector('.customer-title').innerText = 'Marketing Director at Aquarelle';
            } else {
                customerImg.style.backgroundImage = 'url("https://corp-backend.brevo.com/wp-content/uploads/2023/07/enterprise_2x.webp")';
                document.querySelector('.customer-quote').innerText = `"BrevoPlus is absolutely key in allowing us to engage with guests, get their feedback, and optimize our services."`;
                document.querySelector('.customer-name').innerText = 'Andy Walker';
                document.querySelector('.customer-title').innerText = 'Chief of Staff at Yumpingo';
            }
            break;
    }
    }
})


// Right arrow function for bubbles
rightArrow.addEventListener("click", function () {
    for (let i = 0; i < bubbles.length; i++) {
        // If LAST bubble is active bubble, change FIRST bubble to active
        if (bubbles[bubbles.length - 1].classList.contains('fa-solid')) {
            // Removes active bubble styling for current element
            bubbles[bubbles.length - 1].classList.remove('fa-solid');
            bubbles[bubbles.length - 1].classList.remove('fa-xl');
            bubbles[bubbles.length - 1].classList.add('fa-regular');
            bubbles[bubbles.length - 1].style.color = '#1f1f1f';
            // Adds active bubble styling for element to the beginning
            bubbles[0].classList.add('fa-solid');
            bubbles[0].classList.add('fa-xl');
            bubbles[0].classList.remove('fa-regular');
            bubbles[0].style.color = '#0a990b';
            // Adds bubble 1 image
            customerImg.style.backgroundImage = 'url("images/SMBS-1.jpg")'
            document.querySelector('.customer-quote').innerText = `""Brevo is fantastic for keeping clients informed of upcoming shoots and the status of portrait collections. Plus, it offers great deliverability!""`;
            document.querySelector('.customer-name').innerText = 'Danie Wigzell';
            document.querySelector('.customer-title').innerText = 'Owner at Pop-Up Portraits';
            break;
        } else if (bubbles[i].classList.contains('fa-solid')) {
            console.log("found");
            // Removes active bubble styling for current element
            bubbles[i].classList.remove('fa-solid');
            bubbles[i].classList.remove('fa-xl');
            bubbles[i].classList.add('fa-regular');
            bubbles[i].style.color = '#1f1f1f';
            // Adds active bubble styling for element to the right
            bubbles[i + 1].classList.add('fa-solid');
            bubbles[i + 1].classList.add('fa-xl');
            bubbles[i + 1].classList.remove('fa-regular');
            bubbles[i + 1].style.color = '#0a990b';
            if (i + 1 === 1) {
                customerImg.style.backgroundImage = 'url("https://corp-backend.brevo.com/wp-content/uploads/2023/07/startups_2x.webp")';
                document.querySelector('.customer-quote').innerText = `"The email dashboard is so detailed! I love to go there, check the stats, and see how contacts are engaging with our content."`;
                document.querySelector('.customer-name').innerText = 'Simón Gómez';
                document.querySelector('.customer-title').innerText = 'Growth Marketer at Tributi';
            } else if (i + 1 === 2) {
                customerImg.style.backgroundImage = 'url("https://corp-backend.brevo.com/wp-content/uploads/2023/07/agencies_1x.webp")';
                document.querySelector('.customer-quote').innerText = `"Brevo lets us create personalized experiences for every single contact. The multichannel automation features are super powerful!"`;
                document.querySelector('.customer-name').innerText = 'Lillie Mazitova';
                document.querySelector('.customer-title').innerText = 'Project Manager at RocketConseil';
            } else if (i + 1 === 3) {
                customerImg.style.backgroundImage = 'url("https://corp-backend.brevo.com/wp-content/uploads/2023/07/ecommerce_1x.webp")';
                document.querySelector('.customer-quote').innerText = `"Marketing is about sending the right message at the right time. Brevo's easy-to use platform lets us do exactly that."`;
                document.querySelector('.customer-name').innerText = 'Inès Marotte';
                document.querySelector('.customer-title').innerText = 'Marketing Director at Aquarelle';
            } else {
                customerImg.style.backgroundImage = 'url("https://corp-backend.brevo.com/wp-content/uploads/2023/07/enterprise_2x.webp")';
                document.querySelector('.customer-quote').innerText = `"BrevoPlus is absolutely key in allowing us to engage with guests, get their feedback, and optimize our services."`;
                document.querySelector('.customer-name').innerText = 'Andy Walker';
                document.querySelector('.customer-title').innerText = 'Chief of Staff at Yumpingo';
            }
            break;
    }
    }
})

// Adds class of active and removes class of inactive to element function is
// called to and does the reverse for the element that currently has the class
// of active. If the current element already has class of active the loop
// breaks.

function changeActiveCustomer () {
    console.log(this);
    for (let i = 0; i < listCustomerStory.length; i++) {
        if (this === listCustomerStory[i] && listCustomerStory[i].classList.contains('active')) {
            break;
        } else if (listCustomerStory[i].classList.contains('active')) {
            listCustomerStory[i].classList.remove('active');
            listCustomerStory[i].classList.add('inactive');
            this.classList.add('active');
            this.classList.remove('inactive');
            if (this === listCustomerStory[0]) {
                document.querySelector('.customer-story-img-desktop').style.backgroundImage = 'url("images/SMBS-1.jpg")'
                document.querySelector('.customer-quote-desktop').innerText = `""Brevo is fantastic for keeping clients informed of upcoming shoots and the status of portrait collections. Plus, it offers great deliverability!""`;
                document.querySelector('.customer-name-desktop').innerText = 'Danie Wigzell';
                document.querySelector('.customer-title-desktop').innerText = 'Owner at Pop-Up Portraits';
            } else if (this === listCustomerStory[1]) {
                document.querySelector('.customer-story-img-desktop').style.backgroundImage = 'url("https://corp-backend.brevo.com/wp-content/uploads/2023/07/startups_2x.webp")';
                document.querySelector('.customer-quote-desktop').innerText = `"The email dashboard is so detailed! I love to go there, check the stats, and see how contacts are engaging with our content."`;
                document.querySelector('.customer-name-desktop').innerText = 'Simón Gómez';
                document.querySelector('.customer-title-desktop').innerText = 'Growth Marketer at Tributi';
            } else if (this === listCustomerStory[2]) {
                document.querySelector('.customer-story-img-desktop').style.backgroundImage = 'url("https://corp-backend.brevo.com/wp-content/uploads/2023/07/agencies_1x.webp")';
                document.querySelector('.customer-quote-desktop').innerText = `"Brevo lets us create personalized experiences for every single contact. The multichannel automation features are super powerful!"`;
                document.querySelector('.customer-name-desktop').innerText = 'Lillie Mazitova';
                document.querySelector('.customer-title-desktop').innerText = 'Project Manager at RocketConseil';
            } else if (this === listCustomerStory[3]) {
                document.querySelector('.customer-story-img-desktop').style.backgroundImage = 'url("https://corp-backend.brevo.com/wp-content/uploads/2023/07/ecommerce_1x.webp")';
                document.querySelector('.customer-quote-desktop').innerText = `"Marketing is about sending the right message at the right time. Brevo's easy-to use platform lets us do exactly that."`;
                document.querySelector('.customer-name-desktop').innerText = 'Inès Marotte';
                document.querySelector('.customer-title-desktop').innerText = 'Marketing Director at Aquarelle';
            } else if (this === listCustomerStory[4]) {
                document.querySelector('.customer-story-img-desktop').style.backgroundImage = 'url("https://corp-backend.brevo.com/wp-content/uploads/2023/07/enterprise_2x.webp")';
                document.querySelector('.customer-quote-desktop').innerText = `"BrevoPlus is absolutely key in allowing us to engage with guests, get their feedback, and optimize our services."`;
                document.querySelector('.customer-name-desktop').innerText = 'Andy Walker';
                document.querySelector('.customer-title-desktop').innerText = 'Chief of Staff at Yumpingo';
            }
        }
    }
}

// These event listeners change content of customer story list items
// for desktop when clicked

smbs.addEventListener("click", changeActiveCustomer);
startups.addEventListener("click", changeActiveCustomer);
agencies.addEventListener("click", changeActiveCustomer);
ecommerce.addEventListener("click", changeActiveCustomer);
enterprise.addEventListener("click", changeActiveCustomer);