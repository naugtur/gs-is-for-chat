require('./main.css');

var d = document,
    _queryS = d.querySelector.bind(d),
    _chatButtonId = 'naugtur-chat-button';

if (_queryS('#' + _chatButtonId)) {
    throw new Error("Bookmarklet already loaded.");
}

d.body.classList.add('naugtur');

setInterval(function () {
    var input = _queryS('.bc-chat-input[disabled]');
    if (input) {
        input.removeAttribute('disabled');
    }
}, 2000);

var mybt = d.createElement('p');
mybt.setAttribute('id', _chatButtonId);
mybt.setAttribute('class', 'btn btn-large btn-l-gray btn-success');
mybt.setAttribute('title', 'https://naugtur.github.io/gs-is-for-chat/');
mybt.innerHTML = 'Chat';
mybt.addEventListener('click', function () {
    d.body.classList.toggle('naugtur');
    mybt.classList.toggle('btn-success');
});
_queryS('#queue-btns .btn-group').appendChild(mybt);
