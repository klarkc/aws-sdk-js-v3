"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSynthesizeSpeechUrl = void 0;
const client_polly_1 = require("@aws-sdk/client-polly");
const getSignedUrls_1 = require("./getSignedUrls");
const getSynthesizeSpeechUrl = async (input) => {
    const command = new client_polly_1.SynthesizeSpeechCommand(input.params);
    const options = input.options || {};
    return await getSignedUrls_1.getSignedUrl(input.client, command, options);
};
exports.getSynthesizeSpeechUrl = getSynthesizeSpeechUrl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0U3ludGhlc2l6ZVNwZWVjaFVybC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nZXRTeW50aGVzaXplU3BlZWNoVXJsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdEQUEyRztBQUUzRyxtREFBK0M7QUE2QnhDLE1BQU0sc0JBQXNCLEdBQUcsS0FBSyxFQUFFLEtBQTBCLEVBQW1CLEVBQUU7SUFDMUYsTUFBTSxPQUFPLEdBQUcsSUFBSSxzQ0FBdUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUQsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7SUFDcEMsT0FBTyxNQUFNLDRCQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDNUQsQ0FBQyxDQUFDO0FBSlcsUUFBQSxzQkFBc0IsMEJBSWpDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9sbHksIFBvbGx5Q2xpZW50LCBTeW50aGVzaXplU3BlZWNoQ29tbWFuZCwgU3ludGhlc2l6ZVNwZWVjaElucHV0IH0gZnJvbSBcIkBhd3Mtc2RrL2NsaWVudC1wb2xseVwiO1xuXG5pbXBvcnQgeyBnZXRTaWduZWRVcmwgfSBmcm9tIFwiLi9nZXRTaWduZWRVcmxzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJlc2lnbmVkUG9sbHlPcHRpb25zIHtcbiAgLyoqXG4gICAqIFNlY29uZHMgdW50aWwgdGhlIHByZXNpZ25lZCBVUkwgZXhwaXJlcy4gRGVmYXVsdHMgdG8gMzYwMFxuICAgKi9cbiAgZXhwaXJlc0luPzogbnVtYmVyO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlIGEgc2lnbmVkIFVSTC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQcmVzaWduZWRQb2xseUlucHV0IHtcbiAgLyoqXG4gICAqIEEgcHJlLWNvbmZpZ3VyZWQgaW5zdGFuY2Ugb2YgdGhlIEFXUy5Qb2xseSBzZXJ2aWNlIG9iamVjdCB0byB1c2UgZm9yIHJlcXVlc3RzLiBUaGUgb2JqZWN0IG1heSBib3VuZCBwYXJhbWV0ZXJzIHVzZWQgYnkgdGhlIHByZXNpZ25lci5cbiAgICovXG4gIGNsaWVudDogUG9sbHlDbGllbnQ7XG5cbiAgLyoqXG4gICAqIFRoZSBpbnB1dCB0byB0aGUgc3ludGhlc2l6ZWRTcGVlY2hDb21tYW5kXG4gICAqL1xuICBwYXJhbXM6IFN5bnRoZXNpemVTcGVlY2hJbnB1dDtcblxuICAvKipcbiAgICogT3B0aW9uYWwgY29uZmlndXJhdGlvbiBvZiBnZXRQcmVzaWduZWRVcmxcbiAgICovXG4gIG9wdGlvbnM/OiBQcmVzaWduZWRQb2xseU9wdGlvbnM7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTeW50aGVzaXplU3BlZWNoVXJsID0gYXN5bmMgKGlucHV0OiBQcmVzaWduZWRQb2xseUlucHV0KTogUHJvbWlzZTxTdHJpbmc+ID0+IHtcbiAgY29uc3QgY29tbWFuZCA9IG5ldyBTeW50aGVzaXplU3BlZWNoQ29tbWFuZChpbnB1dC5wYXJhbXMpO1xuICBjb25zdCBvcHRpb25zID0gaW5wdXQub3B0aW9ucyB8fCB7fTtcbiAgcmV0dXJuIGF3YWl0IGdldFNpZ25lZFVybChpbnB1dC5jbGllbnQsIGNvbW1hbmQsIG9wdGlvbnMpO1xufTtcbiJdfQ==