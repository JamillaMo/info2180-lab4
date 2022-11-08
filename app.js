window.addEventListener("load", function (e) {
    var btn = document.querySelector("button");

    btn.addEventListener('click', function (e) {
        e.preventDefault()
        console.log('Button clicked');
        let url = "superheroes.php";

        fetch(url)
            .then(response => {
                // alert(response)
                return response.text();
            })

            .then(data => {alert(data)})


        // const httpRequest = new XMLHttpRequest();
        // let url = "superheroes.php";
        // httpRequest.onreadystatechange = getXML;
        // httpRequest.open('GET', url);
        // httpRequest.send();

        // function getXML() {
        //     if (httpRequest.readyState === XMLHttpRequest.DONE) {
        //         if (httpRequest.status === 200) {
        //             console.log("Test");
        //             var response = httpRequest.responseXML;
        //             console.log(response);
        //             alert(response);
        //             // var results = document.querySelector('#results');
        //         //     var heroes = response.getElementsByTagName('person');
        //         //     console.log(heroes);

        //         //     var list = document.createElement('ul');
        //         //     results.appendChild(list);
        //         //     for (var x = 0; x < heroes.length; x++) {
        //         //         var person = document.createElement('li');
        //         //         var text = document.createTextNode(heroes[x].children[0].childNodes[0].nodeValue);
        //         //         person.appendChild(text)
        //         //         list.appendChild(person);
        //         //     }
        //         } else {
        //             alert('There was a problem with the request.');
        //         }
        //     }
        // }


    });
})