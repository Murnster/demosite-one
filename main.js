function init() {
    document.querySelectorAll('.foldItem').forEach((e) => {
        e.classList.add('foldTransition');
    });

    setTimeout(function() {
        document.querySelector('.initScrim').classList.add('foldTransition')
    }, 1500);
    
    document.querySelector('.firstPanel').style.height = `${window.innerHeight - 75}px`;
    
    if (window.innerWidth > 768) {
        document.querySelector('.secondPanel').style.height = `${window.innerHeight - 75}px`;
        document.querySelector('.thirdPanel').style.height = `${window.innerHeight - 75}px`;
    }
    
    carousal();
}

function carousal() {
    var index = 0;
    // var urls = ["url('src/person1.jpg')", "url('src/person2.jpg')", "url('src/person3.jpg')"];
    var names = ["- Olivia Smith, Contractor", "- Alexander Brown, Accountant", "- Sophia Johnson, Real Estate"];
    var comments = [
        '"I recently purchased blinds from Lakeview and I am thoroughly impressed with their quality and design."',
        '"The installation process was incredibly smooth and the blinds have added a touch of sophistication to my home."',
        '"Highly recommend these blinds to anyone looking for an upgrade to their home style and theme."'
    ];
    
    setInterval(() => {
        if (index == 2) {
            index = 0;
        } else {
            index = index + 1;
        }
        
        const hero = document.querySelector('.thirdPanelHero');
        const quote = document.getElementById('thirdPanelQuote');
        const person = document.getElementById('thirdPanelPerson');
        
        hero.classList.add('fade');
        quote.classList.add('fade');
        person.classList.add('fade');
        
        setTimeout(() => {
            hero.classList.remove('thirdPanelHero1');
            hero.classList.remove('thirdPanelHero2');
            hero.classList.remove('thirdPanelHero3');
            
            if (index == 0) {
                hero.classList.add('thirdPanelHero1')
            } else if (index == 1) {
                hero.classList.add('thirdPanelHero2')
            } else {
                hero.classList.add('thirdPanelHero3')
            }
            
            quote.innerHTML = comments[index];
            person.innerHTML = names[index];
            
            hero.classList.remove('fade');
            quote.classList.remove('fade');
            person.classList.remove('fade');
        }, 500);
    }, 10000);
}