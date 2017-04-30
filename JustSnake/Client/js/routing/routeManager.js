const routeManager = (function() {

function start() {
    
    let sammy = Sammy(function () {

        this.get('#/test', function() {
            alert("route code");
        });
    });

    $(function () {
        sammy.run("#/");
    })
}
    
return {start}
})();

export { routeManager }