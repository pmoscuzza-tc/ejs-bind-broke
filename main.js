steal(
    'can/legacy.js',
    'can-legacy-view-helpers',
    'can/map/',
    './main.ejs',
	function (can, legacyHelpers,CanMap, mainEjs) {
        window.can = can;
        can.view = legacyHelpers.view;
        var ejsControl = can.Control.extend({ }, {
            init: function(element, options) {
                var data = new CanMap({
                    'intro': "Hello World!"
                });
                element.appendChild(can.view(mainEjs, data));
            }
        }); 
        new ejsControl( document.getElementById('ejsdiv') );
    }
);