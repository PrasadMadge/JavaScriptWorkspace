function StopwatchCounter(){
    let startTime, endTime, running, duration = 0;
    
    this.start = function(){
        if(running)
            throw new Error('Stop watch is already running');

        running = true;
        startTime = new Date();
    };

    this.restart = function(){
        running = false;
        duration = 0;
        startTime = undefined;
        endTime = undefined;
    };

    this.stop = function(){
        if(!running)
            throw new Error('already stopped');

        endTime = new Date();
        duration = endTime - startTime;
    };

    Object.defineProperty(this, 'duration', {
        get: function() {return duration;}

    });

}

const sw = new StopwatchCounter();