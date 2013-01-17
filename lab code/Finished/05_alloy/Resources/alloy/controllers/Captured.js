function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.__alloyId0 = A$(Ti.UI.createWindow({
        backgroundColor: "transparent",
        backgroundImage: "images/grain.png",
        barColor: "#6d0a0c",
        title: "Captured",
        id: "__alloyId0"
    }), "Window", null);
    $.__views.captured = A$(Ti.UI.createTableView({
        backgroundColor: "transparent",
        id: "captured"
    }), "TableView", $.__views.__alloyId0);
    $.__views.__alloyId0.add($.__views.captured);
    $.__views.capturedTab = A$(Ti.UI.createTab({
        window: $.__views.__alloyId0,
        id: "capturedTab",
        title: "Captured",
        icon: "images/captured.png"
    }), "Tab", null);
    $.addTopLevelView($.__views.capturedTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;