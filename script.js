const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const hamburger=$('#hamburger'),navLinks=$('#navLinks');
hamburger?.addEventListener('click',()=>{hamburger.classList.toggle('open');navLinks.classList.toggle('open')});
$$('.nav-links a').forEach(a=>a.addEventListener('click',()=>{hamburger.classList.remove('open');navLinks.classList.remove('open')}));
window.addEventListener('scroll',()=>{const n=$('#navbar');n.style.boxShadow=scrollY>8?'0 6px 20px rgba(0,0,0,.08)':'none'});
const io=new IntersectionObserver(ents=>ents.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.14});
$$('.reveal').forEach(el=>io.observe(el));
// Dates default tomorrow + day after
const toISO=d=>d.toISOString().split('T')[0];
const t=new Date();t.setDate(t.getDate()+1);const t2=new Date();t2.setDate(t2.getDate()+2);
const ci=$('#checkin'),co=$('#checkout');
if(ci)ci.value=toISO(t);if(co)co.value=toISO(t2);if(ci)ci.min=toISO(new Date());
ci?.addEventListener('change',()=>{const d=new Date(ci.value);d.setDate(d.getDate()+1);co.min=toISO(d);if(co.value<=ci.value)co.value=toISO(d)});
// Booking
const toast=$('#toast');let tt;function showToast(m){toast.textContent=m;toast.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>toast.classList.remove('show'),3200)};window.showToast=showToast;
$('#bookingForm')?.addEventListener('submit',e=>{e.preventDefault();const c=ci.value,o=co.value,g=$('#guests').value,r=$('#roomType').value;if(!c||!o)return showToast('Select check-in and check-out.');if(new Date(o)<=new Date(c))return showToast('Check-out must be after check-in.');showToast(`Checking ${r} for ${g} from ${c} to ${o} — demo. Connect to booking engine.`)} );
window.selectRoom=name=>{const rt=$('#roomType');if(rt)rt.value=name.includes('Suite')?name:'Classic';document.querySelector('#booking')?.scrollIntoView({behavior:'smooth',block:'center'});showToast(`${name} selected — pick dates and check availability.`)}
// Room filter
$$('.filter-btn').forEach(b=>b.addEventListener('click',()=>{$$('.filter-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');const f=b.dataset.filter;$$('.room-card').forEach(c=>{const show=f==='all'||c.dataset.category===f;c.style.display=show?'':'none';if(show)c.animate([{transform:'scale(.96)',opacity:0},{transform:'scale(1)',opacity:1}],{duration:200})})}));
// Lightbox
const lb=$('#lightbox'),lbImg=$('#lightboxImg');$$('.gallery-item img').forEach(img=>img.addEventListener('click',()=>{lbImg.src=img.dataset.full||img.src;lb.classList.add('open');document.body.style.overflow='hidden'}));$('#lightboxClose')?.addEventListener('click',()=>{lb.classList.remove('open');document.body.style.overflow=''});lb?.addEventListener('click',e=>{if(e.target===lb){lb.classList.remove('open');document.body.style.overflow=''}});document.addEventListener('keydown',e=>{if(e.key==='Escape')lb.classList.remove('open')});
// Testimonials
const track=$('#testiTrack'),cards=track?[...track.children]:[],dots=$('#testiDots');let idx=0;function renderDots(){if(!dots)return;dots.innerHTML='';cards.forEach((_,i)=>{const b=document.createElement('button');b.className=i===idx?'active':'';b.addEventListener('click',()=>go(i));dots.appendChild(b)})}function go(i){idx=(i+cards.length)%cards.length;cards.forEach((c,j)=>c.classList.toggle('active',j===idx));renderDots()}if(track){$('#prevTesti')?.addEventListener('click',()=>go(idx-1));$('#nextTesti')?.addEventListener('click',()=>go(idx+1));renderDots();let auto=setInterval(()=>go(idx+1),5000);track.addEventListener('mouseenter',()=>clearInterval(auto));track.addEventListener('mouseleave',()=>auto=setInterval(()=>go(idx+1),5000))}
// Forms
$('#contactForm')?.addEventListener('submit',e=>{e.preventDefault();const fd=new FormData(e.target);if(!fd.get('name')||!fd.get('phone'))return showToast('Fill name and phone.');showToast('Thanks! We will confirm within 2 hours. (Demo)');e.target.reset()});
$('#newsletterForm')?.addEventListener('submit',e=>{e.preventDefault();const v=e.target.querySelector('input').value;if(!v.includes('@'))return showToast('Enter valid email.');showToast('Subscribed!');e.target.reset()});
