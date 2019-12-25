const clockContainer = document.querySelector(".js-clock"),
  clockDetail = clockContainer.querySelector(".clockDetail");

function getTime() {
  const date = new Date();
  const daynum = date.getDate();
  const day=date.getDay();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();

  clockDetail.innerText = 
  `${daynum}${daynum%10 == 1? 'st' : daynum%10==2? 'nd' : daynum%10==3?'rd' : 'th'} ${day == 1? `MON` : day==2? `TUE` : day==3? `WED` : day==4? `THR` : day==5? `FRI` : day==6? `SAT` : day==7? `SUN`: 'else'} ${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
