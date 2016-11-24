
var errorClass = 'Error';

$(document).ready(function () {
    //$(function () {
        //  hideMessage();
        $('#saveinterset').click(function (e) {

            e.preventDefault();
            //var url = $('#saveinterset').attr("data-url");
            if (ValidateForm()) {
                POSTMethodCall();
                PostForm();
            }
            else {
                ShowErrorMessage();
            }
        });


        var i = $('#projects-dd').val();
        if (i == "BelgradeWaterfront" || i == "CentenaryCity" || i == "Marsazayed" || i == "BabAlBahr" || i == "StRegis" || i == "MarassiAlBahrainBahrain") {
            $('#divid').show();
            // $('#divid2').hide();
        }
        //else if (i == "CentenaryCity")
        //{
        //    $('#divid').hide(); // hide the first one
        //    $('#divid2').show(); // show the other one

        //}

   // });
});

jQuery.support.cors = true;

function GetFields() {
    var NoOfBedroom = "";
    if ($("#chkbw_Studio").is(':checked')) {
        NoOfBedroom += $("#lblchkbw_Studio").html().trim() + ",";
    }
    if ($("#chkbw_bedroom_1").is(':checked')) {
        NoOfBedroom += $("#lblchkbw_bedroom_1").html().trim() + ",";
    }
    if ($("#chkbw_Bedroom_2").is(':checked')) {
        NoOfBedroom += $("#lblchkbw_Bedroom_2").html().trim() + ",";
    }
    if ($("#chkbw_Bedroom_3").is(':checked')) {
        NoOfBedroom += $("#lblchkbw_Bedroom_3").html().trim() + ",";
    }
    if ($("#chkbw_Bedroom_4Plus").is(':checked')) {
        NoOfBedroom += $("#lblchkbw_Bedroom_4Plus").html().trim() + ",";
    }
    if ($("#chkbw_Bedroom_5Plus").is(':checked')) {
        NoOfBedroom += $("#lblchkbw_Bedroom_5Plus").html().trim() + ",";
    }

    if (NoOfBedroom != "") {
        NoOfBedroom = NoOfBedroom.slice(0, -1);
    }

    return {
        salutation : $("#Title").val(),
    firstName : $("#firstname").val(),
    lastName : $("#lastname").val(),
    countrycode : $('option:selected', '#country').attr('code'),
    nationalitycode : $('option:selected', '#nationality').attr('code'),
    country : $("#country").val(),
    email : $("#email").val(),
    mobile : $("#mobile").val(),
    nationality : $("#nationality").val(),
    intrestedin : $("#projects-dd").val(),
    agegroup : $("#AgeGroup").val(),
    unittype : $("#UnitType").val(),
    PreferedCommunicationChannel : $("#PreferedCommunicationChannel").val(),
    InvestmentType : $("#InvestmentType").val(),
    NoOfBedroom : NoOfBedroom
}
   

}

function PostForm() {
    
    var field = GetFields();

    $.ajax({
        type: "Get",
        url: "/RegisterUser?title=" + field.salutation + "&firstName=" + field.firstName + "&lastName=" + field.lastName + "&country=" + field.country + "&email=" + field.email + "&mobile=" + field.mobile + "&nationality=" + field.nationality + "&interestedIn=" + field.intrestedin + "&ageGroup=" + field.agegroup + "&unitType=" + field.unittype + "&preferedCommunicationChannel=" + field.PreferedCommunicationChannel + "&investmentType=" + field.InvestmentType + "&offerings=" + field.NoOfBedroom,
       // contentType: "application/json; charset=utf-8",
       // dataType: "json",
        success: function (data) {
            if(data=="true")
            {
                $(".Thankyou").css("display", "block");
                $(".ErrorBox").css("display", "none");
                $('form').closest('form').find("input[type=text], textarea").val("");
                $('form').closest('form').find("select").val('0');
                $('form').closest('form').find("input[type=checkbox]").removeAttr('checked');
                
            }
        },
        error: ServiceFailed
    });


    //var form = $(document.forms[0]);
                    
    //var registerAction =  "/Register";
    //form.attr("action", registerAction);
    //form.submit();

}

function POSTMethodCall() {

    

    var field = GetFields();
	

    var LeadDetails = { "newLead": { "Salutation": field.salutation, "FirstName": field.firstName, "LastName": field.lastName, "CountryOfResidence": field.country, "CountryCode": "+" + field.countrycode, "Email": field.email, "MobileNumber": field.mobile, "Nationality": field.nationality, "NationalityCode": "+" + field.nationalitycode, "InterestedIn": field.intrestedin, "AgeGroup": field.agegroup, "UnitType": field.unittype, "PreferedCommunicationChannel": field.PreferedCommunicationChannel, "InvestmentType": field.InvestmentType, "NoOfBedrooms": field.NoOfBedroom, "Website": "www.eaglehills.com" } };

		var st = JSON.stringify(LeadDetails);
        //debugger;

        $.ajax({
            type: "POST",
            url: "http://151.253.7.114/CRMIntegrationServices/CRMWebsiteIntegrationService.svc/LeadPOST",
            data: JSON.stringify(LeadDetails),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                // Play with response returned in JSON format
             //   if (callBack != undefined)
              //      callBack();

                //alert(data.AddLeadResult);
                console.log(data.AddLeadResult);
            },
            error: ServiceFailed
        });

        return true;
    
}

function SuccessMsg(data) {
    alert("Success"+data.AddLeadResult);

}

function ServiceFailed(xhr) {
    alert("Fail"+xhr.responseText);

    if (xhr.responseText) {
        var err = xhr.responseText;
        if (err)
            error(err);
        else
            error({ Message: "Unknown server error." })
    }

    return;
}


function ValidateForm() {
    // Input fileds
    var title = $('#Title');
    var firstname = $('#firstname');
    var lastname = $('#lastname');
    var mobile = $('#mobile');
    var email = $('#email');

    var nationality = $('#nationality');
    //var country = $('#country');
    var unitType = $('#UnitType');
    var PreferedCommunicationChannel = $('#PreferedCommunicationChannel');
    //var InvestmentType = $('#InvestmentType');
    var InterestedIn = $('#projects-dd');

    //var belgradewaterfront = $('#chkbelgradewaterfront');
    //var centenarycity = $('#chkcentenarycity');
    //var abudhabicity = $('#chkabudhabicity');

    // Labels
    var lblTitle = $('#lbltitle');
    var lblfirstname = $('#lblfirstname');
    var lbllasttname = $('#lbllasttname');
    var lblmobile = $('#lblmobile');
    var lblemail = $('#lblemail');

    var lblnationality = $('#lblnationality');
    //var lblcountry = $('#lblcountry');
    var lblUnitType = $('#lblUnitType');
    var lblPreferedCommunicationChannel = $('#lblPreferedCommunicationChannel');
    //var lblInvestmentType = $('#lblInvestmentType');
    var lblInterestedIn = $('#lblInterestedIn');

    //var lblbelgradewaterfront = $('#lblbelgradewaterfront');
    //var lblcentenarycity = $('#lblcentenarycity');
    //var lblabudhabicity = $('#lblabudhabicity');

    var isvalid = true;
    isvalid = ValidateSelectBox(lblTitle, title);
    isvalid = ValidateInputText(lblfirstname, firstname) && isvalid;
    isvalid = ValidateName(lblfirstname, firstname) && isvalid;

    isvalid = ValidateInputText(lbllasttname, lastname) && isvalid;
    isvalid = ValidateName(lbllasttname, lastname) && isvalid;

    isvalid = ValidateInputText(lblmobile, mobile) && isvalid;
    isvalid = ValidateMobile(lblmobile, mobile) && isvalid;

    isvalid = ValidateInputText(lblemail, email) && isvalid;
    isvalid = ValidateEmail(lblemail, email) && isvalid;

    isvalid = ValidateSelectBox(lblnationality, nationality) && isvalid;
    isvalid = ValidateSelectBox(lblUnitType, unitType) && isvalid;
    isvalid = ValidateSelectBox(lblPreferedCommunicationChannel, PreferedCommunicationChannel) && isvalid;
    isvalid = ValidateSelectBox(lblInterestedIn, InterestedIn) && isvalid;
    var bw_bedroom1 = ($('#chkbw_bedroom_1') == false);
    var bw_bedroom2 = ($('#chkbw_bedroom_2') == false);

    if (InterestedIn.val() == 'BelgradeWaterfront' || InterestedIn.val() == 'CentenaryCity') {//$('#chkbw_bedroom_1').attr('checked')?true:false
        if ((!IsChecked('#chkbw_Studio') && !IsChecked('#chkbw_bedroom_1') && !IsChecked('#chkbw_Bedroom_2') && !IsChecked('#chkbw_Bedroom_3') && !IsChecked('#chkbw_Bedroom_4Plus') && !IsChecked('#chkbw_Bedroom_5Plus'))) {
            isvalid = false && isvalid;
            $('#divid .offerings').children('label').addClass("Error");
        }
        else {
            $('#divid .offerings').children('label').removeClass("Error");
        }
    }
   
    return isvalid;
   
}


function ValidateInputText(label, field) {
    if (field.val().trim().length < 1) {
        field.addClass(errorClass);
        field.attr('placeholder', 'THIS FIELD IS REQUIRED');
        label.addClass(errorClass);
        return false;
    }
    else {
        field.removeClass(errorClass);
        label.removeClass(errorClass);
        return true;
    }
}





function ValidateSelectBox(label, selectbox) {
    if ($("option:selected", selectbox).val().trim() == '' || $("option:selected", selectbox).val().trim() == '--') {
        label.addClass(errorClass);
        selectbox.addClass(errorClass);
        return false;
    }
    else {
        label.removeClass(errorClass);
        selectbox.removeClass(errorClass);
        return true;
    }
}

function IsChecked(checkboxId) {
    var isChecked = $(checkboxId).attr('checked') ? true : false;
    return isChecked;
}

function ValidateCheckbox(label, checkbox) {
    var isChecked = checkbox.is(':checked');
    if (isChecked == 'undefined' || isChecked == false) {
        label.addClass(errorClass);
        checkbox.addClass(errorClass);

        return false;
    }
    else {
        label.removeClass(errorClass);
        checkbox.removeClass(errorClass);

        return true;
    }
}

function ValidateEmail(label, field) {
    var re = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if (!field.val().match(re)) {
        field.addClass(errorClass);
        label.addClass(errorClass);
        return false;
    }
    else {

        field.removeClass(errorClass);
        label.removeClass(errorClass);
        return true;
    }
}



function ValidateName(label, field) {
    // var re = /^[a-zA-Z .]+$/;
    var re = /^(([a-zA-Z ]+)$|([ء-ي ]+)$)/;
    if (!field.val().match(re)) {
        field.addClass(errorClass);
        label.addClass(errorClass);
        return false;
    }
    else {

        field.removeClass(errorClass);
        label.removeClass(errorClass);
        return true;
    }
}

function ValidateMobile(label, field) {
    var re = /^\+?[\d]{6,20}$/;
    if (!field.val().match(re)) {
        field.addClass(errorClass);
        label.addClass(errorClass);
        return false;
    }
    else {

        field.removeClass(errorClass);
        label.removeClass(errorClass);
        return true;
    }
}

function SetErrorResponse(user) {
    // Input fileds
    var firstname = $('#firstname');
    var lastname = $('#lastname');
    var mobile = $('#mobile');
    var email = $('#email');

    var nationality = $('#nationality');
    var country = $('#country');

    //var belgradewaterfront = $('#belgradewaterfront');
    //var centenarycity = $('#centenarycity');
    //var abudhabicity = $('#abudhabicity');
    var PreferedCommunicationChannel = $('#PreferedCommunicationChannel');
    var InvestmentType = $('#InvestmentType');
    var InterestedIn = $('#InterestedIn');


    // Labels
    var lblfirstname = $('#lblfirstname');
    var lbllasttname = $('#lbllasttname');
    var lblmobile = $('#lblmobile');
    var lblemail = $('#lblemail');

    var lblnationality = $('#lblnationality');
    var lblcountry = $('#lblcountry');

    var lblPreferedCommunicationChannel = $('#lblPreferedCommunicationChannel');
    var lblInvestmentType = $('#lblInvestmentType');
    var lblInterestedIn = $('#lblInterestedIn');

    //var lblbelgradewaterfront = $('#lblbelgradewaterfront');
    //var lblcentenarycity = $('#lblcentenarycity');
    //var lblabudhabicity = $('#lblabudhabicity');

    SetInputError(user.ErrorFirstName, lblfirstname, firstname);
    SetInputError(user.ErrorLastName, lbllasttname, lastname);
    SetInputError(user.ErrorEmail, lblemail, email);
    SetInputError(user.ErrorMobile, lblmobile, mobile);

    SetSelectBoxError(user.ErrorCountry, lblcountry, country);
    SetSelectBoxError(user.ErrorNationality, lblnationality, nationality);

    SetSelectBoxError(user.ErrorNationality, lblPreferedCommunicationChannel, PreferedCommunicationChannel);
    SetSelectBoxError(user.ErrorNationality, lblInvestmentType, InvestmentType);
    SetSelectBoxError(user.ErrorNationality, lblInterestedIn, InterestedIn);

    //SetCheckboxError(user.ErrorBelgradeWaterfront, lblbelgradewaterfront, belgradewaterfront);
    //SetCheckboxError(user.ErroCentenaryCity, lblcentenarycity, centenarycity);
    //SetCheckboxError(user.ErrorAbuDhabiCity, lblabudhabicity, abudhabicity);

}

function SetInputError(value, label, field) {
    if (value > 0) {
        field.addClass(errorClass);
        label.addClass(errorClass);
        return false;
    }
    else {
        field.removeClass(errorClass);
        label.removeClass(errorClass);
        return true;
    }
}


function SetSelectBoxError(value, label, selectbox) {
    if (value > 0) {
        label.addClass(errorClass);
        selectbox.addClass(errorClass);
        return false;
    }
    else {
        label.removeClass(errorClass);
        selectbox.removeClass(errorClass);
        return true;
    }
}


function SetCheckboxError(value, label, checkbox) {

    if (value > 0) {
        label.addClass(errorClass);
        checkbox.addClass(errorClass);
        return false;
    }
    else {
        label.removeClass(errorClass);
        checkbox.removeClass(errorClass);

        return true;
    }
}

function EmptyInputFields() {
    var firstname = $('#firstname');
    var lastname = $('#lastname');
    var mobile = $('#mobile');
    var email = $('#email');

    var nationality = $('#nationality');
    var country = $('#country');

    var belgradewaterfront = $('#belgradewaterfront');
    var centenarycity = $('#centenarycity');
    var abudhabicity = $('#abudhabicity');

    firstname.val('');
    lastname.val('');
    mobile.val('');
    email.val('');

    nationality.val('--');
    country.val('--');

    belgradewaterfront.prop('checked', false);
    centenarycity.prop('checked', false);
    abudhabicity.prop('checked', false);
}
function ShowSuccessMessage() {
    $('.Thankyou').show();
    $('.ErrorBox').hide();
    $('#message').hide()
}

function ShowErrorMessage() {
    $('.Thankyou').hide();
    $('.ErrorBox').show();
    $('#message').hide()
}

function hideMessage() {
    $('.Thankyou').hide();
    $('.ErrorBox').hide();
    $('#message').show()

}