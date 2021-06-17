"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpRequest = void 0;
const property_provider_1 = require("@aws-sdk/property-provider");
const buffer_1 = require("buffer");
const stream_http_1 = require("stream-http");
/**
 * @internal
 */
function httpRequest(options) {
    return new Promise((resolve, reject) => {
        const req = stream_http_1.request({ method: "GET", ...options });
        req.on("error", (err) => {
            reject(Object.assign(new property_provider_1.ProviderError("Unable to connect to instance metadata service"), err));
        });
        req.on("timeout", () => {
            reject(new Error("TimeoutError"));
        });
        req.on("response", (res) => {
            const { statusCode = 400 } = res;
            if (statusCode < 200 || 300 <= statusCode) {
                reject(Object.assign(new property_provider_1.ProviderError("Error response received from instance metadata service"), { statusCode }));
            }
            const chunks = [];
            res.on("data", (chunk) => {
                chunks.push(chunk);
            });
            res.on("end", () => {
                resolve(buffer_1.Buffer.concat(chunks));
            });
        });
        req.end();
    });
}
exports.httpRequest = httpRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cFJlcXVlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcmVtb3RlUHJvdmlkZXIvaHR0cFJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsa0VBQTJEO0FBQzNELG1DQUFnQztBQUNoQyw2Q0FBdUU7QUFFdkU7O0dBRUc7QUFDSCxTQUFnQixXQUFXLENBQUMsT0FBdUI7SUFDakQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUNyQyxNQUFNLEdBQUcsR0FBRyxxQkFBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFFbkQsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUN0QixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLGlDQUFhLENBQUMsZ0RBQWdELENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xHLENBQUMsQ0FBQyxDQUFDO1FBRUgsR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFO1lBQ3JCLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO1FBRUgsR0FBRyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxHQUFvQixFQUFFLEVBQUU7WUFDMUMsTUFBTSxFQUFFLFVBQVUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7WUFDakMsSUFBSSxVQUFVLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSSxVQUFVLEVBQUU7Z0JBQ3pDLE1BQU0sQ0FDSixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksaUNBQWEsQ0FBQyx3REFBd0QsQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FDM0csQ0FBQzthQUNIO1lBRUQsTUFBTSxNQUFNLEdBQWtCLEVBQUUsQ0FBQztZQUNqQyxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQWUsQ0FBQyxDQUFDO1lBQy9CLENBQUMsQ0FBQyxDQUFDO1lBQ0gsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFO2dCQUNqQixPQUFPLENBQUMsZUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDWixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUEvQkQsa0NBK0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvdmlkZXJFcnJvciB9IGZyb20gXCJAYXdzLXNkay9wcm9wZXJ0eS1wcm92aWRlclwiO1xuaW1wb3J0IHsgQnVmZmVyIH0gZnJvbSBcImJ1ZmZlclwiO1xuaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCByZXF1ZXN0LCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gXCJzdHJlYW0taHR0cFwiO1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gaHR0cFJlcXVlc3Qob3B0aW9uczogUmVxdWVzdE9wdGlvbnMpOiBQcm9taXNlPEJ1ZmZlcj4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHJlcSA9IHJlcXVlc3QoeyBtZXRob2Q6IFwiR0VUXCIsIC4uLm9wdGlvbnMgfSk7XG5cbiAgICByZXEub24oXCJlcnJvclwiLCAoZXJyKSA9PiB7XG4gICAgICByZWplY3QoT2JqZWN0LmFzc2lnbihuZXcgUHJvdmlkZXJFcnJvcihcIlVuYWJsZSB0byBjb25uZWN0IHRvIGluc3RhbmNlIG1ldGFkYXRhIHNlcnZpY2VcIiksIGVycikpO1xuICAgIH0pO1xuXG4gICAgcmVxLm9uKFwidGltZW91dFwiLCAoKSA9PiB7XG4gICAgICByZWplY3QobmV3IEVycm9yKFwiVGltZW91dEVycm9yXCIpKTtcbiAgICB9KTtcblxuICAgIHJlcS5vbihcInJlc3BvbnNlXCIsIChyZXM6IEluY29taW5nTWVzc2FnZSkgPT4ge1xuICAgICAgY29uc3QgeyBzdGF0dXNDb2RlID0gNDAwIH0gPSByZXM7XG4gICAgICBpZiAoc3RhdHVzQ29kZSA8IDIwMCB8fCAzMDAgPD0gc3RhdHVzQ29kZSkge1xuICAgICAgICByZWplY3QoXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihuZXcgUHJvdmlkZXJFcnJvcihcIkVycm9yIHJlc3BvbnNlIHJlY2VpdmVkIGZyb20gaW5zdGFuY2UgbWV0YWRhdGEgc2VydmljZVwiKSwgeyBzdGF0dXNDb2RlIH0pXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNodW5rczogQXJyYXk8QnVmZmVyPiA9IFtdO1xuICAgICAgcmVzLm9uKFwiZGF0YVwiLCAoY2h1bmspID0+IHtcbiAgICAgICAgY2h1bmtzLnB1c2goY2h1bmsgYXMgQnVmZmVyKTtcbiAgICAgIH0pO1xuICAgICAgcmVzLm9uKFwiZW5kXCIsICgpID0+IHtcbiAgICAgICAgcmVzb2x2ZShCdWZmZXIuY29uY2F0KGNodW5rcykpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXEuZW5kKCk7XG4gIH0pO1xufVxuIl19