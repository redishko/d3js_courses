define([], function() {
    var Model = Backbone.Model.extend({
        urlRoot: "/task"
    });
    return Model;
})