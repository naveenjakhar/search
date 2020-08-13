function disp() {
    document.getElementById("button").addEventListener('click', function() {
        document.querySelector('.bg-model').style.display = 'flex';
    });
}

function close1() {
    document.querySelector('.close').addEventListener('click', function() {
        document.querySelector('.bg-model').style.display = 'none';
    })
}