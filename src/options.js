document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('regex-form').addEventListener('submit', saveOptions);
document.getElementById('add-regex').addEventListener('click', addRegexField);

function addRegexField() {
  const div = document.createElement('div');
  div.innerHTML = `
    <input type="text" placeholder="Regular Expression" class="regex">
    <input type="text" placeholder="Link Format" class="link-format">
    <button type="button" class="remove-regex">Remove</button>
  `;
  document.getElementById('regex-list').appendChild(div);
  div.querySelector('.remove-regex').addEventListener('click', () => div.remove());
}

function saveOptions(e) {
  e.preventDefault();
  const regexes = [];
  document.querySelectorAll('#regex-list > div').forEach(div => {
    const regex = div.querySelector('.regex').value;
    const linkFormat = div.querySelector('.link-format').value;
    regexes.push({ regex, linkFormat });
  });
  chrome.storage.sync.set({ regexes }, () => alert('Options saved.'));
}

function restoreOptions() {
  chrome.storage.sync.get('regexes', (data) => {
    if (data.regexes) {
      data.regexes.forEach(({ regex, linkFormat }) => {
        addRegexField();
        const div = document.getElementById('regex-list').lastChild;
        div.querySelector('.regex').value = regex;
        div.querySelector('.link-format').value = linkFormat;
      });
    }
  });
}