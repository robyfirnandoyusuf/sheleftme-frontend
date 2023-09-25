var attribution = just.splitText("small").characters;

// wrap words in container so they can be clipped by overflowed
var quote = just.splitText(".quote").words;
wrapWords(quote);

var t1 = just.timeline();

t1.set({
   targets: quote,
   web: { 
      opacity: 0
   }
});

t1.set({
   targets: attribution,
   web: { opacity: 0 }
});

t1.animate({
   targets: quote,
   stagger: 300,
   delay: 200,
   easing: "ease-out",
   duration: 900,
   web: {
      opacity: [0, 1],
      y: ["200%", 0]
   }
});

t1.animate({
   targets: attribution,
   duration: 700,
   stagger: 20,
   easing: "ease-out",
   web: {
      opacity: [0, 1],
      y: ["200%", 0]
   }
});

t1.animate({
   targets: ".note",
   delay: 500,
   duration: 600,
   easing: "linear",
   web: { opacity: [0, 1] }
});

t1.play();

t1.once("finish", function() { 
   t1.reverse();
});

document.querySelector("blockquote").addEventListener("click", function() {
   t1.play({
      alternate: true,
      repeat: 2
   });
});

function wrapWords(words) {
   return words.map(function(w) {
      var parent = w.parentNode;
      var wrapper = document.createElement("span");
      wrapper.classList.add("word-wrapper");
      parent.insertBefore(wrapper, w);
      parent.removeChild(w);
      wrapper.appendChild(w);
      return w;
   });
}