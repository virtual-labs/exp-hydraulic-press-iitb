let maindiv = (document.getElementById('pannelcreate'));
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h4 class="center-text fs-20px fw-600">Hydraulic Press</h4>
            <br>
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
        </div>
    </div>`;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    internal_calculation1();
}
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('Activity 1', 'act1-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' id='act1-div'>
      <p style="text-align:left;">
         A hydraulic press has a ram of ${D}cm diameter and plunger of ${d}cm diameter
      </p>
	  <img src='./sim1.png' style='margin-left: 20%; width: 60%;'>
	  <br /><br />
	  <p style='text-align: center;'>Figure 1 </p>
      <p style="text-align:left;">
         Find the weight to be lifted by hydraulic press when force of ${F}N is applied on the plunger
      </p>
      <div id="area-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-5">
               Area of ram (A) = <span style="display:inline-block">
                  $$ \\frac{\π}{4}\× D^2 $$ 
               </span> = 
            </div>
            <div class="row justify-content-center col-md-4" style="flex-wrap:nowrap; align-items:center;">
               <input type='number' style="margin:0 5px; width:70%" id='A-inp' class='form-control fs-16px' /> <span style="display:contents;">m<sup>2</sup></span>
            </div>
         </div>
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-5">
               Area of plunger (a) = <span style="display:inline-block">
                  $$ \\frac{\π}{4}\× d^2 $$ 
               </span> = 
            </div>
            <div class="row justify-content-center col-md-4" style="flex-wrap:nowrap; align-items:center;">
               <input type='number' style="margin:0 5px; width:70%" id='a-inp' class='form-control fs-16px' /> <span style="display:contents;">m<sup>2</sup></span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='verify_area();'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act1-div');
    }, 150);
}
function internal_calculation1() {
    // D = 0;
    // d = 0;
    // F = 0;
    A = 0;
    a = 0;
    p = 0;
    w = 0;
    // D = random1(25, 41);
    // d = parseFloat(random(4, 5).toFixed(1));
    // F = random1(500, 601);
    A = (Math.PI / 4) * Math.pow((D / 100), 2);
    a = (Math.PI / 4) * Math.pow((d / 100), 2);
    p = F / parseFloat(a.toFixed(4));
    w = p * parseFloat(A.toFixed(4));
}
function verify_area() {
    let A_inp = (document.getElementById('A-inp'));
    let a_inp = (document.getElementById('a-inp'));
    console.log(A, a);
    if (!verify_values(parseFloat(A_inp.value), A)) {
        A_inp.style.border = '1px solid red';
        alert('Incorrect area of ram value');
        return;
    }
    else {
        A_inp.style.border = '1px solid #ced4da';
        A_inp.disabled = true;
    }
    if (!verify_values(parseFloat(a_inp.value), a)) {
        a_inp.style.border = '1px solid red';
        alert('Incorrect area of plunger value');
        return;
    }
    else {
        a_inp.style.border = '1px solid #ced4da';
        a_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('area-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         Area of ram (A) = <span style="display:inline-block">
            $$ \\frac{\π}{4}\× D^2 $$ 
         </span> = ${parseFloat(A.toFixed(4))} m<sup>2</sup> 
      </p>
      <p>
         Area of plunger (a) = <span style="display:inline-block">
            $$ \\frac{\π}{4}\× d^2 $$ 
         </span> = ${parseFloat(a.toFixed(4))} m<sup>2</sup>
      </p>
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act1-btn1" onclick='load_pressure_div();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function load_pressure_div() {
    let btn = (document.getElementById('act1-btn1'));
    btn && btn.remove();
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
   <br>
   <div id="pressure-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-5">
            Pressure applied by plunger = <span style="display:inline-block">
               $$ \\frac{F}{a} $$ 
            </span> = 
         </div>
         <div class="row justify-content-center col-md-4" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 5px; width:70%" id='p-inp' class='form-control fs-16px' /> <span style="display:contents;">N/m<sup>2</sup></span>
         </div>
      </div>
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-6">
            Pressure intensity on ram = <span style="display:inline-block">
               $$ w = \\frac{F}{a} \× A $$ 
            </span> = 
         </div>
         <div class="row justify-content-center col-md-4" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 5px; width:70%" id='w-inp' class='form-control fs-16px' /> <span style="display:contents;">N
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='verify_pressure();'>Verify</button>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
}
function verify_pressure() {
    let p_inp = (document.getElementById('p-inp'));
    let w_inp = (document.getElementById('w-inp'));
    console.log(p, w);
    if (!verify_values(parseFloat(p_inp.value), p)) {
        p_inp.style.border = '1px solid red';
        alert('Incorrect pressure applied by plunger value');
        return;
    }
    else {
        p_inp.style.border = '1px solid #ced4da';
        p_inp.disabled = true;
    }
    if (!verify_values(parseFloat(w_inp.value), w)) {
        w_inp.style.border = '1px solid red';
        alert('Incorrect pressure intensity on ram value');
        return;
    }
    else {
        w_inp.style.border = '1px solid #ced4da';
        w_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('pressure-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         Pressure applied by plunger = <span style="display:inline-block">
            $$ \\frac{F}{a} $$ 
         </span> =  ${parseFloat(p.toFixed(4))} N/m<sup>2</sup> 
      </p>
      <p>
         Pressure intensity on ram = <span style="display:inline-block">
            $$ w = \\frac{F}{a} \× A $$ 
         </span> = ${parseFloat(w.toFixed(4))} N
      </p>
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act1-btn2" onclick='exp_complete();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function load_kinematic_viscosity_stoke() {
    let btn = (document.getElementById('act1-btn5'));
    btn && btn.remove();
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
   <br>
   <p>
      $$
         \ν \\ in \\ stoke = \ν \\ in \\ m^2/s\× 10^4
      $$
   </p>
   <div id="kin-vis-stoke-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-4">
            $$ \ν \\ in \\ stoke =  $$
         </div>
         <div class="row justify-content-center col-md-4" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 auto; width:70%" id='kin-vis-stoke-inp' class='form-control fs-16px' /> <span style="display:contents;">stoke</span>
         </div>
      </div>
      <button class='btn btn-info btn-sm std-btn' onclick='verify_kinematic_viscosity_stoke();'>Verify</button>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function exp_complete() {
    let btn = (document.getElementById('act1-btn2'));
    btn && btn.remove();
    alert('Experiment Completed');
}
activity1();
//# sourceMappingURL=activity1.js.map