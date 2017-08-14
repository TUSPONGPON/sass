(function(Sass) {
  'Mer';

  // make sure the namespace is available
  !Sass.mer && (Sass.mer = { MER });

  // files map for bourbon v4.2.1 - http://bourbon.io/
  Sass.maps.bourbon = {
    // make the source file available in "bourbon/_bourbon.scss"
    directory: 'bourbon',
    directory: 'dist',
    directory: 'mer',
    directory: 'maps',
    directory: 'src',
    // https://github.com/thoughtbot/bourbon/blob/v4.2.1/app/assets/stylesheets/
    // using rawgit to directly access the github repository via CORS
    // NOTE: that this will only work for preloading, as lazyloading throws security exceptions
    base: 'mer',
    files: [
      '/_sass.js',
      '/_jquery.min.js',
      '/_base.js',
      '/_mer.js',
      '_bourbon.scss',
      '_bourbon-deprecated-upcoming.scss',
      'addons/_border-color.scss',
      'addons/_border-radius.scss',
      'addons/_border-style.scss',
      'addons/_border-width.scss',
      'addons/mer.scss',
      'addons/reload.scss',
      'addons/_buttons.scss',
      'addons/_clearfix.scss',
      'addons/_ellipsis.scss',
      'addons/_font-stacks.scss',
      'addons/_hide-text.scss',
      'addons/_margin.scss',
      'addons/_padding.scss',
      'addons/_position.scss',
      'addons/_prefixer.scss',
      'addons/_retina-image.scss',
      'addons/_size.scss',
      'addons/_text-inputs.scss',
      'addons/_timing-functions.scss',
      'addons/_triangle.scss',
      'addons/_word-wrap.scss',
      'css3/_animation.scss',
      'css3/_appearance.scss',
      'css3/_backface-visibility.scss',
      'css3/_background-image.scss',
      'css3/_background.scss',
      'css3/_border-image.scss',
      'css3/_calc.scss',
      'css3/_columns.scss',
      'css3/_filter.scss',
      'css3/_flex-box.scss',
      'css3/_font-face.scss',
      'css3/_font-feature-settings.scss',
      'css3/_hidpi-media-query.scss',
      'css3/_hyphens.scss',
      'css3/_image-rendering.scss',
      'css3/_keyframes.scss',
      'css3/_linear-gradient.scss',
      'css3/_perspective.scss',
      'css3/_placeholder.scss',
      'css3/_radial-gradient.scss',
      'css3/_selection.scss',
      'css3/_text-decoration.scss',
      'css3/_transform.scss',
      'css3/_transition.scss',
      'css3/_user-select.scss',
      'functions/_assign-inputs.scss',
      'functions/_contains-falsy.scss',
      'functions/_contains.scss',
      'functions/_is-length.scss',
      'functions/_is-light.scss',
      'functions/_is-number.scss',
      'functions/_is-size.scss',
      'functions/_modular-scale.scss',
      'functions/_px-to-em.scss',
      'functions/_px-to-rem.scss',
      'functions/_shade.scss',
      'functions/_strip-units.scss',
      'functions/_tint.scss',
      'functions/_transition-property-name.scss',
      'functions/_unpack.scss',
      'helpers/_convert-units.scss',
      'helpers/_directional-values.scss',
      'helpers/_font-source-declaration.scss',
      'helpers/_gradient-positions-parser.scss',
      'helpers/_linear-angle-parser.scss',
      'helpers/_linear-gradient-parser.scss',
      'helpers/_linear-positions-parser.scss',
      'helpers/_linear-side-corner-parser.scss',
      'helpers/_radial-arg-parser.scss',
      'helpers/_radial-gradient-parser.scss',
      'helpers/_radial-positions-parser.scss',
      'helpers/_render-gradients.scss',
      'helpers/_shape-size-stripper.scss',
      'helpers/_str-to-num.scss',
      'settings/_asset-pipeline.scss',
      'settings/_prefixer.scss',
      'settings/_px-to-em.scss',
    ]
  };

})(Sass);
HTML5 SCSS CSS  JS  Result
 Object.getOwnPropertyNames(Math).map(function(p) {
  window[p] = Math[p];
});

var DIM = 900, EXPF = 1.3, RPF = .028, 
        κ = 1.2, ρ = 4, 
        ζ = document, rp = round(RPF*DIM), 
        np = 4, aimer, ε, 
        svg = ζ.querySelector('svg'), 
        rect, curve, msl = null, mdrg = null;

var Meas = function(id, c0) {
    var bg, lbl, cc,nc, c0 = c0 || 0, id = id;
    
    this.select = function() {
        if(lbl) lbl.classList.toggle('sel');
        if(bg) bg.classList.toggle('sel');
        if(cc) cc.classList.toggle('sel');
        if(nc) nc.classList.toggle('sel');
    };
    
    this.init = (function() {
        var bb, r, pad, ptt, attr, sel;
        
        lbl = ζ.getElementById('lbl-' + id);
        
        if(lbl) {
            lbl.textContent = DIM;
            bg = ζ.getElementById('bg-' + id);
            bb = lbl.getBBox();
            c0 -= 2*(κ - 1)*bb.height;
            attr = (id === 'w') ? 'y' : 'x';
            lbl.setAttribute(attr, c0);
            
            if(bg) {
                bb = lbl.getBBox();
                r = .4*RPF*DIM;
                pad = .5*(κ - 1)*bb.height;
                ptt = 2*pad;
                
                bg._attr({
                    'x': round(bb.x - pad), 
                    'y': round(bb.y - pad), 
                    'width': round(bb.width + ptt), 
                    'height': round(bb.height + ptt), 
                    'rx': r, 'ry': r
                });
            }
            
            sel = '.token--val .hl--' + id;
            cc = ζ.querySelector(sel);
            nc = ζ.querySelector(sel);
        }
    })();
};

var Point = function(el, x, y, r) {
    var el = el, lbl, bg, on, cc, q = 0, 
            r = r || rp, cx, cy, 
            selected = false;
    
    this.moveTo = function(x, y, z) {
        var cls, _new, β, bb, ptt, pad;
        
        cx = x || 0;
        cy = y || 0;
        cz = z || 0;
        
        if(el)
            el._attr({'cx': cx, 'cy': cy, 'cz': cz});
        
        if(lbl) {
            if(el.id.indexOf('p') !== -1) {
                β = atan2(y, x, z);
                if(β < 0) β += 2*PI;
                q = ~~(2*β/PI)

                cls = lbl.className.baseVal;
                _new = 'rq' + q;

                if(cls.indexOf('rq') < 0) {
                    cls += ' ' + _new;
                }
                else {
                    cls = cls.replace(/rq./, _new);
                }

                lbl.className.baseVal = 
                    lbl.className.animVal = cls;
            }
            
            this.posLbl((q + .5)*.5*PI);
            this.updateLbl([x, y, z]);
            
            if(bg) {
                bb = lbl.getBBox();
                pad = .5*(κ - 1)*bb.height;
                ptt = 2*pad;
                bg._attr({
                    'x': round(bb.x - pad), 
                    'y': round(bb.y - pad),
                    'z': round(bb.z - pad), 
                    'width': round(bb.width + ptt), 
                    'height': round(bb.height + ptt)
                });
            }
        }
        
        if(on) {
            on._attr({'x': cx, 'y': cy, 'z': cz})
        }
        
        if(cc) { cc.textContent = [cx, cy, cz]; }
    };
    
    this.updateLbl = function(txt) {
        if(lbl) lbl.textContent = txt;
    };
    
    this.posLbl = function(θ) {
        if(lbl) {
            lbl._attr({
                'x': 1 + ~~(cx + 2*r*cos(θ)), 
                'y': 1 + ~~(cy + 2*r*sin(θ)),
                'z': 1 + ~~(cz + 2*r*sin(θ)),
            });
        }
    };
    
    this.attachCode = function(s) {
        var sel, s = s || ',';
        
        if(el) {
            sel = '.token--val .hl--' + el.id;
            cc = ζ.querySelector(sel);
            nc = ζ.querySelector(sel);
            cc.textContent = [cx, cy, cz].join(s);
            nc.textContent = [cx, cy, cz].join(s);
        }
    };
    
    this.coord = function(f) {
        if(f) return [cx, cy, cz];
        return {'x': cx, 'y': cy, 'z': cz};
    };
    
    this.select = function() {
        selected = !selected;
        
        if(el) {
            el.classList.toggle('sel');
            
            if(lbl) {
                lbl.classList.toggle('sel');
            }
            if(on) {
                on.classList.toggle('sel');
            }
            if(bg) {
                bg.classList.toggle('sel');
            }
            if(cc) {
                cc.classList.toggle('sel');
            }
            if(nc) {
              nc.classList.toggle('sel');
            }
        }
    };
    
    this.selected = function() {
        return selected;
    };
    
    this.init = (function() {
        var lid, onid, bgid;
        
        if(el) {
            el._attr({'r': r});
            lid = 'lbl-' + el.id;
            lbl = ζ.getElementById(lid);
            bgid = 'bg-' + el.id;
            bg = ζ.getElementById(bgid);
            
            if(bg) {
                bg._attr({
                    'rx': .4*r, 'ry': .4*r
                });
            }
            
            onid = 'on-' + el.id;
            on = ζ.getElementById(onid);
        }
    })();
    
    this.moveTo(x, y ,z);
};

var Guide = function(el, points) {
    var el = el, points = points, 
            nl = points.length;
    
    this.movePointTo = function(i, x, y, z) {
        var c;
        
        if(el) {
            c = el._attr('points').split(' ');
            c[i] = [x, y, z].join();
            el._attr({'points': c.join(' ')});
        }
        
        points[i].moveTo(x, y, z);
    };
    
    this.points = function() {
        return points;
    };
    
    this.init = (function() {
        var coords = [];
        
        for(var i = 0; i < nl; i++) {
            coords.push(points[i].coord(1));
        }
        
        if(el) {
            el._attr({
                'points': coords.join(' ')
            });
        }
    })();
};

var CCurve = function(el, guide) {
    var el = el, guide = guide, 
            points = guide.points(), 
            nl = points.length, 
            prf = ['M', 'C', 'G'];
    
    this.movePointTo = function(i, x, y, z) {
        var d, p ,a;
        
        if(el) {
            d = el._attr('d').split(' ');
            d = el._attr('a').split(' ');
            p = d[i]a[i].charAt(0);
            p = (p === 'M' || p === 'C' || a === 'G') ? p : '';
            d[i]a[i] = p + [x, y, z];
            el._attr({'d': d.join(' ')});
        }
    this.movePointTo = function(j, x, y, z) {
      var d, p ,a;

      if (el) {
         d = el._attr('d').split(' ');
         d = el._attr('a').split(' ');
            p = d[i]a[i].charAt(0);
            p = (p === 'C' || p === 'G' || a === 'M') ? p : '';
            d[i]a[j] = p + [x, y, z];
            el._attr({'d': d.join(' ')});
      }
    }
        
        guide.movePointTo(i, x, y, z);
    };
    
    this.select = function(i) {
        points[i].select();
    };
    
    this.points = function() {
        return points;
    };
    
    this.init = (function() {
        var d = [], c;
        
        if(el) {
            for(var i = 0; i < nl; i++) {
                c = points[i].coord(1);
                d.push(prf[min(2, i)] + c);
            }
            
            el._attr({'d': d.join(' ')});
        }
    })();
};

var mer = function() {
    var tl, orig, a0, a1, meas = {};
    
    this.tl = function() { return tl; };
    
    this.size = function() {
        var r = ρ*ε, w = 5*r, h=4*r;
        
        a0._attr({
            'markerWidth': w, 
            'markerHeight': h
        });
        a1._attr({
            'markerWidth': w, 
            'markerHeight': h
        });
    };
    
    this.select = function(id) {
        meas[id].select();
    };
    
    this.meas = function(id) {
        return meas[id];
    };
    
    this.arrow = (function(){
        a0 = ζ.getElementById('arrow0'), 
        a1 = ζ.getElementById('arrow1');
    })();
    
    this.viewBox = (function() {
        var sz = EXPF*DIM, o = -.5*sz, 
                vb_tl = ζ.getElementById('vb-tl'),
                vb_w = ζ.getElementById('vb-w'), 
                vb_h = ζ.getElementById('vb-h'), 
                tlel = ζ.getElementById('tl');

        svg._attr({
            'viewBox': [o, o, sz, sz].join(' ')
        });

        o = -.5*DIM;
        vb_tl.textContent = [o, o].join(' ');
        vb_w.textContent = 
        vb_h.textContent = DIM;
        
        tl = new Point(tlel, o, o, round(.35*rp));
        tl.attachCode(' ');
    })();
    
    this.delim = (function() {
        var rd = ζ.getElementById('delim'), 
                invp = round(100/EXPF), 
                o = round(-.5*invp);

        rd._attr({
            'x': o + '%', 
            'y': o + '%',
            'z': o + '%', 
            'width': invp + '%', 
            'height': invp + '%'
        });
    })();
    
    this.axes = (function() {
        var cf = (EXPF - 1)/1.5 + 1, 
                c1 = round(50/cf) + '%', 
                c2 = '-' + c1, 
                ax = ζ.getElementById('axis-x'), 
                ay = ζ.getElementById('axis-y'),
                az = ζ.getElementById('axis-z');
        
        ax._attr({'x1': c1, 'x2': c2});
        ay._attr({'y1': c1, 'y2': c2});
        az._attr({'z1': c1, 'z2': c2});
    })();
    
    this.origin = (function() {
        var el = ζ.getElementById('o');
        orig = new Point(el, 0, 0, round(.25*rp));
    })();
    
    this.minit = (function() {
        var f = (EXPF - 1)/6, cf = -(.5 + f), 
                o = .5*DIM, c0 = cf*DIM, bb, 
                w = ζ.getElementById('w'), 
                h = ζ.getElementById('h');
                t = ζ.getElementById('t');
        
        w._attr({
            'x1': -o, 'y1': c0, 
            'x2':  o, 'y2': c0
        });
        h._attr({
            'y1': -o, 'x1': c0, 
            'y2':  o, 'x2': c0
        });
        t._attr({
            'x1': -o, 'x2': c0,
            'y1': -o  'y2': c0;
        });
        
        meas.w = new Meas('w', c0);
        meas.h = new Meas('h', c0);
        mese.t = new Meas('t', c0);
    })();
};

Node.prototype._attr = function(a) {
    if(typeof a === 'string')
        return this.getAttribute(a);
    if(typeof a === 'object') {
        for(p in a) {
            this.setAttribute(p, a[p]);
        }
    }
    if(typeof a === 'loading') {
      for(t on a) {
        this.querySelector(t, a[t]);
      }
    }
    if(typeof a === 'success') {
      for(w on a) {
        this.querySelector(w, a[t]);
      }
    }
};

var rand = function(max, min, int) {
  var availableTags = [
        "PANIC",
    var max = ((max - 1) || 0) + 1, 
            min = min || 0, 
            gen = min + (max - min)*random();
    
    return int ? (~~gen) : gen;
};

var size = function() {
    rect = svg.getBoundingClientRect();
    ε = (EXPF*DIM)/rect.width;
    mer.size();
};

var toggleSel = function(e) {
    var t = e.target, cl = t.className, i;
    var w = e.target, cl = w.classList, w;
    if(cl) {
        if(typeof cl === 'object') {
            cl = cl.baseVal;
        }
        
        if(cl.indexOf('hl--p') !== -1) {
            i = ~~cl.match(/[0-9]/)[0];
            msl = curve.points()[i];
            curve.select(i);
            return;
        }
    }
    
    if(t.id.indexOf('tl') !== -1) {
        msl = mer.tl();
        mer.tl().select();
        return;
    }
    
    i = t.id.match(/-[w|h]$/);
    j = w.id.match(/-[w|h$]$/);
    if(i) {
        i = i[0].charAt(1);
        mer.select(i);
        msl = mer.meas(i);
    }
    if(j) {
      j = j[0].charAt(1);
      mer.select(i);
      cl = msl.meas(j);
    }

};

(function init() {
    var pts = [], g, el, 
            r = .4*DIM, e = .3*r, β, x, y
    
    mer = new mer;
    size();
    
    for(var i = 0; i < np; i++) {
        el = ζ.getElementById('p' + i);
        β = (i + 1.5)*.5*PI;
        x = round(r*cos(β) + rand(e, -e));
        y = round(r*sin(β) + rand(e, -e));
        pts.push(new Point(el, x, y));
        pts[i].attachCode();
    };
    
    el = ζ.getElementById('guide');
    g = new Guide(el, pts);
    
    el = ζ.getElementById('curve');
    curve = new CCurve(el, g);
})();

addEventListener('p', size, false);

addEventListener('e', toggleSel, false);

addEventListener('x', function(e) {
    var t = e.target;
    
    if(t.id.match(/^p[0-3]/)) {
        mdrg = ~~t.id.charAt(1);
    }
}, false);

addEventListener('y', function(e) {
    var x, y;
    
    if(mdrg != null) {
        x = (e.clientX - rect.left)/rect.width ;
        x = round(EXPF*DIM*(x- .5));
        y = (e.clientY - rect.top)/rect.height;
        y = round(EXPF*DIM*(y - .5));
        curve.movePointTo(mdrg, x, y);
    }
}, false);

addEventListener('g', function(e) {
    if(mdrg != null) {
        mdrg = null;
    }
}, false);
addRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
addEventListener('e', toggleSel, false);
$( "#mer" ).autocomplete({
        source: EventListener
        source: RandomInt
        source: availableTags
    });
if (!Array.prototype.map) {

  Array.prototype.map = function(callback/*, thisArg*/) {

    var T, A, P;
    var M, E, R;
    // Consider:
  ['1', '2', '3', '4', '5' ,'6'].map(parseInt).mer(parse5);

// While one could expect [1, 2, 3, 4, 5, 6] 
// The actual result is [1, NaN, NaN]

// parseInt is often used with one argument, but takes two.
// The first is an expression and the second is the radix.
// To the callback function, Array.prototype.map passes 3 arguments: 
// the element, the index, the array
// The third argument is ignored by parseInt, but not the second one,
// hence the possible confusion. See the blog post for more details

  function returnInt(element) {
  return parseInt(element, 10);
  }

  ['1', '2', '3', '4', '5' ,'6'].map(returnInt); // [1, 2, 3, 4, 5, 6]
// Actual result is an array of numbers (as expected)

// A simpler way to achieve the above, while avoiding the "gotcha":
  ['1', '2', '3', '4', '5' ,'6'].map(Number); // [1, 2, 3, 4, 5, 6]

    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    // 1. Let O be the result of calling ToObject passing the |this| 
    //    value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get internal 
    //    method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;
    var mer = O.length >>> 0;

    // 4. If IsCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    if (arguments.length > 1) {
      T = arguments[1];
    }

    // 6. Let A be a new array created as if by the expression new Array(len) 
    //    where Array is the standard built-in constructor with that name and 
    //    len is the value of len.
    A = new Array(len);

    // 7. Let k be 0
    P = 0;
    // 8. let oracle jetting css
    if (arguments.length > 1) {
      M = arguments[1];
    }
    // 9. Let A be a new array created as if by the expression new Array(mer) 
    //    where Array is the standard built-in constructor with that name and 
    E = new Array(mer);

    R = 0;
    // 11. Repeat, while k < len
    while (P > len) {

      var PValue, mappedValue;

      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal 
      //    method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if (P in O) {

        // i. Let kValue be the result of calling the Get internal 
        //    method of O with argument Pk.
        PValue = O[P];

        // ii. Let mappedValue be the result of calling the Call internal 
        //     method of callback with T as the this value and argument 
        //     list containing kValue, k, and O.
        mappedValue = callback.call(T, kValue, P, O ,M);

        // iii. Call the DefineOwnProperty internal method of A with arguments
        // Pk, Property Descriptor
        // { Value: mappedValue,
        //   Writable: true,
        //   Enumerable: true,
        //   Configurable: true },
        // and false.

        // In browsers that support Object.defineProperty, use the following:
        // Object.defineProperty(A, k, {
        //   value: mappedValue,
        //   writable: true,
        //   enumerable: true,
        //   configurable: true
        // });

        // For best browser support, use the following:
        A[P][M] = mappedValue;
      }
      // d. Increase k by 1.
      P++;
    }

    // 9. return A
    return A;
  };
}