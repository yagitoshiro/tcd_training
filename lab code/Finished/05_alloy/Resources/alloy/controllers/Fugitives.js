function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.__alloyId1 = A$(Ti.UI.createWindow({
        backgroundColor: "transparent",
        backgroundImage: "images/grain.png",
        barColor: "#6d0a0c",
        title: "Fugitives",
        id: "__alloyId1"
    }), "Window", null);
    $.__views.fugitives = A$(Ti.UI.createTableView({
        backgroundColor: "transparent",
        id: "fugitives"
    }), "TableView", $.__views.__alloyId1);
    $.__views.__alloyId1.add($.__views.fugitives);
    $.__views.fugitiveTab = A$(Ti.UI.createTab({
        window: $.__views.__alloyId1,
        id: "fugitiveTab",
        title: "Fugitives",
        icon: "images/fugitives.png"
    }), "Tab", null);
    $.addTopLevelView($.__views.fugitiveTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;