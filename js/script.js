class Timer {
    constructor(displayHours,displaySeconds, seconds){
	    this.displayHours = displayHours
        this.displaySeconds = displaySeconds
        this.seconds = seconds
    }

    show (){
	    let hours = this.formatTime(Math.floor(this.seconds/60)),
	        seconds = this.formatTime(this.seconds%60)

        this.displayHours.innerText = hours
        this.displaySeconds.innerText = seconds
        if (this.seconds > 0) setTimeout(()=> this.countDown(),1000)
    }

    countDown(){
        this.seconds -=1
        this.show()
    }

    formatTime(time){
        return time < 10 ? `0${time}` : time
    }
}

const displayHours = document.getElementById('hours'),
      displaySeconds = document.getElementById('seconds'),
      seconds = 1200,
      timer = new Timer (displayHours, displaySeconds, seconds)

timer.show()
