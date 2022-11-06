document.querySelector("form").addEventListener("submit", handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const select = document.querySelector("#reservation");
    const reservation = select[select.selectedIndex].textContent;
    // Simulate server delay
    setTimeout(() => reservationConfirmed(name, reservation), Math.random() * 1000);
}

function reservationConfirmed(name, reservation) {
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const main = document.querySelector("main");
    main.className = "reservation-confirmed";
    h2.textContent = "Reservation confirmed!";
    p.textContent = `${name}, thank you for your reservation for ${reservation}.`;
    main.append(h2, p);
}
