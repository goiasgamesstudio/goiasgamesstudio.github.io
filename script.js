const contactButton = document.getElementById("contactButton");

if (contactButton) {
  contactButton.addEventListener("click", () => {
    const email = "contato@studioaurora.com";
    const subject = encodeURIComponent("Quero um orcamento");
    const body = encodeURIComponent("Oi! Vim pelo site e quero conversar sobre um projeto.");
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  });
}
