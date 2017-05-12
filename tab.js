  function Tab(ct){
    this.ct = ct;
    this.init();
    this.bind();
  }

Tab.prototype.init=function(){
  this.tabLis = this.ct.querySelectorAll('.tab-header>li');
  this.tabPanels=this.ct.querySelectorAll('.tab-container>li');
};

Tab.prototype.bind = function(){
    var _this = this;
    this.tabLis.forEach(function(tabli){
        tabli.onclick = function(e){
            var target = e.target;
            var index = [].indexOf.call(_this.tabLis,target);
            _this.tabLis.forEach(function(li){
                li.classList.remove('active');
            });
            target.classList.add('active');

            _this.tabPanels.forEach(function(panel){
                panel.classList.remove('active');
            });
            _this.tabPanels[index].classList.add('active');
        };
    });
  };

// var tab1 = new Tab(document.querySelectorAll('.tab')[0]);
// var tab1 = new Tab(document.querySelectorAll('.tab')[2]);
// var tab1 = new Tab(document.querySelectorAll('.tab')[1]);