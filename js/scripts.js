function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

Ticket.prototype.ticketFormula = function () {
  formula();
};

function formula() {
  const movieInput = $("input:radio[name=movie]:checked").val();
  const timeInput = $("input:radio[name=time]:checked").val();
  const age = $("#name").val();
  let price = 0;
  console.log(movieInput);
  console.log(timeInput);
  console.log(age);

  if (movieInput === "lightyear") {
    price += 10;
  } else {
    price += 5;
  }

  if (timeInput === "evening") {
    price += 10;
  } else {
    price += 5;
  }
  if (age >= 50) {
    price += 3;
  } else {
    price += 7;
  }

  return price;
}

$(document).ready(function () {
  $("#movie").submit(function () {
    const movieInput = $("input:radio[name=movie]:checked").val();
    const timeInput = $("input:radio[name=time]:checked").val();
    const age = $("#name").val();
    let newTicket = new Ticket(movieInput, timeInput, age);
    console.log(newTicket);
    console.log(formula());
  });
});
