function initfirework() {

// 创建 Canvas 元素
    var div = document.createElement("canvas");
    div.className = "fireworks";
    div.style = "position:fixed;left:0;top:0;z-index:99999999;pointer-events:none;";

    // 将 canvas 添加到 body
    document.body.appendChild(div);
    // 初始化变量

    function updateCoords(e) {
        pointerX = (e.clientX || e.touches[0].clientX) - canvasEl.getBoundingClientRect().left,
            pointerY = e.clientY || e.touches[0].clientY - canvasEl.getBoundingClientRect().top
    }
    function setParticuleDirection(e) {
        var t = anime.random(0, 360) * Math.PI / 180
            , a = anime.random(50, 180)
            , n = [-1, 1][anime.random(0, 1)] * a;
        return {
            x: e.x + n * Math.cos(t),
            y: e.y + n * Math.sin(t)
        }
    }
    function createParticule(e, t) {
        var a = {};
        return a.x = e,
            a.y = t,
            a.color = colors[anime.random(0, colors.length - 1)],
            a.radius = anime.random(16, 32),
            a.endPos = setParticuleDirection(a),
            a.draw = function () {
                    ctx.lineWidth = a.lineWidth,
                    ctx.strokeStyle = a.color,
                    ctx.stroke(),
                    ctx.globalAlpha = 1
            }
            ,
            a
    }
            y: function (e) {
                return e.endPos.y
            },
            radius: .1,
            duration: anime.random(1200, 1800),
            easing: "easeOutExpo",
            update: renderParticule
        }).add({
    }
    function debounce(fn, delay) {
        var timer
        return function () {
            var context = this
            var args = arguments
            clearTimeout(timer)
            timer = setTimeout(function () {
                fn.apply(context, args)
            }, delay)
        }
    }
	// 创建一个 div 元素
	var div = document.createElement('canvas');
	div.className = 'fireworks';
	div.style="position:fixed;left:0;top:0;z-index:99999999;pointer-events:none;"

	// 将 div 添加到 body 的末尾
	document.body.appendChild(div);

