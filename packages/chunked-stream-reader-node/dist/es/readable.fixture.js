import { __extends } from "tslib";
import { Readable } from "stream";
var ReadFromBuffers = /** @class */ (function (_super) {
    __extends(ReadFromBuffers, _super);
    function ReadFromBuffers(options) {
        var _this = _super.call(this, options) || this;
        _this.numBuffersRead = 0;
        _this.buffersToRead = options.buffers;
        _this.errorAfter = typeof options.errorAfter === "number" ? options.errorAfter : -1;
        return _this;
    }
    ReadFromBuffers.prototype._read = function () {
        if (this.errorAfter !== -1 && this.errorAfter === this.numBuffersRead) {
            this.emit("error", new Error("Mock Error"));
            return;
        }
        if (this.numBuffersRead >= this.buffersToRead.length) {
            return this.push(null);
        }
        return this.push(this.buffersToRead[this.numBuffersRead++]);
    };
    return ReadFromBuffers;
}(Readable));
export { ReadFromBuffers };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZGFibGUuZml4dHVyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWFkYWJsZS5maXh0dXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFtQixNQUFNLFFBQVEsQ0FBQztBQU9uRDtJQUFxQyxtQ0FBUTtJQUszQyx5QkFBWSxPQUErQjtRQUEzQyxZQUNFLGtCQUFNLE9BQU8sQ0FBQyxTQUdmO1FBUE8sb0JBQWMsR0FBRyxDQUFDLENBQUM7UUFLekIsS0FBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQ3JDLEtBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxPQUFPLENBQUMsVUFBVSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O0lBQ3JGLENBQUM7SUFFRCwrQkFBSyxHQUFMO1FBQ0UsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNyRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQzVDLE9BQU87U0FDUjtRQUNELElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtZQUNwRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEI7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFyQkQsQ0FBcUMsUUFBUSxHQXFCNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFkYWJsZSwgUmVhZGFibGVPcHRpb25zIH0gZnJvbSBcInN0cmVhbVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlYWRGcm9tQnVmZmVyc09wdGlvbnMgZXh0ZW5kcyBSZWFkYWJsZU9wdGlvbnMge1xuICBidWZmZXJzOiBCdWZmZXJbXTtcbiAgZXJyb3JBZnRlcj86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFJlYWRGcm9tQnVmZmVycyBleHRlbmRzIFJlYWRhYmxlIHtcbiAgcHJpdmF0ZSBidWZmZXJzVG9SZWFkOiBCdWZmZXJbXTtcbiAgcHJpdmF0ZSBudW1CdWZmZXJzUmVhZCA9IDA7XG5cbiAgcHJpdmF0ZSBlcnJvckFmdGVyOiBudW1iZXI7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFJlYWRGcm9tQnVmZmVyc09wdGlvbnMpIHtcbiAgICBzdXBlcihvcHRpb25zKTtcbiAgICB0aGlzLmJ1ZmZlcnNUb1JlYWQgPSBvcHRpb25zLmJ1ZmZlcnM7XG4gICAgdGhpcy5lcnJvckFmdGVyID0gdHlwZW9mIG9wdGlvbnMuZXJyb3JBZnRlciA9PT0gXCJudW1iZXJcIiA/IG9wdGlvbnMuZXJyb3JBZnRlciA6IC0xO1xuICB9XG5cbiAgX3JlYWQoKSB7XG4gICAgaWYgKHRoaXMuZXJyb3JBZnRlciAhPT0gLTEgJiYgdGhpcy5lcnJvckFmdGVyID09PSB0aGlzLm51bUJ1ZmZlcnNSZWFkKSB7XG4gICAgICB0aGlzLmVtaXQoXCJlcnJvclwiLCBuZXcgRXJyb3IoXCJNb2NrIEVycm9yXCIpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMubnVtQnVmZmVyc1JlYWQgPj0gdGhpcy5idWZmZXJzVG9SZWFkLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMucHVzaChudWxsKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucHVzaCh0aGlzLmJ1ZmZlcnNUb1JlYWRbdGhpcy5udW1CdWZmZXJzUmVhZCsrXSk7XG4gIH1cbn1cbiJdfQ==