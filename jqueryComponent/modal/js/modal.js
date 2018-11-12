var ModalComponent = function (modal, id) {
  var that = this;
  that.modal = modal;
  that.id = id;
  that.init = function () {
    var btns = $(that.modal).find('*[data-role]');
    var cancelBtn = null;
    var confirmBtn = null;

    for (var i = 0; i < btns.length; i++) {
      var b = $(btns[i]);
      var role = b.attr('data-role');
      if (role === 'confirm') {
        confirmBtn = b[0];
      } else {
        cancelBtn = b[0];
      }
    }

    var cancelEvent = cancelBtn.onclick ? cancelBtn.onclick : function () { };
    var confirmClick = confirmBtn.onclick ? confirmBtn.onclick : function () { };
    cancelBtn.onclick = function (e) {
      cancelEvent(e);
      that.close();
    }
    confirmBtn.onclick = function (e) {
      confirmClick(e);
      that.close();
    }
  }

  that.close = function () {
    $(that.modal).remove();
    MarkModalService.close();
  }

  that.open = function () {
    $(that.modal).css({ 'display': 'block' })
    MarkModalService.show(that.modal);
  }
  that.init();
};

var MarkModalService = (function (MarkModalService) {
  MarkModalService.modalList = {};
  MarkModalService.container = null;

  MarkModalService.register = function () {
    var modals = $('*[data-modal]');
    var triggers = $('*[data-trigger]');
    // create the ModalComponent
    for (var i = 0; i < modals.length; i++) {
      var id = $(modals[i]).attr('data-modal');
      var mod = new ModalComponent(modals[i], id);
      MarkModalService.modalList[id] = mod;
    }
    // link with the Trigger
    for (var j = 0; j < triggers.length; j++) {
      var trg = $(triggers[j]);
      var clickEvt = trg[0].onclick && trg[0].onclick;
      trg[0].onclick = function (e) {
        var trgName = $(this).attr('data-trigger');
        MarkModalService.modalList[trgName].open();
        clickEvt && clickEvt(e);
      }
    }
  }

  MarkModalService.show = function (modal) {
    MarkModalService.container.append(modal);
    $('body').append(MarkModalService.container);
  }

  MarkModalService.createContainer = function () {
    var div = document.createElement('div');
    div.className = 'mark-modal-container';
    MarkModalService.container = $(div);
  }

  MarkModalService.close = function () {
    MarkModalService.container.remove();
  }

  MarkModalService.createContainer();
  MarkModalService.register();
  return MarkModalService;
})(MarkModalService || {});
