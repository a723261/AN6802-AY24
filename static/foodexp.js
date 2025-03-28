function perdict_food_exp() {
    const salary=document.getElementById("salary").value
    console.log("salary")
    document.getElementById("foodexp").innerText = 
    "predecited food exp" + ((salary*0.4851)+147.4)
}