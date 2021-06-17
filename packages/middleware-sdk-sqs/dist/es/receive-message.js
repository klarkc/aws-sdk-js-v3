import { __assign, __awaiter, __generator, __values } from "tslib";
import { toHex } from "@aws-sdk/util-hex-encoding";
export function receiveMessageMiddleware(options) {
    var _this = this;
    return function (next) {
        return function (args) { return __awaiter(_this, void 0, void 0, function () {
            var resp, output, messageIds, _a, _b, message, md5, hash, _c, _d, e_1_1;
            var e_1, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, next(__assign({}, args))];
                    case 1:
                        resp = _f.sent();
                        output = resp.output;
                        messageIds = [];
                        if (!(output.Messages !== undefined)) return [3 /*break*/, 9];
                        _f.label = 2;
                    case 2:
                        _f.trys.push([2, 7, 8, 9]);
                        _a = __values(output.Messages), _b = _a.next();
                        _f.label = 3;
                    case 3:
                        if (!!_b.done) return [3 /*break*/, 6];
                        message = _b.value;
                        md5 = message.MD5OfBody;
                        hash = new options.md5();
                        hash.update(message.Body || "");
                        _c = md5;
                        _d = toHex;
                        return [4 /*yield*/, hash.digest()];
                    case 4:
                        if (_c !== _d.apply(void 0, [_f.sent()])) {
                            messageIds.push(message.MessageId);
                        }
                        _f.label = 5;
                    case 5:
                        _b = _a.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _f.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 9:
                        if (messageIds.length > 0) {
                            throw new Error("Invalid MD5 checksum on messages: " + messageIds.join(", "));
                        }
                        return [2 /*return*/, resp];
                }
            });
        }); };
    };
}
export var receiveMessageMiddlewareOptions = {
    step: "initialize",
    tags: ["VALIDATE_BODY_MD5"],
    name: "receiveMessageMiddleware",
    override: true,
};
export var getReceiveMessagePlugin = function (config) { return ({
    applyToStack: function (clientStack) {
        clientStack.add(receiveMessageMiddleware(config), receiveMessageMiddlewareOptions);
    },
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjZWl2ZS1tZXNzYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JlY2VpdmUtbWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBU0EsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBY25ELE1BQU0sVUFBVSx3QkFBd0IsQ0FBQyxPQUEyQjtJQUFwRSxpQkFzQkM7SUFyQkMsT0FBTyxVQUFnQyxJQUFvQztRQUN6RSxPQUFBLFVBQU8sSUFBcUM7Ozs7OzRCQUM3QixxQkFBTSxJQUFJLGNBQU0sSUFBSSxFQUFHLEVBQUE7O3dCQUE5QixJQUFJLEdBQUcsU0FBdUI7d0JBQzlCLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBeUMsQ0FBQzt3QkFDeEQsVUFBVSxHQUFHLEVBQUUsQ0FBQzs2QkFDbEIsQ0FBQSxNQUFNLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQSxFQUE3Qix3QkFBNkI7Ozs7d0JBQ1QsS0FBQSxTQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUE7Ozs7d0JBQTFCLE9BQU87d0JBQ1YsR0FBRyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7d0JBQ3hCLElBQUksR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQzt3QkFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO3dCQUM1QixLQUFBLEdBQUcsQ0FBQTt3QkFBSyxLQUFBLEtBQUssQ0FBQTt3QkFBQyxxQkFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUE7O3dCQUFyQyxJQUFJLE9BQVEsa0JBQU0sU0FBbUIsRUFBQyxFQUFFOzRCQUN0QyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQzt5QkFDcEM7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQUdMLElBQUksVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7NEJBQ3pCLE1BQU0sSUFBSSxLQUFLLENBQUMsb0NBQW9DLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3lCQUMvRTt3QkFFRCxzQkFBTyxJQUFJLEVBQUM7OzthQUNiO0lBbkJELENBbUJDLENBQUM7QUFDTixDQUFDO0FBRUQsTUFBTSxDQUFDLElBQU0sK0JBQStCLEdBQTZCO0lBQ3ZFLElBQUksRUFBRSxZQUFZO0lBQ2xCLElBQUksRUFBRSxDQUFDLG1CQUFtQixDQUFDO0lBQzNCLElBQUksRUFBRSwwQkFBMEI7SUFDaEMsUUFBUSxFQUFFLElBQUk7Q0FDZixDQUFDO0FBRUYsTUFBTSxDQUFDLElBQU0sdUJBQXVCLEdBQUcsVUFBQyxNQUEwQixJQUEwQixPQUFBLENBQUM7SUFDM0YsWUFBWSxFQUFFLFVBQUMsV0FBVztRQUN4QixXQUFXLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxFQUFFLCtCQUErQixDQUFDLENBQUM7SUFDckYsQ0FBQztDQUNGLENBQUMsRUFKMEYsQ0FJMUYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluaXRpYWxpemVIYW5kbGVyLFxuICBJbml0aWFsaXplSGFuZGxlckFyZ3VtZW50cyxcbiAgSW5pdGlhbGl6ZUhhbmRsZXJPcHRpb25zLFxuICBJbml0aWFsaXplSGFuZGxlck91dHB1dCxcbiAgSW5pdGlhbGl6ZU1pZGRsZXdhcmUsXG4gIE1ldGFkYXRhQmVhcmVyLFxuICBQbHVnZ2FibGUsXG59IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuaW1wb3J0IHsgdG9IZXggfSBmcm9tIFwiQGF3cy1zZGsvdXRpbC1oZXgtZW5jb2RpbmdcIjtcblxuaW1wb3J0IHsgUHJldmlvdXNseVJlc29sdmVkIH0gZnJvbSBcIi4vY29uZmlndXJhdGlvbnNcIjtcblxuaW50ZXJmYWNlIFJlY2VpdmVNZXNzYWdlUmVzdWx0IHtcbiAgTWVzc2FnZXM6IEFycmF5PE1lc3NhZ2U+O1xufVxuXG5pbnRlcmZhY2UgTWVzc2FnZSB7XG4gIEJvZHk6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgTUQ1T2ZCb2R5OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIE1lc3NhZ2VJZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVjZWl2ZU1lc3NhZ2VNaWRkbGV3YXJlKG9wdGlvbnM6IFByZXZpb3VzbHlSZXNvbHZlZCk6IEluaXRpYWxpemVNaWRkbGV3YXJlPGFueSwgYW55PiB7XG4gIHJldHVybiA8T3V0cHV0IGV4dGVuZHMgTWV0YWRhdGFCZWFyZXI+KG5leHQ6IEluaXRpYWxpemVIYW5kbGVyPGFueSwgT3V0cHV0Pik6IEluaXRpYWxpemVIYW5kbGVyPGFueSwgT3V0cHV0PiA9PlxuICAgIGFzeW5jIChhcmdzOiBJbml0aWFsaXplSGFuZGxlckFyZ3VtZW50czxhbnk+KTogUHJvbWlzZTxJbml0aWFsaXplSGFuZGxlck91dHB1dDxPdXRwdXQ+PiA9PiB7XG4gICAgICBjb25zdCByZXNwID0gYXdhaXQgbmV4dCh7IC4uLmFyZ3MgfSk7XG4gICAgICBjb25zdCBvdXRwdXQgPSByZXNwLm91dHB1dCBhcyB1bmtub3duIGFzIFJlY2VpdmVNZXNzYWdlUmVzdWx0O1xuICAgICAgY29uc3QgbWVzc2FnZUlkcyA9IFtdO1xuICAgICAgaWYgKG91dHB1dC5NZXNzYWdlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGZvciAoY29uc3QgbWVzc2FnZSBvZiBvdXRwdXQuTWVzc2FnZXMpIHtcbiAgICAgICAgICBjb25zdCBtZDUgPSBtZXNzYWdlLk1ENU9mQm9keTtcbiAgICAgICAgICBjb25zdCBoYXNoID0gbmV3IG9wdGlvbnMubWQ1KCk7XG4gICAgICAgICAgaGFzaC51cGRhdGUobWVzc2FnZS5Cb2R5IHx8IFwiXCIpO1xuICAgICAgICAgIGlmIChtZDUgIT09IHRvSGV4KGF3YWl0IGhhc2guZGlnZXN0KCkpKSB7XG4gICAgICAgICAgICBtZXNzYWdlSWRzLnB1c2gobWVzc2FnZS5NZXNzYWdlSWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lc3NhZ2VJZHMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIE1ENSBjaGVja3N1bSBvbiBtZXNzYWdlczogXCIgKyBtZXNzYWdlSWRzLmpvaW4oXCIsIFwiKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXNwO1xuICAgIH07XG59XG5cbmV4cG9ydCBjb25zdCByZWNlaXZlTWVzc2FnZU1pZGRsZXdhcmVPcHRpb25zOiBJbml0aWFsaXplSGFuZGxlck9wdGlvbnMgPSB7XG4gIHN0ZXA6IFwiaW5pdGlhbGl6ZVwiLFxuICB0YWdzOiBbXCJWQUxJREFURV9CT0RZX01ENVwiXSxcbiAgbmFtZTogXCJyZWNlaXZlTWVzc2FnZU1pZGRsZXdhcmVcIixcbiAgb3ZlcnJpZGU6IHRydWUsXG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UmVjZWl2ZU1lc3NhZ2VQbHVnaW4gPSAoY29uZmlnOiBQcmV2aW91c2x5UmVzb2x2ZWQpOiBQbHVnZ2FibGU8YW55LCBhbnk+ID0+ICh7XG4gIGFwcGx5VG9TdGFjazogKGNsaWVudFN0YWNrKSA9PiB7XG4gICAgY2xpZW50U3RhY2suYWRkKHJlY2VpdmVNZXNzYWdlTWlkZGxld2FyZShjb25maWcpLCByZWNlaXZlTWVzc2FnZU1pZGRsZXdhcmVPcHRpb25zKTtcbiAgfSxcbn0pO1xuIl19