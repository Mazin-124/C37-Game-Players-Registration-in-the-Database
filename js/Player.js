class Player{
    constructor(){}
  
    getCount(){
        var playerCountRef  = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
           playerCount = data.val();
      })
     
    }

    update(count){
        database.ref('/').update({
         playerCount:count
        });
      }
}
