import { _decorator, Component, Node, input, Input, RigidBody2D, Vec2, Prefab, director, instantiate,
    Collider2D, Contact2DType, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {    @property(Prefab)
    balloon: prefab;

    @property(Prefab)
    sensor: Prefab;

    @property(Label)
    scoreLabel: Label;
    private score: number = 0;
    @property(cc.Integer)
    maxLifeCount: number = 3;
    private lifeCount: number = 3;

    @property(cc.Label)
    lifeLabel: cc.Label = null;

     start() {
        //this.schedule(this.createBalloon, 1);
        this.createSensor;
        
    }

    onLoad() {
        this.schedule(this.createBalloon, 1); 

        // Listen for the 'balloonPopped' event and update the score
        cc.director.on('balloonPopped', (points: number) => {
            this.score += points;
            this.updateScoreLabel();
        });
        
        
    }
    
    createSensor(){
        let sensor = instantiate(this.sensor);
        sensor.setParent(canvas);
        sensor.setPosition(0,360)
        
    }

    //updateLifeLabel() {
      //  const lifeLabel = cc.find("Canvas/LifeLabel").getComponent(cc.Label);
        //    if (this.lifeLabel) {
          //  lifeLabel.string = `Lives: ${this.lifeCount}`;
        //}
        
    //}

    //balloonOutOfScreen() {
        
        //this.lifeCount--;

        
        //if (this.lifeCount <= 0) {
           // cc.log("Game Over");
            
       // } else {
         //  cc.log(`Life lost! Remaining lives: ${this.lifeCount}`);
       //     this.updateLifeLabel();
      //  }
   // }
    isBalloonOutOfScreen(balloon: cc.Node): boolean {
        const balloonPosition = balloon.getPosition();
        const screenHeight = cc.winSize.height;
        return balloonPosition.y > screenHeight / 2;
    }

    updateScoreLabel() {
        if (this.scoreLabel) {
            this.scoreLabel.string = `Score: ${this.score}`;
        }
    }

    createBalloon(){
        
        let Xrandom = (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 600)
        let canvas = director.getScene().getChildByName("Canvas");
        let balloon = instantiate(this.balloon);
        balloon.setParent(canvas);
        balloon.setPosition(Xrandom,-450);
        this.scheduleOnce(() => {
            balloon.destroy();
        }, 2.5)  //живут 2,5 секунды
            
    }
}