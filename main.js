function init() {
    document.querySelectorAll('.foldItem').forEach((e) => {
        e.classList.add('foldTransition');
    });

    setTimeout(function() {
        document.querySelector('.initScrim').classList.add('foldTransition')
    }, 1500)

    document.querySelector('.firstPanel').style.height = `${window.innerHeight - 75}px`;
    document.querySelector('.secondPanel').style.height = `${window.innerHeight - 75}px`;
    document.querySelector('.thirdPanel').style.height = `${window.innerHeight - 75}px`;
}