// Ã—â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“Ã—
/* ACCORDIONS / COLLAPSIBLE GROUPS */
// Ã—â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“Ã—

const collapsibleGroups = document.querySelectorAll('.collapsible-group');

collapsibleGroups.forEach(group => {
  const collapsibles = group.querySelectorAll('.collapsible'); // Select each FAQ item

  collapsibles.forEach(collapsible => {
    const header = collapsible.querySelector('.collapsible-header');
    const content = collapsible.querySelector('.collapsible-content');

    header.addEventListener('click', () => {
      const isActive = collapsible.classList.contains('active');

      collapsibles.forEach(otherCollapsible => {
        otherCollapsible.classList.remove('active');
        otherCollapsible.querySelector('.collapsible-content').style.maxHeight = '0';
      });

      if (!isActive) {
        collapsible.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
});

// Ã—â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“Ã—
/* SMOOTH SCROLLING ANCHORs */
// Ã—â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“Ã—

jQuery(document).ready(function($) {
	$(".scroll").click(function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
	});
});

// Ã—â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“Ã—
/* PUSHY -- RESPONSIVE NAV */
// Ã—â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“â€“Ã—

!function(a){function b(){g.hasClass(k)?h.toggleClass(l):h.toggleClass(m),q&&g.one("transitionend",function(){q.focus()})}function c(){g.hasClass(k)?h.removeClass(l):h.removeClass(m)}function d(){g.hasClass(k)?(h.addClass(l),g.animate({left:"0px"},r),i.animate({left:s},r),j.animate({left:s},r)):(h.addClass(m),g.animate({right:"0px"},r),i.animate({right:s},r),j.animate({right:s},r)),q&&q.focus()}function e(){g.hasClass(k)?(h.removeClass(l),g.animate({left:"-"+s},r),i.animate({left:"0px"},r),j.animate({left:"0px"},r)):(h.removeClass(m),g.animate({right:"-"+s},r),i.animate({right:"0px"},r),j.animate({right:"0px"},r))}function f(){a(t).addClass(v),a(t).on("click",function(){var b=a(this);b.hasClass(v)?(a(t).addClass(v).removeClass(u),b.removeClass(v).addClass(u)):b.addClass(v).removeClass(u)})}var g=a(".pushy"),h=a("body"),i=a("#container"),j=a(".push"),k="pushy-left",l="pushy-open-left",m="pushy-open-right",n=a(".site-overlay"),o=a(".menu-btn, .pushy-link"),p=a(".menu-btn"),q=a(g.data("focus")),r=200,s=g.width()+"px",t=".pushy-submenu",u="pushy-submenu-open",v="pushy-submenu-closed";a(t);a(document).keyup(function(a){27==a.keyCode&&(h.hasClass(l)||h.hasClass(m))&&(w?c():(e(),x=!1),p&&p.focus())});var w=function(){var a=document.createElement("p"),b=!1,c={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};if(null!==document.body){document.body.insertBefore(a,null);for(var d in c)void 0!==a.style[d]&&(a.style[d]="translate3d(1px,1px,1px)",b=window.getComputedStyle(a).getPropertyValue(c[d]));return document.body.removeChild(a),void 0!==b&&b.length>0&&"none"!==b}return!1}();if(w)f(),o.on("click",function(){b()}),n.on("click",function(){b()});else{h.addClass("no-csstransforms3d"),g.hasClass(k)?g.css({left:"-"+s}):g.css({right:"-"+s}),i.css({"overflow-x":"hidden"});var x=!1;f(),o.on("click",function(){x?(e(),x=!1):(d(),x=!0)}),n.on("click",function(){x?(e(),x=!1):(d(),x=!0)})}}(jQuery);

$('.site-overlay').on('touchmove', function(e){ e.preventDefault(); });