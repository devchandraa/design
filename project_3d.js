const work_section = document.querySelector('.work--section');
const about_section = document.querySelector('.about--section');
const container = document.querySelector('.image--works');
const card1 = document.querySelector('.image--works .card');
const card2 = document.querySelector('.image--about .card');
const bird = document.querySelector('.image--works .bird_Logo');
const text = document.querySelector('.image--works .ART');
const happiness = document.querySelector('.image--about .happiness_cropped');

work_section.addEventListener('mousemove', (e) => {

    let xAxis =  (window.innerWidth / 2 - e.pageX)/25;
    let yAxis =  (window.innerHeight / 2 - e.pageY)/25;
    card1.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

work_section.addEventListener('mouseenter', (e) => {
    card1.style.transition = 'none';
    bird.style.transform = 'translateZ(5rem)';
    text.style.transform = 'translateZ(3rem)';
})

work_section.addEventListener('mouseleave', (e) => {
    card1.style.transition = 'all 0.5s ease';
    card1.style.transform = 'rotateX(0deg) rotateY(0deg)';
    bird.style.transform = 'translateZ(0px)';
    text.style.transform = 'translateZ(0px)';
}
)

about_section.addEventListener('mousemove', (e) => {

    let xAxis =  (window.innerWidth / 2 - e.pageX)/40;
    let yAxis =  (window.innerHeight / 2 - e.pageY)/40;
    card2.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

about_section.addEventListener('mouseenter', (e) => {
    card2.style.transition = 'none';
    happiness.style.display = 'block';
    happiness.style.transform = 'translateZ(3rem)';
})

about_section.addEventListener('mouseleave', (e) => {
    card2.style.transition = 'all 0.5s ease';
    card2.style.transform = 'rotateX(0deg) rotateY(0deg)';
    happiness.style.transform = 'translateZ(0px)';
})