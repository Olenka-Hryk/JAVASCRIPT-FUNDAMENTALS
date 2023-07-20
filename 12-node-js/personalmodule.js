function displayGreeting(userName) {
  const now = new Date();
  return `<p>Date of request: ${now} <br> ${getGreeting(now.getHours())} ${userName}</p>`;
}

function getGreeting(hour) {
  let greeting =
    hour >= 0 && hour < 5
      ? "Good night,"
      : hour >= 5 && hour < 11
      ? "Good morning,"
      : hour >= 11 && hour < 17
      ? "Good day,"
      : "Good evening,";
  return greeting;
}

module.exports = displayGreeting;