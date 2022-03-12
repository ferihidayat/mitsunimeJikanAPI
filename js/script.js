// NEON EFFECT
$(document).ready(function () {
	LaterSeason();
	$('#neonthis').novacancy({
		'reblinkProbability': 0.4,
		'blinkMin': 0.2,
		'blinkMax': 0.6,
		'loopMin': 1,
		'loopMax': 2,
		'color': 'red',
		'glow': ['0 0 80px red', '0 0 30px red', '0 0 6px red'],
		'off': 2,
		'blink': 0,
		'autoOn': true
	});
});

! function (n) {
	"use strict";
	n.fn.novacancyID = void 0 === n.fn.novacancyID ? 0 : n.fn.novacancyID, n.fn.novacancy = function (i) {
		return n.each(this, function (o, t) {
			new function (i, o) {
				var t, a, l, e, c, r = this,
					s = n(i);
				if (this.repeat = function () {
						return !!s[0].novacancy || (s[0].novacancy = !0, !1)
					}, this.setAppearance = function () {
						var i = ++n.fn.novacancyID,
							o = '[novacancy-id="' + i + '"]';
						s.attr("novacancy-id", i), r.addCSS(o)
					}, this.addCSS = function (i) {
						var o = r.css(i),
							t = n("<style>" + o + "</style>");
						n("body").append(t)
					}, this.css = function (n) {
						var i = "",
							o = "",
							a = "";
						null !== t.color && (i += "color: " + t.color + ";", o += "color: " + t.color + "; opacity: 0.3;"), null !== t.glow && (i += a += "text-shadow: " + t.glow.toString() + ";");
						var l = "";
						return l += n + " .novacancy." + t.classOn + " { " + i + " }\n", l += n + " .novacancy." + t.classOff + " { " + o + " }\n"
					}, this.rand = function (n, i) {
						return Math.floor(Math.random() * (i - n + 1) + n)
					}, this.blink = function (n) {
						r.off(n), n[0].blinking = !0, setTimeout(function () {
							r.on(n), r.reblink(n)
						}, r.rand(t.blinkMin, t.blinkMax))
					}, this.reblink = function (n) {
						setTimeout(function () {
							r.rand(1, 100) <= t.reblinkProbability ? r.blink(n) : n[0].blinking = !1
						}, r.rand(t.blinkMin, t.blinkMax))
					}, this.on = function (n) {
						n.removeClass(t.classOff).addClass(t.classOn)
					}, this.off = function (n) {
						n.removeClass(t.classOn).addClass(t.classOff)
					}, this.buildHTML = function () {
						var n = this.htmlString;
						s.html(n)
					}, this.htmlString = function () {
						var i = "";
						return n.each(s.contents(), function (o, a) {
							if (3 == a.nodeType) {
								var l = a.nodeValue.split("");
								n.each(l, function (n, o) {
									i += "<" + t.element + ' class="novacancy ' + t.classOn + '">' + o + "</" + t.element + ">"
								})
							} else i += a.outerHTML
						}), i
					}, this.newArray = function () {
						var i, o = e.length,
							a = r.randomArray(o),
							l = t.off,
							c = t.blink;
						return l = Math.min(l, o), l = Math.max(0, l), i = a.splice(0, l), n.each(i, function (n, i) {
							r.off(e.eq(i))
						}), c = 0 === c ? o : c, c = Math.min(c, o - l), c = Math.max(0, c), a.splice(0, c)
					}, this.randomArray = function (n) {
						var i, o, t, a = [];
						for (i = 0; i < n; ++i) a[i] = i;
						for (i = 0; i < n; ++i) t = a[o = parseInt(Math.random() * n, 10)], a[o] = a[i], a[i] = t;
						return a
					}, this.loop = function () {
						var n, i;
						a && 0 !== c.length && (n = c[r.rand(0, c.length - 1)], (i = e.eq(n))[0].blinking || r.blink(i), l = setTimeout(function () {
							r.loop()
						}, r.rand(t.loopMin, t.loopMax)))
					}, this.blinkOn = function () {
						a || (a = !0, l = setTimeout(function () {
							r.loop()
						}, r.rand(t.loopMin, t.loopMax)))
					}, this.blinkOff = function () {
						a && (a = !1, clearTimeout(l))
					}, this.bindEvents = function () {
						s.on("blinkOn", function (n) {
							r.blinkOn()
						}), s.on("blinkOff", function (n) {
							r.blinkOff()
						})
					}, r.repeat()) return !0;
				t = o, a = !1, l = 0, r.buildHTML(), e = s.find(t.element + ".novacancy"), c = r.newArray(), r.bindEvents(), r.setAppearance(), t.autoOn && r.blinkOn()
			}(this, function (i) {
				var o = n.extend({
					reblinkProbability: 1 / 3,
					blinkMin: .01,
					blinkMax: .5,
					loopMin: .5,
					loopMax: 2,
					color: "ORANGE",
					glow: ["0 0 80px Orange", "0 0 30px Red", "0 0 6px Yellow"],
					off: 0,
					blink: 0,
					classOn: "on",
					classOff: "off",
					element: "data",
					autoOn: !0
				}, i);
				return o.reblinkProbability *= 100, o.blinkMin *= 1e3, o.blinkMax *= 1e3, o.loopMin *= 1e3, o.loopMax *= 1e3, o
			}(i))
		})
	}
}(jQuery);

// TOOP ANIME
function TopAnime(subtype) {
	// $('#content').html(`
	// 	<h5 class="text-dark">top `+subtype+`</h5>
	// 	<hr>
	// 	`);
	$.ajax({
		url: 'https://api.jikan.moe/v3/top/anime/1/' + subtype,
		type: 'get',
		dataType: 'json',
		beforeSend: function () {
			$(".spinner-border").css("display", "block");
		},
		success: function (result) {
			$(".spinner-border").css("display", "none");
			let anime = result.top;
			console.log(anime);

			$.each(anime, function (i, data) {
				$('#content').append(`
					 <div class="col anime">
                        <a style="--bs-aspect-ratio: 140%" class="ratio d-block rounded-3 overflow-hidden"
                            href="` + data.url + `" target="_blank">
                            <img src="` + data.image_url + `"
                                class="w-100 h-100 object-fit-cover position-absolute top-0 img-anime" alt=""
                                loading="lazy">
                            <div class="img-shadow"></div>
                            <div class="w-100 px-4 text-center d-flex h-100 justify-content-center align-items-end">
                                <div class="row">
								<small class="text-white mb-1">#RANK ` + data.rank + `</small>
                                    <h5 class="text-white mb-2">` + data.title + `</h5>
									<h6 class="card-subtitle text-white mb-1>` + data.type + ` (` + data.episodes + ` Eps)</h6>
			                      <h6 class="card-subtitle text-light mb-1>` + data.start_date + ` - ` + data.end_date + `</h6>
                                    <small class="text-white mb-2">` + data.members + ` Member</small>
                                </div>
                            </div>
                        </a>
                    </div>
						`);
			});
		}
	});
}

// function progress_bar_process(percentage, timer) {
// 	$('.progress-bar').css('width', percentage + '%');
// 	if (percentage > 100) {
// 		clearInterval(timer);
// 		$('#sample_form')[0].reset();
// 		$('#process').css('display', 'none');
// 		$('.progress-bar').css('width', '0%');
// 		$('#save').attr('disabled', false);
// 		$('#success_message').html("<div class='alert alert-success'>Data Saved</div>");
// 		setTimeout(function () {
// 			$('#success_message').html('');
// 		}, 5000);
// 	}
// }

// LATER SEASON
function LaterSeason() {
	// $('#content').html(`
	// 	<h4 class="text-dark">Later Season</h4>
	// 	<hr>
	// 	`);

	$.ajax({
		url: 'https://api.jikan.moe/v3/season/later',
		type: 'get',
		dataType: 'json',
		beforeSend: function () {
			$(".spinner-border").css("display", "block");
		},
		success: function (result) {
			$(".spinner-border").css("display", "none");
			let anime = result.anime;
			console.log(anime);
			$.each(anime, function (i, data) {
				$('#content').append(`	
                    <div class="col anime">
                        <a style="--bs-aspect-ratio: 140%" class="ratio d-block rounded-3 overflow-hidden"
                            href="` + data.url + `" target="_blank">
                            <img src="` + data.image_url + `"
                                class="w-100 h-100 object-fit-cover position-absolute top-0 img-anime" alt=""
                                loading="lazy">
                            <div class="img-shadow"></div>
                            <div class="w-100 px-4 text-center d-flex h-100 justify-content-center align-items-end">
                                <div class="row">
                                    <h5 class="text-white mb-2">` + data.title + `</h5>
                                    <small class="text-white mb-2">Source : ` + data.source + `</small>
                                </div>
                            </div>

                        </a>
                    </div>          
						`);
			});
		},

	});
}



//SCHEDULE ANIME
function ScheduleAnime(subtype) {
	// $('#content').html(`
	// 	<h2>`+subtype+`</h2>
	// 	<hr>
	// 	`);
	$.ajax({
		url: 'https://api.jikan.moe/v3/schedule/' + subtype,
		type: 'get',
		dataType: 'json',
		beforeSend: function () {
			$(".spinner-border").css("display", "block");
		},
		success: function (result) {
			$(".spinner-border").css("display", "none");
			let anime;
			if (subtype === "sunday") {
				anime = result.sunday;
			} else if (subtype === "monday") {
				anime = result.monday;
			} else if (subtype === "tuesday") {
				anime = result.tuesday;
			} else if (subtype === "wednesday") {
				anime = result.wednesday;
			} else if (subtype === "thursday") {
				anime = result.thursday;
			} else if (subtype === "friday") {
				anime = result.friday;
			} else if (subtype === "saturday") {
				anime = result.saturday;
			}
			console.log(anime);

			$.each(anime, function (i, data) {
				$('#content').append(`	
					<div class="col anime">
                        <a style="--bs-aspect-ratio: 140%" class="ratio d-block rounded-3 overflow-hidden"
                            href="` + data.url + `" target="_blank">
                            <img src="` + data.image_url + `"
                                class="w-100 h-100 object-fit-cover position-absolute top-0 img-anime" alt=""
                                loading="lazy">
                            <div class="img-shadow"></div>
                            <div class="w-100 px-4 text-center d-flex h-100 justify-content-center align-items-end">
                                <div class="row">
								
                                    <h5 class="text-white mb-2">` + data.title + `</h5>
									<h6 class="card-subtitle text-white mb-1>Type &nbsp;&nbsp;: ` + data.type + `</h6>
			                      <h6 class="card-subtitle text-light mb-1>Score : ` + data.score + `</h6>
                                    <small class="text-white mb-2">` + data.synopsis.substr(0, 100) + '.....' + `</small>
                                    <small class="text-white mb-2">` + data.members + ` Member</small>
                                </div>
                            </div>
                        </a>
                    </div>			 	             
						`);
			});
		}
	});
}


// DROPDOWN
$('.dropdown-item').on('click', function () {
	let kategori = $(this).html();

	if (kategori == "Top Upcoming Anime") {
		$('#content').html('');
		$('.home').removeClass('home');
		$('.neon-text').html('');

		subtype = 'upcoming';
		TopAnime(subtype);
	}

	if (kategori == "Top Airing Anime") {
		$('#content').html('');
		$('.home').removeClass('home');
		$('.neon-text').html('');

		subtype = 'airing';
		TopAnime(subtype);
	}

	if (kategori == "Most Popular Anime") {
		$('#content').html('');
		$('.home').removeClass('home');
		$('.neon-text').html('');

		subtype = 'bypopularity';
		TopAnime(subtype);
	}

	// SCHEDULE
	if (kategori == "Sunday") {
		$('#content').html('');
		$('.home').removeClass('home');
		$('.neon-text').html('');

		subtype = 'sunday';
		ScheduleAnime(subtype);
	}

	if (kategori == "Monday") {
		$('#content').html('');
		$('.home').removeClass('home');
		$('.neon-text').html('');

		subtype = 'monday';
		ScheduleAnime(subtype);
	}

	if (kategori == "Tuesday") {
		$('#content').html('');
		$('.home').removeClass('home');
		$('.neon-text').html('');

		subtype = 'tuesday';
		ScheduleAnime(subtype);
	}

	if (kategori == "Wednesday") {
		$('#content').html('');
		$('.home').removeClass('home');
		$('.neon-text').html('');

		subtype = 'wednesday';
		ScheduleAnime(subtype);
	}

	if (kategori == "Thursday") {
		$('#content').html('');
		$('.home').removeClass('home');
		$('.neon-text').html('');

		subtype = 'thursday';
		ScheduleAnime(subtype);
	}

	if (kategori == "Friday") {
		$('#content').html('');
		$('.home').removeClass('home');
		$('.neon-text').html('');

		subtype = 'friday';
		ScheduleAnime(subtype);
	}

	if (kategori == "Saturday") {
		$('#content').html('');
		$('.home').removeClass('home');
		$('.neon-text').html('');

		subtype = 'saturday';
		ScheduleAnime(subtype);
	}
})


// FUNGSI BARU
$('.nav-link').on('click', function () {
	$('.nav-link').removeClass('active');
	$(this).addClass('active');

	let kategori = $(this).html();
	if (kategori == "Home") {
		$('.home').html(`
		
			`);
	}

	if (kategori == "Later Season") {
		$('#content').html('');
		$('.home').removeClass('home');
		$('.neon-text').html('');
		LaterSeason();
	}


});