$(document).ready(function(){
    // Moving background
    var move = document.querySelector('.background-wrapper');
    window.addEventListener('scroll', function() {
        move.style.transform = 'translateY(' + window.pageYOffset/4 + 'px)';
      });
});

    // Fly in title
    

    // Select rank and season
    let onclickedRank, onclickedSeason, onmouseRank, onmouseSeason = false;
    const rankSvg           = document.querySelector('.rankSelect-svg');
    const seasonSvg         = document.querySelector('.seasonSelect-svg');
    // const rankSelect        = document.querySelector('.rankSelect');
    // const seasonSelect      = document.querySelector('.seasonSelect');
    const rankSelectMenu    = document.querySelector('.rankSelect .selectMenu');
    const seasonSelectMenu  = document.querySelector('.seasonSelect .selectMenu');

    window.onclick = () => {
        if (!onclickedRank && onmouseRank) {
            rankSvg.style.transform = 'rotate(0deg)';
            rankSelectMenu.style.display = 'block';
            onclickedRank = true;
        } else if(onclickedRank) {
            rankSvg.style.transform = 'rotate(180deg)';
            rankSelectMenu.style.display = 'none';
            onclickedRank = false;
        }
        if (!onclickedSeason && onmouseSeason) {
            seasonSvg.style.transform = 'rotate(0deg)';
            seasonSelectMenu.style.display = 'block';
            onclickedSeason = true;
        } else if(onclickedSeason) {
            seasonSvg.style.transform = 'rotate(180deg)';
            seasonSelectMenu.style.display = 'none';
            onclickedSeason = false;
        }
    }

    // Pagination bar
    const page = document.querySelector('.currentPage');
    const next = document.querySelector('.next');
    const nextMax = document.querySelector('.next-max');
    const previous = document.querySelector('.previous');
    const previousMax = document.querySelector('.previous-max');

    document.querySelector('.previous .backward').style.opacity = '.6';
    document.querySelector('.previous-max .backward').style.opacity = '.6';
    previousClick = false;

    next.onclick = () => {
        page.innerHTML = Number(page.innerHTML)+1;
        backwardBlur();
    }
    nextMax.onclick = () => {
        page.innerHTML = Number(page.innerHTML)+10;
        backwardBlur();
    }
    previous.onclick = () => {
        if (previousClick){
            page.innerHTML = Number(page.innerHTML)-1;
            backwardBlur();
        }
    }
    previousMax.onclick = () => {
        if (previousClick && page.innerHTML > 10){
            page.innerHTML = Number(page.innerHTML)-10;
            backwardBlur();
        } else {
            page.innerHTML = 1;
            backwardBlur();
        }
    }

    function backwardBlur(){
        if (page.innerHTML > 1) {
            document.querySelector('.previous .backward').style.opacity = '1';
            document.querySelector('.previous-max .backward').style.opacity = '1';
            previous.classList.add('hoverRed');
            previousMax.classList.add('hoverRed');
            previousClick = true;
        } else {
            previousClick = false;
            document.querySelector('.previous .backward').style.opacity = '.6';
            document.querySelector('.previous-max .backward').style.opacity = '.6';
            previous.classList.remove('hoverRed');
            previousMax.classList.remove('hoverRed');
        }
    }
