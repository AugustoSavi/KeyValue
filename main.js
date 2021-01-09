document.addEventListener('keydown', function(event) {
    console.log(event)
    document.getElementById("CodeTag").innerText = event.code;
    document.getElementById("KeyTag").innerText = event.key;
    document.getElementById("KeyCodeTag").innerText = event.keyCode;
    document.getElementById("KeyCodeTagTop").innerText = event.keyCode;
    document.getElementById("ctrlKeyTag").innerText = event.ctrlKey;
    document.getElementById("altKeyTag").innerText = event.altKey;

    capLock(event);
});

function capLock(event){

    if(event.getModifierState && event.getModifierState( 'CapsLock' ))
    document.getElementById("capsLockTag").innerText = true;
    else
    document.getElementById("capsLockTag").innerText = false;
}
