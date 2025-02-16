document.addEventListener("DOMContentLoaded", function () {
  const variantSelectors = document.querySelectorAll(".variant-group");
  const variantSelect = document.querySelector("select[name='id']");

  function updateVariantSelection() {
    // Get selected values from all select dropdowns
    let selectedOptions = Array.from(variantSelectors).map(
      (select) => select.value
    );

    // Find the matching variant based on selected options
    let matchingVariant = Array.from(variantSelect.options).find((option) => {
      return option.text.trim() === selectedOptions.join(" / ");
    });

    // Update the hidden select dropdown
    if (matchingVariant) {
      variantSelect.value = matchingVariant.value;
    }
  }

  // Add event listeners to all variant dropdowns
  variantSelectors.forEach((select) => {
    select.addEventListener("change", updateVariantSelection);
  });

  // Initialize selection on page load
  updateVariantSelection();
});
