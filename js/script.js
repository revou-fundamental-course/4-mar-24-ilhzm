function calculateBMI() {
    var weight = document.getElementById('mbody').value;
    var height = document.getElementById('hbody').value;
    var gender = document.querySelector('input[name="select"]:checked').value;
    var usia = document.getElementById('age').value;
    
    if (weight > 250 && height > 250 && usia > 150){
        alert("Masukkan Berat Badan, Tinggi Badan atau Usia Anda dengan Benar!");    
    } else if (weight > 0 && height > 0 && usia > 0) {
        var bmi = weight / ((height / 100) * (height / 100));
        var interpretation = interpretBMI(bmi, gender);
        var gen = genz(gender);
        var nextGen = nxGen(bmi, gender);
        var upp = Math.ceil(bmi);
        var downn = Math.floor(bmi);
        var desc11 = desc1(bmi,gender);
        var desc22 = desc2(bmi,gender);
        var condd = cond(bmi,gender);
        penyakit(bmi,gender);
        document.getElementById('result').innerHTML = bmi.toFixed(2);
        document.getElementById('interpretation').innerHTML = interpretation;
        document.getElementById('gen').innerHTML = gen;
        document.getElementById('nextGen').innerHTML = nextGen;
        document.getElementById('usia').innerHTML = "Usia " + usia;
        document.getElementById('resNum').innerHTML = "Hasil BMI diantara " + downn + " - " + upp + ".";
        document.getElementById('resDesc').innerHTML = "Anda berada dalam kategori " + interpretation + " atau " + nextGen + ".";
        document.getElementById('desc1').innerHTML = desc11;
        document.getElementById('desc2').innerHTML = desc22;
        document.getElementById('cond').innerHTML = "Beberapa Penyakit yang Berasal dari " + condd;
    } else {
        alert("Silakan Masukkan Berat Badan, Tinggi Badan dan Usia Anda!");
    }

}

function penyakit(bmi,gender){
    var a = document.getElementById("penyakit-krs");
    var b = document.getElementById("penyakit-idl");
    var c = document.getElementById("penyakit-gmk");
    var d = document.getElementById("penyakit-obs");
    if (gender === 'male') {
        if (bmi < 18.50 && a.style.display === "none") {
            a.style.display = "block";
            b.style.display = "none";
            c.style.display = "none";
            d.style.display = "none";
        } else if (bmi >= 18.50 && bmi < 22.80 && b.style.display === "none") {
            b.style.display = "block";
            a.style.display = "none";
            c.style.display = "none";
            d.style.display = "none";
        } else if (bmi >= 22.80 && bmi < 27.90 && c.style.display === "none") {
            c.style.display = "block";
            a.style.display = "none";
            b.style.display = "none";
            d.style.display = "none";
        } else if (bmi >= 27.90 && a.style.display === "none") {
            d.style.display = "block";
            a.style.display = "none";
            b.style.display = "none";
            c.style.display = "none";
        }
    } else if (gender === 'female') {
        if (bmi < 18.50 && a.style.display === "none") {
            a.style.display = "block";
            b.style.display = "none";
            c.style.display = "none";
            d.style.display = "none";
        } else if (bmi >= 18.50 && bmi < 23.40 && b.style.display === "none") {
            b.style.display = "block";
            a.style.display = "none";
            c.style.display = "none";
            d.style.display = "none";
        } else if (bmi >= 23.40 && bmi < 27.90 && c.style.display === "none") {
            c.style.display = "block";
            a.style.display = "none";
            b.style.display = "none";
            d.style.display = "none";
        } else if (bmi >= 27.90 && a.style.display === "none") {
            d.style.display = "block";
            a.style.display = "none";
            b.style.display = "none";
            c.style.display = "none";
        }
    }
}

function interpretBMI(bmi, gender) {
    if (gender === 'male') {
        if (bmi < 18.50) {
            return 'Underweight';
        } else if (bmi >= 18.50 && bmi < 22.80) {
            return 'Normal Weight';
        } else if (bmi >= 22.80 && bmi < 27.90) {
            return 'Overweight';
        } else {
            return 'Obese';
        }
    } else if (gender === 'female') {
        if (bmi < 18.50) {
            return 'Underweight';
        } else if (bmi >= 18.50 && bmi < 23.40) {
            return 'Normal Weight';
        } else if (bmi >= 23.40 && bmi < 27.90) {
            return 'Overweight';
        } else {
            return 'Obese';
        }
    }
}

function nxGen(bmi, gender) {
    if (gender === 'male') {
        if (bmi < 18.50) {
            return 'Berat Badan Kurang';
        } else if (bmi >= 18.50 && bmi < 22.80) {
            return 'Berat Badan Normal';
        } else if (bmi >= 22.80 && bmi < 27.90) {
            return 'Berat Badan Lebih';
        } else {
            return 'Obesitas';
        }
    } else if (gender === 'female') {
        if (bmi < 18.50) {
            return 'Berat Badan Kurang';
        } else if (bmi >= 18.50 && bmi < 23.40) {
            return 'Berat Badan Normal';
        } else if (bmi >= 23.40 && bmi < 27.90) {
            return 'Berat Badan Lebih';
        } else {
            return 'Obesitas';
        }
    }
}

function genz(gender){
    if (gender === 'male'){
        return 'Laki-Laki';
    }
    else if (gender === 'female'){
        return 'Perempuan';
    }
}

function desc1(bmi,gender){ 
    if (gender === 'male') {
        if (bmi < 18.50) {
            return 'Cara terbaik untuk meningkatkan berat badan adalah makan dengan porsi sedikit, namun sering serta sempatkanlah untuk mengonsumsi minuman berkalori tinggi, misalnya milkshake.';
        } else if (bmi >= 18.50 && bmi < 22.80) {
            return 'Cara terbaik untuk menjaga berat badan adalah mengkonsumsi makanan yang sehat dan bergizi serta mengatur pola makan agar bisa berjalan dengan tepat.';
        } else if (bmi >= 22.80 && bmi < 27.90) {
            return 'Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga secara rutin. Sebab, olahraga dapat membantu membakar kelebihan kalori yang tidak dapat hilang melalui diet.';
        } else {
            return 'Segera lakukan diet dengan membatasi asupan kalori harian dengan tanpa melewati jadwal makan serta konseling untuk membantu memahami dan mencegah hal-hal yang dapat memicu peningkatan nafsu makan.';
        }
    } else if (gender === 'female') {
        if (bmi < 18.50) {
            return 'Cara terbaik untuk meningkatkan berat badan adalah makan dengan porsi sedikit, namun sering serta sempatkanlah untuk mengonsumsi minuman berkalori tinggi, misalnya milkshake.';
        } else if (bmi >= 18.50 && bmi < 23.40) {
            return 'Cara terbaik untuk menjaga berat badan adalah mengkonsumsi makanan yang sehat dan bergizi serta mengatur pola makan agar bisa berjalan dengan tepat.';
        } else if (bmi >= 23.40 && bmi < 27.90) {
            return 'Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga secara rutin. Sebab, olahraga dapat membantu membakar kelebihan kalori yang tidak dapat hilang melalui diet.';
        } else {
            return 'Segera lakukan diet dengan membatasi asupan kalori harian dengan tanpa melewati jadwal makan serta konseling untuk membantu memahami dan mencegah hal-hal yang dapat memicu peningkatan nafsu makan.';
        }
    } 
}

function desc2(bmi,gender){ 
    if (gender === 'male') {
        if (bmi < 18.50) {
            return 'Jika BMI Anda dalam kategori ini maka Anda dianjurkan untuk meningkatkan berat badan hingga batas normal.';
        } else if (bmi >= 18.50 && bmi < 22.80) {
            return 'Jika BMI Anda dalam kategori ini maka Anda dianjurkan untuk menjaga berat badan Anda.';
        } else if (bmi >= 22.80 && bmi < 27.90) {
            return 'Jika BMI Anda dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.';
        } else {
            return 'Jika BMI Anda dalam kategori ini maka Anda sangat dianjurkan untuk menurunkan berat badan hingga batas normal.';
        }
    } else if (gender === 'female') {
        if (bmi < 18.50) {
            return 'Jika BMI Anda dalam kategori ini maka Anda dianjurkan untuk meningkatkan berat badan hingga batas normal.';
        } else if (bmi >= 18.50 && bmi < 23.40) {
            return 'Jika BMI Anda dalam kategori ini maka Anda dianjurkan untuk menjaga berat badan Anda.';
        } else if (bmi >= 23.40 && bmi < 27.90) {
            return 'Jika BMI Anda dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.';
        } else {
            return 'Jika BMI Anda dalam kategori ini maka Anda sangat dianjurkan untuk menurunkan berat badan hingga batas normal.';
        }
    }
}

function cond(bmi,gender){ 
    if (gender === 'male') {
        if (bmi < 18.50) {
            return 'Terlalu Kurus';
        } else if (bmi >= 18.50 && bmi < 22.80) {
            return 'Ideal';
        } else if (bmi >= 22.80 && bmi < 27.90) {
            return 'Gemuk';
        } else {
            return 'Terlalu Gemuk';
        }
    } else if (gender === 'female') {
        if (bmi < 18.50) {
            return 'Terlalu Kurus';
        } else if (bmi >= 18.50 && bmi < 23.40) {
            return 'Ideal';
        } else if (bmi >= 23.40 && bmi < 27.90) {
            return 'Gemuk';
        } else {
            return 'Terlalu Gemuk';
        }
    }
}

function resett() {
    document.getElementById("mbody").value = "";
    document.getElementById("hbody").value = "";
    document.getElementById('age').value = "";
  }