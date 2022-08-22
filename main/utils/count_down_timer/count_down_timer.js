import moment from 'moment';

const countDownTimer = (eventTime) => {
    let timer;
    let currentTime = Date.now();
    let hours, minutes, seconds;
    if (eventTime > currentTime) {
        let diffTime = eventTime - currentTime;
        let duration = moment.duration(diffTime, 'milliseconds');
        let interval = 1000;

        duration = moment.duration(duration - interval, 'milliseconds');
        hours = duration.hours() < 10 ? '0' + duration.hours() : duration.hours();
        minutes = duration.minutes() < 10 ? '0' + duration.minutes() : duration.minutes();
        seconds = duration.seconds() < 10 ? '0' + duration.seconds() : duration.seconds();
        timer = hours + ":" + minutes + ":" + seconds

    }
    else if (eventTime <= currentTime) {
        timer = "Claim";
    }
    else timer = ". . .";

    return timer;
}

export default countDownTimer;