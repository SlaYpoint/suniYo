const getTime = (time) => {
      let min = Math.floor(time / 60);
      let sec = ("0" + Math.floor(time % 60)).slice(-2);
      return `${min}:${sec}`;
}

export { getTime };
