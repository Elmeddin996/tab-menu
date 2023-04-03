


const tabHeaders = document.querySelectorAll('.tab-header ul li');
const tabContents = document.querySelectorAll('.tab-main div');

tabHeaders.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabContents.forEach(content => content.style.display = 'none');
        tabContents[index].style.display = 'flex';
    });
});



$(function () {
    $("#tabs").tabs();
});