import { __assign } from "tslib";
import { ProviderError } from "@aws-sdk/property-provider";
import { Buffer } from "buffer";
import { request } from "stream-http";
/**
 * @internal
 */
export function httpRequest(options) {
    return new Promise(function (resolve, reject) {
        var req = request(__assign({ method: "GET" }, options));
        req.on("error", function (err) {
            reject(Object.assign(new ProviderError("Unable to connect to instance metadata service"), err));
        });
        req.on("timeout", function () {
            reject(new Error("TimeoutError"));
        });
        req.on("response", function (res) {
            var _a = res.statusCode, statusCode = _a === void 0 ? 400 : _a;
            if (statusCode < 200 || 300 <= statusCode) {
                reject(Object.assign(new ProviderError("Error response received from instance metadata service"), { statusCode: statusCode }));
            }
            var chunks = [];
            res.on("data", function (chunk) {
                chunks.push(chunk);
            });
            res.on("end", function () {
                resolve(Buffer.concat(chunks));
            });
        });
        req.end();
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cFJlcXVlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcmVtb3RlUHJvdmlkZXIvaHR0cFJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ2hDLE9BQU8sRUFBbUIsT0FBTyxFQUFrQixNQUFNLGFBQWEsQ0FBQztBQUV2RTs7R0FFRztBQUNILE1BQU0sVUFBVSxXQUFXLENBQUMsT0FBdUI7SUFDakQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ2pDLElBQU0sR0FBRyxHQUFHLE9BQU8sWUFBRyxNQUFNLEVBQUUsS0FBSyxJQUFLLE9BQU8sRUFBRyxDQUFDO1FBRW5ELEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUMsR0FBRztZQUNsQixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLGFBQWEsQ0FBQyxnREFBZ0QsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEcsQ0FBQyxDQUFDLENBQUM7UUFFSCxHQUFHLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRTtZQUNoQixNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztRQUVILEdBQUcsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLFVBQUMsR0FBb0I7WUFDOUIsSUFBQSxLQUFxQixHQUFHLFdBQVIsRUFBaEIsVUFBVSxtQkFBRyxHQUFHLEtBQUEsQ0FBUztZQUNqQyxJQUFJLFVBQVUsR0FBRyxHQUFHLElBQUksR0FBRyxJQUFJLFVBQVUsRUFBRTtnQkFDekMsTUFBTSxDQUNKLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxhQUFhLENBQUMsd0RBQXdELENBQUMsRUFBRSxFQUFFLFVBQVUsWUFBQSxFQUFFLENBQUMsQ0FDM0csQ0FBQzthQUNIO1lBRUQsSUFBTSxNQUFNLEdBQWtCLEVBQUUsQ0FBQztZQUNqQyxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFDLEtBQUs7Z0JBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBZSxDQUFDLENBQUM7WUFDL0IsQ0FBQyxDQUFDLENBQUM7WUFDSCxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDWixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm92aWRlckVycm9yIH0gZnJvbSBcIkBhd3Mtc2RrL3Byb3BlcnR5LXByb3ZpZGVyXCI7XG5pbXBvcnQgeyBCdWZmZXIgfSBmcm9tIFwiYnVmZmVyXCI7XG5pbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIHJlcXVlc3QsIFJlcXVlc3RPcHRpb25zIH0gZnJvbSBcInN0cmVhbS1odHRwXCI7XG5cbi8qKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBodHRwUmVxdWVzdChvcHRpb25zOiBSZXF1ZXN0T3B0aW9ucyk6IFByb21pc2U8QnVmZmVyPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgcmVxID0gcmVxdWVzdCh7IG1ldGhvZDogXCJHRVRcIiwgLi4ub3B0aW9ucyB9KTtcblxuICAgIHJlcS5vbihcImVycm9yXCIsIChlcnIpID0+IHtcbiAgICAgIHJlamVjdChPYmplY3QuYXNzaWduKG5ldyBQcm92aWRlckVycm9yKFwiVW5hYmxlIHRvIGNvbm5lY3QgdG8gaW5zdGFuY2UgbWV0YWRhdGEgc2VydmljZVwiKSwgZXJyKSk7XG4gICAgfSk7XG5cbiAgICByZXEub24oXCJ0aW1lb3V0XCIsICgpID0+IHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJUaW1lb3V0RXJyb3JcIikpO1xuICAgIH0pO1xuXG4gICAgcmVxLm9uKFwicmVzcG9uc2VcIiwgKHJlczogSW5jb21pbmdNZXNzYWdlKSA9PiB7XG4gICAgICBjb25zdCB7IHN0YXR1c0NvZGUgPSA0MDAgfSA9IHJlcztcbiAgICAgIGlmIChzdGF0dXNDb2RlIDwgMjAwIHx8IDMwMCA8PSBzdGF0dXNDb2RlKSB7XG4gICAgICAgIHJlamVjdChcbiAgICAgICAgICBPYmplY3QuYXNzaWduKG5ldyBQcm92aWRlckVycm9yKFwiRXJyb3IgcmVzcG9uc2UgcmVjZWl2ZWQgZnJvbSBpbnN0YW5jZSBtZXRhZGF0YSBzZXJ2aWNlXCIpLCB7IHN0YXR1c0NvZGUgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2h1bmtzOiBBcnJheTxCdWZmZXI+ID0gW107XG4gICAgICByZXMub24oXCJkYXRhXCIsIChjaHVuaykgPT4ge1xuICAgICAgICBjaHVua3MucHVzaChjaHVuayBhcyBCdWZmZXIpO1xuICAgICAgfSk7XG4gICAgICByZXMub24oXCJlbmRcIiwgKCkgPT4ge1xuICAgICAgICByZXNvbHZlKEJ1ZmZlci5jb25jYXQoY2h1bmtzKSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJlcS5lbmQoKTtcbiAgfSk7XG59XG4iXX0=