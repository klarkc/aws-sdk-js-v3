import { __awaiter, __generator } from "tslib";
import { SynthesizeSpeechCommand } from "@aws-sdk/client-polly";
import { getSignedUrl } from "./getSignedUrls";
export var getSynthesizeSpeechUrl = function (input) { return __awaiter(void 0, void 0, void 0, function () {
    var command, options;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                command = new SynthesizeSpeechCommand(input.params);
                options = input.options || {};
                return [4 /*yield*/, getSignedUrl(input.client, command, options)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0U3ludGhlc2l6ZVNwZWVjaFVybC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nZXRTeW50aGVzaXplU3BlZWNoVXJsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQXNCLHVCQUF1QixFQUF5QixNQUFNLHVCQUF1QixDQUFDO0FBRTNHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQTZCL0MsTUFBTSxDQUFDLElBQU0sc0JBQXNCLEdBQUcsVUFBTyxLQUEwQjs7Ozs7Z0JBQy9ELE9BQU8sR0FBRyxJQUFJLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDcEQsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO2dCQUM3QixxQkFBTSxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUE7b0JBQXpELHNCQUFPLFNBQWtELEVBQUM7OztLQUMzRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9sbHksIFBvbGx5Q2xpZW50LCBTeW50aGVzaXplU3BlZWNoQ29tbWFuZCwgU3ludGhlc2l6ZVNwZWVjaElucHV0IH0gZnJvbSBcIkBhd3Mtc2RrL2NsaWVudC1wb2xseVwiO1xuXG5pbXBvcnQgeyBnZXRTaWduZWRVcmwgfSBmcm9tIFwiLi9nZXRTaWduZWRVcmxzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJlc2lnbmVkUG9sbHlPcHRpb25zIHtcbiAgLyoqXG4gICAqIFNlY29uZHMgdW50aWwgdGhlIHByZXNpZ25lZCBVUkwgZXhwaXJlcy4gRGVmYXVsdHMgdG8gMzYwMFxuICAgKi9cbiAgZXhwaXJlc0luPzogbnVtYmVyO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlIGEgc2lnbmVkIFVSTC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQcmVzaWduZWRQb2xseUlucHV0IHtcbiAgLyoqXG4gICAqIEEgcHJlLWNvbmZpZ3VyZWQgaW5zdGFuY2Ugb2YgdGhlIEFXUy5Qb2xseSBzZXJ2aWNlIG9iamVjdCB0byB1c2UgZm9yIHJlcXVlc3RzLiBUaGUgb2JqZWN0IG1heSBib3VuZCBwYXJhbWV0ZXJzIHVzZWQgYnkgdGhlIHByZXNpZ25lci5cbiAgICovXG4gIGNsaWVudDogUG9sbHlDbGllbnQ7XG5cbiAgLyoqXG4gICAqIFRoZSBpbnB1dCB0byB0aGUgc3ludGhlc2l6ZWRTcGVlY2hDb21tYW5kXG4gICAqL1xuICBwYXJhbXM6IFN5bnRoZXNpemVTcGVlY2hJbnB1dDtcblxuICAvKipcbiAgICogT3B0aW9uYWwgY29uZmlndXJhdGlvbiBvZiBnZXRQcmVzaWduZWRVcmxcbiAgICovXG4gIG9wdGlvbnM/OiBQcmVzaWduZWRQb2xseU9wdGlvbnM7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTeW50aGVzaXplU3BlZWNoVXJsID0gYXN5bmMgKGlucHV0OiBQcmVzaWduZWRQb2xseUlucHV0KTogUHJvbWlzZTxTdHJpbmc+ID0+IHtcbiAgY29uc3QgY29tbWFuZCA9IG5ldyBTeW50aGVzaXplU3BlZWNoQ29tbWFuZChpbnB1dC5wYXJhbXMpO1xuICBjb25zdCBvcHRpb25zID0gaW5wdXQub3B0aW9ucyB8fCB7fTtcbiAgcmV0dXJuIGF3YWl0IGdldFNpZ25lZFVybChpbnB1dC5jbGllbnQsIGNvbW1hbmQsIG9wdGlvbnMpO1xufTtcbiJdfQ==