




let formElement = document.querySelector("form")
let containElement = function(){
    return`<div class="container">
        <h1 class="vissza">Visszajelzés</h1>
        <input class="targy" placeholder="Tárgy" type="text">
        <textarea class="megjegyzes">Megjegyzés</textarea>
        <div class="boxinput">
        <input type="checkbox" name=""  id="">
        <p class="adatvedelmi">Elolvastam és elfogadom az <a href="http://">Adatkezelési Tájékoztatót.</a></p>
    </div>
        <button class="mentes">MENTÉS</button>
</div>`
}

    formElement.insertAdjacentHTML("beforeend",containElement())