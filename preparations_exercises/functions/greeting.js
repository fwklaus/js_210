let greetingMessage = "Good Morning!";
//console.log(greetingMessage);

function greetPeople() {
  console.log(greetingMessage);
}

greetPeople(greetingMessage);

function changeGreetingMessage(newMessage) {
  greetingMessage = newMessage;
}

changeGreetingMessage("Good Evening");
greetPeople();
