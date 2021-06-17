"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const credential_provider_node_1 = require("@aws-sdk/credential-provider-node");
// Preprocessor needs to be a function
function createCredentialPreprocessor() {
    return async function (content, file, done) {
        // strip the extension from the file since it won't match the preprocessor pattern
        const fileName = file.originalPath;
        // add region and credentials to each file
        const region = process.env.AWS_SMOKE_TEST_REGION || "";
        const credentials = await credential_provider_node_1.defaultProvider()();
        // This will affect the generated (ES5) JS
        const regionCode = `var defaultRegion = '${region}';`;
        const credentialsCode = `var credentials = ${JSON.stringify(credentials)};`;
        const isBrowser = `var isBrowser = true;`;
        const contents = content.split("\n");
        let idx = -1;
        for (let i = 0; i < contents.length; i++) {
            const line = contents[i];
            if (line.indexOf(fileName) !== -1) {
                idx = i;
                break;
            }
        }
        contents.splice(idx + 1, 0, regionCode, credentialsCode, isBrowser);
        done(contents.join("\n"));
    };
}
module.exports = {
    "preprocessor:credentials": ["factory", createCredentialPreprocessor],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnRkFBMEY7QUFFMUYsc0NBQXNDO0FBQ3RDLFNBQVMsNEJBQTRCO0lBQ25DLE9BQU8sS0FBSyxXQUFXLE9BQWUsRUFBRSxJQUFTLEVBQUUsSUFBK0I7UUFDaEYsa0ZBQWtGO1FBQ2xGLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDbkMsMENBQTBDO1FBQzFDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLElBQUksRUFBRSxDQUFDO1FBQ3ZELE1BQU0sV0FBVyxHQUFHLE1BQU0sMENBQWtCLEVBQUUsRUFBRSxDQUFDO1FBQ2pELDBDQUEwQztRQUMxQyxNQUFNLFVBQVUsR0FBRyx3QkFBd0IsTUFBTSxJQUFJLENBQUM7UUFDdEQsTUFBTSxlQUFlLEdBQUcscUJBQXFCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQztRQUM1RSxNQUFNLFNBQVMsR0FBRyx1QkFBdUIsQ0FBQztRQUMxQyxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEMsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDakMsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDUixNQUFNO2FBQ1A7U0FDRjtRQUNELFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2YsMEJBQTBCLEVBQUUsQ0FBQyxTQUFTLEVBQUUsNEJBQTRCLENBQUM7Q0FDdEUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZmF1bHRQcm92aWRlciBhcyBjcmVkZW50aWFsUHJvdmlkZXIgfSBmcm9tIFwiQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlci1ub2RlXCI7XG5cbi8vIFByZXByb2Nlc3NvciBuZWVkcyB0byBiZSBhIGZ1bmN0aW9uXG5mdW5jdGlvbiBjcmVhdGVDcmVkZW50aWFsUHJlcHJvY2Vzc29yKCkge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gKGNvbnRlbnQ6IHN0cmluZywgZmlsZTogYW55LCBkb25lOiAoY29udGVudDogc3RyaW5nKSA9PiB2b2lkKSB7XG4gICAgLy8gc3RyaXAgdGhlIGV4dGVuc2lvbiBmcm9tIHRoZSBmaWxlIHNpbmNlIGl0IHdvbid0IG1hdGNoIHRoZSBwcmVwcm9jZXNzb3IgcGF0dGVyblxuICAgIGNvbnN0IGZpbGVOYW1lID0gZmlsZS5vcmlnaW5hbFBhdGg7XG4gICAgLy8gYWRkIHJlZ2lvbiBhbmQgY3JlZGVudGlhbHMgdG8gZWFjaCBmaWxlXG4gICAgY29uc3QgcmVnaW9uID0gcHJvY2Vzcy5lbnYuQVdTX1NNT0tFX1RFU1RfUkVHSU9OIHx8IFwiXCI7XG4gICAgY29uc3QgY3JlZGVudGlhbHMgPSBhd2FpdCBjcmVkZW50aWFsUHJvdmlkZXIoKSgpO1xuICAgIC8vIFRoaXMgd2lsbCBhZmZlY3QgdGhlIGdlbmVyYXRlZCAoRVM1KSBKU1xuICAgIGNvbnN0IHJlZ2lvbkNvZGUgPSBgdmFyIGRlZmF1bHRSZWdpb24gPSAnJHtyZWdpb259JztgO1xuICAgIGNvbnN0IGNyZWRlbnRpYWxzQ29kZSA9IGB2YXIgY3JlZGVudGlhbHMgPSAke0pTT04uc3RyaW5naWZ5KGNyZWRlbnRpYWxzKX07YDtcbiAgICBjb25zdCBpc0Jyb3dzZXIgPSBgdmFyIGlzQnJvd3NlciA9IHRydWU7YDtcbiAgICBjb25zdCBjb250ZW50cyA9IGNvbnRlbnQuc3BsaXQoXCJcXG5cIik7XG4gICAgbGV0IGlkeCA9IC0xO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpbmUgPSBjb250ZW50c1tpXTtcbiAgICAgIGlmIChsaW5lLmluZGV4T2YoZmlsZU5hbWUpICE9PSAtMSkge1xuICAgICAgICBpZHggPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgY29udGVudHMuc3BsaWNlKGlkeCArIDEsIDAsIHJlZ2lvbkNvZGUsIGNyZWRlbnRpYWxzQ29kZSwgaXNCcm93c2VyKTtcbiAgICBkb25lKGNvbnRlbnRzLmpvaW4oXCJcXG5cIikpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJwcmVwcm9jZXNzb3I6Y3JlZGVudGlhbHNcIjogW1wiZmFjdG9yeVwiLCBjcmVhdGVDcmVkZW50aWFsUHJlcHJvY2Vzc29yXSxcbn07XG4iXX0=