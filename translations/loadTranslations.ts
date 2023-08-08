import fs from "fs";
import path from "path";

export const loadTranslations = (fileName: string): Object => {
    const filePath = path.join(__dirname, fileName);
    const translations = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(translations);
};
