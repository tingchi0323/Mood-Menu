function showMessage(mood) {
  let message = "";
  let bgColor = "";

  switch(mood) {
    case 'happy':
      message = "你今天好棒！";
      bgColor = "#fff0f5"; // 粉色
      break;
    case 'sad':
      message = "沒關係，我陪你慢慢走過這一段，加油！";
      bgColor = "#e0f0ff"; // 藍色
      break;
    case 'stressed':
      message = "先深呼吸一下～你已經很努力了！我一直都在！";
      bgColor = "#fffbe0"; // 淡黃
      break;
    case 'meh':
      message = "給自己一點鼓勵！";
      bgColor = "#f0f0f0"; // 淺灰
      break;
  }

  document.getElementById("message").innerText = message;
  document.body.style.backgroundColor = bgColor;
}
const quotes = [
  "今天你撐過的辛苦，明天都會變成禮物。",
  "你比自己想像的更勇敢。",
  "放鬆一點，事情都會好起來的。",
  "就算慢也沒關係，我陪你一起走。",
  "你的微笑是我見過最美的風景。",
  "誰說生活很苦？有你超甜的啊！",
  "世界少了你會毫無色彩。",
  "做自己喜歡的事就會閃閃發光。",
  "你很棒！所以要學會愛自己！",
  "開心一點，因為你值得！",
];

function randomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  document.getElementById("randomQuote").innerText = quotes[index];
}