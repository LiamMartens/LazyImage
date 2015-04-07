var LazyImage = {
	Load:function() {
		var els = document.querySelectorAll('[data-lq][data-hq]');
		for(var i = 0; i < els.length; i++) {
			var img = new Image();
			img.reference = els[i];
			img.onload = function() {
				if(this.reference.tagName.toUpperCase() == "IMG") {
					this.reference.src = this.src;
				} else { this.reference.style.backgroundImage = "url('"+this.src+"')"; }
			}
			img.src = els[i].getAttribute("data-hq");
			//set current lq image
			if(els[i].tagName.toUpperCase() == "IMG") {
				els[i].src = els[i].getAttribute("data-lq");
			} else { els[i].style.backgroundImage = "url('"+els[i].getAttribute("data-lq")+"')"; }
			//remove attributes
			els[i].removeAttribute("data-lq");
			els[i].removeAttribute("data-hq");
		}
	}
};
LazyImage.Load();