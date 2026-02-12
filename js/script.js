// Live AQI
setInterval(()=>{
  let aqi = Math.floor(Math.random()*400);
  let el = document.getElementById("aqi");
  if(!el) return;

  el.innerText = aqi;

  if(aqi <= 50) el.style.color = "green";
  else if(aqi <= 200) el.style.color = "orange";
  else el.style.color = "red";
},2000);

setInterval(()=>{
  let aqi = Math.floor(Math.random()*400);
  let el = document.getElementById("aqi1");
  if(!el) return;

  el.innerText = aqi;

  if(aqi <= 50) el.style.color = "green";
  else if(aqi <= 200) el.style.color = "orange";
  else el.style.color = "red";
},2000);

setInterval(()=>{
  let aqi = Math.floor(Math.random()*400);
  let el = document.getElementById("aqi2");
  if(!el) return;

  el.innerText = aqi;

  if(aqi <= 50) el.style.color = "green";
  else if(aqi <= 200) el.style.color = "orange";
  else el.style.color = "red";
},2000);

// Live Noise
setInterval(()=>{
  let noise = Math.floor(Math.random()*120);
  let el = document.getElementById("noise");
  if(el) el.innerText = noise + " dB";
},2000);

setInterval(()=>{
  let noise = Math.floor(Math.random()*120);
  let el = document.getElementById("noise1");
  if(el) el.innerText = noise + " dB";
},2000);

setInterval(()=>{
  let noise = Math.floor(Math.random()*120);
  let el = document.getElementById("noise2");
  if(el) el.innerText = noise + " dB";
},2000);

// Clock
setInterval(()=>{
  let t = document.getElementById("time");
  if(t) t.innerText = new Date().toLocaleTimeString();
},1000);

// Form alert
function submitForm(){
  alert("Pollution report submitted successfully!");
}

setInterval(()=>{
  let val = Math.floor(Math.random()*400);
  let g = document.getElementById("gaugeValue");
  if(g) g.innerText = val;
},2000);

function downloadReport(){
  let text = `
EcoSense Pollution Report

AQI Level: ${Math.floor(Math.random()*400)}
Noise Level: ${Math.floor(Math.random()*120)} dB

Generated for academic project demonstration.
`;
  let blob = new Blob([text], {type: "text/plain"});
  let link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "pollution_report.txt";
  link.click();
}

// setInterval(()=>{
//   let saved = localStorage.getItem("adminAQI");
//   let aqi = saved ? saved : Math.floor(Math.random()*400);
//   let el = document.getElementById("aqi");
//   if(el) el.innerText = aqi;
// },2000);
