let allCards = [
  "card1",
  "card2",
  "card3",
  "card4",
  "card5",
  "card6",
  "card7",
  "card8",
];
let interviewedCards = [];
let rejectedCards = [];
document.getElementById("btn1").click();
document.getElementById("totalJobs").innerText = allCards.length;
document.getElementById("interviewJobs").innerText = interviewedCards.length;
document.getElementById("rejectedJobs").innerText = rejectedCards.length;

function deleteCard(id) {
  document.getElementById(id).remove();
  const totalJobs = document.getElementById("totalJobs");
  const numberOfJobs = Number(totalJobs.innerText) - 1;
  totalJobs.innerText = numberOfJobs;
}

function interview(id) {
  interviewedCards.push(id);

  document.getElementById("interviewJobs").innerText = interviewedCards.length;
  document.getElementById("rejectedJobs").innerText = rejectedCards.length;
}

function rejected(id) {
  if (interviewedCards.includes(id)) {
    const index = interviewedCards.indexOf(id);
    interviewedCards.splice(index, 1);
    rejectedCards.push(id);
  }
  else if(allCards.includes(id))
    rejectedCards.push(id);

  document.getElementById("interviewJobs").innerText = interviewedCards.length;
  document.getElementById("rejectedJobs").innerText = rejectedCards.length;
}

function showCards(type) {
  for (let i = 1; i <= 8; i++) {
    if (type == "btn1") {
      const btn = document.getElementById("btn1");
      btn.classList.remove("bg-white", "text-gray-600", "hover:text-blue-600");
      btn.classList.add("bg-blue-500", "text-white");

      const btn2 = document.getElementById("btn3");
      btn2.classList.remove("bg-blue-500", "text-white");
      btn2.classList.add("bg-white", "text-gray-600", "hover:text-blue-600");

      const btn3 = document.getElementById("btn2");
      btn3.classList.remove("bg-blue-500", "text-white");
      btn3.classList.add("bg-white", "text-gray-600", "hover:text-blue-600");

      if (allCards.length == 0) {
        document.getElementById("noJobs").classList.remove("hidden");
        for (let i = 1; i <= 8; i++) {
          document.getElementById("card" + i).classList.add("hidden");
        }
        return;
      } else if (allCards.includes("card" + i)) {
        document.getElementById("noJobs").classList.add("hidden");
        document.getElementById("amount").innerText = allCards.length + " jobs";
        document.getElementById("card" + i).classList.remove("hidden");
      } else document.getElementById("card" + i).classList.add("hidden");
    } else if (type == "btn2") {
      const btn = document.getElementById("btn2");
      btn.classList.remove("bg-white", "text-gray-600", "hover:text-blue-600");
      btn.classList.add("bg-blue-500", "text-white");

      const btn2 = document.getElementById("btn1");
      btn2.classList.remove("bg-blue-500", "text-white");
      btn2.classList.add("bg-white", "text-gray-600", "hover:text-blue-600");

      const btn3 = document.getElementById("btn3");
      btn3.classList.remove("bg-blue-500", "text-white");
      btn3.classList.add("bg-white", "text-gray-600", "hover:text-blue-600");

      if (interviewedCards.length == 0) {
        document.getElementById("noJobs").classList.remove("hidden");
        document.getElementById("amount").innerText = "0 of 8 jobs";
        for (let i = 1; i <= 8; i++) {
          document.getElementById("card" + i).classList.add("hidden");
        }
        return;
      } else if (interviewedCards.includes("card" + i)) {
        document.getElementById("noJobs").classList.add("hidden");
        document.getElementById("amount").innerText =
          interviewedCards.length + " of 8 jobs";
        document.getElementById("card" + i).classList.remove("hidden");
      } else document.getElementById("card" + i).classList.add("hidden");
    } else if (type == "btn3") {
      const btn = document.getElementById("btn3");
      btn.classList.remove("bg-white", "text-gray-600", "hover:text-blue-600");
      btn.classList.add("bg-blue-500", "text-white");

      const btn2 = document.getElementById("btn1");
      btn2.classList.remove("bg-blue-500", "text-white");
      btn2.classList.add("bg-white", "text-gray-600", "hover:text-blue-600");

      const btn3 = document.getElementById("btn2");
      btn3.classList.remove("bg-blue-500", "text-white");
      btn3.classList.add("bg-white", "text-gray-600", "hover:text-blue-600");

      if (rejectedCards.length == 0) {
        document.getElementById("amount").innerText = "0 of 8 jobs";
        document.getElementById("noJobs").classList.remove("hidden");
        for (let i = 1; i <= 8; i++) {
          document.getElementById("card" + i).classList.add("hidden");
        }
        return;
      } else if (rejectedCards.includes("card" + i)) {
        document.getElementById("noJobs").classList.add("hidden");
        document.getElementById("amount").innerText =
          rejectedCards.length + " of 8 jobs";
        document.getElementById("card" + i).classList.remove("hidden");
      } else document.getElementById("card" + i).classList.add("hidden");
    }
  }
}
