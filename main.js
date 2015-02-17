require('./main.css');

var d = document,
    _queryS = d.querySelector.bind(d);

d.body.classList.add('naugtur');

setInterval(function () {
    var input = _queryS('.bc-chat-input[disabled]');
    if (input) {
        input.removeAttribute('disabled');
    }
}, 2000);

var _chatButtonId = 'naugtur-chat',
    _chatButtonMissing = !_queryS('#' + _chatButtonId);

if (_chatButtonMissing) {
    var mybt = d.createElement('i');
    mybt.setAttribute('id', _chatButtonId);
    mybt.setAttribute('class', 'btn btn-large btn-l-gray btn-successz');
    mybt.setAttribute('title', 'https://naugtur.github.io/gs-is-for-chat/');
    mybt.innerHTML = 'chat';
    mybt.addEventListener('click', function () {
        d.body.classList.toggle('naugtur');
        mybt.classList.toggle('btn-success');
    });
    _queryS('#queue-btns .btn-group').appendChild(mybt);
}
