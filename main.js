require('./main.css');
var d = document,
    _queryS = d.querySelector.bind(d);

var mybt = d.createElement('i');
mybt.setAttribute('class', 'btn btn-large btn-l-gray btn-success');
mybt.setAttribute('title', 'https://naugtur.github.io/gs-is-for-chat/');
mybt.innerHTML = 'chat';
mybt.addEventListener('click', function () {
    d.body.classList.toggle('naugtur');
    mybt.classList.toggle('btn-success');
});

d.body.classList.add('naugtur');

setInterval(function () {
    var input = _queryS('.bc-chat-input[disabled]');
    if (input) {
        input.removeAttribute('disabled');
    }
}, 2000);
_queryS('#queue-btns .btn-group').appendChild(mybt);