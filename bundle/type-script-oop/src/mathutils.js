export var mathUtil;
(function (mathUtil) {
    function sum(...value) {
        let total = 0;
        value.forEach(e => {
            total += e;
        });
        return total;
    }
    mathUtil.sum = sum;
})(mathUtil || (mathUtil = {}));
