var db = [
	{
		name: 'AJS37 Viggen',
		type: 'airborne',
		frequency: 1000,
		playDuration: 500,
		pauseDuration: 1200
	},
	{
		name: 'E-2D',
		type: 'airborne',
		frequency: 300,
		playDuration: 500,
		pauseDuration: 5200
	},
	{
		name: 'E-3A',
		type: 'airborne',
		frequency: 300,
		playDuration: 1000,
		pauseDuration: 5200
	},
	{
		name: 'A-50',
		type: 'airborne',
		frequency: 200,
		playDuration: 1000,
		pauseDuration: 5200
	},
	{
		name: 'MiG-21bis - Emitter 1',
		type: 'airborne',
		frequency: 1000,
		playDuration: 500,
		pauseDuration: 1200
	},
	{
		name: 'MiG-21bis - Emitter 2',
		type: 'airborne',
		frequency: 3400,
		playDuration: 200,
		pauseDuration: 500
	},
	{
		name: 'MiG-21bis - Emitter 3',
		type: 'airborne',
		frequency: 5400,
		playDuration: 200,
		pauseDuration: 500
	},
	{
		name: 'MiG-29S - Emitter 1',
		type: 'airborne',
		frequency: 1000,
		playDuration: 500,
		pauseDuration: 1200
	},
	{
		name: 'MiG-29S - Emitter 2',
		type: 'airborne',
		frequency: 5400,
		playDuration: 200,
		pauseDuration: 500
	},
	{
		name: 'MiG-29S - Emitter 3',
		type: 'airborne',
		frequency: 3400,
		playDuration: 200,
		pauseDuration: 500
	},
	{
		name: 'Su-27 - Emitter 1',
		type: 'airborne',
		frequency: 1000,
		playDuration: 500,
		pauseDuration: 1200
	},
	{
		name: 'Su 27 - Emitter 2',
		type: 'airborne',
		frequency: 5400,
		playDuration: 200,
		pauseDuration: 500
	},
	{
		name: 'Su 27 - Emitter 3',
		type: 'airborne',
		frequency: 3400,
		playDuration: 200,
		pauseDuration: 500
	},
	{
		name: 'F-15C - Emitter 1',
		type: 'airborne',
		frequency: 900,
		playDuration: 500,
		pauseDuration: 1200
	},
	{
		name: 'F-15C - Emitter 2',
		type: 'airborne',
		frequency: 1200,
		playDuration: 200,
		pauseDuration: 500
	},
	{
		name: 'F-15C - Emitter 3',
		type: 'airborne',
		frequency: 5900,
		playDuration: 200,
		pauseDuration: 500
	},
	{
		name: 'Mirage-2000C - Emitter 1',
		type: 'airborne',
		frequency: 1000,
		playDuration: 500,
		pauseDuration: 1200
	},
	{
		name: 'Mirage-2000C - Emitter 2',
		type: 'airborne',
		frequency: 5400,
		playDuration: 200,
		pauseDuration: 500
	},
	{
		name: 'Mirage-2000C - Emitter 3',
		type: 'airborne',
		frequency: 3400,
		playDuration: 200,
		pauseDuration: 500
	},
	{
		name: 'Kub - SA-6 - Search',
		type: 'ground',
		frequency: 967,
		playDuration: 1000,
		pauseDuration: 2000
	},
	{
		name: 'Kub - SA-6 - Tracking',
		type: 'ground',
		frequency: 1763,
		playDuration: 100,
		pauseDuration: 100
	},
	{
		name: 'Buk - SA-11 - Search A',
		type: 'ground',
		frequency: 697,
		playDuration: 1000,
		pauseDuration: 2000
	},
	{
		name: 'Buk - SA-11 - Search B',
		type: 'ground',
		frequency: 1763,
		playDuration: 1000, /* 0.2 */
		pauseDuration: 2000 /* -0.1 */
	},
	{
		name: 'Buk - SA-11 - Tracking',
		type: 'ground',
		frequency: 2998,
		playDuration: 100,
		pauseDuration: 100
	},
	{
		name: 'S-125 - SA-3 - Emitter 1',
		type: 'ground',
		frequency: 447,
		playDuration: 1000,
		pauseDuration: 2000
	},
	{
		name: 'S-125 - SA-3 - Emitter 2',
		type: 'ground',
		frequency: 697,
		playDuration: 1000,
		pauseDuration: 2000
	},
	{
		name: 'Tunguska - SA-19 - Search',
		type: 'ground',
		frequency: 4836,
		playDuration: 1000,
		pauseDuration: 2000
	},
	{
		name: 'Tunguska - SA-19 - Tracking',
		type: 'ground',
		frequency: 6520,
		playDuration: 100,
		pauseDuration: 100
	},
	{
		name: 'Tor - SA-15 - Emitter 1',
		type: 'ground',
		frequency: 5553,
		playDuration: 100,
		pauseDuration: 100
	},
	{
		name: 'Tor - SA-15 - Emitter 2',
		type: 'ground',
		frequency: 3844,
		playDuration: 1000,
		pauseDuration: 2000
	},
	{
		name: 'S-300PS - SA-10 - SR 5N66M',
		type: 'ground',
		frequency: 1110,
		playDuration: 1000,
		pauseDuration: 2000
	},
	{
		name: 'S-300PS - SA-10 - SR 64H6E',
		type: 'ground',
		frequency: 447,
		playDuration: 1000,
		pauseDuration: 2000
	},
	{
		name: 'S-300PS - SA-10 - Tracking',
		type: 'ground',
		frequency: 856,
		playDuration: 100,
		pauseDuration: 100
	},
	{
		name: 'Osa - SA-8 - Tracking',
		type: 'ground',
		frequency: 2800,
		playDuration: 500,
		pauseDuration: 1500
	},
	{
		name: 'ZSU-24-4 Shilka - Tracking',
		type: 'ground',
		frequency: 100,
		playDuration: 100,
		pauseDuration: 100
	},
	{
		name: 'Hawk - SR AN/MPQ-55',
		type: 'ground',
		frequency: 967,
		playDuration: 1000,
		pauseDuration: 2000
	},
	{
		name: 'Hawk - SR AN/MPQ-50',
		type: 'ground',
		frequency: 447,
		playDuration: 1000,
		pauseDuration: 2000
	},
	{
		name: 'Hawk - Search',
		type: 'ground',
		frequency: 768,
		playDuration: 1000,
		pauseDuration: 2000
	},
	{
		name: 'Hawk - Tracking',
		type: 'ground',
		frequency: 1427,
		playDuration: 100,
		pauseDuration: 100
	},
	{
		name: 'Roland - EWR',
		type: 'ground',
		frequency: 1763,
		playDuration: 1000,
		pauseDuration: 2000
	},
	{
		name: 'Roland - Search',
		type: 'ground',
		frequency: 4836,
		playDuration: 1000,
		pauseDuration: 2000
	},
	{
		name: 'Roland - TR ADS',
		type: 'ground',
		frequency: 6520,
		playDuration: 100,
		pauseDuration: 100
	},
	{
		name: 'Vulcan - Tracking',
		type: 'ground',
		frequency: 100,
		playDuration: 100,
		pauseDuration: 100
	},
	{
		name: 'Gepard - Tracking',
		type: 'ground',
		frequency: 100,
		playDuration: 100,
		pauseDuration: 100
	},
	{
		name: 'Patriot - Search',
		type: 'ground',
		frequency: 447,
		playDuration: 1000,
		pauseDuration: 2000
	},
	{
		name: 'Patriot - Tracking',
		type: 'ground',
		frequency: 856,
		playDuration: 100,
		pauseDuration: 100
	},
	{
		name: 'EWR',
		type: 'ground',
		frequency: 400,
		playDuration: 1500,
		pauseDuration: 8500
	},
	{
		name: 'FFL 1124.4 Grisha - Search',
		type: 'naval',
		frequency: 3189,
		playDuration: 1000,
		pauseDuration: 2000
	},
	{
		name: 'FFL 1124.4 Grisha - Tracking',
		type: 'naval',
		frequency: 4836,
		playDuration: 100,
		pauseDuration: 100
	},
	{
		name: 'CV Admiral Kuznetsov - Search',
		type: 'naval',
		frequency: 3844,
		playDuration: 1000,
		pauseDuration: 2000
	},
	{
		name: 'CV Admiral Kuznetsov - Tracking',
		type: 'naval',
		frequency: 5553,
		playDuration: 100,
		pauseDuration: 100
	},
	{
		name: 'FSG 1241.1MP Molniya - Search',
		type: 'naval',
		frequency: 7893,
		playDuration: 1000,
		pauseDuration: 2000
	},
	{
		name: 'FSG 1241.1MP Molniya - Tracking',
		type: 'naval',
		frequency: 8822,
		playDuration: 100,
		pauseDuration: 100
	},
	{
		name: 'CG 1164 Moskva - Search',
		type: 'naval',
		frequency: 800,
		playDuration: 500,
		pauseDuration: 1000
	},
	{
		name: 'CG 1164 Moskva - Tracking',
		type: 'naval',
		frequency: 300,
		playDuration: 100,
		pauseDuration: 100
	},
	{
		name: 'FFG 11540 Neustrashimy - Search',
		type: 'naval',
		frequency: 3844,
		playDuration: 1000,
		pauseDuration: 2000
	},
	{
		name: 'FFG 11540 Neustrashimy - Tracking',
		type: 'naval',
		frequency: 5553,
		playDuration: 100,
		pauseDuration: 100
	},
	{
		name: 'CGN 1144.2 Pyotr Velikiy - Search',
		type: 'naval',
		frequency: 379,
		playDuration: 900,
		pauseDuration: 2000
	},
	{
		name: 'CGN 1144.2 Pyotr Velikiy - Tracking',
		type: 'naval',
		frequency: 731,
		playDuration: 100,
		pauseDuration: 100
	},
	{
		name: 'FF 1135M Rezky - Search',
		type: 'naval',
		frequency: 3189,
		playDuration: 1000,
		pauseDuration: 2000
	},
	{
		name: 'FF 1135M Rezky - Tracking',
		type: 'naval',
		frequency: 4836,
		playDuration: 100,
		pauseDuration: 100
	},
	{
		name: 'CG-60 Normandy - Search',
		type: 'naval',
		frequency: 697,
		playDuration: 900,
		pauseDuration: 2000
	},
	{
		name: 'CG-60 Normandy - Tracking',
		type: 'naval',
		frequency: 1303,
		playDuration: 100,
		pauseDuration: 100
	},
	{
		name: 'FFG-7CL Oliver Hazzard Perry - Search',
		type: 'naval',
		frequency: 697,
		playDuration: 900,
		pauseDuration: 2000
	},
	{
		name: 'FFG-7CL Oliver Hazzard Perry - Tracking',
		type: 'naval',
		frequency: 1303,
		playDuration: 100,
		pauseDuration: 100
	},
	{
		name: 'CVN-70 Carl Vinson - Search',
		type: 'naval',
		frequency: 3331,
		playDuration: 1000,
		pauseDuration: 2000
	},
	{
		name: 'CVN-70 Carl Vinson - Tracking',
		type: 'naval',
		frequency: 4998,
		playDuration: 100,
		pauseDuration: 100
	}
];

var volume = 0.75;

$(document).ready(function() {

	$("#volume-control").slider({
		max: 100,
		min: 0,
		value: volume * 100,
		slide: function(event, ui) {
			volume = ui.value / 100;
			for(var key in db) {
				db[key].pattern.tone.mul = volume;
			}
		}
	});

	$("#prf-highlight").bind("keyup", function() {

		var val = parseInt($(this).val());

		for(var key in db) {
			if(db[key].frequency == val) {
				db[key].pattern.setSelected(true);
				//$("#pattern"+key+"Row").css("background-color", "lightblue");
			}
			else {
				db[key].pattern.setSelected(false);
				//$("#pattern"+key+"Row").css("background-color", "transparent");
			}
		}
	});

	for(var key in db) {
		db[key].id = key;
		db[key].pattern = new Pattern(db[key]);

		var playBtnHtml = "<input id=\"pattern"+key+"Play\" type=\"button\" value=\"Play\" class=\"play-button\" />";
		var infoHtml = "<div class=\"emitterInfoBox\">";
		infoHtml += "PRF Freq: "+db[key].frequency+"<br />";
		infoHtml += "Emission length: "+msToS(db[key].playDuration)+"s<br />";
		infoHtml += "Emission pause: "+msToS(db[key].pauseDuration)+"s<br />";
		infoHtml += "</div>";
		var html = "<li id=\"pattern"+key+"Row\">"+playBtnHtml+" <span class=\"emitterName\">"+db[key].name+"</span>"+infoHtml+"</li>";

		if(db[key].type == "airborne") {
			$("#airborne-pattern-list-container").append(html);
		}
		if(db[key].type == "ground") {
			$("#ground-pattern-list-container").append(html);
		}
		if(db[key].type == "naval") {
			$("#naval-pattern-list-container").append(html);
		}
		

		db[key].pattern.bindKeys();
	}

});

function msToS(ms) {
	return ms / 1000;
}

function Pattern(options) {

	var self = this;
	this.id = options.id;
	this.name = options.name;
	this.frequency = options.frequency;
	this.playDuration = options.playDuration;
	this.pauseDuration = options.pauseDuration;
	this.repeat = options.repeat;
	this.status = "Stopped";
	this.selected = false;
	this.tone = T("square", {
			freq: this.frequency,
			mul: volume
		});

	this.setDefaultBackground = function() {
		if(self.selected) {
			$("#pattern"+self.id+"Row").css("background-color", "lightblue");
		}
		else {
			$("#pattern"+self.id+"Row").css("background-color", "transparent");
		}
	}

	this.setSelected = function(selected) {
		this.selected = selected;
		this.setDefaultBackground();
	}

	this.play = function() {
		this.status = "Playing";
		this.tone.play();

		$("#pattern"+this.id+"Row").css("background-color", "orange");

		setTimeout(function() {
			self.tone.pause();
			self.setDefaultBackground();
			

			setTimeout(function() {
				if(self.status == "Playing") {
					self.play();
				}
			}, self.pauseDuration);

		}, self.playDuration);
		
	}

	this.stop = function() {
		this.status = "Stopped";
	}

	this.bindKeys = function() {
		$("#pattern"+self.id+"Play").bind("click", function() {
			if($(this).val() == "Play") {
				self.play();
				$(this).css("background-color", "orange");
				$(this).val("Stop");
			}
			else {
				self.stop();
				$(this).css("background-color", "white");
				$(this).val("Play");
			}
		});

		$("#pattern"+self.id+"Row .emitterName").bind("click", function() {
			$("#pattern"+self.id+"Row .emitterInfoBox").toggle(100);
			
		});
	}
}