new gridjs.Grid({
  columns: ["No.", "Problem Classification", "Interview Quote"],
  data: [
    ["1", "Weight", "'(It is) more likely to get backpain/spondylosis than radiation-related cancers.'"],
    ["2", "Weight", "'The worst part is how heavy the lead aprons are.'"],
    ["3", "Weight", "'Weight of the lead apron causes muscle strain, some bad enough to take hospitalisation leave for 2 weeks.'"],
    ["4", "Weight, Hygiene", "'Weight of the lead apron and hygiene concerns, we don't know how often they are cleaned. I prefer two-piece set but it's not always available; for taller surgeons, they have no choice but to wear the full-size gown.'"],
    ["5", "Weight, Mobility, Hygiene", "'Weight of the lead apron makes it hard to move, some senior surgeons find the thyroid shield too warm and uncomfortable and have decided not to wear it; we keep each other accountable but at the end of the day, everyone is responsible for their own body.'"],
    ["6", "Hygiene", "'Lead apron is worn underneath scrubs, it's really sweaty, and there's no time to clean it before scrubbing in.'"],
  ],
}).render(document.getElementById("table-1"));

new gridjs.Grid({
  columns: ["Apron", "0.50 mm Xenolite [11]", "0.50 mm Xenolite [11]", "0.50 mm Lead [12]", "0.50 mm Lead [12]"],
  data: [
    ["Energy level", "Transmission rate", "Density", "Transmission rate", "Density"],
    ["100keV", "6.2%", "5.40 kg/m2", "5%", "5.65 kg/m2"],
  ],
}).render(document.getElementById("table-2"));

new gridjs.Grid({
  columns: ["Category", "Criteria", "Rationale", "Metric", "Measurement"],
  data: [
    ["Efficacy", "Block at least 90% of potential radiation exposure", "Current alternatives to lead gowns provide less radiation protection.", "Percentage of radiation blocked (% radiation attenuation)", "Radiation shielding tests (e.g., using X-ray sources and radiation detectors)"],
    ["Usability", "Weight must not exceed 7 kg", "Current lead gowns weigh around 7 kg. Fatigue from this weight is the top complaint.", "Weight (kg)", "Weighing scale"],
    ["Usability", "Allow users to bend down with ease", "Enables surgeons to perform procedures comfortably.", "Maximum angle of bending without cracking", "Bend test"],
    ["Usability", "Comfortable to wear for at least 4 hours", "Prevents fatigue due to prolonged wear.", "Comfort rating (scale of 1-10)", "Subjective assessment by a panel of users"],
    ["Cost", "Not exceed 20% more than current lead aprons (SG$1,000)", "To remain appealing to key purchasing decision-makers (e.g., hospitals).", "Percentage cost increase (%)", "Market research and cost analysis"],
  ],
}).render(document.getElementById("table-3"));

new gridjs.Grid({
  columns: ["No.", "Functional Requirement", "Description", "Justification"],
  data: [
    ["1", "Radiation Protection", "Utilizing lead or non-lead composites that achieve the same protection levels as 0.50 mm Lead.", "Primary function of the gown is radiation protection."],
    ["2", "Weight Reduction", "Use lightweight, high-density materials that maintain radiation protection levels equivalent to traditional lead but with reduced mass.", "Reducing the overall weight of the gown helps minimize fatigue, allowing for better comfort and mobility. "],
    ["3", "Ease of Movement", "Flexible, elastic material at key movement areas, such as shoulders and hips, to allow freedom of motion.", "Enhanced mobility reduces fatigue and helps surgeons perform complex tasks without feeling restricted by their attire."],
    ["4", "Weight Support", "Incorporate structural reinforcements to help alleviate direct weight load on specific body areas, such as the shoulders and back.", "By transferring the gown's weight across a larger surface area or utilizing supportive components, strain on specific muscle groups is minimized."],
    ["5", "Weight Distribution System", "To evenly spread the gown’s weight across the wearer’s body.", "Distributing weight reduces localized fatigue and discomfort, especially for surgeons who wear heavy gowns for extended periods."],
    ["6", "Quick-Release Mechanism", "Integrate a quick-release mechanism for easy removal of the gown.", "This feature provides an efficient way to remove the gown in case of an emergency or when a rapid transition is required, saving time and enhancing safety."],
    ["7", "Ergonomic Design for Long Wear Duration", "Padding at pressure points (e.g., shoulders, neck) to enhance comfort for extended usage.", "Ergonomic padding distributes pressure and helps maintain comfort, supporting the user through longer procedures."],
    ["8", "Sweat Absorption and Comfort", "Moisture-wicking or antimicrobial linings that draw sweat away from the skin, keeping the wearer dry and comfortable.", "Long periods in PPE can cause perspiration, leading to discomfort and irritation. This feature helps prevent skin issues and discomfort from prolonged moisture exposure."],
    ["9", "Ventilation", "To enhance air circulation inside the gown, especially in heat-prone areas (e.g., back, underarms).", "Ventilation reduces heat accumulation and helps regulate the body temperature, preventing fatigue and discomfort caused by overheating. Improved airflow also decreases the likelihood of sweat buildup, which can make PPE uncomfortable over time."],
    ["10", "Size and Fit Adjustment", "Quick-release and adjustable closures or customizable Velcro panels to allow a tailored fit for different body types and sizes.", "Ill-fitting PPE can lead to discomfort, reduced mobility, and even safety hazards if improperly secured."]
  ],
}).render(document.getElementById("table-4"));

new gridjs.Grid({
  columns: ["Category", "Criteria", "Concept 1: 'LatticeGuard Pro'", "Concept 2: 'SuspendShield Flex'", "Concept 3: 'NanoTech ArtiFit'"],
  data: [
    ["Efficacy", "Block at least 90% of potential radiation exposure", "2", "1", "3"],
    ["Usability", "Weight must not exceed 7 kg", "2", "3", "1"],
    ["Usability", "Allow users to bend down with ease", "3", "1", "2"],
    ["Usability", "Comfortable to wear for at least 4 hours", "2", "3", "1"],
    ["Cost", "Not exceed 20% more than current lead aprons (SG$1,000)", "2", "3", "1"],
    ["Total", "", "11", "11", "8"]
  ],
}).render(document.getElementById("table-5"));

class TableComponent extends HTMLElement {
  static get observedAttributes() {
    return ["subtitle"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, _, newValue) {
    this[name] = newValue;
  }

  render() {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="container">
      <div class="caption">${this.subtitle}</div>
      <slot></slot>
    </div>
    <style>
      :host {
        display: block;
        text-align: center;
      }
      
      .container {
        display: flex;
        flex-direction: column;
      }

      .caption {
        font-size: 1rem;
        font-style: italic;
        margin-bottom: 1rem;
      }
    </style>
    `;
    
    this.shadowRoot.appendChild(div);
  }
}

customElements.define("table-component", TableComponent);
