// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    isUp:boolean = true;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    changePosition(){
        if(this.isUp){
            this.node.y = -88.0;
        }else{
            this.node.y= 88.0;
        }
        this.isUp = !this.isUp;
    }

    start () {

    }

    // update (dt) {}
}
