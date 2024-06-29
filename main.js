function masinHesabi() {
    debugger
    let selectedcar, i
    for (i = 0; document.querySelector('#carTipi').length; i++) {
        if (document.querySelector('#carTipi').options[i].selected) {
            selectedcar = document.querySelector('#carTipi').options[i].value
        }
        console.log(selectedcar);
    }
}


function salam() {
    console.log("hello owdhk");
}