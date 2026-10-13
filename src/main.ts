/** What the page shows, from the project's first function. */
import { hello } from "./hello.ts";

document.getElementById("greeting")!.textContent = hello();
