import { POLARITY } from './helpers';
import { postData } from './api';
import { validate } from './validation';

const id = (elmID) => document.getElementById(elmID);
const analyzeURL = id('url');
const result = id('response-result');
const loading = id('loading');

export const handleSubmit = (e) => {
  e.preventDefault();

  const url = analyzeURL?.value.trim();
  const formError = validate(url, 'The URL');

  if (formError) {
    alert(formError);
    return;
  }

  // Enabled loading state
  loading.style.display = 'flex';

  postData('/api', { url })
    .then((res) => {
      result.innerHTML = generateResultHTML(res);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      // Disabled loading state
      loading.style.display = 'none';
    });
};

const generateResultHTML = (res) => {
  return `
    <div class="table-row header">
      <div class="table-cell">Meaning cloud API res</div>
      <div class="table-cell"></div>
    </div>
    <div class="table-row">
      <div class="table-cell">Agreement</div>
      <div class="table-cell">${res.agreement}</div>
    </div>
    <div class="table-row">
      <div class="table-cell">Polarity</div>
      <div class="table-cell">${POLARITY[res.sourceTag] || 'N/A'}</div>
    </div>
    <div class="table-row">
      <div class="table-cell">Confidence</div>
      <div class="table-cell">${res.confidence}</div>
    </div>
    <div class="table-row">
      <div class="table-cell">Irony</div>
      <div class="table-cell">${res.irony}</div>
    </div>
    <div class="table-row">
    <div class="table-cell">Subjectivity</div>
    <div class="table-cell">${res.subjectivity}</div>
  </div>
  `;
};
