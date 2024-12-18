(function main(){
	const copyButtonLabel = "copy";
	async function copyCode(block) {
		let code = block.querySelector("code");
		let text = code.innerText;
		await navigator.clipboard.writeText(text);
	}
	let blocks = document.querySelectorAll("div.highlight.copy > pre");
	blocks.forEach((block) => {
		let supportsClipboardAPI = Boolean(navigator.clipboard)
		if (supportsClipboardAPI) {
			let button = document.createElement("button");

			button.innerText = copyButtonLabel;
			block.appendChild(button);

			button.addEventListener("click", async () => {
				await copyCode(block);
			});
		}
	});

}())