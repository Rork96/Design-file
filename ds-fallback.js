// Dev helper: resolves the compiled design-system namespace, or — if the bundle is not built yet — compiles the component sources in-browser.
(function () {
  var base = (document.currentScript && document.currentScript.src || location.href).replace(/[^/]*$/, "");
  var SRC = ["brand/Logo", "brand/Handle", "type/Bullet", "type/BulletList", "type/GlowHeading", "canvas/Canvas", "canvas/PhotoSlot", "canvas/SwatchTile", "canvas/StoryGuides"];
  function find() {
    var ks = Object.keys(window);
    for (var i = 0; i < ks.length; i++) { try { var v = window[ks[i]]; if (v && typeof v === "object" && v.GlowHeading && v.Canvas && v.StoryGuides) return v; } catch (e) {} }
  }
  window.dsLoad = async function (urls, names, scope) {
    var out = {}, sc = Object.assign({}, scope || {});
    for (var i = 0; i < urls.length; i++) {
      var code = await fetch(urls[i]).then(function (r) { if (!r.ok) throw new Error(urls[i] + " " + r.status); return r.text(); });
      var ex = []; code.replace(/^export\s+(?:function|const)\s+(\w+)/gm, function (_, n) { ex.push(n); });
      code = code.replace(/^\s*import[^;]*;\s*$/gm, "").replace(/^export\s+/gm, "");
      var js = Babel.transform(code, { presets: ["react"] }).code;
      var keys = Object.keys(sc);
      var res = new Function(...keys, "React", js + "\nreturn {" + ex.join(",") + "};")(...keys.map(function (k) { return sc[k]; }), React);
      Object.assign(out, res); Object.assign(sc, res);
    }
    return out;
  };
  window.dsReady = (async function () {
    var ns = find(); if (ns) return ns;
    return window.dsLoad(SRC.map(function (s) { return base + "components/" + s + ".jsx"; }), SRC.map(function (s) { return s.split("/")[1]; }));
  })();
})();
