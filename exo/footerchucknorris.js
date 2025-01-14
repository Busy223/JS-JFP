
export function writefooter(){
    const footer = document.querySelector('footer');
    let date = new Date();

    footer.textContent = date.getFullYear();

}