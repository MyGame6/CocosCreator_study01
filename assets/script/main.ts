// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    onClicked() {
        // cc.find 只传入第一个参数时，将从场景根节点开始逐级查找
        // let labelNote:cc.Node = cc.find("Canvas/Main Scence/Page/Test Label");
        // 传入两个参数时,从传入的节点开始查找
        let pageNode = cc.find("Canvas/Main Scence/Page");
        let labelNote: cc.Node = cc.find("Test Label", pageNode);

        // 获取node上的控件
        let label = labelNote.getComponent(cc.Label);
        label.string = 'Changed Value';

        // 获取node上的脚本
        let script = label.getComponent('PositionScript');
        script.changePosition();
    }

    // LIFE-CYCLE CALLBACKS:

    // 组件脚本的初始化阶段
    onLoad() {
        console.log('---- onLoad is go ----');
    }

    // 回调函数会在组件第一次激活前，也就是第一次执行 update 之前触发
    start() {
        console.log('---- start is go ----');
    }

    // 游戏开发的一个关键点是在每一帧渲染前更新物体的行为，状态和方位
    update(dt) {
        // console.log('---- update is go ----' + dt);
    }

    onEnable() {
        console.log('---- onEnable is go ----');
    }

    onDisable() {
        console.log('---- onDisable is go ----');
    }

    onDestroy() {
        console.log('---- onDestroy is go ----');
    }
}
