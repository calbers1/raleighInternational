var form = document.forms["contact"];
form.addEventListener('submit',contact_submit,false); 

function contact_submit(e) {
// Stop Form From Submitting
e.preventDefault();

// Set Initial Variables
var target = e.target || e.srcElement;
var to = 'someone@example.com';
var uri = 'mailto:' + to;
var body = '';

//Set.Form.Values.to.Variables
var name = target.elements['fname'].value;
var subject = target.elements['subject'].value;
 var email = target.elements['email'].value;
var phone = target.elements['phone'].value;
var message = target.elements['message'].value;

// Build Body / Message with all Input Fields
body += message + "\r\n\r\n";
body += "Name: " + name + "\r\n";
body += "Phone Number: " + phone + "Email: " + email + "\r\n";

//Build.final.Mailto.URI
uri += '?subject=' + encodeURIComponent(subject);
uri += '&body=' + encodeURIComponent(body);

// Open Mailto in New Window / Tab
window.open(uri,'_blank');
}