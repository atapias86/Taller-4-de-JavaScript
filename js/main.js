function pra_alum(cant_alum) {
    document.querySelector("#dataTable_calif").innerHTML = "";
    document.querySelector("#form_03").reset();
    favDialog_03.showModal();
    favDialog_03.dataset.calif = cant_alum;
}
function parametro_num(parametro) {
    document.querySelector("#form_05").reset();
    favDialog_05.showModal();
    favDialog_05.dataset.ciclo = parametro;
}

addEventListener("DOMContentLoaded", (e) => {
    const favDialog_03 = document.getElementById('favDialog_03');
    const favDialog_05 = document.getElementById('favDialog_05');
    const favDialog_ejer06 = document.getElementById('favDialog_ejer06');
    const favDialog_09 = document.getElementById('favDialog_09');
    const favDialog_ejer08 = document.getElementById('favDialog_ejer08');

    let calcular_ejer1 = document.querySelector("#form_01");
    let formdialogo_ejer_02 = document.querySelector("#btn_incio_ejer02");
    let calcular_ejer03 = document.querySelector("#form_03");
    let formdialogo_ejer_03 = document.querySelector("#dialog_03");
    let formdialogo_ejer_04 = document.querySelector("#btn_incio_ejer04");
    let calcular_ejer05 = document.querySelector("#form_05");
    let formdialogo_ejer_05 = document.querySelector("#dialog_05");
    let calcular_ejer06 = document.querySelector("#btn_incio_ejer06");
    let formdialogo_ejer_06 = document.querySelector("#dialogo_06");
    let calcular_ejer07 = document.querySelector("#form_07");
    let calcular_ejer08 = document.querySelector("#btn_incio_ejer08");
    let formdialogo_ejer_08 = document.querySelector("#dialogo_08");

    calcular_ejer1.addEventListener("submit", (e) => {
        e.preventDefault();
        let numero = parseInt(document.querySelector("#numero_mult").value);
        document.querySelector("#form_01").reset();
        document.querySelector("#dataTable_multi").innerHTML = "";
        let cont = 12;
        for (var i = 0; i <= cont; i++) {
            let resul = numero * i;
            let plantillas = `
            <tr>
                <td>${numero}</td>
                <td>${i}</td>
                <td>${resul}</td>
            </tr>`;
            document.querySelector("#dataTable_multi").insertAdjacentHTML("beforeend", plantillas);
        }

    });
    formdialogo_ejer_02.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("#dataTable_serie").innerHTML = "";
        let par = 1;
        let impar = 0;
        for (var i = 0; i < 11; i++) {
            impar = par + 4;
            console.log(impar);
            par = impar - 2
            let plantillas = `
            <tr>
                <td>${impar}</td>
            </tr>
            <tr>
                <td>${par}</td>
            </tr>
            `;
            document.querySelector("#dataTable_serie").insertAdjacentHTML("beforeend", plantillas);
        }
    });
    let sum_cal = 0;
    let num_encues = 0;
    let max = 0;
    let min = 0;
    calcular_ejer03.addEventListener("submit", (e) => {
        e.preventDefault();
        let cant_alum = parseInt(document.querySelector("#cant_alum").value);
        pra_alum(cant_alum);
        console.log(cant_alum);
    });
    formdialogo_ejer_03.addEventListener("submit", (e) => {
        e.preventDefault();
        let num = Number(favDialog_03.dataset.calif);
        let data = Object.fromEntries(new FormData(e.target));
        let cal = Number(data.clificasion);

        if (cal >= 1 && cal <= 10) {
            sum_cal += cal;
            num_encues++;
            if (Math.max(cal)) {
                max = cal;
            } else if (Math.min(cal)) {
                min = cal;
            }
        }
        num--;
        if (num) {
            if (cal == 0) {
                formdialogo_ejer_03.reset();
                favDialog_03.close();
            } else {
                formdialogo_ejer_03.reset();
                favDialog_03.dataset.calif = num;
                favDialog_03.close();
                setTimeout(() => {
                    favDialog_03.showModal();
                }, 500);
            }
        } else {
            formdialogo_ejer_03.reset();
            favDialog_03.close();
            let prom = ""
            let plantillas = `
            <tr>
                <td>${max}</td>
                <td>${min}</td>
                <td>${sum_cal}</td>
                <td>${num_encues}</td>
            </tr>
            <tr>
                <td>${"numero de encuestados"}</td>
                <td>${min}</td>
                <td>${sum_cal}</td>
                <td>${num_encues}</td>
            </tr>
            `
                ;
            document.querySelector("#dataTable_calif").insertAdjacentHTML("beforeend", plantillas);
        }
    });
    formdialogo_ejer_04.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("#dataTable_cota").innerHTML = "";
        let men = 10;
        let total = 0;
        for (var i = 1; i <= 20; i++) {
            men = men * 2;
            console.log(men);
            total += men;
            let plantillas = `
            <tr>
                <td>${i}</td>
                <td>${men}</td>
            </tr>`;
            document.querySelector("#dataTable_cota").insertAdjacentHTML("beforeend", plantillas);
        }
        let plantillas = `
            <tr>
                <td>${'Total a pagar por 20 meses'}</td>
                <td>${total}</td>
            </tr>`;
        document.querySelector("#dataTable_cota").insertAdjacentHTML("beforeend", plantillas);
    });

    let cate1 = 0;
    let cate2 = 0;
    let cate3 = 0;
    calcular_ejer05.addEventListener("submit", (e) => {
        e.preventDefault();
        let parametro = parseInt(document.querySelector("#parametro").value);
        parametro_num(parametro);
    });
    formdialogo_ejer_05.addEventListener("submit", (e) => {
        e.preventDefault();
        let num = Number(favDialog_05.dataset.ciclo);
        let data = Object.fromEntries(new FormData(e.target));
        let valor = Number(data.valor);
        if (valor > 1000) {
            cate1 += valor;
        } else if (valor > 500 && valor <= 1000) {
            cate2 += valor;
        } else if (valor <= 500) {
            cate3 += valor;
        }

        num--;
        if (num) {
            formdialogo_ejer_05.reset();
            favDialog_05.dataset.ciclo = num;
            favDialog_05.close();
            setTimeout(() => {
                favDialog_05.showModal();
            }, 500);

        } else {
            formdialogo_ejer_05.reset();
            favDialog_05.close();
            let mato_total = (cate1 + cate2 + cate3);
            let plantillas = `
            <tr>
                <td>${'Categoria 1'}</td>
                <td>${cate1}</td>
            </tr>
            <tr>
                <td>${'Categoria 2'}</td>
                <td>${cate2}</td>
            </tr>
            <tr>
                <td>${'Categoria 3'}</td>
                <td>${cate3}</td>
            </tr>
            <tr>
                <td>${'Monto global'}</td>
                <td>${mato_total}</td>
            </tr>
            `;
            document.querySelector("#dataTable_categoria").insertAdjacentHTML("beforeend", plantillas);
            cate1 = 0; cate2 = 0; cate3 = 0;
        }
    });

    let cont = 1;
    calcular_ejer06.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("#dataTable_oprac").innerHTML = "";
        favDialog_ejer06.showModal();
    });
    formdialogo_ejer_06.addEventListener("submit", (e) => {
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target))
        let num = Number(formdialogo_ejer_06.dataset.opreract);
        let nombre = data.nombre_trabajador;
        let opc = document.querySelector("#opc_servicio").value;
        let aumento = "";
        if (opc == "1 a 5 años") {
            aumento = "100 pesos"
        } else if (opc == "5 a 10 años") {
            aumento = "250 pesos"
        } else if (opc == "10 a 20 años") {
            aumento = "400 pesos"
        } else if (opc == "20 años a más") {
            aumento = "550 pesos"
        }

        let plantillas = `
            <tr>
                <td>${cont}</td>
                <td>${nombre}</td>
                <td>${opc}</td>
                <td>${aumento}</td>
            </tr>`;
        document.querySelector("#dataTable_oprac").insertAdjacentHTML("beforeend", plantillas);

        if (num > cont) {
            formdialogo_ejer_06.reset();
            cont++;
        } else {
            favDialog_ejer06.close();
            formdialogo_ejer_06.reset();
            cont = 1;
        }
    });

    calcular_ejer07.addEventListener("submit", (e) => {
        e.preventDefault();
        let resultado = document.querySelector("#text_resultado_ejer07")
        let signo = 1;
        let pi = 3.14;
        let ang = document.querySelector("#max_exp").value;
        let rad = document.querySelector("#ang_rad").value;
        let x = rad * (180 / pi);
        let sen = x;

        for (var i = 1; i <= ang; i++) {
            let a = 1;
            let b = 1;
            while (a <= i) {
                b = b * a;
                a = a + 1;
            }
            if (signo % 2 == 1) {

                sen = sen - ((x ** i) / b);

            } else {

                sen = sen + ((x ** i) / b);
            }
            signo += 1;
        }
        resultado.value = 'El seno es de: ' + sen
    });

    let con = 1;
    calcular_ejer08.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("#dataTable_mates").innerHTML = "";
        favDialog_ejer08.showModal();
    });
    formdialogo_ejer_08.addEventListener("submit", (e) => {
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target))
        let num = Number(formdialogo_ejer_08.dataset.mates);
        let num1 = Number(data.num_1);
        let num2 = Number(data.num_2);
        let sum = num1 + num2;
        let rest = num1 - num2;
        let mult = num1 * num2;
        let div = num1 / num2;
        let plantillas = `
            <tr>
                <td>${con}</td>
                <td>${sum}</td>
                <td>${rest}</td>
                <td>${mult}</td>
                <td>${div}</td>
            </tr>`;
        document.querySelector("#dataTable_mates").insertAdjacentHTML("beforeend", plantillas);
        if (num > con) {
            formdialogo_ejer_08.reset();
            con++;
        } else {
            favDialog_ejer08.close();
            formdialogo_ejer_08.reset();
            con = 1;
        }
    });
    formdialogo_ejer_08.addEventListener("submit", (e) => {
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target))
        let num = Number(formdialogo_ejer_08.dataset.mates);
        let num1 = Number(data.num_1);
        let num2 = Number(data.num_2);
        let sum = num1 + num2;
        let rest = num1 - num2;
        let mult = num1 * num2;
        let div = num1 / num2;
        let plantillas = `
            <tr>
                <td>${con}</td>
                <td>${sum}</td>
                <td>${rest}</td>
                <td>${mult}</td>
                <td>${div}</td>
            </tr>`;
        document.querySelector("#dataTable_mates").insertAdjacentHTML("beforeend", plantillas);
        if (num > con) {
            formdialogo_ejer_08.reset();
            con++;
        } else {
            favDialog_ejer08.close();
            formdialogo_ejer_08.reset();
            con = 1;
        }
    });
});