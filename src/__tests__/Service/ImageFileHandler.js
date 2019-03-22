import fs from "fs";
import path from "path";
import { moveFile } from "../../Service/ImageFileHandler";

jest.mock("fs");

const testFileName = "testFile.txt";
const sourceFile = __dirname + path.sep + testFileName;
const targetFile = path.sep + "media" + path.sep + testFileName;


beforeEach((done) => {
    fs.writeFile(sourceFile, "contenido de prueba", "UTF8", done);
});

// afterEach((done) => {
//     fs.unlink(sourceFile, () => {
//         fs.unlink(targetFile, () => done);
//     });
// })

test("image is moved", () => {
    return moveFile(sourceFile)
        .then(() => {
            fs.access(targetFile, (err) => {
                expect(err).toBeFalsy();
            })
        });
});