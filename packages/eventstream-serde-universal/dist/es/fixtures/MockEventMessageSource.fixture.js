import { __extends } from "tslib";
import { Readable } from "stream";
var MockEventMessageSource = /** @class */ (function (_super) {
    __extends(MockEventMessageSource, _super);
    function MockEventMessageSource(options) {
        var _this = _super.call(this, options) || this;
        _this.readCount = 0;
        _this.data = Buffer.concat(options.messages);
        _this.emitSize = options.emitSize;
        _this.throwError = options.throwError;
        return _this;
    }
    MockEventMessageSource.prototype._read = function () {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        var self = this;
        if (this.readCount === this.data.length) {
            if (this.throwError) {
                process.nextTick(function () {
                    self.emit("error", new Error("Throwing an error!"));
                });
                return;
            }
            else {
                this.push(null);
                return;
            }
        }
        var bytesLeft = this.data.length - this.readCount;
        var numBytesToSend = Math.min(bytesLeft, this.emitSize);
        var chunk = this.data.slice(this.readCount, this.readCount + numBytesToSend);
        this.readCount += numBytesToSend;
        this.push(chunk);
    };
    return MockEventMessageSource;
}(Readable));
export { MockEventMessageSource };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9ja0V2ZW50TWVzc2FnZVNvdXJjZS5maXh0dXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2ZpeHR1cmVzL01vY2tFdmVudE1lc3NhZ2VTb3VyY2UuZml4dHVyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBbUIsTUFBTSxRQUFRLENBQUM7QUFRbkQ7SUFBNEMsMENBQVE7SUFLbEQsZ0NBQVksT0FBc0M7UUFBbEQsWUFDRSxrQkFBTSxPQUFPLENBQUMsU0FJZjtRQU5PLGVBQVMsR0FBRyxDQUFDLENBQUM7UUFHcEIsS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QyxLQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDakMsS0FBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDOztJQUN2QyxDQUFDO0lBRUQsc0NBQUssR0FBTDtRQUNFLDREQUE0RDtRQUM1RCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3ZDLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbkIsT0FBTyxDQUFDLFFBQVEsQ0FBQztvQkFDZixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RELENBQUMsQ0FBQyxDQUFDO2dCQUNILE9BQU87YUFDUjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoQixPQUFPO2FBQ1I7U0FDRjtRQUVELElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDcEQsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTFELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsU0FBUyxJQUFJLGNBQWMsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFDSCw2QkFBQztBQUFELENBQUMsQUFsQ0QsQ0FBNEMsUUFBUSxHQWtDbkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFkYWJsZSwgUmVhZGFibGVPcHRpb25zIH0gZnJvbSBcInN0cmVhbVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1vY2tFdmVudE1lc3NhZ2VTb3VyY2VPcHRpb25zIGV4dGVuZHMgUmVhZGFibGVPcHRpb25zIHtcbiAgbWVzc2FnZXM6IEFycmF5PEJ1ZmZlcj47XG4gIGVtaXRTaXplOiBudW1iZXI7XG4gIHRocm93RXJyb3I/OiBFcnJvcjtcbn1cblxuZXhwb3J0IGNsYXNzIE1vY2tFdmVudE1lc3NhZ2VTb3VyY2UgZXh0ZW5kcyBSZWFkYWJsZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgZGF0YTogQnVmZmVyO1xuICBwcml2YXRlIHJlYWRvbmx5IGVtaXRTaXplOiBudW1iZXI7XG4gIHByaXZhdGUgcmVhZG9ubHkgdGhyb3dFcnJvcj86IEVycm9yO1xuICBwcml2YXRlIHJlYWRDb3VudCA9IDA7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE1vY2tFdmVudE1lc3NhZ2VTb3VyY2VPcHRpb25zKSB7XG4gICAgc3VwZXIob3B0aW9ucyk7XG4gICAgdGhpcy5kYXRhID0gQnVmZmVyLmNvbmNhdChvcHRpb25zLm1lc3NhZ2VzKTtcbiAgICB0aGlzLmVtaXRTaXplID0gb3B0aW9ucy5lbWl0U2l6ZTtcbiAgICB0aGlzLnRocm93RXJyb3IgPSBvcHRpb25zLnRocm93RXJyb3I7XG4gIH1cblxuICBfcmVhZCgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXRoaXMtYWxpYXNcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBpZiAodGhpcy5yZWFkQ291bnQgPT09IHRoaXMuZGF0YS5sZW5ndGgpIHtcbiAgICAgIGlmICh0aGlzLnRocm93RXJyb3IpIHtcbiAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2VsZi5lbWl0KFwiZXJyb3JcIiwgbmV3IEVycm9yKFwiVGhyb3dpbmcgYW4gZXJyb3IhXCIpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucHVzaChudWxsKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGJ5dGVzTGVmdCA9IHRoaXMuZGF0YS5sZW5ndGggLSB0aGlzLnJlYWRDb3VudDtcbiAgICBjb25zdCBudW1CeXRlc1RvU2VuZCA9IE1hdGgubWluKGJ5dGVzTGVmdCwgdGhpcy5lbWl0U2l6ZSk7XG5cbiAgICBjb25zdCBjaHVuayA9IHRoaXMuZGF0YS5zbGljZSh0aGlzLnJlYWRDb3VudCwgdGhpcy5yZWFkQ291bnQgKyBudW1CeXRlc1RvU2VuZCk7XG4gICAgdGhpcy5yZWFkQ291bnQgKz0gbnVtQnl0ZXNUb1NlbmQ7XG4gICAgdGhpcy5wdXNoKGNodW5rKTtcbiAgfVxufVxuIl19