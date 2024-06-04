document.getElementById('loadKeyWord').addEventListener('click', function () {
    document.getElementById('keywordPass').classList.remove('hidden');
    showKeyWordPassword();
    document.getElementById('randomPass').classList.add('hidden');
})
document.getElementById('loadRandom').addEventListener('click', function () {
    document.getElementById('randomPass').classList.remove('hidden');
    showRandomPassword();
    document.getElementById('keywordPass').classList.add('hidden');
})
function showKeyWordPassword() {
    document.getElementById('formKey').addEventListener('submit', function (event) {
        event.preventDefault();
        var mayusL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var minusL = 'abcdefghijklmnopqrstuvwxyz';
        var nums = '0123456789';
        var symbols = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
        var pass = '';

        for (var i = 0; i < 2; i++) {
            pass += mayusL.charAt(Math.floor(Math.random() * mayusL.length)),
                pass += minusL.charAt(Math.floor(Math.random() * minusL.length)),
                pass += nums.charAt(Math.floor(Math.random() * nums.length))
        }
        for (var i = 0; i < 1; i++) {
            pass += symbols.charAt(Math.floor(Math.random() * symbols.length))
        }
        var keyword = document.querySelector('.keyword').value;

        if (keyword.length > 0) {
            var newWord = changeVocal(keyword);
            document.getElementById('showKeyPass').innerText = newWord + pass;
        } else {
            document.getElementById('showKeyPass').innerText = "Enter your key word";
        }
    })
}

//random Password
function showRandomPassword() {
    var mayusL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var minusL = 'abcdefghijklmnopqrstuvwxyz';
    var nums = '0123456789';
    var symbols = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
    var pass = '';


    for (var i = 0; i < 3; i++) {
        pass += mayusL.charAt(Math.floor(Math.random() * mayusL.length)),
            pass += minusL.charAt(Math.floor(Math.random() * minusL.length)),
            pass += nums.charAt(Math.floor(Math.random() * nums.length))
    }
    for (var i = 0; i < 2; i++) {
        pass += symbols.charAt(Math.floor(Math.random() * symbols.length))
    }
    var passArray = pass.split('');

    passArray = passArray.sort(function () { return 0.5 - Math.random() });

    pass = passArray.join('');

    document.getElementById('showRandomPass').innerText = pass;
}

//Change letter
function changeVocal(word) {
    var characters = word.split('');
    
    for (var i = 0; i < characters.length; i++) {
        switch (characters[i]) {
            case 'a':
            case 'A':
                characters[i] = '@';
                break;
            case 'e':
            case 'E':
                characters[i] = '3';
                break;
            case 'i':
            case 'I':
                characters[i] = '1';
                break;
            case 'o':
            case 'O':
                characters[i] = '0';
                break;
            case 'u':
            case 'U':
                characters[i] = 'V';
                break;
        }
    }
    
    var newWord = characters.join('');
    
    return newWord;
}
//Copy password
document.getElementById("showRandomPass").addEventListener("click", function () {
    const text = document.getElementById("showRandomPass").innerText;
    navigator.clipboard.writeText(text).then(function() {
        const copyMessage = document.getElementById("copyMessage");
        copyMessage.style.display = "block";
        setTimeout(function() {
            copyMessage.style.display = "none";
        }, 3000);
    }).catch(function(err) {
        console.error('Could not copy text: ', err);
    });
});

//Copy password
document.getElementById("showKeyPass").addEventListener("click", function () {
    const text = document.getElementById("showKeyPass").innerText;
    navigator.clipboard.writeText(text).then(function() {
        const copyMessage = document.getElementById("copyMessage");
        copyMessage.style.display = "block";
        setTimeout(function() {
            copyMessage.style.display = "none";
        }, 3000);
    }).catch(function(err) {
        console.error('Could not copy text: ', err);
    });
});