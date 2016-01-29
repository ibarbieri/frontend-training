// add the corresponding listeneres in order to
// 1 - if a personality is selected it must be displayed on the right
//     of the personality list
// 2 - the browser must only redirect to the twitter handle if it is clicked
//      on the personality selected (not on the list)

// document.querySelector('#personalities').addEventListener('click', function (event) {

//     // if (event.target.tagName === 'A') {
//     //     console.log('enviar a tw');
//     // } else {
//     //     event.preventDefault();
//     // }

//     if (event.target.tagName === 'UL' || event.target.tagName === 'LI' || event.target.tagName === 'A') {
//         loadPersonaloty(event.target);
//         selectPersonality(event.target);
//     }
// });

// function loadPersonaloty (clicked) {
//     var personalityContainer = document.querySelector('#personalitySelected');

//     personalityContainer.innerHTML = clicked.textContent;    
// }

// function selectPersonality (clicked) {
//     console.log(clicked);
//     var allPersonalitys = document.querySelectorAll('.Personalities-personality');

//     for (var i = 0; i < allPersonalitys.length; i++) {
//         allPersonalitys[i].className = 'Personalities-personality';
//     }

//     clicked += ' selected';
    
//     if (clicked === 'UL') {
//     }  
// }







document.addEventListener('DOMcontentLoad', function (event) {
    var personalities = document.getElementById('personalities');

    personalities.addEventListener('click', function (event) {
        var target = event.target;

        if (target.nodeName === 'A') {
            event.preventDefault();
        }

        event.stopImmediatePropagation();

        // insert en dom
        function insertPersonality();
    });
});

function insertPersonality () {

}












