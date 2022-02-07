var times = 0;
var new_times;

addEventListener("load", () => {
    var new_times = localStorage.getItem("times");
    new_times++;
    localStorage.setItem("times", new_times);
    document.write(`這是您第${new_times}次造訪此網頁`);
})

