/// <reference path="../typings/globals/jquery/index.d.ts" />
$(document).ready(function() {
    $("#education1").hide();
    $("#education2").hide();
    $("#education3").hide();
    $("#education4").hide();

    $("#edu1").click(function() {
        $("#education1").toggle();
    });

    $("#edu2").click(function() {
        $("#education2").toggle();
    });

    $("#edu3").click(function() {
        $("#education3").toggle();
    });

    $("#edu4").click(function() {
        $("#education4").toggle();
    });
});