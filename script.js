// You can change Didi to your sister's name if you want:
// document.getElementById('sisName').textContent = 'Pooja';

function runCarAnimation() {
    const carAnim = document.getElementById('carAnimation');
    carAnim.style.display = "block";
    setTimeout(() => {
        carAnim.classList.add('active');
    }, 60);

    setTimeout(() => {
        carAnim.classList.remove('active');
        setTimeout(() => {
            carAnim.style.display = "none";
        }, 400);
    }, 2200);
}
