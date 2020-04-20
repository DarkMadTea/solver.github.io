let numberVal  = document.getElementById('numberForm');

let input0 = document.getElementById('numberOfMeasurements0');
let input1 = document.getElementById('numberOfMeasurements1');
let input2 = document.getElementById('numberOfMeasurements2');
let input3 = document.getElementById('numberOfMeasurements3');
let input4 = document.getElementById('numberOfMeasurements4');
let input5 = document.getElementById('numberOfMeasurements5');
let input6 = document.getElementById('numberOfMeasurements6');
let input7 = document.getElementById('numberOfMeasurements7');
let input8 = document.getElementById('numberOfMeasurements8');
let input9 = document.getElementById('numberOfMeasurements9');
let inputStudent = document.getElementById( 'studentNumber');
let predPribor = document.getElementById('predPriborVal');

$(".form-group").submit(function(e) {
    e.preventDefault();
});

function kek() {
    var first = Number((input0.value));
    console.log("first: " + first);
    var second = Number((input1.value));
    console.log("second: " + second);
    var third = Number((input2.value));
    console.log("third: " + third);
    var fourth = Number((input3.value));
    console.log("fourth: " + fourth);
    var fifth = Number((input4.value));
    console.log("fifth: " + fifth);
    var sixth = Number((input5.value));
    console.log("sixth: " + sixth);
    var seventh = Number((input6.value));
    console.log("seventh: " + seventh);
    var eighth = Number((input7.value));
    console.log("eighth: " + eighth);
    var ninth = Number((input8.value));
    console.log("ninth: " + ninth);
    var tenth = Number((input9.value));
    console.log("tenth: " + tenth);

    var number = Number((numberVal.value));
    console.log("number: " + number);

    var inputSt = Number((inputStudent.value));
    console.log("inputSt: " + inputSt);

    var predPribor = Number((predPriborVal.value));
    console.log("predPribor: "+ predPribor);

    var sum = first + second + third + fourth + fifth + sixth + seventh + eighth + ninth + tenth;
    var average = sum / number;
    console.log("average: "+average);
    document.getElementById('average_class').innerHTML = average;

    let arr = [first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth];
    var deltaSum = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            var delta = arr[i] - average;
            var deltaSquare = Math.pow(delta, 2);
            deltaSum = deltaSquare + deltaSum;
        }
        console.log("deltaSquare: " + deltaSquare);
    }
    console.log("deltaSum: " + deltaSum);

    document.getElementById('deltaSum_class').innerHTML = deltaSum;

    var deltaSum_devide_on_number = deltaSum / (number - 1);
    var averageSquareError = Math.sqrt(deltaSum_devide_on_number);
    document.getElementById('averageSquareError').innerHTML = averageSquareError;

    var meanSquareArithmetic = (averageSquareError/ (Math.sqrt(number)))
    document.getElementById('meanSquareArithmetic').innerHTML = meanSquareArithmetic;

    var Xsluchayniy = inputSt * meanSquareArithmetic;
    document.getElementById('Xsluchayniy').innerHTML = Xsluchayniy;

    var Xpredelniy = (predPribor/(Math.sqrt(3)));

    var AbsoluteError = (Math.sqrt(Math.pow(Xpredelniy, 2) + Math.pow(Xsluchayniy, 2)));
    document.getElementById('AbsoluteError').innerHTML = AbsoluteError;

    document.getElementById('average_final').innerHTML = average;
    document.getElementById('Xsluchayniy_final').innerHTML = Xsluchayniy;
}
