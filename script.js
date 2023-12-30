setInterval(() => {
  let d = new Date();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();
  hour.style.transform = `translateY(-100%) translateX(-50%) rotate(${
    hours * 30 + minutes / 2 + seconds / 120
  }deg)`;
  minute.style.transform = `translateY(-100%) translateX(-50%) rotate(${
    minutes * 6 + seconds / 10
  }deg)`;
  second.style.transform = `translateY(-100%) translateX(-50%) rotate(${
    seconds * 6
  }deg)`;
}, 1000);
