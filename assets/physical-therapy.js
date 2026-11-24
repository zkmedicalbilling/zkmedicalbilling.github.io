(()=>{const rows=[
["97161","Evaluation","PT evaluation — low complexity","کم پیچیدگی والی PT ابتدائی جانچ","Initial evaluation topic. Confirm the appropriate evaluation level from the current CPT criteria and the documented history, examination, clinical decision-making, and presentation. Do not choose a level from diagnosis alone.","ابتدائی جانچ کا موضوع۔ موجودہ CPT معیار اور درج شدہ history، examination، clinical decision-making اور مریض کی حالت کے مطابق درست سطح منتخب کریں۔ صرف diagnosis کی بنیاد پر سطح منتخب نہ کریں۔"],
["97162","Evaluation","PT evaluation — moderate complexity","درمیانی پیچیدگی والی PT ابتدائی جانچ","Use only when the current code criteria and documentation support the level. Retain examination findings, impairments, functional limitations, clinical presentation, and plan of care.","صرف اس وقت استعمال کریں جب موجودہ کوڈ کے معیار اور دستاویزات اس سطح کی تائید کریں۔ examination findings، impairments، functional limitations اور plan of care محفوظ رکھیں۔"],
["97163","Evaluation","PT evaluation — high complexity","زیادہ پیچیدگی والی PT ابتدائی جانچ","The record must support the high-complexity criteria under the current code set. Complexity should not be inferred from age, number of diagnoses, or a long note alone.","ریکارڈ میں موجودہ کوڈ سیٹ کے مطابق high-complexity معیار ثابت ہونا چاہیے۔ صرف عمر، diagnoses کی تعداد یا طویل نوٹ سے complexity اخذ نہ کریں۔"],
["97164","Re-evaluation","PT re-evaluation","PT دوبارہ جانچ","Use when a re-evaluation is clinically appropriate and meets code requirements; document significant change, new findings, goals, and any justified plan-of-care revision.","جب طبی طور پر دوبارہ جانچ ضروری ہو اور کوڈ کے معیار پورے ہوں تو استعمال کریں؛ نمایاں تبدیلی، نئی findings، goals اور plan of care میں جائز تبدیلی درج کریں۔"],
["97110","Therapeutic exercise","Therapeutic exercise","علاجی ورزشیں","Document the skilled exercise, body region, functional purpose, progression, patient response, and timed minutes where required. Avoid using this as a generic label for all movement.","ماہرانہ ورزش، جسمانی حصے، فعلی مقصد، progression، مریض کا ردعمل اور جہاں ضروری ہو timed minutes درج کریں۔ ہر حرکت کے لیے عمومی طور پر یہ کوڈ استعمال نہ کریں۔"],
["97112","Neuromuscular re-education","Neuromuscular re-education","اعصابی و عضلاتی ہم آہنگی کی تربیت","Document skilled balance, coordination, posture, proprioception, or movement-control training and the functional deficit addressed.","ماہرانہ balance، coordination، posture، proprioception یا movement-control training اور متعلقہ فعلی مسئلہ درج کریں۔"],
["97116","Gait training","Gait training","چلنے پھرنے کی تربیت","Document gait deficits, skilled training, assistive device work when applicable, distance or task, safety needs, and timed minutes.","چلنے کی خرابی، ماہرانہ تربیت، ضرورت کے مطابق assistive device، فاصلہ یا task، safety needs اور timed minutes درج کریں۔"],
["97124","Massage therapy","Massage therapy","مساج تھراپی","Use only when the service furnished meets the code definition and is medically necessary. Document technique, treated area, purpose, and time as required.","صرف اس وقت استعمال کریں جب فراہم کردہ سروس کوڈ کی تعریف پر پوری اترے اور medically necessary ہو۔ طریقہ، جگہ، مقصد اور ضروری وقت درج کریں۔"],
["97140","Manual therapy","Manual therapy techniques","مینول تھراپی","Document the specific skilled technique, anatomical area, clinical purpose, response, and time. Review current NCCI edits when billed with other procedures; modifiers do not automatically bypass edits.","مخصوص ماہرانہ تکنیک، جسمانی جگہ، طبی مقصد، ردعمل اور وقت درج کریں۔ دیگر procedures کے ساتھ بلنگ پر موجودہ NCCI edits چیک کریں؛ modifier خودکار طور پر edit ختم نہیں کرتا۔"],
["97150","Group therapy","Group therapeutic procedures","گروپ تھراپی","Group service rules differ from one-on-one timed services. Document the group setting, skilled intervention, participants as required, and payer-specific coverage and unit rules.","گروپ سروس کے قواعد one-on-one timed services سے مختلف ہیں۔ group setting، ماہرانہ intervention اور payer-specific coverage و unit rules درج کریں۔"],
["97530","Therapeutic activities","Therapeutic activities","علاجی سرگرمیاں","Document dynamic, functional activities, the task performed, skilled progression, functional goal, patient response, and timed minutes.","متحرک فعلی سرگرمیاں، انجام دیا گیا task، ماہرانہ progression، functional goal، مریض کا ردعمل اور timed minutes درج کریں۔"],
["97535","Self-care training","Self-care / home management training","ذاتی نگہداشت اور گھر کے کاموں کی تربیت","Document the self-care or home-management task, training provided, safety/adaptive strategies, functional need, and timed minutes.","ذاتی نگہداشت یا گھر کے کام کا task، دی گئی تربیت، safety/adaptive strategies، فعلی ضرورت اور timed minutes درج کریں۔"],
["97537","Community/work reintegration","Community or work reintegration training","کمیونٹی یا کام پر واپسی کی تربیت","Confirm that the service and setting meet the current code definition. Document the specific community/work task, skilled training, goals, and time.","تصدیق کریں کہ سروس اور setting موجودہ کوڈ کی تعریف پر پوری اترتی ہے۔ کمیونٹی یا کام سے متعلق task، ماہرانہ تربیت، goals اور وقت درج کریں۔"],
["97542","Wheelchair management","Wheelchair management training","وہیل چیئر استعمال کرنے کی تربیت","Document wheelchair assessment/training, mobility or positioning need, skills taught, equipment-related work, and timed minutes as applicable.","وہیل چیئر assessment/training، mobility یا positioning کی ضرورت، سکھائی گئی مہارتیں اور جہاں لاگو ہو timed minutes درج کریں۔"],
["97750","Physical performance testing","Physical performance testing","جسمانی کارکردگی کی جانچ","Document the test performed, measures/results, clinical question, interpretation, and report. Confirm whether the service is separately reportable under payer rules.","کیا گیا test، پیمائش/نتائج، طبی سوال، تشریح اور رپورٹ درج کریں۔ payer rules کے مطابق الگ billing کی اجازت کی تصدیق کریں۔"],
["97760","Orthotic management","Orthotic management and training — initial encounter","آرتھوٹک مینجمنٹ اور تربیت — ابتدائی سیشن","Document orthosis assessment, fitting/adjustment, training, skin/safety checks, goals, and time where required. Verify current code details and payer coverage.","orthosis assessment، fitting/adjustment، تربیت، جلد اور safety checks، goals اور ضروری وقت درج کریں۔ موجودہ کوڈ اور payer coverage چیک کریں۔"],
["97761","Prosthetic training","Prosthetic training — initial encounter","مصنوعی عضو کے استعمال کی تربیت — ابتدائی سیشن","Document prosthetic use training, functional tasks, safety, progression, patient response, and timed minutes. Confirm applicable code and payer requirements.","مصنوعی عضو کے استعمال کی تربیت، فعلی tasks، safety، progression، مریض کا ردعمل اور timed minutes درج کریں۔"],
["97010","Untimed modality","Hot or cold pack modality topic","گرم یا ٹھنڈی پیک تھراپی","Commonly treated as an untimed modality in Medicare therapy guidance and often packaged/not separately payable depending on setting and payer. Verify current policy before billing.","Medicare therapy guidance میں عموماً untimed modality ہے اور setting یا payer کے مطابق الگ payment نہ بھی ہو۔ بلنگ سے پہلے موجودہ پالیسی چیک کریں۔"],
["97012","Untimed modality","Mechanical traction","مکینیکل ٹریکشن","Confirm coverage, medical necessity, setting, and whether the service is separately payable. Document the intervention and clinical rationale.","coverage، medical necessity، setting اور الگ payment کی تصدیق کریں۔ intervention اور طبی وجہ درج کریں۔"],
["97014","Electrical stimulation","Unattended electrical stimulation — code-use caution","بغیر مسلسل نگرانی کے برقی تحریک — کوڈ کے استعمال میں احتیاط","This code may not be accepted for Medicare professional billing in the same way as some commercial plans; Medicare may direct providers to G0283 for certain unattended stimulation services. Verify the exact setting and payer rules.","یہ کوڈ Medicare professional billing میں بعض commercial plans جیسا قابل قبول نہیں ہو سکتا؛ بعض unattended stimulation services کے لیے Medicare میں G0283 لاگو ہو سکتا ہے۔ setting اور payer rules کی تصدیق کریں۔"],
["G0283","Medicare HCPCS","Unattended electrical stimulation — Medicare context","بغیر مسلسل نگرانی کے برقی تحریک — Medicare","A Medicare HCPCS option for certain unattended electrical stimulation services. Confirm coverage article, diagnosis, setting, and current code status for the date of service.","بعض unattended electrical stimulation services کے لیے Medicare HCPCS کوڈ۔ سروس کی تاریخ کے مطابق coverage article، diagnosis، setting اور کوڈ کی موجودہ حیثیت چیک کریں۔"],
["G0281","Medicare HCPCS","Electrical stimulation for wound care — Medicare context","زخموں کی دیکھ بھال کے لیے برقی تحریک — Medicare","Use only when the specific wound-care service and Medicare coverage criteria are met. Review the applicable coverage policy and documentation requirements.","صرف اس وقت استعمال کریں جب مخصوص wound-care سروس اور Medicare coverage criteria پورے ہوں۔ متعلقہ coverage policy اور دستاویزات چیک کریں۔"]
];
const categories=[...new Set(rows.map(r=>r[1]))];let lang="en",filter="All";
const $=id=>document.getElementById(id),esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function render(){const q=$("ptSearch").value.toLowerCase();const found=rows.filter(r=>(filter==="All"||r[1]===filter)&&r.join(" ").toLowerCase().includes(q));$("ptCount").textContent=found.length+" topics";$("ptCards").innerHTML=found.map(r=>'<button class="denial-card pt-card" data-code="'+r[0]+'"><span>'+esc(r[1])+'</span><b>'+r[0]+'</b><strong>'+esc(lang==="en"?r[2]:r[3])+'</strong><i>'+(lang==="en"?"Open billing notes →":"بلنگ نوٹس دیکھیں ←")+'</i></button>').join("");$("ptEmpty").hidden=found.length>0;$("ptCards").querySelectorAll("button").forEach(b=>b.onclick=()=>open(b.dataset.code));}
function open(code){const r=rows.find(x=>x[0]===code);$("ptLabel").textContent=r[0]+" • "+r[1];$("ptTitle").textContent=lang==="en"?r[2]:r[3];$("ptBody").innerHTML="<p>"+esc(lang==="en"?r[4]:r[5])+"</p>";$("ptModal").classList.add("open");$("ptModal").setAttribute("aria-hidden","false");}
function close(){$("ptModal").classList.remove("open");$("ptModal").setAttribute("aria-hidden","true");}
$("ptFilters").innerHTML=["All",...categories].map(c=>'<button type="button" data-cat="'+esc(c)+'">'+(c==="All"?(lang==="en"?"All topics":"تمام موضوعات"):esc(c))+'</button>').join("");$("ptFilters").querySelector('[data-cat="All"]').classList.add("active");$("ptFilters").querySelectorAll("button").forEach(b=>b.onclick=()=>{filter=b.dataset.cat;$("ptFilters").querySelectorAll("button").forEach(x=>x.classList.toggle("active",x===b));render()});
$("ptSearch").addEventListener("input",render);$("ptClose").onclick=$("ptDone").onclick=close;$("ptModal").querySelector(".shade").onclick=close;$("year").textContent=new Date().getFullYear();
$("lang").onclick=()=>{lang=lang==="en"?"ur":"en";document.body.classList.toggle("urdu",lang==="ur");document.documentElement.lang=lang;$("lang").textContent=lang==="en"?"اردو":"English";$("ptSearch").placeholder=lang==="en"?"Search code, service, or billing topic…":"کوڈ، سروس یا بلنگ موضوع تلاش کریں…";$("ptFilters").querySelectorAll("button").forEach(b=>{if(b.dataset.cat==="All")b.textContent=lang==="en"?"All topics":"تمام موضوعات"});render();};
document.addEventListener("keydown",e=>{if(e.key==="Escape")close()});
// Selected commonly encountered PT diagnosis examples. Always validate against FY2027 official Tabular List.
const dxRows=[
["M25.511","Orthopedic / Joint pain","Pain in right shoulder"],
["M25.512","Orthopedic / Joint pain","Pain in left shoulder"],
["M25.521","Orthopedic / Joint pain","Pain in right elbow"],
["M25.522","Orthopedic / Joint pain","Pain in left elbow"],
["M25.531","Orthopedic / Joint pain","Pain in right wrist"],
["M25.532","Orthopedic / Joint pain","Pain in left wrist"],
["M25.551","Orthopedic / Joint pain","Pain in right hip"],
["M25.552","Orthopedic / Joint pain","Pain in left hip"],
["M25.561","Orthopedic / Joint pain","Pain in right knee"],
["M25.562","Orthopedic / Joint pain","Pain in left knee"],
["M25.571","Orthopedic / Joint pain","Pain in right ankle and joints of right foot"],
["M25.572","Orthopedic / Joint pain","Pain in left ankle and joints of left foot"],
["M25.50","Orthopedic / Joint pain","Pain in unspecified joint"],
["M25.60","Orthopedic / Joint stiffness","Stiffness of unspecified joint, not elsewhere classified"],
["M25.611","Orthopedic / Joint stiffness","Stiffness of right shoulder, not elsewhere classified"],
["M25.612","Orthopedic / Joint stiffness","Stiffness of left shoulder, not elsewhere classified"],
["M25.661","Orthopedic / Joint stiffness","Stiffness of right knee, not elsewhere classified"],
["M25.662","Orthopedic / Joint stiffness","Stiffness of left knee, not elsewhere classified"],
["M25.671","Orthopedic / Joint stiffness","Stiffness of right ankle, not elsewhere classified"],
["M25.672","Orthopedic / Joint stiffness","Stiffness of left ankle, not elsewhere classified"],
["M54.2","Spine / Back and neck","Cervicalgia"],
["M54.6","Spine / Back and neck","Pain in thoracic spine"],
["M54.50","Spine / Back and neck","Low back pain, unspecified"],
["M54.59","Spine / Back and neck","Other low back pain"],
["M54.12","Spine / Radiculopathy","Radiculopathy, cervical region"],
["M54.16","Spine / Radiculopathy","Radiculopathy, lumbar region"],
["M47.812","Spine / Spondylosis","Spondylosis without myelopathy or radiculopathy, cervical region"],
["M47.816","Spine / Spondylosis","Spondylosis without myelopathy or radiculopathy, lumbar region"],
["M79.601","Extremity pain","Pain in right arm"],
["M79.602","Extremity pain","Pain in left arm"],
["M79.604","Extremity pain","Pain in right leg"],
["M79.605","Extremity pain","Pain in left leg"],
["M79.671","Extremity pain","Pain in right foot"],
["M79.672","Extremity pain","Pain in left foot"],
["M79.641","Extremity pain","Pain in right hand"],
["M79.642","Extremity pain","Pain in left hand"],
["M79.10","Muscle pain / Spasm","Myalgia, unspecified site"],
["M79.18","Muscle pain / Spasm","Myalgia, other site"],
["M62.81","Muscle weakness","Muscle weakness (generalized)"],
["M62.838","Muscle pain / Spasm","Other muscle spasm"],
["M62.89","Muscle disorders","Other specified disorders of muscle"],
["R26.0","Gait / Mobility / Balance","Ataxic gait"],
["R26.2","Gait / Mobility / Balance","Difficulty in walking, not elsewhere classified"],
["R26.81","Gait / Mobility / Balance","Unsteadiness on feet"],
["R26.89","Gait / Mobility / Balance","Other abnormalities of gait and mobility"],
["R26.9","Gait / Mobility / Balance","Unspecified abnormalities of gait and mobility"],
["R27.8","Coordination / Function","Other lack of coordination"],
["R29.3","Posture / Falls","Abnormal posture"],
["R29.6","Posture / Falls","Repeated falls"],
["R53.1","Weakness / Fatigue","Weakness"],
["R53.83","Weakness / Fatigue","Other fatigue"],
["Z91.81","Posture / Falls","History of falling"],
["Z74.09","Functional status","Other reduced mobility"],
["Z47.1","Orthopedic / Aftercare","Aftercare following joint replacement surgery"],
["Z96.641","Orthopedic / Aftercare","Presence of right artificial hip joint"],
["Z96.642","Orthopedic / Aftercare","Presence of left artificial hip joint"],
["Z96.651","Orthopedic / Aftercare","Presence of right artificial knee joint"],
["Z96.652","Orthopedic / Aftercare","Presence of left artificial knee joint"],
["G35","Neurologic","Multiple sclerosis"],
["G62.9","Neurologic","Polyneuropathy, unspecified"],
["G81.90","Neurologic","Hemiplegia, unspecified affecting unspecified side"],
["M21.371","Neurologic / Foot drop","Foot drop, right foot"],
["M21.372","Neurologic / Foot drop","Foot drop, left foot"]
];
(function(){
 const grid=document.getElementById("ptDxCards"); if(!grid)return;
 const search=document.getElementById("ptDxSearch"),count=document.getElementById("ptDxCount"),empty=document.getElementById("ptDxEmpty"),filters=document.getElementById("ptDxFilters");
 let active="All";
 const cats=["All",...new Set(dxRows.map(x=>x[1]))];
 filters.innerHTML=cats.map(c=>'<button type="button" data-dxcat="'+c+'">'+(c==="All"?"All categories":c)+'</button>').join("");
 const buttons=[...filters.querySelectorAll("button")];
 function render(){
  const q=search.value.trim().toLowerCase();
  const rows=dxRows.filter(x=>(active==="All"||x[1]===active)&&x.join(" ").toLowerCase().includes(q));
  count.textContent=rows.length+" diagnosis code examples";
  grid.innerHTML=rows.map(x=>'<article class="denial-card"><span>'+x[1]+'</span><b>'+x[0]+'</b><strong>'+x[2]+'</strong></article>').join("");
  empty.hidden=rows.length>0;
 }
 buttons.forEach(b=>b.addEventListener("click",()=>{active=b.dataset.dxcat;buttons.forEach(x=>x.classList.toggle("active",x===b));render();}));
 if(buttons[0])buttons[0].classList.add("active");
 search.addEventListener("input",render);render();
})();

render();})();