// const email = 'soumya@acroy@gmail.com'
// console.log(email)

// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const bool = emailRegex.test(email);

// if (bool) {
//     console.log('Validated Email')
// }
// else {
//     console.log('Non- Validated Email')
// }

const password = 'egkeb1jhguy1v1j3v1@kdja';
const strength = {
    hasUpperCase: /[A-Z]/.test(password),
    hasLowerCase: /[a-z]/.test(password),
    hasSpecialCharacters: /[~!@#$%^&*()_]/.test(password),
    hasNumeric: /\d/.test(password),
    length: password.length > 8 && password.length <= 30
};

// console.log(strength);
let score = 0;
if (strength.hasUpperCase)  score ++ ;
if (strength.hasLowerCase) score ++ ;
if (strength.hasSpecialCharacters) score ++ ;
if (strength.hasNumeric) score ++ ;
if (strength.length) score ++ ;

// console.log(score)

console.log('Password strength out of 5: ', score )

