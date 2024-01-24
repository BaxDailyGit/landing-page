// animate.css

// 요소들을 변수에 저장하는 함수
function getElements(selector) {
    return document.querySelector(selector);
}

// 애니메이션 적용 함수
function applyAnimation(element, animation, rangeStart, rangeEnd) {
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition >= rangeStart && scrollPosition <= rangeEnd) {
        element.style.animation = animation + ' 1s ease-in-out forwards';
    } else {
        element.style.animation = 'none';
    }
}

// 요소들을 저장
var welcomeElements = {
    h2: getElements('#welcome h2'),
    p: getElements('#welcome p'),
    btn: getElements('#welcome .downloadButton'),
    sprout: getElements('#welcome .sprout'),
    man: getElements('#welcome .man')
};

var aboutElements = {
    h3: getElements('#about h3'),
    p: getElements('#about p'),
    img: getElements('#about img')
};

// var projectsElements = {
//     h2: getElements('#projects h2'),
//     p: getElements('#projects p'),
//     section: getElements('#projects section')
// };

// 스크롤 이벤트 핸들러 등록
window.addEventListener('scroll', function () {
    // welcome 섹션 애니메이션 적용
    applyAnimation(welcomeElements.h2, 'fadeInUp', 0, 400);
    applyAnimation(welcomeElements.p, 'fadeInUp', 0, 400);
    applyAnimation(welcomeElements.btn, 'fadeInUp', 0, 400);
    applyAnimation(welcomeElements.sprout, 'slideIn', 0, 400);
    applyAnimation(welcomeElements.man, 'slideIn', 0, 400);

    // about 섹션 애니메이션 적용
    applyAnimation(aboutElements.h3, 'fadeInUp', 100, 1300);
    applyAnimation(aboutElements.p, 'fadeInUp', 100, 1300);
    applyAnimation(aboutElements.img, 'fadeInUp', 100, 1300);
    //
    // // projects 섹션 애니메이션 적용
    // applyAnimation(projectsElements.h2, 'fadeInUp', 600, 1800);
    // applyAnimation(projectsElements.p, 'fadeInUp', 600, 1800);
});
