
function validate() {
if( document.form.name.value == "" ) {
alert( "Please provide your name!" ); document.form.name.focus() ; return false;
}
if( document.form.email.value == "" ) {
alert( "Please provide your Email!" ); document.form.email.focus() ; return false;
}
if( document.form.phone.value == "" ) {
    alert( "Please provide your phone number!" ); document.form.phone.focus() ; return false;
    }

return (true);
}
