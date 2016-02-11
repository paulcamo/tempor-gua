/**
 * @return the init function to start the module.
 */
prodi.ui.mainMenu = (function () {
    "use strict";

    var options = {
        container : $('.main__home'),
        menuOpenClass: 'menu__open',
        menuButton: $('.main__logo'),
        menu: $('.main__navigation__home'),
        body: $('body')
    }

    function activateButtons(){
        // OPEN MENU
        options.menuButton.on('click tap', function(){
            options.container.addClass(options.menuOpenClass);
        });

        // CLOSE MENU
        options.body.on('click tap', function(){
            options.container.removeClass(options.menuOpenClass);
        });


        options.menu.on('click tap', function(e){
            e.stopPropagation();
        });

    }

        

    function init() {
        activateButtons();
    }

    return {
        init: init
    };

})();
