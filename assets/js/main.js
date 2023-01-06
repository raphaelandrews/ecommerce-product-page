/*=== Product Count ===*/
function totalClick(click) {
    const totalClicks = document.getElementById("totalClicks");
    const sumValue = parseInt(totalClicks.innerText) + click;
    totalClicks.innerText = sumValue;

    if(sumValue < 0) {
        totalClicks.innerText = 0;
    }
}
