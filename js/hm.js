function runOnKeys(func, ...codes) {
    let pressed = new Set();
    document.addEventListener('keydown', function(event) {
        pressed.add(event.code);

        for (let code of codes) {
            if (!pressed.has(code)) {
                return;
            }
        }
        pressed.clear();

        func();
    });

    document.addEventListener('keyup', function(event) {
        pressed.delete(event.code);
    });
}

var count = 1;

function fuck(){
    if (count == 1){
        alert(count+" манул")
    }
    if( (count == 2) || (count == 3)){
        alert( count + " манула")
    }
    if( count > 3){
        alert( count + " манулов")
    }
    count++
}

runOnKeys(
    () =>fuck(),
    "KeyQ", "AltLeft"
);
