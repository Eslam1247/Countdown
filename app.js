const countdown = () => {
    const countdate = new Date("November 30, 2021 00:00:00").getTime()
    const now = new Date().getTime()
    const gap = countdate - now;
    // how the fuck does time work
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24
        // cal 
    const textday = Math.floor(gap / day)
    console.log(textday)
    const texthour = Math.floor((gap % day) / hour)
    const textminute = Math.floor((gap % hour) / minute)
    const textsecond = Math.floor((gap % minute) / second)
    document.querySelector('.day').innerText = textday
    document.querySelector('.hour').innerText = texthour
    document.querySelector('.minute').innerText = textminute
    document.querySelector('.second').innerText = textsecond

}
setInterval(countdown, 1000)