import { sep } from "path";
import { copyFile } from "fs/promises";

const targetPath = [__dirname, "..", "..", "media"].join(sep);

export function moveFile(source: string) {
    return copyFile(source, targetPath);
}