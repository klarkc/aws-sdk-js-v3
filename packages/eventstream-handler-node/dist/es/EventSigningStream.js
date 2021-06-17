import { __assign, __awaiter, __extends, __generator } from "tslib";
import { Transform } from "stream";
/**
 * A transform stream that signs the eventstream
 */
var EventSigningStream = /** @class */ (function (_super) {
    __extends(EventSigningStream, _super);
    function EventSigningStream(options) {
        var _this = _super.call(this, __assign({ readableObjectMode: true, writableObjectMode: true }, options)) || this;
        _this.priorSignature = options.priorSignature;
        _this.eventSigner = options.eventSigner;
        _this.eventMarshaller = options.eventMarshaller;
        //TODO: use 'autoDestroy' when targeting Node 11
        //reference: https://nodejs.org/dist/latest-v13.x/docs/api/stream.html#stream_new_stream_readable_options
        _this.on("error", function () {
            _this.destroy();
        });
        _this.on("end", function () {
            _this.destroy();
        });
        return _this;
    }
    EventSigningStream.prototype._transform = function (chunk, encoding, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var now, dateHeader, signature, serializedSigned, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        now = new Date();
                        dateHeader = {
                            ":date": { type: "timestamp", value: now },
                        };
                        return [4 /*yield*/, this.eventSigner.sign({
                                payload: chunk,
                                headers: this.eventMarshaller.formatHeaders(dateHeader),
                            }, {
                                priorSignature: this.priorSignature,
                                signingDate: now,
                            })];
                    case 1:
                        signature = _a.sent();
                        this.priorSignature = signature;
                        serializedSigned = this.eventMarshaller.marshall({
                            headers: __assign(__assign({}, dateHeader), { ":chunk-signature": {
                                    type: "binary",
                                    value: getSignatureBinary(signature),
                                } }),
                            body: chunk,
                        });
                        this.push(serializedSigned);
                        return [2 /*return*/, callback()];
                    case 2:
                        err_1 = _a.sent();
                        callback(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return EventSigningStream;
}(Transform));
export { EventSigningStream };
function getSignatureBinary(signature) {
    var buf = Buffer.from(signature, "hex");
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRTaWduaW5nU3RyZWFtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0V2ZW50U2lnbmluZ1N0cmVhbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBdUMsTUFBTSxRQUFRLENBQUM7QUFReEU7O0dBRUc7QUFDSDtJQUF3QyxzQ0FBUztJQUkvQyw0QkFBWSxPQUFrQztRQUE5QyxZQUNFLDZCQUNFLGtCQUFrQixFQUFFLElBQUksRUFDeEIsa0JBQWtCLEVBQUUsSUFBSSxJQUNyQixPQUFPLEVBQ1YsU0FZSDtRQVhDLEtBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQztRQUM3QyxLQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFDdkMsS0FBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDO1FBQy9DLGdEQUFnRDtRQUNoRCx5R0FBeUc7UUFDekcsS0FBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7WUFDZixLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7UUFDSCxLQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRTtZQUNiLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQzs7SUFDTCxDQUFDO0lBRUssdUNBQVUsR0FBaEIsVUFBaUIsS0FBaUIsRUFBRSxRQUFnQixFQUFFLFFBQTJCOzs7Ozs7O3dCQUV2RSxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQzt3QkFDakIsVUFBVSxHQUFtQjs0QkFDakMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO3lCQUMzQyxDQUFDO3dCQUNnQixxQkFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDM0M7Z0NBQ0UsT0FBTyxFQUFFLEtBQUs7Z0NBQ2QsT0FBTyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQzs2QkFDeEQsRUFDRDtnQ0FDRSxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7Z0NBQ25DLFdBQVcsRUFBRSxHQUFHOzZCQUNqQixDQUNGLEVBQUE7O3dCQVRLLFNBQVMsR0FBRyxTQVNqQjt3QkFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQzt3QkFDMUIsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7NEJBQ3JELE9BQU8sd0JBQ0YsVUFBVSxLQUNiLGtCQUFrQixFQUFFO29DQUNsQixJQUFJLEVBQUUsUUFBUTtvQ0FDZCxLQUFLLEVBQUUsa0JBQWtCLENBQUMsU0FBUyxDQUFDO2lDQUNyQyxHQUNGOzRCQUNELElBQUksRUFBRSxLQUFLO3lCQUNaLENBQUMsQ0FBQzt3QkFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7d0JBQzVCLHNCQUFPLFFBQVEsRUFBRSxFQUFDOzs7d0JBRWxCLFFBQVEsQ0FBQyxLQUFHLENBQUMsQ0FBQzs7Ozs7O0tBRWpCO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBeERELENBQXdDLFNBQVMsR0F3RGhEOztBQUVELFNBQVMsa0JBQWtCLENBQUMsU0FBaUI7SUFDM0MsSUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNuRyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRTdHJlYW1NYXJzaGFsbGVyIGFzIEV2ZW50TWFyc2hhbGxlciB9IGZyb20gXCJAYXdzLXNkay9ldmVudHN0cmVhbS1tYXJzaGFsbGVyXCI7XG5pbXBvcnQgeyBFdmVudFNpZ25lciwgTWVzc2FnZUhlYWRlcnMgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcbmltcG9ydCB7IFRyYW5zZm9ybSwgVHJhbnNmb3JtQ2FsbGJhY2ssIFRyYW5zZm9ybU9wdGlvbnMgfSBmcm9tIFwic3RyZWFtXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRTaWduaW5nU3RyZWFtT3B0aW9ucyBleHRlbmRzIFRyYW5zZm9ybU9wdGlvbnMge1xuICBwcmlvclNpZ25hdHVyZTogc3RyaW5nO1xuICBldmVudFNpZ25lcjogRXZlbnRTaWduZXI7XG4gIGV2ZW50TWFyc2hhbGxlcjogRXZlbnRNYXJzaGFsbGVyO1xufVxuXG4vKipcbiAqIEEgdHJhbnNmb3JtIHN0cmVhbSB0aGF0IHNpZ25zIHRoZSBldmVudHN0cmVhbVxuICovXG5leHBvcnQgY2xhc3MgRXZlbnRTaWduaW5nU3RyZWFtIGV4dGVuZHMgVHJhbnNmb3JtIHtcbiAgcHJpdmF0ZSBwcmlvclNpZ25hdHVyZTogc3RyaW5nO1xuICBwcml2YXRlIGV2ZW50U2lnbmVyOiBFdmVudFNpZ25lcjtcbiAgcHJpdmF0ZSBldmVudE1hcnNoYWxsZXI6IEV2ZW50TWFyc2hhbGxlcjtcbiAgY29uc3RydWN0b3Iob3B0aW9uczogRXZlbnRTaWduaW5nU3RyZWFtT3B0aW9ucykge1xuICAgIHN1cGVyKHtcbiAgICAgIHJlYWRhYmxlT2JqZWN0TW9kZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlT2JqZWN0TW9kZTogdHJ1ZSxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfSk7XG4gICAgdGhpcy5wcmlvclNpZ25hdHVyZSA9IG9wdGlvbnMucHJpb3JTaWduYXR1cmU7XG4gICAgdGhpcy5ldmVudFNpZ25lciA9IG9wdGlvbnMuZXZlbnRTaWduZXI7XG4gICAgdGhpcy5ldmVudE1hcnNoYWxsZXIgPSBvcHRpb25zLmV2ZW50TWFyc2hhbGxlcjtcbiAgICAvL1RPRE86IHVzZSAnYXV0b0Rlc3Ryb3knIHdoZW4gdGFyZ2V0aW5nIE5vZGUgMTFcbiAgICAvL3JlZmVyZW5jZTogaHR0cHM6Ly9ub2RlanMub3JnL2Rpc3QvbGF0ZXN0LXYxMy54L2RvY3MvYXBpL3N0cmVhbS5odG1sI3N0cmVhbV9uZXdfc3RyZWFtX3JlYWRhYmxlX29wdGlvbnNcbiAgICB0aGlzLm9uKFwiZXJyb3JcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgfSk7XG4gICAgdGhpcy5vbihcImVuZFwiLCAoKSA9PiB7XG4gICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIF90cmFuc2Zvcm0oY2h1bms6IFVpbnQ4QXJyYXksIGVuY29kaW5nOiBzdHJpbmcsIGNhbGxiYWNrOiBUcmFuc2Zvcm1DYWxsYmFjayk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgZGF0ZUhlYWRlcjogTWVzc2FnZUhlYWRlcnMgPSB7XG4gICAgICAgIFwiOmRhdGVcIjogeyB0eXBlOiBcInRpbWVzdGFtcFwiLCB2YWx1ZTogbm93IH0sXG4gICAgICB9O1xuICAgICAgY29uc3Qgc2lnbmF0dXJlID0gYXdhaXQgdGhpcy5ldmVudFNpZ25lci5zaWduKFxuICAgICAgICB7XG4gICAgICAgICAgcGF5bG9hZDogY2h1bmssXG4gICAgICAgICAgaGVhZGVyczogdGhpcy5ldmVudE1hcnNoYWxsZXIuZm9ybWF0SGVhZGVycyhkYXRlSGVhZGVyKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByaW9yU2lnbmF0dXJlOiB0aGlzLnByaW9yU2lnbmF0dXJlLFxuICAgICAgICAgIHNpZ25pbmdEYXRlOiBub3csXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICB0aGlzLnByaW9yU2lnbmF0dXJlID0gc2lnbmF0dXJlO1xuICAgICAgY29uc3Qgc2VyaWFsaXplZFNpZ25lZCA9IHRoaXMuZXZlbnRNYXJzaGFsbGVyLm1hcnNoYWxsKHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIC4uLmRhdGVIZWFkZXIsXG4gICAgICAgICAgXCI6Y2h1bmstc2lnbmF0dXJlXCI6IHtcbiAgICAgICAgICAgIHR5cGU6IFwiYmluYXJ5XCIsXG4gICAgICAgICAgICB2YWx1ZTogZ2V0U2lnbmF0dXJlQmluYXJ5KHNpZ25hdHVyZSksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogY2h1bmssXG4gICAgICB9KTtcbiAgICAgIHRoaXMucHVzaChzZXJpYWxpemVkU2lnbmVkKTtcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U2lnbmF0dXJlQmluYXJ5KHNpZ25hdHVyZTogc3RyaW5nKTogVWludDhBcnJheSB7XG4gIGNvbnN0IGJ1ZiA9IEJ1ZmZlci5mcm9tKHNpZ25hdHVyZSwgXCJoZXhcIik7XG4gIHJldHVybiBuZXcgVWludDhBcnJheShidWYuYnVmZmVyLCBidWYuYnl0ZU9mZnNldCwgYnVmLmJ5dGVMZW5ndGggLyBVaW50OEFycmF5LkJZVEVTX1BFUl9FTEVNRU5UKTtcbn1cbiJdfQ==