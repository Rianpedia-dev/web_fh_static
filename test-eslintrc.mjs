import { FlatCompat } from "@eslint/eslintrc";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

try {
    const compat = new FlatCompat({
        baseDirectory: __dirname,
    });
    const result = compat.extends("next/core-web-vitals", "next/typescript");
    console.log("FlatCompat successful, result is array:", Array.isArray(result));
    console.log("First item keys:", Object.keys(result[0] || {}));
} catch (e) {
    console.error("FlatCompat failed:", e.message);
}
