
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBb0RDO1FBakRHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7SUE4QzNCLENBQUM7SUE1Q0csNEJBQVMsR0FBVDtRQUNJLGtDQUFrQztRQUNsQyx5RUFBeUU7UUFDekUscUJBQXFCO1FBQ3JCLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUNsRCxJQUFJLFNBQVMsR0FBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUV6RCxhQUFhO1FBQ2IsSUFBSSxLQUFLLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsS0FBSyxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUM7UUFFL0IsYUFBYTtRQUNiLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNsRCxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELHdCQUF3QjtJQUV4QixhQUFhO0lBQ2IseUJBQU0sR0FBTjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsc0NBQXNDO0lBQ3RDLHdCQUFLLEdBQUw7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELGtDQUFrQztJQUNsQyx5QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLDhDQUE4QztJQUNsRCxDQUFDO0lBRUQsMkJBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsNEJBQVMsR0FBVDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsNEJBQVMsR0FBVDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBaEREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBTk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQW9ENUI7SUFBRCxlQUFDO0NBcERELEFBb0RDLENBcERxQyxFQUFFLENBQUMsU0FBUyxHQW9EakQ7a0JBcERvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICBvbkNsaWNrZWQoKSB7XHJcbiAgICAgICAgLy8gY2MuZmluZCDlj6rkvKDlhaXnrKzkuIDkuKrlj4LmlbDml7bvvIzlsIbku47lnLrmma/moLnoioLngrnlvIDlp4vpgJDnuqfmn6Xmib5cclxuICAgICAgICAvLyBsZXQgbGFiZWxOb3RlOmNjLk5vZGUgPSBjYy5maW5kKFwiQ2FudmFzL01haW4gU2NlbmNlL1BhZ2UvVGVzdCBMYWJlbFwiKTtcclxuICAgICAgICAvLyDkvKDlhaXkuKTkuKrlj4LmlbDml7Ys5LuO5Lyg5YWl55qE6IqC54K55byA5aeL5p+l5om+XHJcbiAgICAgICAgbGV0IHBhZ2VOb2RlID0gY2MuZmluZChcIkNhbnZhcy9NYWluIFNjZW5jZS9QYWdlXCIpO1xyXG4gICAgICAgIGxldCBsYWJlbE5vdGU6IGNjLk5vZGUgPSBjYy5maW5kKFwiVGVzdCBMYWJlbFwiLCBwYWdlTm9kZSk7XHJcblxyXG4gICAgICAgIC8vIOiOt+WPlm5vZGXkuIrnmoTmjqfku7ZcclxuICAgICAgICBsZXQgbGFiZWwgPSBsYWJlbE5vdGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICBsYWJlbC5zdHJpbmcgPSAnQ2hhbmdlZCBWYWx1ZSc7XHJcblxyXG4gICAgICAgIC8vIOiOt+WPlm5vZGXkuIrnmoTohJrmnKxcclxuICAgICAgICBsZXQgc2NyaXB0ID0gbGFiZWwuZ2V0Q29tcG9uZW50KCdQb3NpdGlvblNjcmlwdCcpO1xyXG4gICAgICAgIHNjcmlwdC5jaGFuZ2VQb3NpdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIOe7hOS7tuiEmuacrOeahOWIneWni+WMlumYtuautVxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0tIG9uTG9hZCBpcyBnbyAtLS0tJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Zue6LCD5Ye95pWw5Lya5Zyo57uE5Lu256ys5LiA5qyh5r+A5rS75YmN77yM5Lmf5bCx5piv56ys5LiA5qyh5omn6KGMIHVwZGF0ZSDkuYvliY3op6blj5FcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0tIHN0YXJ0IGlzIGdvIC0tLS0nKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmuLjmiI/lvIDlj5HnmoTkuIDkuKrlhbPplK7ngrnmmK/lnKjmr4/kuIDluKfmuLLmn5PliY3mm7TmlrDniankvZPnmoTooYzkuLrvvIznirbmgIHlkozmlrnkvY1cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCctLS0tIHVwZGF0ZSBpcyBnbyAtLS0tJyArIGR0KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnLS0tLSBvbkVuYWJsZSBpcyBnbyAtLS0tJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0tIG9uRGlzYWJsZSBpcyBnbyAtLS0tJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0tIG9uRGVzdHJveSBpcyBnbyAtLS0tJyk7XHJcbiAgICB9XHJcbn1cclxuIl19