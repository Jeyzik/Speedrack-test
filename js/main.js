(() => {
  var e = {
      957: () => {
        console.log("components");
      },
      437: () => {
        document.querySelectorAll(".calcInfo").forEach((e) => {
          const t = e.querySelector(".increase"),
            n = e.querySelector(".decrease"),
            c = e.querySelector('input[type="text"]');
          t.addEventListener("click", () => {
            let e = parseInt(c.value);
            c.value = isNaN(e) ? 1 : e + 1;
          }),
            n.addEventListener("click", () => {
              let e = parseInt(c.value);
              c.value = isNaN(e) || e <= 1 ? 1 : e - 1;
            });
        });
        const e = document.querySelectorAll(".belt-width .btn"),
          t = document.querySelector(".belt-width .btn.custom"),
          n = document.querySelector(".custom-belt-width");
        e.forEach((c) => {
          c.addEventListener("click", () => {
            e.forEach((e) => e.classList.remove("active")),
              c.classList.add("active"),
              (n.style.display = c === t ? "block" : "none");
          });
        }),
          t.addEventListener("click", () => {
            e.forEach((e) => e.classList.remove("active")),
              t.classList.add("active"),
              (n.style.display = "flex");
          });
        const c = document.querySelector(".decrease-item"),
          o = document.querySelector(".increased-item"),
          r = document.querySelector(".order-input"),
          l = document.querySelector(".price");
        function s() {
          const e = 22360 * parseInt(r.value);
          l.textContent = `$${e} `;
        }
        c.addEventListener("click", () => {
          let e = parseInt(r.value);
          e > 1 && ((r.value = e - 1), s());
        }),
          o.addEventListener("click", () => {
            let e = parseInt(r.value);
            (r.value = e + 1), s();
          }),
          s();
      },
      828: () => {
        let e = document.querySelectorAll(".services-input");
        e.forEach(function (t) {
          t.addEventListener("click", function () {
            e.forEach(function (e) {
              e.checked
                ? e.parentNode.classList.add("active-check")
                : e.parentNode.classList.remove("active-check");
            });
          });
        });
      },
      56: () => {
        document.addEventListener("DOMContentLoaded", function () {
          const e = document.querySelector(".select-options"),
            t = document.querySelector(".services-options");
          e.addEventListener("click", function () {
            t.style.display = "none" === t.style.display ? "block" : "none";
          });
        });
      },
      748: () => {
        document.addEventListener("DOMContentLoaded", function () {
          const e = document.querySelector(".slides"),
            t = document.querySelector(".full-screen-btn"),
            n = document.createElement("div");
          n.classList.add("fullscreen-overlay");
          const c = new Image();
          c.classList.add("fullscreen-image"),
            n.appendChild(c),
            document.body.appendChild(n);
          let o = 0;
          function r(t) {
            (e.style.transform = `translateX(-${100 * t}%)`),
              (function (t) {
                document.querySelector(".slide-counter").textContent = `${
                  t + 1
                }/${e.children.length}`;
              })(t);
          }
          document
            .querySelector(".next")
            .addEventListener("click", function () {
              (o = (o + 1) % e.children.length), r(o);
            }),
            document
              .querySelector(".prev")
              .addEventListener("click", function () {
                (o = (o - 1 + e.children.length) % e.children.length), r(o);
              }),
            t.addEventListener("click", function () {
              const t = e.children[o];
              (c.src = t.src), n.classList.add("fullscreen-active");
            }),
            n.addEventListener("click", function () {
              n.classList.remove("fullscreen-active");
            });
        });
      },
      146: () => {
        const e = document.querySelectorAll(".tooltip");
        e.forEach((t) => {
          const n = t.querySelector(".title"),
            c = t.querySelector(".tooltip-container");
          n.addEventListener("mouseover", () => {
            e.forEach((e) => e.classList.remove("active-tip")),
              c.classList.add("active-tip");
          }),
            n.addEventListener("mouseout", () => {
              c.classList.remove("active-tip");
            });
        });
      },
    },
    t = {};
  function n(c) {
    var o = t[c];
    if (void 0 !== o) return o.exports;
    var r = (t[c] = { exports: {} });
    return e[c](r, r.exports, n), r.exports;
  }
  (() => {
    "use strict";
    const e = {
      windowEl: window,
      documentEl: document,
      htmlEl: document.documentElement,
      bodyEl: document.body,
    };
    console.log(
      (() => {
        const t = navigator.userAgent || navigator.vendor || window.opera;
        return /android/i.test(t)
          ? (e.htmlEl.classList.add("page--android"), "Android")
          : /iPad|iPhone|iPod/.test(t) && !window.MSStream
          ? (e.htmlEl.classList.add("page--ios"), "iOS")
          : "unknown";
      })()
    ),
      n(957),
      n(748),
      n(828),
      n(146),
      n(437),
      n(56);
  })();
})();
