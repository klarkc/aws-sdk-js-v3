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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ReadFromBuffers.prototype._read = function (size) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZGFibGUubW9jay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHJlYW0tY29sbGVjdG9yL3JlYWRhYmxlLm1vY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQW1CLE1BQU0sUUFBUSxDQUFDO0FBT25EO0lBQXFDLG1DQUFRO0lBSzNDLHlCQUFZLE9BQStCO1FBQTNDLFlBQ0Usa0JBQU0sT0FBTyxDQUFDLFNBR2Y7UUFQTyxvQkFBYyxHQUFHLENBQUMsQ0FBQztRQUt6QixLQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDckMsS0FBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLE9BQU8sQ0FBQyxVQUFVLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7SUFDckYsQ0FBQztJQUVELDZEQUE2RDtJQUM3RCwrQkFBSyxHQUFMLFVBQU0sSUFBWTtRQUNoQixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3JFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDNUMsT0FBTztTQUNSO1FBQ0QsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFO1lBQ3BELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QjtRQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQXRCRCxDQUFxQyxRQUFRLEdBc0I1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWRhYmxlLCBSZWFkYWJsZU9wdGlvbnMgfSBmcm9tIFwic3RyZWFtXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVhZEZyb21CdWZmZXJzT3B0aW9ucyBleHRlbmRzIFJlYWRhYmxlT3B0aW9ucyB7XG4gIGJ1ZmZlcnM6IEJ1ZmZlcltdO1xuICBlcnJvckFmdGVyPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgUmVhZEZyb21CdWZmZXJzIGV4dGVuZHMgUmVhZGFibGUge1xuICBwcml2YXRlIGJ1ZmZlcnNUb1JlYWQ6IEJ1ZmZlcltdO1xuICBwcml2YXRlIG51bUJ1ZmZlcnNSZWFkID0gMDtcblxuICBwcml2YXRlIGVycm9yQWZ0ZXI6IG51bWJlcjtcbiAgY29uc3RydWN0b3Iob3B0aW9uczogUmVhZEZyb21CdWZmZXJzT3B0aW9ucykge1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIHRoaXMuYnVmZmVyc1RvUmVhZCA9IG9wdGlvbnMuYnVmZmVycztcbiAgICB0aGlzLmVycm9yQWZ0ZXIgPSB0eXBlb2Ygb3B0aW9ucy5lcnJvckFmdGVyID09PSBcIm51bWJlclwiID8gb3B0aW9ucy5lcnJvckFmdGVyIDogLTE7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gIF9yZWFkKHNpemU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLmVycm9yQWZ0ZXIgIT09IC0xICYmIHRoaXMuZXJyb3JBZnRlciA9PT0gdGhpcy5udW1CdWZmZXJzUmVhZCkge1xuICAgICAgdGhpcy5lbWl0KFwiZXJyb3JcIiwgbmV3IEVycm9yKFwiTW9jayBFcnJvclwiKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLm51bUJ1ZmZlcnNSZWFkID49IHRoaXMuYnVmZmVyc1RvUmVhZC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLnB1c2gobnVsbCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnB1c2godGhpcy5idWZmZXJzVG9SZWFkW3RoaXMubnVtQnVmZmVyc1JlYWQrK10pO1xuICB9XG59XG4iXX0=