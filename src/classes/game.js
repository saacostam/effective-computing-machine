export class Game{
    constructor(playerSocketID) {
        this.playersSocketIDs = [''+playerSocketID];
        this.isGameInProgress = false;
        this.turn = playerSocketID;
        this.piece = 1;
        this.grid =    [[0, 0, 0],
                        [0, 0, 0],
                        [0, 0, 0]];
    }

    startGame(playerSocketID){
        this.playersSocketIDs.push(''+playerSocketID);
        this.isGameInProgress = true;
        this.turn = this.playersSocketIDs[Math.floor(2 * Math.random())];

        return this.playersSocketIDs;
    }

    disconnect(){
        this.isGameInProgress = false;
        return this.playersSocketIDs;
    }
}
