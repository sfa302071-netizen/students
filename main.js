let students = [
  { name: "Ahmed", grades: [80, 90, 70] },
  { name: "Sara", grades: [45, 50, 40] },
  { name: "Omar", grades: [95, 85, 90] },
  { name: "Mona", grades: [30, 55, 48] },
  { name: "Ali", grades: [60, 65, 58] }
];

function getAverage(grades) {
  let sum = 0;
  for (let g of grades) sum += g;
  return sum / grades.length;
}

function getGrade(avg) {
  if (avg >= 90) return "A";
  if (avg >= 80) return "B";
  if (avg >= 70) return "C";
  if (avg >= 50) return "D";
  return "F";
}

function applyRafaa(student) {
  let avg = getAverage(student.grades);
  if (avg >= 45 && avg < 50) {
    return 50;
  }
  return avg;
}

let container = document.getElementById("students");
let failingAfterRafaa = [];

console.log("=== تقرير كل الطلاب ===");

for (let s of students) {
  let avgBefore = getAverage(s.grades);
  let avgAfter = applyRafaa(s);
  let grade = getGrade(avgAfter);
  let status = avgAfter >= 50 ? "ناجح" : "راسب";

  if (avgAfter < 50) {
    failingAfterRafaa.push(s.name);
  }

  console.log(`الاسم: ${s.name} | المتوسط قبل الرأفة: ${avgBefore.toFixed(1)} | بعد الرأفة: ${avgAfter.toFixed(1)} | التقدير: ${grade} | الحالة: ${status}`);

  container.innerHTML += `
    <div class="card">
      <h3>${s.name}</h3>
      <p>المتوسط قبل الرأفة: ${avgBefore.toFixed(1)}</p>
      <p>المتوسط بعد الرأفة: ${avgAfter.toFixed(1)}</p>
      <p>التقدير: ${grade}</p>
      <p class="${avgAfter >= 50 ? 'pass' : 'fail'}">${status}</p>
    </div>
  `;
}

console.log("الطلاب المتعثرين بعد الرأفة:", failingAfterRafaa);

document.getElementById("report").innerHTML = `
  <h2>التقرير النهائي</h2>
  <p>عدد الطلاب: ${students.length}</p>
  <p>الطلاب المتعثرين بعد الرأفة: ${failingAfterRafaa.length ? failingAfterRafaa.join(" - ") : "لا يوجد"}</p>
`;