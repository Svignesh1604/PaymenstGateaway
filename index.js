// function toggleSidebar() {
//     const sidebar = document.getElementById('sidebar');
//     sidebar.classList.toggle('show');
// }
// function showPaymentMethod(method) {
//     const methods = ['bank', 'upi', 'card', 'gateway'];
//     methods.forEach(m => {
//         document.getElementById(m).style.display = 'none';
//     });
//     document.getElementById(method).style.display = 'block';

//     const links = document.querySelectorAll('.sidebar ul li a');
//     links.forEach(link => {
//         link.classList.remove('active');
//     });
//     document.querySelector(`[onclick="showPaymentMethod('${method}')"]`).classList.add('active');
// }








// document.addEventListener("DOMContentLoaded", function() {
//     showPaymentMethod('bank'); 
// });


// function toggleSidebar() {
//     document.querySelector('.sidebar').classList.toggle('show');
// }

// function showPaymentMethod(method) {
//     const methods = document.querySelectorAll('.payment-method');
//     methods.forEach((element) => {
//         element.style.display = 'none';
//     });
//     document.getElementById(method).style.display = 'block';

//     const links = document.querySelectorAll('.sidebar ul li a');
//     links.forEach((link) => {
//         link.classList.remove('active');
//     });
//     document.querySelector(`[onclick="showPaymentMethod('${method}')"]`).classList.add('active');
// }



function toggleSidebar() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('show');
}

function showPaymentMethod(method) {
    // Hide all payment methods
    const methods = document.querySelectorAll('.payment-method');
    methods.forEach(method => method.style.display = 'none');

    // Show the selected payment method
    document.getElementById(method).style.display = 'block';
}
