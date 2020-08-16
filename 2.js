/*
2. Create a Simple Form with Username, Password and Email Field and perform following DOM Operations
a. Empty validation for all the fields.
b. Read the value of the above fields and display it in the page, below the forms.
c. Clear the fields once the user submit the form.


    let newdiv = document.createElement('div');
    let newdiv1 = document.createElement('div');
    let newdiv2 = document.createElement('div');
    let newdiv3 = document.createElement('div');
    //   newdiv.setAttribute('class', 'row');
    newdiv.setAttribute('class', 'bg-secondary');
    newdiv.setAttribute('class', 'mt-2');
    //  newdiv1.setAttribute('class', 'col');
    // newdiv2.setAttribute('class', 'col');
    //newdiv3.setAttribute('class', 'col');
    newdiv.style.visibility = "visible";
    newdiv1.textContent = user;
    newdiv2.textContent = pass;
    newdiv3.textContent = email;
    newdiv.appendChild(newdiv1);
    newdiv.appendChild(newdiv2);
    newdiv.appendChild(newdiv3);
    document.querySelector('#myrow').appendChild(newdiv);

*/

function fun1() {
    let user = document.querySelector('#id1').value;
    let pass = document.querySelector('#id2').value;
    let email = document.querySelector('#id3').value;

    document.querySelector('#id1').value = "";
    document.querySelector('#id2').value = "";
    document.querySelector('#id3').value = "";

    let newdiv = document.querySelector('#row2').cloneNode(true);
    newdiv.children[0].innerHTML = user;
    newdiv.children[1].innerHTML = pass;
    newdiv.children[2].innerHTML = email;
    let newd = document.querySelector('#contain');
    newd.appendChild(newdiv);
}