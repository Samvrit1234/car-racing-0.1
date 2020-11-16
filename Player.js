class Player{
    constructor(){

    }
    getCount(){
        var playerref = database.ref("playerCount");
        playerref.on("value",function(data){
            playerCount = data.val();
        })
    }
    updateCount(count){
        database.ref("/").update({
            playerCount : count
        })
    }
    update(name){
        var x = "player" + playerCount;
        database.ref(x).set({
            name : name
        });
    }
}