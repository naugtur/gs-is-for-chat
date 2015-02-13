require('./main.css');
var d = document,
    _queryS = d.querySelector.bind(d);

var mybt = d.createElement('i');
mybt.setAttribute('class', 'btn btn-large btn-l-gray btn-success');
mybt.innerHTML = 'chat';
mybt.addEventListener('click', function () {
    d.body.classList.toggle('naugtur');
    mybt.classList.toggle('btn-success');
});

d.body.classList.add('naugtur');
_queryS('.bc-chat-input').removeAttribute('disabled');

_queryS('#queue-btns .btn-group').appendChild(mybt);