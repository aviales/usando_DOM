//Esto es el header

function headerDiv() {
    var body = document.querySelector('body')
    var divHeader = document.createElement("div")
    divHeader.classList.add("container")
    body.classList.add("bg-light", "container")
    body.appendChild(divHeader)

    divIntHeader = document.createElement("div")
    divIntHeader.classList.add("py-5", "text-center")
    divHeader.appendChild(divIntHeader)
    
}

function headerImage() {
    var headerImage = document.createElement("img")
    headerImage.src = "https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg"
    headerImage.alt = ""
    headerImage.width = "72"
    headerImage.height = "72"
    return headerImage
}

function headerTitle() {
    var headerTitle = document.createElement("h2")
    var titleText = document.createTextNode(`Checkout form`);
    headerTitle.appendChild(titleText)
    return headerTitle
}

function headerText() {
    var headerText = document.createElement("p")
    headerText.classList.add("lead")
    var paragraphText = document.createTextNode(`Below is an example form built entirely with Bootstrap’s
    form controls. Each required form group has a validation state that can be
    triggered by attempting to submit the form without completing it.`);
    headerText.appendChild(paragraphText)
    return headerText
}


function headerContent() {
    headerDiv()
    var intDiv = document.querySelector('div.text-center.py-5' )
    intDiv.appendChild(headerImage())
    intDiv.appendChild(headerTitle())
    intDiv.appendChild(headerText())
}


// fin header 

//Inicia el body del formulario

function mainFormDiv() {
    var body = document.querySelector('body')
    var mainFormDiv = document.createElement("div")
    mainFormDiv.classList.add("row")
    body.appendChild(mainFormDiv)

    var intFormDiv = document.createElement("div")
    intFormDiv.classList.add("col-md-4", "order-md-2", "mb-4")

    mainFormDiv.appendChild(intFormDiv)

    var infoFormDiv = document.createElement("div")
    infoFormDiv.classList.add("col-md-8", "order-md-1")
    mainFormDiv.appendChild(infoFormDiv)

    var title = document.createElement("h4")
    title.classList.add("mb-3")
    var titleText = document.createTextNode("Billing address");
    title.appendChild(titleText)
    infoFormDiv.appendChild(title)

    var infoForm = document.createElement("form")
    infoForm.classList.add("needs-validation")
    infoFormDiv.appendChild(infoForm)

    return mainFormDiv
}



function cartTitle() {
    var cartTitle = document.createElement("h4")
    cartTitle.classList.add("d-flex", "justify-content-between", "align-items-center", "mb-3")

    var firstTitleSpan = document.createElement("span")
    firstTitleSpan.classList.add("text-muted")
    var firstTextTitleSpan = document.createTextNode("Your cart");
    firstTitleSpan.appendChild(firstTextTitleSpan)
    
    cartTitle.appendChild(firstTitleSpan)

    var secondTitleSpan = document.createElement("span")
    secondTitleSpan.classList.add("badge", "badge-secondary", "badge-pill")
    var secondTextTitleSpan = document.createTextNode(`3`);
    secondTitleSpan.appendChild(secondTextTitleSpan)

    cartTitle.appendChild(secondTitleSpan)
    return cartTitle
}


function createLi(title, amount, promo, total) {

    var productDescription = document.createElement("li")
    productDescription.classList.add("list-group-item", "d-flex", "justify-content-between", "lh-condensed")
    var contentDiv = document.createElement("div")

    if (promo){
        contentDiv.classList.add("text-success")
    }
        
    productName = document.createElement("h6")
    productName.classList.add("my-0")
    var productTextname = document.createTextNode(title);
    productName.appendChild(productTextname)
    contentDiv.appendChild(productName)

    productDef = document.createElement("small")
    var descriptionText = "EXAMPLECODE"
    if (!promo) {
        productDef.classList.add("text-muted")
        descriptionText = "Brief description"
    }
    if (total) {
        descriptionText = ""
    }
    
    var productTextDef = document.createTextNode(descriptionText);
    productDef.appendChild(productTextDef)
    contentDiv.appendChild(productDef)

    var productAmount = document.createElement("span")
    productAmount.classList.add("text-muted")
    if (promo) {
        productAmount.className = "text-success"
    }
    var productTotalAmount = document.createTextNode(amount);
    productAmount.appendChild(productTotalAmount)

    productDescription.appendChild(contentDiv)
    productDescription.appendChild(productAmount)

    if (total){
        productAmount.className = ""
        var totalAmount = document.createElement("span")
        productDescription.appendChild(totalAmount)
    }
    return productDescription
}


function productList() {
    var productList = document.createElement("ul")
    productList.classList.add("list-group", "mb-3")

    productList.appendChild(createLi("Product name", "$12"))
    productList.appendChild(createLi("Second product", "$8"))
    productList.appendChild(createLi("Third item", "$5"))
    productList.appendChild(createLi("Promo code", "$5", true ))
    productList.appendChild(createLi("Total (USD)", "$20", false, true ))
    return productList

}

function promoForm(){
    var promoForm = document.createElement("form")
    promoForm.classList.add("card", "p-2")
    var promoFormDiv = document.createElement("div")
    promoFormDiv.classList.add("input-group")
    promoForm.appendChild(promoFormDiv)

    var formInput = document.createElement("input")
    formInput.classList.add("form-control")
    formInput.type = "text"
    formInput.placeholder = "Promo code"
    promoFormDiv.appendChild(formInput)

    var intformDiv = document.createElement("div")
    intformDiv.classList.add("input-group-append")
    promoFormDiv.appendChild(intformDiv)

    var promoButton = document.createElement("button")
    promoButton.classList.add("btn", "btn-secondary")
    promoButton.type = "submit"
    var promoButtonText = document.createTextNode("Redeem");
    promoButton.appendChild(promoButtonText)
    intformDiv.appendChild(promoButton)
    return promoForm
}




function firstRowName() {
    
    var firstRowDiv = document.createElement("div")
    firstRowDiv.classList.add("row")

    var firstNameDiv = document.createElement("div")
    firstNameDiv.classList.add("col-md-6", "mb-3")
    firstRowDiv.appendChild(firstNameDiv)

    var firstNameLabel = document.createElement("label")
    firstNameLabel.for = "firstName"
    var firstNameLabelText = document.createTextNode("First name");
    firstNameLabel.appendChild(firstNameLabelText)
    firstNameDiv.appendChild(firstNameLabel)

    var firstNameInput = document.createElement("input")
    firstNameInput.classList.add("form-control")
    firstNameInput.type = "text"
    firstNameInput.id = "firstName"
    firstNameInput.placeholder = ""
    firstNameDiv.appendChild(firstNameInput)

    var feedBackDiv = document.createElement("div")
    feedBackDiv.classList.add("invalid-feedback")
    var feedBacktext =  document.createTextNode("Valid first name is required.");
    feedBackDiv.appendChild(feedBacktext)
    firstNameDiv.appendChild(feedBackDiv)

    var lastNameDiv = document.createElement("div")
    lastNameDiv.classList.add("col-md-6", "mb-3")
    firstRowDiv.appendChild(lastNameDiv)

    var lastNameLabel = document.createElement("label")
    lastNameLabel.for = "lastName"
    var lastNameLabelText = document.createTextNode("Last name");
    lastNameLabel.appendChild(lastNameLabelText)
    lastNameDiv.appendChild(lastNameLabel)

    var lastNameInput = document.createElement("input")
    lastNameInput.classList.add("form-control")
    lastNameInput.type = "text"
    lastNameInput.id = "lastName"
    lastNameInput.placeholder = ""
    lastNameDiv.appendChild(lastNameInput)

    var lastFeedBackDiv = document.createElement("div")
    lastFeedBackDiv.classList.add("invalid-feedback")
    var lastfeedBacktext =  document.createTextNode("Valid last name is required.");
    lastFeedBackDiv.appendChild(lastfeedBacktext)
    lastNameDiv.appendChild(lastFeedBackDiv)

    return firstRowDiv
}

function personalInfo(username, email, address1, address2) {
    var usernameDiv = document.createElement("div")
    usernameDiv.classList.add("mb-3")

    
    var usernameLabel = document.createElement("label")
    usernameLabel.for = "username"
    var usernameTextLabe = "Username"




    if(email) {
        var innerSpan = document.createElement("span")
        innerSpan.classList.add("text-muted")
        var spanText = document.createTextNode(" (Optional)");
        innerSpan.appendChild(spanText)
        var usernameTextLabe = "Email"
        usernameLabel.for = "email"

        var usernameTextLabe =  document.createTextNode(usernameTextLabe);
        usernameLabel.appendChild(usernameTextLabe)
        usernameDiv.appendChild(usernameLabel)
        usernameLabel.appendChild(innerSpan)

        var inputInfo = document.createElement("input")
        inputInfo.classList.add("form-control") 
        inputInfo.type = "email"
        inputInfo.id = "email"
        inputInfo.placeholder = "you@example.com"
        usernameDiv.appendChild(inputInfo)

        var validationDiv = document.createElement("div")
        validationDiv.classList.add("invalid-feedback")
        var validText = document.createTextNode("Please enter a valid email address for shipping updates.");
        validationDiv.appendChild(validText)
        usernameDiv.appendChild(validationDiv)
        

    }

    if(address1) {

        var usernameTextLabe = "Address"
        usernameLabel.for = "address"

        var adressTextLabe =  document.createTextNode(usernameTextLabe);
        usernameLabel.appendChild(adressTextLabe)
        usernameDiv.appendChild(usernameLabel)

        var inputInfo = document.createElement("input")
        inputInfo.classList.add("form-control") 
        inputInfo.type = "text"
        inputInfo.id = "address"
        inputInfo.placeholder = "1234 Main St"
        usernameDiv.appendChild(inputInfo)

        var validationDiv = document.createElement("div")
        validationDiv.classList.add("invalid-feedback")
        var validText = document.createTextNode("Please enter your shipping address.");
        validationDiv.appendChild(validText)
        usernameDiv.appendChild(validationDiv)
        

    }

    if(address2) {

        var innerSpan = document.createElement("span")
        innerSpan.classList.add("text-muted")
        var spanText = document.createTextNode(" (Optional)");
        innerSpan.appendChild(spanText)
        var usernameTextLabe = "Address 2"
        usernameLabel.for = "address2"
        
        

        var adressTextLabe =  document.createTextNode(usernameTextLabe);
        usernameLabel.appendChild(adressTextLabe)
        usernameDiv.appendChild(usernameLabel)
        usernameLabel.appendChild(innerSpan)

        var inputInfo = document.createElement("input")
        inputInfo.classList.add("form-control") 
        inputInfo.type = "text"
        inputInfo.id = "address2"
        inputInfo.placeholder = "Apartment or suite"
        usernameDiv.appendChild(inputInfo)

        var validationDiv = document.createElement("div")
        validationDiv.classList.add("invalid-feedback")
        var validText = document.createTextNode("Please enter your shipping address.");
        validationDiv.appendChild(validText)
        usernameDiv.appendChild(validationDiv)
        

    }

    if (username){

        var intDivUsername = document.createElement("div")
        intDivUsername.classList.add("input-group")

        var usernameTextLabe =  document.createTextNode(usernameTextLabe);
        usernameLabel.appendChild(usernameTextLabe)
        usernameDiv.appendChild(usernameLabel)

        usernameDiv.appendChild(usernameLabel)
        usernameDiv.appendChild(intDivUsername)

        var spanDivUsername = document.createElement("div")
        spanDivUsername.classList.add("input-group-prepend")
        intDivUsername.appendChild(spanDivUsername)

        var spanUsername = document.createElement("span")
        spanUsername.classList.add("input-group-text") 
        var spanText = document.createTextNode("@");
        spanUsername.appendChild(spanText)
        intDivUsername.appendChild(spanUsername)

        var inputInfo = document.createElement("input")
        inputInfo.classList.add("form-control") 
        inputInfo.type = "text"
        inputInfo.id = "username"
        inputInfo.placeholder = "Username"
        intDivUsername.appendChild(inputInfo)

        var validationDiv = document.createElement("div")
        validationDiv.classList.add("invalid-feedback")
        validationDiv.style = "width: 100%;"
        var validText = document.createTextNode("Your username is required.");
        validationDiv.appendChild(validText)
        intDivUsername.appendChild(validationDiv)

    }

    return usernameDiv

}


function locationInfo(state) {

    var locationsDiv = document.createElement("div")
    locationDivClass = "col-md-5 mb-3"
    

    var locationLabel = document.createElement("label")
    var locationLabelFor = "country"
    var LabelText = "Country"
    
    var locationSelect = document.createElement("select")
    locationSelectClass = "custom-select", "d-block", "w-100"
    locationSelect.className = locationSelectClass
    var locationSelectId = "country"
    


    var firstInnerOption = document.createElement("option")
    firstInnerOption.value = ""
    var innerOptionText = "Choose..."
    var firstOptionText = document.createTextNode(innerOptionText);


    var secondInnerOption = document.createElement("option")
    var secondInnerOptionText = "United States"
    


    var validationDiv = document.createElement("div")
    validationDiv.classList.add("invalid-feedback")
    var validationText = "Please select a valid country."
    

    if (state) {
        locationDivClass = "col-md-4 mb-3"
        locationLabelFor = "state"
        LabelText = "State"
        locationSelectId = "state"
        secondInnerOptionText = "California"
        validationText = "Please provide a valid state."
    }

    locationsDiv.className = locationDivClass
    locationLabel.for = locationLabelFor
    var locationLabelForLabelText  = document.createTextNode(LabelText);
    locationSelect.id = locationSelectId
    var secondOptionText = document.createTextNode(secondInnerOptionText);
    var validText = document.createTextNode(validationText);
    
    locationLabel.appendChild(locationLabelForLabelText)
    locationsDiv.appendChild(locationLabel)
    locationsDiv.appendChild(locationSelect)
    firstInnerOption.appendChild(firstOptionText)
    locationSelect.appendChild(firstInnerOption)
    secondInnerOption.appendChild(secondOptionText)
    locationSelect.appendChild(secondInnerOption)
    validationDiv.appendChild(validText)
    locationsDiv.appendChild(validationDiv)

    return locationsDiv
}

function zip(){
    var locationDiv = document.createElement("div")
    var locationDivClass = "col-md-3 mb-3"
    locationDiv.className = locationDivClass

    var locationLabel = document.createElement("label")
    var locationLabelFor = "zip"
    locationLabel.for = locationLabelFor
    var zipLabelText = document.createTextNode("Zip");
    locationLabel.appendChild(zipLabelText)
    locationDiv.appendChild(locationLabel)

    var inputZip = document.createElement("input")
    inputZip.classList.add("form-control") 
    inputZip.type = "text"
    inputZip.id = "zip"
    inputZip.placeholder = ""
    locationDiv.appendChild(inputZip)
    
    var validationDiv = document.createElement("div")
    validationDiv.classList.add("invalid-feedback")
    var validationText = document.createTextNode("Zip code required.");
    validationDiv.appendChild(validationText) 
    locationDiv.appendChild(validationDiv)

    return locationDiv
}


function locationInfoList() {
    var mainRow = document.createElement("div")
    mainRow.classList.add("row")

    mainRow.appendChild(locationInfo())
    mainRow.appendChild(locationInfo(true))
    mainRow.appendChild(zip())
    return mainRow
}

function hr(){
    var hr = document.createElement("hr")
    hr.classList.add("mb-4")
    return hr
}

function customCheckboxes(secondCheckBox){
    var checkBoxDiv = document.createElement("div")
    checkBoxDiv.classList.add("custom-control", "custom-checkbox")

    var checkBoxInput = document.createElement("input")
    checkBoxInput.classList.add("custom-control-input")
    var checkBoxId = "same-address"

    var checkBoxLabel = document.createElement("label")
    checkBoxLabel.classList.add("custom-control-label")
    var checkBoxLabelFor = "same-address"
    var LabelText = "Shipping address is the same as my billing address"
    
    

    if(secondCheckBox) {
        checkBoxId = "save-info"
        checkBoxLabelFor = "save-info"
        LabelText = "Save this information for next time"
    }

    checkBoxInput.id = checkBoxId
    checkBoxDiv.appendChild(checkBoxInput)

    checkBoxLabel.for = checkBoxLabelFor
    var checkBoxLabelText = document.createTextNode(LabelText);
    checkBoxLabel.appendChild(checkBoxLabelText)
    checkBoxDiv.appendChild(checkBoxLabel)

    return checkBoxDiv
}

function paymentTitle(){
    var title = document.createElement("h4")
    title.classList.add("mb-3")
    var titleText = document.createTextNode("Payment");
    title.appendChild(titleText)

    return title
}

function paymentMethod(debit, paypal) {
    var paymentDiv = document.createElement("div")
    paymentDiv.classList.add("d-block", "my-3")

    var innerPayDiv = document.createElement("div")
    innerPayDiv.classList.add("custom-control", "custom-radio")
    paymentDiv.appendChild(innerPayDiv)


    var paymentInput = document.createElement("input")
    paymentInput.classList.add("custom-control-input")
    var inputId = "credit"
    paymentInput.name = "paymentMethod"
    paymentInput.type = "radio"


    var paymentLabel = document.createElement("label")
    paymentLabel.classList.add("custom-control-label")
    var payLabelFor = "credit"
    var payLabelText = "Credit card"

    if(debit) {
        inputId = "debit"
        payLabelFor = "debit"
        payLabelText = "Debit card"
    }

    if(paypal) {
        inputId = "paypal"
        payLabelFor = "paypal"
        payLabelText = "PayPal"
    }

    paymentInput.id = inputId
    innerPayDiv.appendChild(paymentInput)

    paymentLabel.for = payLabelFor
    var paymentLabelText = document.createTextNode(payLabelText);
    paymentLabel.appendChild(paymentLabelText)
    innerPayDiv.appendChild(paymentLabel)

    return paymentDiv

}

function creditCardInfo(cardName){

    var innerCreditDiv = document.createElement("div")
    innerCreditDiv.classList.add("col-md-6", "mb-3")
  

    var creditLabel = document.createElement("label")
    var creditLabelFor = "cc-number"
    var LabelText = "Credit card number"

    var creditInput = document.createElement("input")
    creditInput.classList.add("form-control")
    creditInput.type = "text"
    var inputId = "cc-number"
    creditInput.placeholder = ""

    if (cardName) {
        creditLabelFor = "cc-name"
        LabelText = "Name on card"
        inputId = "cc-name" 
    }

    creditLabel.for = creditLabelFor
    var creditLabelText = document.createTextNode(LabelText)
    creditLabel.appendChild(creditLabelText)
    innerCreditDiv.appendChild(creditLabel)

    creditInput.id = inputId
    innerCreditDiv.appendChild(creditInput)


    validDivText = "Credit card number is required"
    if (cardName) {
        var cardSmall = document.createElement("small")
        cardSmall.classList.add("text-muted")
        var cardSmallText = document.createTextNode("Full name as displayed on card")
        cardSmall.appendChild(cardSmallText)
        innerCreditDiv.appendChild(cardSmall)

        validDivText = "Name on card is required"
    }

    var validationDiv = document.createElement("div")
    validationDiv.classList.add("invalid-feedback")
    var validDivTextNode = document.createTextNode(validDivText)
    validationDiv.appendChild(validDivTextNode)

    innerCreditDiv.appendChild(validationDiv)

    return innerCreditDiv
}

function creaditCardInfoList(){

    var mainRowCredit = document.createElement("div")
    mainRowCredit.classList.add("row")

    mainRowCredit.appendChild(creditCardInfo(true))
    mainRowCredit.appendChild(creditCardInfo())

    return mainRowCredit
}


function CardSecretInfo(ccv) {

    var innerCreditSecretDiv = document.createElement("div")
    innerCreditSecretDiv.classList.add("col-md-3", "mb-3")

    var creditSecretLabel = document.createElement("label")
    var creditSecretLabelFor = "cc-expiration"
    var creditSecretLabelText = "Expiration"

    var creditSecretInput = document.createElement("input")
    creditSecretInput.classList.add("form-control")
    creditSecretInput.type = "text"
    creditSecretInput.placeholder = ""
    var secretInputId = "cc-expiration"

    var validDivText = "Expiration date required"
    
    if (ccv) {
        creditSecretLabelFor = "cc-cvv"
        creditSecretLabelText = "CVV"
        secretInputId = "cc-cvv"
        validDivText = "Security code required"
    }
    

    var SecretLabelText = document.createTextNode(creditSecretLabelText)
    creditSecretLabel.for = creditSecretLabelFor
    creditSecretLabel.appendChild(SecretLabelText)

    creditSecretInput.id = secretInputId


    var validationDiv = document.createElement("div")
    validationDiv.classList.add("invalid-feedback")
    var validDivTextNode = document.createTextNode(validDivText)
    validationDiv.appendChild(validDivTextNode)

    innerCreditSecretDiv.appendChild(creditSecretLabel)
    innerCreditSecretDiv.appendChild(creditSecretInput)
    innerCreditSecretDiv.appendChild(validationDiv)

    return innerCreditSecretDiv
}

function cardSecretInfoList(){
    
    var mainRowSecretCredit = document.createElement("div")
    mainRowSecretCredit.classList.add("row")

    mainRowSecretCredit.appendChild(CardSecretInfo())
    mainRowSecretCredit.appendChild(CardSecretInfo(true))

    return mainRowSecretCredit
}

function checkoutButton(){
    var checkoutButton = document.createElement("button")
    checkoutButton.type = "submit"
    checkoutButton.classList.add("btn", "btn-primary", "btn-lg", "btn-block")
    var checkoutButtonText = document.createTextNode("Continue to checkout")
    checkoutButton.appendChild(checkoutButtonText)

    return checkoutButton
}

function footerListLinks (terms, support){

    var footerIntElement = document.createElement("li")
    footerIntElement.className = "list-inline-item"

    var footerLink = document.createElement("a")
    footerLink.href = "#"

    var LinkText = "Privacy"

    if (terms) {
        LinkText = "Terms"
    }

    if (support) {
        LinkText = "Support"
    }
    
    var footerLinkText = document.createTextNode(LinkText)
    footerLink.appendChild(footerLinkText)

    footerIntElement.appendChild(footerLink)

    return footerIntElement

}

function footerInnerList() {
    var footerList = document.createElement("ul")
    footerList.className = "list-inline"

    footerList.appendChild(footerListLinks ())
    footerList.appendChild(footerListLinks (true))
    footerList.appendChild(footerListLinks (false, true))

    return footerList
}

function footerList(){
    var footer = document.createElement("footer")
    footer.classList.add("my-5", "pt-5", "text-muted", "text-center", "text-small")

    var footerTitle = document.createElement("p")
    footerTitle.className = "mb-1"
    var footerTitleText = document.createTextNode("\u00A9 2017-2019 Company Name")
    footerTitle.appendChild(footerTitleText)

    footer.appendChild(footerTitle)
    footer.appendChild(footerInnerList()) 
    
    return footer
}

function mainFormContent(){
    mainFormDiv()
    var productIntFormDiv = document.querySelector(".col-md-4.order-md-2.mb-4")
    productIntFormDiv.appendChild(cartTitle())
    productIntFormDiv.appendChild(productList())
    productIntFormDiv.appendChild(promoForm())

    var intFormDiv = document.querySelector(".needs-validation")
    intFormDiv.appendChild(firstRowName())
    intFormDiv.appendChild(personalInfo(true))
    intFormDiv.appendChild(personalInfo(false, true))
    intFormDiv.appendChild(personalInfo(false, false, true))
    intFormDiv.appendChild(personalInfo(false, false, false, true))


    intFormDiv.appendChild(locationInfoList())
    intFormDiv.appendChild(hr())

    intFormDiv.appendChild(customCheckboxes())
    intFormDiv.appendChild(customCheckboxes(true))
    intFormDiv.appendChild(hr())

    intFormDiv.appendChild(paymentTitle())
    intFormDiv.appendChild(paymentMethod())
    intFormDiv.appendChild(paymentMethod(true, false))
    intFormDiv.appendChild(paymentMethod(false, true))

    intFormDiv.appendChild(creaditCardInfoList())

    intFormDiv.appendChild(cardSecretInfoList())
    intFormDiv.appendChild(hr())
    intFormDiv.appendChild(checkoutButton())



}



function appendFooter(){
    var body = document.querySelector("body")
    body.appendChild(footerList())

}




headerContent()

mainFormContent()

appendFooter()


