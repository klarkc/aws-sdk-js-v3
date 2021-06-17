import { __awaiter, __generator } from "tslib";
import { defaultProvider as credentialProvider } from "@aws-sdk/credential-provider-node";
// Preprocessor needs to be a function
function createCredentialPreprocessor() {
    return function (content, file, done) {
        return __awaiter(this, void 0, void 0, function () {
            var fileName, region, credentials, regionCode, credentialsCode, isBrowser, contents, idx, i, line;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fileName = file.originalPath;
                        region = process.env.AWS_SMOKE_TEST_REGION || "";
                        return [4 /*yield*/, credentialProvider()()];
                    case 1:
                        credentials = _a.sent();
                        regionCode = "var defaultRegion = '" + region + "';";
                        credentialsCode = "var credentials = " + JSON.stringify(credentials) + ";";
                        isBrowser = "var isBrowser = true;";
                        contents = content.split("\n");
                        idx = -1;
                        for (i = 0; i < contents.length; i++) {
                            line = contents[i];
                            if (line.indexOf(fileName) !== -1) {
                                idx = i;
                                break;
                            }
                        }
                        contents.splice(idx + 1, 0, regionCode, credentialsCode, isBrowser);
                        done(contents.join("\n"));
                        return [2 /*return*/];
                }
            });
        });
    };
}
module.exports = {
    "preprocessor:credentials": ["factory", createCredentialPreprocessor],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxlQUFlLElBQUksa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUUxRixzQ0FBc0M7QUFDdEMsU0FBUyw0QkFBNEI7SUFDbkMsT0FBTyxVQUFnQixPQUFlLEVBQUUsSUFBUyxFQUFFLElBQStCOzs7Ozs7d0JBRTFFLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO3dCQUU3QixNQUFNLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsSUFBSSxFQUFFLENBQUM7d0JBQ25DLHFCQUFNLGtCQUFrQixFQUFFLEVBQUUsRUFBQTs7d0JBQTFDLFdBQVcsR0FBRyxTQUE0Qjt3QkFFMUMsVUFBVSxHQUFHLDBCQUF3QixNQUFNLE9BQUksQ0FBQzt3QkFDaEQsZUFBZSxHQUFHLHVCQUFxQixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxNQUFHLENBQUM7d0JBQ3RFLFNBQVMsR0FBRyx1QkFBdUIsQ0FBQzt3QkFDcEMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2pDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDYixLQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7NEJBQ2xDLElBQUksR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3pCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQ0FDakMsR0FBRyxHQUFHLENBQUMsQ0FBQztnQ0FDUixNQUFNOzZCQUNQO3lCQUNGO3dCQUNELFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxTQUFTLENBQUMsQ0FBQzt3QkFDcEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs7Ozs7S0FDM0IsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2YsMEJBQTBCLEVBQUUsQ0FBQyxTQUFTLEVBQUUsNEJBQTRCLENBQUM7Q0FDdEUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZmF1bHRQcm92aWRlciBhcyBjcmVkZW50aWFsUHJvdmlkZXIgfSBmcm9tIFwiQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlci1ub2RlXCI7XG5cbi8vIFByZXByb2Nlc3NvciBuZWVkcyB0byBiZSBhIGZ1bmN0aW9uXG5mdW5jdGlvbiBjcmVhdGVDcmVkZW50aWFsUHJlcHJvY2Vzc29yKCkge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gKGNvbnRlbnQ6IHN0cmluZywgZmlsZTogYW55LCBkb25lOiAoY29udGVudDogc3RyaW5nKSA9PiB2b2lkKSB7XG4gICAgLy8gc3RyaXAgdGhlIGV4dGVuc2lvbiBmcm9tIHRoZSBmaWxlIHNpbmNlIGl0IHdvbid0IG1hdGNoIHRoZSBwcmVwcm9jZXNzb3IgcGF0dGVyblxuICAgIGNvbnN0IGZpbGVOYW1lID0gZmlsZS5vcmlnaW5hbFBhdGg7XG4gICAgLy8gYWRkIHJlZ2lvbiBhbmQgY3JlZGVudGlhbHMgdG8gZWFjaCBmaWxlXG4gICAgY29uc3QgcmVnaW9uID0gcHJvY2Vzcy5lbnYuQVdTX1NNT0tFX1RFU1RfUkVHSU9OIHx8IFwiXCI7XG4gICAgY29uc3QgY3JlZGVudGlhbHMgPSBhd2FpdCBjcmVkZW50aWFsUHJvdmlkZXIoKSgpO1xuICAgIC8vIFRoaXMgd2lsbCBhZmZlY3QgdGhlIGdlbmVyYXRlZCAoRVM1KSBKU1xuICAgIGNvbnN0IHJlZ2lvbkNvZGUgPSBgdmFyIGRlZmF1bHRSZWdpb24gPSAnJHtyZWdpb259JztgO1xuICAgIGNvbnN0IGNyZWRlbnRpYWxzQ29kZSA9IGB2YXIgY3JlZGVudGlhbHMgPSAke0pTT04uc3RyaW5naWZ5KGNyZWRlbnRpYWxzKX07YDtcbiAgICBjb25zdCBpc0Jyb3dzZXIgPSBgdmFyIGlzQnJvd3NlciA9IHRydWU7YDtcbiAgICBjb25zdCBjb250ZW50cyA9IGNvbnRlbnQuc3BsaXQoXCJcXG5cIik7XG4gICAgbGV0IGlkeCA9IC0xO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpbmUgPSBjb250ZW50c1tpXTtcbiAgICAgIGlmIChsaW5lLmluZGV4T2YoZmlsZU5hbWUpICE9PSAtMSkge1xuICAgICAgICBpZHggPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgY29udGVudHMuc3BsaWNlKGlkeCArIDEsIDAsIHJlZ2lvbkNvZGUsIGNyZWRlbnRpYWxzQ29kZSwgaXNCcm93c2VyKTtcbiAgICBkb25lKGNvbnRlbnRzLmpvaW4oXCJcXG5cIikpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJwcmVwcm9jZXNzb3I6Y3JlZGVudGlhbHNcIjogW1wiZmFjdG9yeVwiLCBjcmVhdGVDcmVkZW50aWFsUHJlcHJvY2Vzc29yXSxcbn07XG4iXX0=