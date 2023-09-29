// JavaScript para mostrar y ocultar el tooltip
function showTooltip(element) {
    var tooltip = element.nextElementSibling;
    tooltip.style.display = "block";
}

function hideTooltip(element) {
    var tooltip = element.nextElementSibling;
    tooltip.style.display = "none";
}
