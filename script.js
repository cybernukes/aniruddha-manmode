// Select the theme toggle icon
var icon = document.getElementById('icon');

// Check if dark theme was previously enabled
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
}

icon.onclick = function () {
    document.body.classList.toggle('dark-theme');

    // Save the user's preference in localStorage
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }

    if (document.body.classList.contains('dark-theme')) {
        icon.src = "img/sun-icon.png";
    } else {
        icon.src = "img/moon-icon.png";
    }
};

// document.querySelectorAll('a').forEach(link => {
//     link.setAttribute('target', '_blank');
// });

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');

    // Ensure elements are found
    if (navLinks && hamburger) {
        navLinks.classList.toggle('show');
        hamburger.classList.toggle('active');
    }
}

// Hide menu when a menu item is clicked
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        const hamburger = document.querySelector('.hamburger');

        if (navLinks && hamburger) {
            navLinks.classList.remove('show');
            hamburger.classList.remove('active');
        }
    });
});


var options = {
    "key": "rzp_live_Ym94Z8wxqKgwaQ", // Enter the Key ID generated from the Dashboard
    "amount": "5", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Acme Corp", //your business name
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
    "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        "name": "Gaurav Kumar", //your customer's name
        "email": "gaurav.kumar@example.com",
        "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
var rzp1 = new Razorpay(options);
document.getElementById('rzp-button1').onclick = function(e){
    rzp1.open();
    e.preventDefault();
}
