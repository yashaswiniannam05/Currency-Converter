// To Access Everything that is needed
const BASE_URL = "https://v6.exchangerate-api.com/v6/a58466cf5fbe6184ae3bf7de/pair/";    // API Base Link
let mainDiv = document.querySelector(".main_div");    // To Access Main Div
let selects = document.querySelectorAll(".select");    // To Access both the Selection Lists
let from_select = document.querySelector("#from_select");    // For Accessing Selection list of from_currency
let to_select = document.querySelector("#to_select");    // For Accessing Selection list of to_currency
let conversionFormula = document.querySelector(".conversion_formula");    // For Accessing Conversion Formula
let actualConversion = document.querySelector(".actual_conversion");    // For Accessing Actual Conversion
let button = document.querySelector("#submitButton");    // To Access Button
let countryButton = document.querySelector("#country_button");    // To Access Country Button
let currencyCodeButton = document.querySelector("#currency_code_button");   // To Access Currency Code Button 


// To Create New Options and Make USD and INR Selected
for(let select of selects){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        select.append(newOption);
        // To make 'USD' selected in from_currency list
        if(select.id == "from_select" && currCode == "USD"){
            newOption.selected = "selected";
        }
        // To make 'INR' selected in to_currency list
        if(select.id == "to_select" && currCode == "INR"){
            newOption.selected = "selected";
        }

        // When Country Button is Clicked
        countryButton.addEventListener("click", () => {
            // To remove all options
            select.remove(newOption);
            info.forEach((countryOject)=>{
                let newCountryOption = document.createElement("option");
                newCountryOption.value = countryOject.currency_code;
                newCountryOption.innerText = countryOject.country_name;
                select.appendChild(newCountryOption);
                // To make 'United States of America' selected in from_currency list
                if(select.id == "from_select" && countryOject.country_name == "United States of America"){
                    newCountryOption.selected = "selected";
                }
                // To make 'India' selected in to_currency list
                if(select.id == "to_select" && countryOject.country_name == "India"){
                    newCountryOption.selected = "selected";
                }
            });   
        });

        // When Currency Code is Clicked
        currencyCodeButton.addEventListener("click", () => {
            // To remove all options
            select.innerHTML="";
            for(currCode in countryList){
                const newCurrencyCodeOption = document.createElement("option");
                newCurrencyCodeOption.value = currCode;
                newCurrencyCodeOption.innerText = currCode;
                select.appendChild(newCurrencyCodeOption);
                // To make 'United States of America' selected in from_currency list
                if(select.id == "from_select" && currCode == "USD"){
                    newCurrencyCodeOption.selected = "selected";
                }
                // To make 'India' selected in to_currency list
                if(select.id == "to_select" && currCode == "INR"){
                    newCurrencyCodeOption.selected = "selected";
                }
            };   
        });
    }

    
    // To Make Changes when from_currency and to_currency is changed
    select.addEventListener("change", (evt) => {
        updateFlagAndCurrencyName(evt.target);    // 'evt.target' is to get the actual phenomenon which is changed
    });                                // Here, '<select>' is changed
}


// To Change Flags according to the selected from_country and to_country
const updateFlagAndCurrencyName = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let image = element.parentElement.querySelector("img");    // Here, 'element' means <select>. So, its 
                                                            // parent Element from_div and to_div is selected 
                                                            // and their image tag is selected.
    image.src = `https://flagsapi.com/${countryCode}/flat/64.png`;    // Here, Image source link is change
                                                                        // according to the country code.
    info.forEach((countryObject)=>{
        let currencyName = countryObject.currency_name;
        if(countryObject.currency_code == currCode){
            let Div = element.parentElement.querySelector(".currency_name_div");
            Div.innerText = currencyName;
        }
    });
}


// To Add Action when 'Get Exchanged Rate' Button is clicked
button.addEventListener("click",(evt)=>{
    evt.preventDefault();    // To prevent all the default changes that occur when button is clicked
    updateExchangedRate();
});


// To Update Exchanged Rate
const updateExchangedRate = async () =>{
    let amount = document.querySelector("#input_amount");
    let amountValue = amount.value;
    if(amountValue=="" || amountValue <= 0){    // To set amount to 1 if input frame is empty or user has 
        amountValue = 1;                        // entered negative value or zero
        amount.value = 1;
    }
    const URL = `${BASE_URL}/${from_select.value}/${to_select.value}`;    // To make specific URL out of the
                                                                                // Base URL
    let Response = await fetch(URL);    // To Send the GET Request to the Currency Conversion API                                   
    let data = await Response.json();    // To convert Response into json format
    let rate = data["conversion_rate"];    // To get the rate by accessing the respective key in received data
    let final_rate = amountValue * rate;
    conversionFormula.innerText = `1 ${from_select.value} = ${rate} ${to_select.value}`;
    actualConversion.innerText = `${amountValue} ${from_select.value} = ${final_rate} ${to_select.value}`;
};


// To load the Basic Exchanged Rate Beforehand when the Window is loading at the start
window.addEventListener("load", () => {
    updateExchangedRate();
  });

// When Country Button is clicked
countryButton.addEventListener("click",()=>{
    mainDiv.style.width = "50%";
});

// When Currency Code Button is clicked
currencyCodeButton.addEventListener("click",()=>{
    mainDiv.style.width = "25%";
});