!(function() {
    document.querySelector('#btn-aboutme').addEventListener('click', function() {
        document.querySelector('#aboutme').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        closeHamNav()
    })
    document.querySelector('#btn-expertise').addEventListener('click', function() {
        document.querySelector('#expertise').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        closeHamNav()
    })
    document.querySelector('#btn-projects').addEventListener('click', function() {
        document.querySelector('#projects').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        closeHamNav()
    })
    document.querySelector('#btn-contact').addEventListener('click', function() {
        document.querySelector('#contactme').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        closeHamNav()
    })
    document.querySelector('.input-submit').addEventListener('click', function() {
        document.querySelector('#contactForm').submit();
    })

    let navBtns = document.querySelectorAll('.button');
    let navToggle = document.querySelector('.nav-toggle');
    let bars = document.querySelectorAll('.bar');

    navToggle.addEventListener('click', function (e) {
        bars.forEach(bar => bar.classList.toggle('x'));
        navBtns.forEach(bar => bar.classList.toggle('xbtn'));
    })

    function closeHamNav() {
        bars.forEach(bar => bar.classList.remove('x'));
        navBtns.forEach(bar => bar.classList.remove('xbtn'));
    }

    const jobTexts = [
        'web developer',
        'web designer',
        'data analyst',
        'low-medium code software developer',
    ];
    var jobText = document.querySelector('#job-text');

    function jobTextAdd(idx) {
        setTimeout(function() {
            if (jobText.textContent.length < jobTexts[idx].length) {
                jobText.textContent = jobTexts[idx].slice(0,jobText.textContent.length+1);
                jobTextAdd(idx);
            } else {
                jobTextHold();
            }
        }, 50);
    }

    function jobTextHold() {
        setTimeout(function() {
            jobTextRdc();
        },2000)
    }

    function jobTextRdc() {
        setTimeout(function() {
            if (jobText.textContent.length > 0) {
                jobText.textContent = jobText.textContent.slice(0,jobText.textContent.length-1);
                jobTextRdc();
            } else {
                if (jobIndex+1 >= jobTexts.length) jobIndex=0;
                else jobIndex++;
                jobTextAdd(jobIndex);
            }
        }, 20);
    }

    let jobIndex=0;
    jobTextAdd(jobIndex);

})()