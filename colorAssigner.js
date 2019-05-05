let assignColor = (function () {
    let counter = 0;
    let colors = color_list;

    // in case if you are using jquery you can fetch the color list as below
    /* 
        $.getJSON("color_list.json", function (data) {
            colors = data;
        });
    */

    let temp = {};
    return function (str) {
        if (!temp[str]) {
            temp[str] = colors[counter];
            counter = counter + 1;
        }
        return temp[str]
    }
})();