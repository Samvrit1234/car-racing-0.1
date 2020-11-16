class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2');
        title.html("car racing game");
        title.position(200,0);

        var input = createInput("name");
        input.position(200,160);

        var button = createButton("play");
        input.position(300,200);

        var greeting = createElement("h3");

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var y = input.value();

            playerCount = playerCount + 1;
            player.update(y);
            player.updateCount(playerCount);

            greeting.html("hello" + y);
            greeting.position(200,100);
        })
        
    }
}