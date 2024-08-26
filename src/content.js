chrome.storage.sync.get('regexes', (data) => {
	if (data.regexes) {
		data.regexes.forEach(({ regex, linkFormat }) => {
			const regexObj = new RegExp(regex, 'g');
			document.body.innerHTML = document.body.innerHTML.replace(regexObj, (match, ...groups) => {
				let link = linkFormat;
				groups.forEach((group, index) => {
				link = link.replace(`$${index + 1}`, group);
				});
				return `<a href="${link}">${match}</a>`;
			});
		});
	}
});