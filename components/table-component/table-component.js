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
