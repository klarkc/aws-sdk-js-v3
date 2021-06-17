import { __values } from "tslib";
import { readFileSync } from "fs";
import { createServer as createHttpServer } from "http";
import { createServer as createHttp2Server } from "http2";
import { createServer as createHttpsServer } from "https";
import { join } from "path";
import { Readable } from "stream";
var fixturesDir = join(__dirname, "..", "fixtures");
export function createResponseFunction(httpResp) {
    return function (request, response) {
        var e_1, _a;
        response.statusCode = httpResp.statusCode;
        try {
            for (var _b = __values(Object.keys(httpResp.headers)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var name = _c.value;
                var values = httpResp.headers[name];
                response.setHeader(name, values);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (httpResp.body instanceof Readable) {
            httpResp.body.pipe(response);
        }
        else {
            response.end(httpResp.body);
        }
    };
}
export function createContinueResponseFunction(httpResp) {
    return function (request, response) {
        response.writeContinue();
        setTimeout(function () {
            createResponseFunction(httpResp)(request, response);
        }, 100);
    };
}
export function createMockHttpsServer() {
    var server = createHttpsServer({
        key: readFileSync(join(fixturesDir, "test-server-key.pem")),
        cert: readFileSync(join(fixturesDir, "test-server-cert.pem")),
    });
    return server;
}
export function createMockHttpServer() {
    var server = createHttpServer();
    return server;
}
export function createMockHttp2Server() {
    var server = createHttp2Server();
    return server;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLm1vY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmVyLm1vY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFDbEMsT0FBTyxFQUFFLFlBQVksSUFBSSxnQkFBZ0IsRUFBeUQsTUFBTSxNQUFNLENBQUM7QUFDL0csT0FBTyxFQUFFLFlBQVksSUFBSSxpQkFBaUIsRUFBZSxNQUFNLE9BQU8sQ0FBQztBQUN2RSxPQUFPLEVBQUUsWUFBWSxJQUFJLGlCQUFpQixFQUF5QixNQUFNLE9BQU8sQ0FBQztBQUNqRixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFbEMsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFFdEQsTUFBTSxVQUFVLHNCQUFzQixDQUFDLFFBQXNCO0lBQzNELE9BQU8sVUFBVSxPQUF3QixFQUFFLFFBQXdCOztRQUNqRSxRQUFRLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUM7O1lBQzFDLEtBQW1CLElBQUEsS0FBQSxTQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFBLGdCQUFBLDRCQUFFO2dCQUE3QyxJQUFNLElBQUksV0FBQTtnQkFDYixJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0QyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQzthQUNsQzs7Ozs7Ozs7O1FBQ0QsSUFBSSxRQUFRLENBQUMsSUFBSSxZQUFZLFFBQVEsRUFBRTtZQUNyQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM5QjthQUFNO1lBQ0wsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxVQUFVLDhCQUE4QixDQUFDLFFBQXNCO0lBQ25FLE9BQU8sVUFBVSxPQUF3QixFQUFFLFFBQXdCO1FBQ2pFLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixVQUFVLENBQUM7WUFDVCxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEQsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELE1BQU0sVUFBVSxxQkFBcUI7SUFDbkMsSUFBTSxNQUFNLEdBQUcsaUJBQWlCLENBQUM7UUFDL0IsR0FBRyxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFDM0QsSUFBSSxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLHNCQUFzQixDQUFDLENBQUM7S0FDOUQsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUVELE1BQU0sVUFBVSxvQkFBb0I7SUFDbEMsSUFBTSxNQUFNLEdBQUcsZ0JBQWdCLEVBQUUsQ0FBQztJQUNsQyxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBRUQsTUFBTSxVQUFVLHFCQUFxQjtJQUNuQyxJQUFNLE1BQU0sR0FBRyxpQkFBaUIsRUFBRSxDQUFDO0lBQ25DLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcbmltcG9ydCB7IHJlYWRGaWxlU3luYyB9IGZyb20gXCJmc1wiO1xuaW1wb3J0IHsgY3JlYXRlU2VydmVyIGFzIGNyZWF0ZUh0dHBTZXJ2ZXIsIEluY29taW5nTWVzc2FnZSwgU2VydmVyIGFzIEh0dHBTZXJ2ZXIsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSBcImh0dHBcIjtcbmltcG9ydCB7IGNyZWF0ZVNlcnZlciBhcyBjcmVhdGVIdHRwMlNlcnZlciwgSHR0cDJTZXJ2ZXIgfSBmcm9tIFwiaHR0cDJcIjtcbmltcG9ydCB7IGNyZWF0ZVNlcnZlciBhcyBjcmVhdGVIdHRwc1NlcnZlciwgU2VydmVyIGFzIEh0dHBzU2VydmVyIH0gZnJvbSBcImh0dHBzXCI7XG5pbXBvcnQgeyBqb2luIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IFJlYWRhYmxlIH0gZnJvbSBcInN0cmVhbVwiO1xuXG5jb25zdCBmaXh0dXJlc0RpciA9IGpvaW4oX19kaXJuYW1lLCBcIi4uXCIsIFwiZml4dHVyZXNcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZXNwb25zZUZ1bmN0aW9uKGh0dHBSZXNwOiBIdHRwUmVzcG9uc2UpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChyZXF1ZXN0OiBJbmNvbWluZ01lc3NhZ2UsIHJlc3BvbnNlOiBTZXJ2ZXJSZXNwb25zZSkge1xuICAgIHJlc3BvbnNlLnN0YXR1c0NvZGUgPSBodHRwUmVzcC5zdGF0dXNDb2RlO1xuICAgIGZvciAoY29uc3QgbmFtZSBvZiBPYmplY3Qua2V5cyhodHRwUmVzcC5oZWFkZXJzKSkge1xuICAgICAgY29uc3QgdmFsdWVzID0gaHR0cFJlc3AuaGVhZGVyc1tuYW1lXTtcbiAgICAgIHJlc3BvbnNlLnNldEhlYWRlcihuYW1lLCB2YWx1ZXMpO1xuICAgIH1cbiAgICBpZiAoaHR0cFJlc3AuYm9keSBpbnN0YW5jZW9mIFJlYWRhYmxlKSB7XG4gICAgICBodHRwUmVzcC5ib2R5LnBpcGUocmVzcG9uc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNwb25zZS5lbmQoaHR0cFJlc3AuYm9keSk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29udGludWVSZXNwb25zZUZ1bmN0aW9uKGh0dHBSZXNwOiBIdHRwUmVzcG9uc2UpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChyZXF1ZXN0OiBJbmNvbWluZ01lc3NhZ2UsIHJlc3BvbnNlOiBTZXJ2ZXJSZXNwb25zZSkge1xuICAgIHJlc3BvbnNlLndyaXRlQ29udGludWUoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNyZWF0ZVJlc3BvbnNlRnVuY3Rpb24oaHR0cFJlc3ApKHJlcXVlc3QsIHJlc3BvbnNlKTtcbiAgICB9LCAxMDApO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTW9ja0h0dHBzU2VydmVyKCk6IEh0dHBzU2VydmVyIHtcbiAgY29uc3Qgc2VydmVyID0gY3JlYXRlSHR0cHNTZXJ2ZXIoe1xuICAgIGtleTogcmVhZEZpbGVTeW5jKGpvaW4oZml4dHVyZXNEaXIsIFwidGVzdC1zZXJ2ZXIta2V5LnBlbVwiKSksXG4gICAgY2VydDogcmVhZEZpbGVTeW5jKGpvaW4oZml4dHVyZXNEaXIsIFwidGVzdC1zZXJ2ZXItY2VydC5wZW1cIikpLFxuICB9KTtcbiAgcmV0dXJuIHNlcnZlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1vY2tIdHRwU2VydmVyKCk6IEh0dHBTZXJ2ZXIge1xuICBjb25zdCBzZXJ2ZXIgPSBjcmVhdGVIdHRwU2VydmVyKCk7XG4gIHJldHVybiBzZXJ2ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNb2NrSHR0cDJTZXJ2ZXIoKTogSHR0cDJTZXJ2ZXIge1xuICBjb25zdCBzZXJ2ZXIgPSBjcmVhdGVIdHRwMlNlcnZlcigpO1xuICByZXR1cm4gc2VydmVyO1xufVxuIl19