# 模态框与单例，简单工厂、发布订阅

## 模态窗的拆分
1. ModalService: 负责打开模态窗界面，也就是带透明度的蒙版，然后展示模态窗内容；
2. ModalComponent: 每一个用户自定义的模态框，表单，内容，操作按钮等；
3. Trigger: 订阅了每一个 ModalComponent 的打开方法，能够打开 ModalComponent

## 模态窗模块分析
  1. ### ModalService
      ModalService 是一个服务，一个单例，因为整个页面只会有一个 ModalService 的服务用来打开模态窗的界面，然后将需要展示的模态窗展示在打开的模态窗页面。
  2. ### ModalComponent 
      每一个 ModalComponent 都是一个独立的对象，存在于 ModalService 的维护队列里，他们拥有自己的展示内容以及各自发布自己的 `open` / `close` 事件。
  3. ### Trigger 
      Trigger 可以订阅 ModalComponent 的 `open` 事件，来打开对应的 ModalComponent ，一般情况下一个 Trigger 订阅一个 ModalComponent 的打开。

## 代码实现
+ ### ModalComponent

    `ModalComponent` 是一个简单工厂，可以根据参数不同产出不同的模态框
    ```js
      var ModalComponent = function (modal, id) {
        var that = this;
        that.modal = modal;
        that.id = id;
        that.init = function () {
          ···
          cancelBtn.onclick = function (e) {
            cancelEvent(e);
            that.close();
          }
          confirmBtn.onclick = function (e) {
            confirmClick(e);
            that.close();
          }
          ···
        }

        that.close = function () {
          that.modal.remove();
          MarkModalService.close();
        }

        that.open = function () {
          MarkModalService.show(that.modal);
        }
        that.init();
      };
    ```
    每一个 `ModalComponent` 内部会自己绑定 `cancelBtn` / `confirmBtn`，来进行相关的操作；

+ ### ModalService
  
    对于 `ModalService` 我们创建一个单例，因为整个系统都只需要存在一个这样的对象；
    ```js
        var MarkModalService = (function (MarkModalService) {
        MarkModalService.modalList = {};
        MarkModalService.container = null;

        MarkModalService.register = function () {
          ···
          for (var i = 0; i < modals.length; i++) {
            var id = modals[i].id;
            var mod = new ModalComponent(modals[i], id);
            MarkModalService.modalList[id] = mod;
          }
          for (var j = 0; j < triggers.length; j++) {
            var trg = triggers[j];
            var clickEvt = trg.onclick;
            trg.onclick = function (e) {
              var trgName = triggers[j].name;
              // let trgName === modal.id so that they can be linked
              MarkModalService.modalList[trgName].open();
              clickEvt && clickEvt(e);
            }
          }
          ···
        }

        MarkModalService.show = function (modal) {
          ···
        }

        MarkModalService.createContainer = function () {
          ···
        }

        MarkModalService.close = function () {
          ···
        }

        MarkModalService.createContainer();
        MarkModalService.register();
        return MarkModalService;
      })(MarkModalService || {});
    ```
    1. 在这个对象里面我们有一个 `register` 函数，初始化若干个 `ModalComponent`。
    2. 然后将这些 `ModalComponent` 存在 `ModalService` 的 `modalList` 发布订阅的队列中。
    3. 接着将对应的 `Trigger` 绑定上 `modalList` 对应的 `ModalComponent` 的 `open` 事件，进行事件订阅。
