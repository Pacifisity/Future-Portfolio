window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar')
    const name = document.getElementById('name')
    const navButtons = document.querySelectorAll('nav div a')

    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const viewportHeight = document.documentElement.clientHeight;

    console.log(`Viewport height: ${viewportHeight}px`);
    console.log(`scrollPosition: ${scrollPosition}px`)

    var calcContainer = (Math.floor(scrollPosition / ((viewportHeight)/2)) % 2)

    if (calcContainer === 1) {
        // navbar.style.backgroundColor = 'white';
        // navbar.style.boxShadow = '0 0px 10px 5px white';

        name.style.color = 'white';

        Array.from(navButtons).forEach(button => {
            button.classList.remove('light');
            button.classList.add('dark');

            var img = button.querySelector('img'); // Get the img element inside the button
            img.src = img.src.replace('images/icons/w', 'images/icons/b')

            console.log(img.src)
        });

    } else {
        // navbar.style.backgroundColor = 'black';
        // navbar.style.boxShadow = '0 0px 10px 10px black'

        name.style.color = 'black';
        
        Array.from(navButtons).forEach(button => {
            button.classList.remove('dark');
            button.classList.add('light');

            var img = button.querySelector('img'); // Get the img element inside the button
            img.src = img.src.replace('images/icons/b', 'images/icons/w')
            
            console.log(img.src)
        })
    }
});
