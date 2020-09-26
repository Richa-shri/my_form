const firstname = document.getElementById('f_name');
const lastname = document.getElementById('l_name');
const email = document.getElementById('email');
const pass = document.getElementById('password');
const cpass = document.getElementById('cpassword');

let validFirstname = false;
let validLastname = false;
let validEmail = false;
let validPass = false;
let validCPass = false;


$('#failure').hide();
$('#success').hide();

// console.log(Firstname, lastname, email, password);

// for first name and last name
firstname.addEventListener('blur', ()=>{
    console.log("name is blurred");
    // Validate name here
    let regex = /^[a-zA-Z]([a-zA-Z]){2,10}$/;
    let str = f_name.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your name is valid');
        f_name.classList.remove('is-invalid');
        validFirstname = true;
    }
    else{
        console.log('Your name is not valid');
       f_name.classList.add('is-invalid');
       validFirstname = false;
        
    }
})
lastname.addEventListener('blur', ()=>{
    console.log("last name is blurred");
    // Validate name here
    let regex = /^[a-zA-Z]([a-zA-Z]){0,10}$/;
    let str = l_name.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your name is valid');
        l_name.classList.remove('is-invalid');
        validLastname = true;
    }
    else{
        console.log('Your name is not valid');
       l_name.classList.add('is-invalid');
       validLastname = false;
        
    }
})

// for email


email.addEventListener('blur', ()=>{
    console.log("email is blurred");
    // Validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else{
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

// for password

pass.addEventListener('blur', ()=>{
    console.log("Password is blurred");
    // Validate phone here
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;; 
    let str = pass.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your Passsword is valid');
        password.classList.remove('is-invalid');
        validPass = true;
    }
    else{
        console.log('Your password is not valid');
        password.classList.add('is-invalid');
        validPass = false;
        
    }
})


cpass.addEventListener('blur', ()=>{
    console.log("confirm Password is blurred");
    let str1 = pass.value;
    let str2 = cpass.value;

    if (str1 == str2) {
        console.log('Your Passsword is matched');
        cpassword.classList.remove('is-invalid');
        validCPass = true; 
        
    } else {
        console.log('Your password is not matched');
        cpassword.classList.add('is-invalid');
        validCPass = false;
        
    }

})




// submit
let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    e.preventDefault();

    console.log('You clicked on submit');
    console.log( validFirstname, validLastname, validEmail, validPass, validCPass);
    
    // Submit your form here
    if(validFirstname && validLastname && validEmail && validPass && validCPass){
        let failure = document.getElementById('failure');

        console.log('Pass, Cpass, email and name , lastname are valid. Submitting the form');
        let success = document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');
        // $('#failure').alert('close');
        $('#failure').hide();
        $('#success').show();
        
    }
    else{
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        // $('#success').alert('hide');
        $('#success').hide();
        $('#failure').show();
        }

    
    
})
