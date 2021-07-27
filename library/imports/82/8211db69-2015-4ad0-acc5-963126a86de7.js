"use strict";
cc._RF.push(module, '8211dtpIBVK0KzFljEmqG3n', 'main');
// script/main.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
    }
    NewClass.prototype.onClicked = function () {
        // cc.find 只传入第一个参数时，将从场景根节点开始逐级查找
        // let labelNote:cc.Node = cc.find("Canvas/Main Scence/Page/Test Label");
        // 传入两个参数时,从传入的节点开始查找
        var pageNode = cc.find("Canvas/Main Scence/Page");
        var labelNote = cc.find("Test Label", pageNode);
        // 获取node上的控件
        var label = labelNote.getComponent(cc.Label);
        label.string = 'Changed Value';
        // 获取node上的脚本
        var script = label.getComponent('PositionScript');
        script.changePosition();
    };
    // LIFE-CYCLE CALLBACKS:
    // 组件脚本的初始化阶段
    NewClass.prototype.onLoad = function () {
        console.log('---- onLoad is go ----');
    };
    // 回调函数会在组件第一次激活前，也就是第一次执行 update 之前触发
    NewClass.prototype.start = function () {
        console.log('---- start is go ----');
    };
    // 游戏开发的一个关键点是在每一帧渲染前更新物体的行为，状态和方位
    NewClass.prototype.update = function (dt) {
        // console.log('---- update is go ----' + dt);
    };
    NewClass.prototype.onEnable = function () {
        console.log('---- onEnable is go ----');
    };
    NewClass.prototype.onDisable = function () {
        console.log('---- onDisable is go ----');
    };
    NewClass.prototype.onDestroy = function () {
        console.log('---- onDestroy is go ----');
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();