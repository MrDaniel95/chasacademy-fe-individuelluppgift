(function simulateHeavyWork() {
    var start = Date.now();
    while (Date.now() - start < 200) {}
})();

window.addEventListener("load", () => {
   setTimeout(simulateHeavyWork, 0);
});

document.addEventListener("DOMContentLoaded", function () {
    var items = document.querySelectorAll(".add-to-cart");
    items.forEach(function (item) {
        item.addEventListener("click", function () {
            alert("Item added to cart!");
        });
    });

    var newsletterButton = document.querySelector(".newsletter .primary-button");
    if (newsletterButton) {
        newsletterButton.addEventListener("click", function (e) {
            e.preventDefault();
            alert("Thank you for subscribing!");
        });
    }
});

new PerformanceObserver((entryList) => {
  const entries = entryList.getEntries();
  const lastEntry = entries[entries.length - 1];
  console.log("LCP:", lastEntry.startTime);
}).observe({ type: "largest-contentful-paint", buffered: true });

axe.run().then(results => {
  console.log(results.violations);
});