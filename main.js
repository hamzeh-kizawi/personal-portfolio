document.querySelector('.right-section-header li:last-child').addEventListener('mouseover', function() {
    document.getElementById('tooltip').style.visibility = 'visible';
    document.getElementById('tooltip').style.opacity = '1';
});

document.querySelector('.right-section-header li:last-child').addEventListener('mouseout', function() {
    document.getElementById('tooltip').style.visibility = 'hidden';
    document.getElementById('tooltip').style.opacity = '0';
});

function showSidebar() {
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = 'flex'
}

function closeSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

function playVideo() {
  var video = document.querySelector(".project-video");
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
