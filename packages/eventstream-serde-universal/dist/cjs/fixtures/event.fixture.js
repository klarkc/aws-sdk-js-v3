"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exception = exports.endEventMessage = exports.statsEventMessage = exports.recordEventMessage = void 0;
exports.recordEventMessage = Buffer.from("AAAA0AAAAFX31gVLDTptZXNzYWdlLXR5cGUHAAVldmVudAs6ZXZlbnQtdHlwZQcAB1JlY29yZHMNOmNvbnRlbnQtdHlwZQcAGGFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbTEsRm9vLFdoZW4gbGlmZSBnaXZlcyB5b3UgZm9vLi4uCjIsQmFyLG1ha2UgQmFyIQozLEZpenosU29tZXRpbWVzIHBhaXJlZCB3aXRoLi4uCjQsQnV6eix0aGUgaW5mYW1vdXMgQnV6eiEKzxKeSw==", "base64");
exports.statsEventMessage = Buffer.from("AAAA0QAAAEM+YpmqDTptZXNzYWdlLXR5cGUHAAVldmVudAs6ZXZlbnQtdHlwZQcABVN0YXRzDTpjb250ZW50LXR5cGUHAAh0ZXh0L3htbDxTdGF0cyB4bWxucz0iIj48Qnl0ZXNTY2FubmVkPjEyNjwvQnl0ZXNTY2FubmVkPjxCeXRlc1Byb2Nlc3NlZD4xMjY8L0J5dGVzUHJvY2Vzc2VkPjxCeXRlc1JldHVybmVkPjEwNzwvQnl0ZXNSZXR1cm5lZD48L1N0YXRzPiJ0pLk=", "base64");
exports.endEventMessage = Buffer.from("AAAAOAAAACjBxoTUDTptZXNzYWdlLXR5cGUHAAVldmVudAs6ZXZlbnQtdHlwZQcAA0VuZM+X05I=", "base64");
exports.exception = Buffer.from("AAAAtgAAAF8BcW64DTpjb250ZW50LXR5cGUHABhhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0NOm1lc3NhZ2UtdHlwZQcACWV4Y2VwdGlvbg86ZXhjZXB0aW9uLXR5cGUHAAlFeGNlcHRpb25UaGlzIGlzIGEgbW9kZWxlZCBleGNlcHRpb24gZXZlbnQgdGhhdCB3b3VsZCBiZSB0aHJvd24gaW4gZGVzZXJpYWxpemVyLj6Gc60=", "base64");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQuZml4dHVyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9maXh0dXJlcy9ldmVudC5maXh0dXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FDM0MsMFJBQTBSLEVBQzFSLFFBQVEsQ0FDVCxDQUFDO0FBRVcsUUFBQSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUMxQywwUkFBMFIsRUFDMVIsUUFBUSxDQUNULENBQUM7QUFFVyxRQUFBLGVBQWUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUN4Qyw4RUFBOEUsRUFDOUUsUUFBUSxDQUNULENBQUM7QUFFVyxRQUFBLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUNsQyxzUEFBc1AsRUFDdFAsUUFBUSxDQUNULENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcmVjb3JkRXZlbnRNZXNzYWdlID0gQnVmZmVyLmZyb20oXG4gIFwiQUFBQTBBQUFBRlgzMWdWTERUcHRaWE56WVdkbExYUjVjR1VIQUFWbGRtVnVkQXM2WlhabGJuUXRkSGx3WlFjQUIxSmxZMjl5WkhNTk9tTnZiblJsYm5RdGRIbHdaUWNBR0dGd2NHeHBZMkYwYVc5dUwyOWpkR1YwTFhOMGNtVmhiVEVzUm05dkxGZG9aVzRnYkdsbVpTQm5hWFpsY3lCNWIzVWdabTl2TGk0dUNqSXNRbUZ5TEcxaGEyVWdRbUZ5SVFvekxFWnBlbm9zVTI5dFpYUnBiV1Z6SUhCaGFYSmxaQ0IzYVhSb0xpNHVDalFzUW5WNmVpeDBhR1VnYVc1bVlXMXZkWE1nUW5WNmVpRUt6eEtlU3c9PVwiLFxuICBcImJhc2U2NFwiXG4pO1xuXG5leHBvcnQgY29uc3Qgc3RhdHNFdmVudE1lc3NhZ2UgPSBCdWZmZXIuZnJvbShcbiAgXCJBQUFBMFFBQUFFTStZcG1xRFRwdFpYTnpZV2RsTFhSNWNHVUhBQVZsZG1WdWRBczZaWFpsYm5RdGRIbHdaUWNBQlZOMFlYUnpEVHBqYjI1MFpXNTBMWFI1Y0dVSEFBaDBaWGgwTDNodGJEeFRkR0YwY3lCNGJXeHVjejBpSWo0OFFubDBaWE5UWTJGdWJtVmtQakV5Tmp3dlFubDBaWE5UWTJGdWJtVmtQanhDZVhSbGMxQnliMk5sYzNObFpENHhNalk4TDBKNWRHVnpVSEp2WTJWemMyVmtQanhDZVhSbGMxSmxkSFZ5Ym1Wa1BqRXdOend2UW5sMFpYTlNaWFIxY201bFpENDhMMU4wWVhSelBpSjBwTGs9XCIsXG4gIFwiYmFzZTY0XCJcbik7XG5cbmV4cG9ydCBjb25zdCBlbmRFdmVudE1lc3NhZ2UgPSBCdWZmZXIuZnJvbShcbiAgXCJBQUFBT0FBQUFDakJ4b1RVRFRwdFpYTnpZV2RsTFhSNWNHVUhBQVZsZG1WdWRBczZaWFpsYm5RdGRIbHdaUWNBQTBWdVpNK1gwNUk9XCIsXG4gIFwiYmFzZTY0XCJcbik7XG5cbmV4cG9ydCBjb25zdCBleGNlcHRpb24gPSBCdWZmZXIuZnJvbShcbiAgXCJBQUFBdGdBQUFGOEJjVzY0RFRwamIyNTBaVzUwTFhSNWNHVUhBQmhoY0hCc2FXTmhkR2x2Ymk5dlkzUmxkQzF6ZEhKbFlXME5PbTFsYzNOaFoyVXRkSGx3WlFjQUNXVjRZMlZ3ZEdsdmJnODZaWGhqWlhCMGFXOXVMWFI1Y0dVSEFBbEZlR05sY0hScGIyNVVhR2x6SUdseklHRWdiVzlrWld4bFpDQmxlR05sY0hScGIyNGdaWFpsYm5RZ2RHaGhkQ0IzYjNWc1pDQmlaU0IwYUhKdmQyNGdhVzRnWkdWelpYSnBZV3hwZW1WeUxqNkdjNjA9XCIsXG4gIFwiYmFzZTY0XCJcbik7XG4iXX0=