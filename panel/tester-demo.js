Editor.registerPanel( 'tester-demo.panel', {
    is: 'tester-demo',

    testShortCuts: function (event) {
        Editor.info('shortcuts "command + t"!');
    },

    pressA: function (event) {
        Editor.info('keyPress "A"!');
    },

    pressEnter: function (event) {
        Editor.info('keyPress "Enter"!');
    },

    _focusAction: function () {
        Editor.info('focus');
    },

    _mousedown: function () {
        Editor.info('mousedown!');
    },

    ready: function () {
        this.addEventListener('mousedown',function (event) {
            if (event.which === 3) {
                Editor.info('right mousedown');
            }else {
                Editor.info('mousedown');
            }
        });

        this.addEventListener('mousemove',function () {
            Editor.info('mousemove');
        });

        this.addEventListener('mouseup',function () {
            Editor.info('mouseup');
        });

        this.addEventListener('dblclick',function () {
            Editor.info('double click');
        });

        this.addEventListener('click',function (event) {
            Editor.info('click！');
        });

        this.addEventListener('mousewheel',function (event) {
            Editor.info('mousewheel');
        });


    },
});
