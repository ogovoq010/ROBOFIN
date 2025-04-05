$(document).ready(function () {

    const RATES = {
        UAH: 1,
        USD: 42,
        EUR: 45,
        PLN: 10
    };

    $("#convert").click(function (e) {
        e.preventDefault();

        let amount = parseFloat($("#amount").val());
        let fromCurrency = $("#from-currency").val();
        let toCurrency = $("#to-currency").val();

        if (isNaN(amount) || amount <= 0) {
            alert("Будь ласка, додайте можливу кількість.");
            return;
        }

        var convertedAmount = (amount * RATES[fromCurrency]) / RATES[toCurrency];
        $("#conversion-result").text(`${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`);
    });

    const DOLLAR_RATE = 42; 
    const EURO_RATE = 45; 
    const ZLOTY_RATE = 10; 

    $("#add").click(function (e) { 
        e.preventDefault();
        
        let name = $("#nameinput").val();
        let quantity = $("#input-quantity").val();
        let price = $("#input-price").val();
        let total = quantity * price;
        let totalInDollars = total / DOLLAR_RATE; 
        let comment = $("#input-comment").val();

        if (!name || !quantity || !price) {
            alert("Будь ласка, заповніть всі поля.");
            return;
        }
        if (isNaN(price) || price <= 0) {
            alert("Будь ласка, додайте можливу ціну.");
            return;
        }

        let newTableRow = `
            <tr class="table-row">
                <td>${name}</td>
                <td>${quantity}</td>
                <td>${price}₴</td>
                <td>${total}₴</td>
                <td>${totalInDollars.toFixed(2)}$</td>
                <td>${comment}</td>
            </tr>
        `;
        $(".fintable").append(newTableRow);
    });

    $("#reset").click(function (e) { 
        e.preventDefault();
        $(".table-row").remove();
    });

    $(".lesson-header").click(function(){
        $(this).next(".lesson-content").slideToggle();
    });
});
