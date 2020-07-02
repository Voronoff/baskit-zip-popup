var zip_popup_button = document.getElementById("baskitZipPopupButton");
var zip_popup_modal = document.getElementById("baskitZipPopupModal");
var zip_popup_initial = document.getElementById("baskitZipPopupInitial");
var zip_popup_success = document.getElementById("baskitZipPopupSuccess");
var zip_popup_failure = document.getElementById("baskitZipPopupFailure");
var zip_popup_input_button = document.getElementById("baskitZipPopupInputButton");
var zip_popup_input = document.getElementById("baskitZipPopupInput");

var zip_popup_zipcodes = [94505, 94601, 94597, 94604, 94605, 94502, 94602, 94503, 94603, 
    94589, 94587, 94588, 95628, 94514, 94618, 94403, 94621, 95035, 94619, 94609, 
    94501, 94608, 94607, 94606, 94613, 94612, 93292, 94611, 94610, 94661, 94702, 
    94703, 94704, 94705, 94660, 95666, 94806, 94707, 94706, 94709, 94708, 94062, 
    94710, 94720, 94577, 94580, 94578, 95129, 95128, 94579, 94586, 94582, 94557, 
    94555, 94560, 94558, 94565, 94568, 94566, 94537, 94538, 94539, 94541, 94542, 
    94544, 94545, 95391, 94546, 95603, 94550, 94551, 94552, 95377, 95376, 94536];

zip_popup_button.onclick = function() {
    zip_popup_modal.style.display = "block";
}   

window.onclick = function(event) {
    if (event.target == zip_popup_modal) {
      zip_popup_modal.style.display = "none";
      zip_popup_initial.style.display = "block";
      zip_popup_success.style.display = "none";
      zip_popup_failure.style.display = "none";
    }
}
  
zip_popup_input_button.onclick = function(){
    check_zip_codes();
};

zip_popup_input.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        check_zip_codes();
    }
});

function check_zip_codes() {
    if(zip_popup_zipcodes.includes(parseInt(zip_popup_input.value))) {
        zip_popup_success.style.display = "block";
    }else{
        zip_popup_failure.style.display = "block";
    }
    zip_popup_initial.style.display = "none";
};