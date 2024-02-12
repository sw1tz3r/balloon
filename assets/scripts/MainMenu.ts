import { _decorator, Component, Node, director} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MainMenu')
export class MainMenu extends Component {
    start() {

    }

    private startGame(){
        director.loadScene("scene-001");
    }
    update(deltaTime: number) {
        
    }
}

