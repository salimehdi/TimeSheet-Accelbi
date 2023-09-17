const statusBtns = document.querySelectorAll('.status-btn');

statusBtns.forEach(statusBtn => {
    statusBtn.setAttribute('href', './man-emp/man-emp.html'); 
    statusBtn.addEventListener('click', function(event) {
        event.preventDefault(); 
        window.location.href = this.getAttribute('href'); 
    });
});