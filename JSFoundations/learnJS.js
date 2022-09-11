function showMessage() {
    alert('Hello Everyone');
}

let firstGreeting = prompt('Say Hello');
const greetingArray = ['Hi', 'Hello', 'Hey', 'Guten Tag', 'Hola'];
const commonGreetings = greetingArray;

if (firstGreeting.toLowerCase() === commonGreetings) {
    showMessage();
}
else (
    alert('Why didn\'t you say hello')
)



