// ── Sticky CTA on scroll
var sticky = document.getElementById('stickyCta');
window.addEventListener('scroll', function () {
  if (window.scrollY > 400) {
    sticky.classList.add('visible');
  } else {
    sticky.classList.remove('visible');
  }
});

// ── Before/After toggle
function showPanel(id, btn) {
  document.querySelectorAll('.ba-panel').forEach(function (p) {
    p.classList.remove('active');
  });
  document.querySelectorAll('.ba-tab').forEach(function (b) {
    b.classList.remove('active');
  });
  document.getElementById('panel-' + id).classList.add('active');
  btn.classList.add('active');
}

// ── FAQ accordion
function toggleFaq(el) {
  var item = el.closest('.faq-item');
  var isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(function (i) {
    i.classList.remove('open');
  });
  if (!isOpen) {
    item.classList.add('open');
  }
}
