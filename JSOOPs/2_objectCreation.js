const circle = {
    radius:  1,
    location:  {
        x: 1,
        y: 1
    },
    draw: function(){
        console.log('draw cool');
    }
};

circle.draw();

const prasad = {
    height: 163,
    address: {
        city: "Berlin",
        country: "Germany"
    },
    giveInfo: function(){
        console.log('Prasad info from Prasad const')
    }
}

prasad.giveInfo();