Tester.checkLeaks(false);

describe('<tester-demo>', function() {
    var testEl;

    beforeEach(function ( done ) {
        fixture('panel', function (el) {
            testEl = el;
            done();
        });
    });

    var delay = 50;
    it('test shortcuts "command + t"', function( done ) {
        setTimeout( function () {
            Tester.keyDownOn( testEl, 't', 'command' );
            done();
        }, delay);
    });

    it('test keypress "A"', function( done ) {
        setTimeout( function () {
            Tester.keypress( testEl, 'a');
            done();
        }, delay);
    });

    it('test keypress "Enter"', function( done ) {
        setTimeout( function () {
            Tester.keyDownOn( testEl, 'enter');
            done();
        }, delay);
    });

    it('mousedown', function( done ) {
        setTimeout( function () {
            Tester.mouseEvent( testEl,'mousedown', 0, 0, 0 );
            done();
        }, delay);
    });

    it('mouseup', function( done ) {
        setTimeout( function () {
            Tester.mouseEvent( testEl,'mouseup', 0, 0, 0 );
            done();
        }, delay);
    });

    it('right mousedown', function( done ) {
        setTimeout( function () {
            Tester.mouseEvent( testEl,'mousedown', 0, 0, 2);
            done();
        }, delay);
    });

    it('mouseMove', function( done ) {
        setTimeout( function () {
            Tester.mouseEvent( testEl,'mousemove', 0, 0, 0 );
            done();
        }, delay);
    });

    it('Click', function( done ) {
        setTimeout( function () {
            Tester.mouseEvent( testEl,'click', 0, 0, 0);
            done();
        }, delay);
    });

    it('doubleClick', function( done ) {
        setTimeout( function () {
            Tester.mouseEvent( testEl,'dblclick', 0, 0, 0);
            done();
        }, delay);
    });

    it('mousewheel', function( done ) {
        setTimeout( function () {
            Tester.mouseEvent( testEl,'mousewheel', 0, 0, 0);
            done();
        }, delay);
    });
});
