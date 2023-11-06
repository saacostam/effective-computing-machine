export class Game{
    constructor(playerSocketID) {
        this.playersSocketIDs = [''+playerSocketID];
        this.isGameInProgress = false;
    }

    startGame(playerSocketID){
        this.playersSocketIDs.push(''+playerSocketID);
        this.isGameInProgress = true;

        return this.playersSocketIDs;
    }

    disconnect(){
        this.isGameInProgress = false;
        return this.playersSocketIDs;
    }
}
