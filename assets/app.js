
(function(){
  var btn=document.querySelector('.menu-btn'), nav=document.querySelector('.nav');
  if(btn&&nav){ btn.addEventListener('click',function(){ nav.classList.toggle('open'); }); }
  var links=document.querySelectorAll('.nav a');
  links.forEach(function(a){ if(a.pathname.split('/').pop()===location.pathname.split('/').pop()) a.classList.add('active'); });
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } }); },{threshold:.12});
    document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
  } else { document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('in'); }); }
})();
