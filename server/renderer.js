import path from "path";
import fs from "fs";

const renderer = async (app, data, query) => {
	const indexFile = path.resolve("./build/index.html");
	return new Promise((resolve) => {
		fs.readFile(indexFile, "utf8", (err, content) => {
			if (err) {
				console.error("Server error:", err);
				return resolve({ err: "Server error" });
			}
			return resolve({
				html: content.replace(
					"<div id=\"root\"></div>",
					`<div id="root">${app}</div>
					<script>
						window.__DEFAULT_STATE__ = ${JSON.stringify(data).replace(/</g, "\\u003c")};
						window.__DEFAULT_QUERY__ = ${JSON.stringify(query).replace(/</g, "\\u003c")};
					</script>
					`
				)
			});
		});
	});
};

export default renderer;