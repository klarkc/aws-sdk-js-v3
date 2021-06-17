import { __assign, __awaiter, __generator, __values } from "tslib";
import { toHex } from "@aws-sdk/util-hex-encoding";
export var sendMessageBatchMiddleware = function (options) {
    return function (next) {
        return function (args) { return __awaiter(void 0, void 0, void 0, function () {
            var resp, output, messageIds, entries, _a, _b, entry, _c, _d, entry, md5, hash, _e, _f, e_1_1;
            var e_2, _g, e_1, _h;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0: return [4 /*yield*/, next(__assign({}, args))];
                    case 1:
                        resp = _j.sent();
                        output = resp.output;
                        messageIds = [];
                        entries = {};
                        if (output.Successful !== undefined) {
                            try {
                                for (_a = __values(output.Successful), _b = _a.next(); !_b.done; _b = _a.next()) {
                                    entry = _b.value;
                                    if (entry.Id !== undefined) {
                                        entries[entry.Id] = entry;
                                    }
                                }
                            }
                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                            finally {
                                try {
                                    if (_b && !_b.done && (_g = _a.return)) _g.call(_a);
                                }
                                finally { if (e_2) throw e_2.error; }
                            }
                        }
                        _j.label = 2;
                    case 2:
                        _j.trys.push([2, 7, 8, 9]);
                        _c = __values(args.input.Entries), _d = _c.next();
                        _j.label = 3;
                    case 3:
                        if (!!_d.done) return [3 /*break*/, 6];
                        entry = _d.value;
                        if (!entries[entry.Id]) return [3 /*break*/, 5];
                        md5 = entries[entry.Id].MD5OfMessageBody;
                        hash = new options.md5();
                        hash.update(entry.MessageBody || "");
                        _e = md5;
                        _f = toHex;
                        return [4 /*yield*/, hash.digest()];
                    case 4:
                        if (_e !== _f.apply(void 0, [_j.sent()])) {
                            messageIds.push(entries[entry.Id].MessageId);
                        }
                        _j.label = 5;
                    case 5:
                        _d = _c.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _j.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (_d && !_d.done && (_h = _c.return)) _h.call(_c);
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
};
export var sendMessageBatchMiddlewareOptions = {
    step: "initialize",
    tags: ["VALIDATE_BODY_MD5"],
    name: "sendMessageBatchMiddleware",
    override: true,
};
export var getSendMessageBatchPlugin = function (config) { return ({
    applyToStack: function (clientStack) {
        clientStack.add(sendMessageBatchMiddleware(config), sendMessageBatchMiddlewareOptions);
    },
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZC1tZXNzYWdlLWJhdGNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlbmQtbWVzc2FnZS1iYXRjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBU0EsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBY25ELE1BQU0sQ0FBQyxJQUFNLDBCQUEwQixHQUNyQyxVQUFDLE9BQTJCO0lBQzVCLE9BQUEsVUFBZ0MsSUFBb0M7UUFDcEUsT0FBQSxVQUFPLElBQXFDOzs7Ozs0QkFDN0IscUJBQU0sSUFBSSxjQUFNLElBQUksRUFBRyxFQUFBOzt3QkFBOUIsSUFBSSxHQUFHLFNBQXVCO3dCQUM5QixNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQTJDLENBQUM7d0JBQzFELFVBQVUsR0FBRyxFQUFFLENBQUM7d0JBQ2hCLE9BQU8sR0FBcUQsRUFBRSxDQUFDO3dCQUNyRSxJQUFJLE1BQU0sQ0FBQyxVQUFVLEtBQUssU0FBUyxFQUFFOztnQ0FDbkMsS0FBb0IsS0FBQSxTQUFBLE1BQU0sQ0FBQyxVQUFVLENBQUEsNENBQUU7b0NBQTVCLEtBQUs7b0NBQ2QsSUFBSSxLQUFLLENBQUMsRUFBRSxLQUFLLFNBQVMsRUFBRTt3Q0FDMUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUM7cUNBQzNCO2lDQUNGOzs7Ozs7Ozs7eUJBQ0Y7Ozs7d0JBQ21CLEtBQUEsU0FBQSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQTs7Ozt3QkFBM0IsS0FBSzs2QkFDVixPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFqQix3QkFBaUI7d0JBQ2IsR0FBRyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsZ0JBQWdCLENBQUM7d0JBQ3pDLElBQUksR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQzt3QkFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQyxDQUFDO3dCQUNqQyxLQUFBLEdBQUcsQ0FBQTt3QkFBSyxLQUFBLEtBQUssQ0FBQTt3QkFBQyxxQkFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUE7O3dCQUFyQyxJQUFJLE9BQVEsa0JBQU0sU0FBbUIsRUFBQyxFQUFFOzRCQUN0QyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7eUJBQzlDOzs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFHTCxJQUFJLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOzRCQUN6QixNQUFNLElBQUksS0FBSyxDQUFDLG9DQUFvQyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzt5QkFDL0U7d0JBRUQsc0JBQU8sSUFBSSxFQUFDOzs7YUFDYjtJQTNCRCxDQTJCQztBQTVCRCxDQTRCQyxDQUFDO0FBRUosTUFBTSxDQUFDLElBQU0saUNBQWlDLEdBQTZCO0lBQ3pFLElBQUksRUFBRSxZQUFZO0lBQ2xCLElBQUksRUFBRSxDQUFDLG1CQUFtQixDQUFDO0lBQzNCLElBQUksRUFBRSw0QkFBNEI7SUFDbEMsUUFBUSxFQUFFLElBQUk7Q0FDZixDQUFDO0FBRUYsTUFBTSxDQUFDLElBQU0seUJBQXlCLEdBQUcsVUFBQyxNQUEwQixJQUEwQixPQUFBLENBQUM7SUFDN0YsWUFBWSxFQUFFLFVBQUMsV0FBVztRQUN4QixXQUFXLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQyxFQUFFLGlDQUFpQyxDQUFDLENBQUM7SUFDekYsQ0FBQztDQUNGLENBQUMsRUFKNEYsQ0FJNUYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluaXRpYWxpemVIYW5kbGVyLFxuICBJbml0aWFsaXplSGFuZGxlckFyZ3VtZW50cyxcbiAgSW5pdGlhbGl6ZUhhbmRsZXJPcHRpb25zLFxuICBJbml0aWFsaXplSGFuZGxlck91dHB1dCxcbiAgSW5pdGlhbGl6ZU1pZGRsZXdhcmUsXG4gIE1ldGFkYXRhQmVhcmVyLFxuICBQbHVnZ2FibGUsXG59IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuaW1wb3J0IHsgdG9IZXggfSBmcm9tIFwiQGF3cy1zZGsvdXRpbC1oZXgtZW5jb2RpbmdcIjtcblxuaW1wb3J0IHsgUHJldmlvdXNseVJlc29sdmVkIH0gZnJvbSBcIi4vY29uZmlndXJhdGlvbnNcIjtcblxuaW50ZXJmYWNlIFNlbmRNZXNzYWdlQmF0Y2hSZXN1bHQge1xuICBTdWNjZXNzZnVsOiBBcnJheTxTZW5kTWVzc2FnZUJhdGNoUmVzdWx0RW50cnk+IHwgdW5kZWZpbmVkO1xufVxuXG5pbnRlcmZhY2UgU2VuZE1lc3NhZ2VCYXRjaFJlc3VsdEVudHJ5IHtcbiAgSWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgTUQ1T2ZNZXNzYWdlQm9keTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBNZXNzYWdlSWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGNvbnN0IHNlbmRNZXNzYWdlQmF0Y2hNaWRkbGV3YXJlID1cbiAgKG9wdGlvbnM6IFByZXZpb3VzbHlSZXNvbHZlZCk6IEluaXRpYWxpemVNaWRkbGV3YXJlPGFueSwgYW55PiA9PlxuICA8T3V0cHV0IGV4dGVuZHMgTWV0YWRhdGFCZWFyZXI+KG5leHQ6IEluaXRpYWxpemVIYW5kbGVyPGFueSwgT3V0cHV0Pik6IEluaXRpYWxpemVIYW5kbGVyPGFueSwgT3V0cHV0PiA9PlxuICBhc3luYyAoYXJnczogSW5pdGlhbGl6ZUhhbmRsZXJBcmd1bWVudHM8YW55Pik6IFByb21pc2U8SW5pdGlhbGl6ZUhhbmRsZXJPdXRwdXQ8T3V0cHV0Pj4gPT4ge1xuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBuZXh0KHsgLi4uYXJncyB9KTtcbiAgICBjb25zdCBvdXRwdXQgPSByZXNwLm91dHB1dCBhcyB1bmtub3duIGFzIFNlbmRNZXNzYWdlQmF0Y2hSZXN1bHQ7XG4gICAgY29uc3QgbWVzc2FnZUlkcyA9IFtdO1xuICAgIGNvbnN0IGVudHJpZXM6IHsgW2luZGV4OiBzdHJpbmddOiBTZW5kTWVzc2FnZUJhdGNoUmVzdWx0RW50cnkgfSA9IHt9O1xuICAgIGlmIChvdXRwdXQuU3VjY2Vzc2Z1bCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIG91dHB1dC5TdWNjZXNzZnVsKSB7XG4gICAgICAgIGlmIChlbnRyeS5JZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZW50cmllc1tlbnRyeS5JZF0gPSBlbnRyeTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGFyZ3MuaW5wdXQuRW50cmllcykge1xuICAgICAgaWYgKGVudHJpZXNbZW50cnkuSWRdKSB7XG4gICAgICAgIGNvbnN0IG1kNSA9IGVudHJpZXNbZW50cnkuSWRdLk1ENU9mTWVzc2FnZUJvZHk7XG4gICAgICAgIGNvbnN0IGhhc2ggPSBuZXcgb3B0aW9ucy5tZDUoKTtcbiAgICAgICAgaGFzaC51cGRhdGUoZW50cnkuTWVzc2FnZUJvZHkgfHwgXCJcIik7XG4gICAgICAgIGlmIChtZDUgIT09IHRvSGV4KGF3YWl0IGhhc2guZGlnZXN0KCkpKSB7XG4gICAgICAgICAgbWVzc2FnZUlkcy5wdXNoKGVudHJpZXNbZW50cnkuSWRdLk1lc3NhZ2VJZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG1lc3NhZ2VJZHMubGVuZ3RoID4gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBNRDUgY2hlY2tzdW0gb24gbWVzc2FnZXM6IFwiICsgbWVzc2FnZUlkcy5qb2luKFwiLCBcIikpO1xuICAgIH1cblxuICAgIHJldHVybiByZXNwO1xuICB9O1xuXG5leHBvcnQgY29uc3Qgc2VuZE1lc3NhZ2VCYXRjaE1pZGRsZXdhcmVPcHRpb25zOiBJbml0aWFsaXplSGFuZGxlck9wdGlvbnMgPSB7XG4gIHN0ZXA6IFwiaW5pdGlhbGl6ZVwiLFxuICB0YWdzOiBbXCJWQUxJREFURV9CT0RZX01ENVwiXSxcbiAgbmFtZTogXCJzZW5kTWVzc2FnZUJhdGNoTWlkZGxld2FyZVwiLFxuICBvdmVycmlkZTogdHJ1ZSxcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZW5kTWVzc2FnZUJhdGNoUGx1Z2luID0gKGNvbmZpZzogUHJldmlvdXNseVJlc29sdmVkKTogUGx1Z2dhYmxlPGFueSwgYW55PiA9PiAoe1xuICBhcHBseVRvU3RhY2s6IChjbGllbnRTdGFjaykgPT4ge1xuICAgIGNsaWVudFN0YWNrLmFkZChzZW5kTWVzc2FnZUJhdGNoTWlkZGxld2FyZShjb25maWcpLCBzZW5kTWVzc2FnZUJhdGNoTWlkZGxld2FyZU9wdGlvbnMpO1xuICB9LFxufSk7XG4iXX0=