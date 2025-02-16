document.addEventListener("DOMContentLoaded", function () {
  // Get all radio buttons inside the variant-group
  const radioButtons = document.querySelectorAll(
    ".variant-group input[type='radio']"
  );
  const variantSelect = document.querySelector("select[name='id']");

  radioButtons.forEach((radio) => {
    radio.addEventListener("change", function () {
      // Get selected options from all variant groups
      let selectedOptions = {};
      document
        .querySelectorAll(".variant-group input[type='radio']:checked")
        .forEach((selected) => {
          let optionName = selected.name;
          let optionValue = selected.value;
          selectedOptions[optionName] = optionValue;
        });

      // Find the matching variant based on selected options
      let matchingVariant = Array.from(variantSelect.options).find((option) => {
        return (
          option.text.trim() === Object.values(selectedOptions).join(" / ")
        );
      });

      // Update the select dropdown
      if (matchingVariant) {
        variantSelect.value = matchingVariant.value;
      }
    });
  });
});
