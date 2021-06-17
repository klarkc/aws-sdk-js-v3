"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockEventMessageSource = void 0;
const stream_1 = require("stream");
class MockEventMessageSource extends stream_1.Readable {
    constructor(options) {
        super(options);
        this.readCount = 0;
        this.data = Buffer.concat(options.messages);
        this.emitSize = options.emitSize;
        this.throwError = options.throwError;
    }
    _read() {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
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
        const bytesLeft = this.data.length - this.readCount;
        const numBytesToSend = Math.min(bytesLeft, this.emitSize);
        const chunk = this.data.slice(this.readCount, this.readCount + numBytesToSend);
        this.readCount += numBytesToSend;
        this.push(chunk);
    }
}
exports.MockEventMessageSource = MockEventMessageSource;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9ja0V2ZW50TWVzc2FnZVNvdXJjZS5maXh0dXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2ZpeHR1cmVzL01vY2tFdmVudE1lc3NhZ2VTb3VyY2UuZml4dHVyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBbUQ7QUFRbkQsTUFBYSxzQkFBdUIsU0FBUSxpQkFBUTtJQUtsRCxZQUFZLE9BQXNDO1FBQ2hELEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUZULGNBQVMsR0FBRyxDQUFDLENBQUM7UUFHcEIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxLQUFLO1FBQ0gsNERBQTREO1FBQzVELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDdkMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNuQixPQUFPLENBQUMsUUFBUSxDQUFDO29CQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztnQkFDdEQsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsT0FBTzthQUNSO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2hCLE9BQU87YUFDUjtTQUNGO1FBRUQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNwRCxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFMUQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxTQUFTLElBQUksY0FBYyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkIsQ0FBQztDQUNGO0FBbENELHdEQWtDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWRhYmxlLCBSZWFkYWJsZU9wdGlvbnMgfSBmcm9tIFwic3RyZWFtXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9ja0V2ZW50TWVzc2FnZVNvdXJjZU9wdGlvbnMgZXh0ZW5kcyBSZWFkYWJsZU9wdGlvbnMge1xuICBtZXNzYWdlczogQXJyYXk8QnVmZmVyPjtcbiAgZW1pdFNpemU6IG51bWJlcjtcbiAgdGhyb3dFcnJvcj86IEVycm9yO1xufVxuXG5leHBvcnQgY2xhc3MgTW9ja0V2ZW50TWVzc2FnZVNvdXJjZSBleHRlbmRzIFJlYWRhYmxlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBkYXRhOiBCdWZmZXI7XG4gIHByaXZhdGUgcmVhZG9ubHkgZW1pdFNpemU6IG51bWJlcjtcbiAgcHJpdmF0ZSByZWFkb25seSB0aHJvd0Vycm9yPzogRXJyb3I7XG4gIHByaXZhdGUgcmVhZENvdW50ID0gMDtcbiAgY29uc3RydWN0b3Iob3B0aW9uczogTW9ja0V2ZW50TWVzc2FnZVNvdXJjZU9wdGlvbnMpIHtcbiAgICBzdXBlcihvcHRpb25zKTtcbiAgICB0aGlzLmRhdGEgPSBCdWZmZXIuY29uY2F0KG9wdGlvbnMubWVzc2FnZXMpO1xuICAgIHRoaXMuZW1pdFNpemUgPSBvcHRpb25zLmVtaXRTaXplO1xuICAgIHRoaXMudGhyb3dFcnJvciA9IG9wdGlvbnMudGhyb3dFcnJvcjtcbiAgfVxuXG4gIF9yZWFkKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdGhpcy1hbGlhc1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGlmICh0aGlzLnJlYWRDb3VudCA9PT0gdGhpcy5kYXRhLmxlbmd0aCkge1xuICAgICAgaWYgKHRoaXMudGhyb3dFcnJvcikge1xuICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZWxmLmVtaXQoXCJlcnJvclwiLCBuZXcgRXJyb3IoXCJUaHJvd2luZyBhbiBlcnJvciFcIikpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wdXNoKG51bGwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYnl0ZXNMZWZ0ID0gdGhpcy5kYXRhLmxlbmd0aCAtIHRoaXMucmVhZENvdW50O1xuICAgIGNvbnN0IG51bUJ5dGVzVG9TZW5kID0gTWF0aC5taW4oYnl0ZXNMZWZ0LCB0aGlzLmVtaXRTaXplKTtcblxuICAgIGNvbnN0IGNodW5rID0gdGhpcy5kYXRhLnNsaWNlKHRoaXMucmVhZENvdW50LCB0aGlzLnJlYWRDb3VudCArIG51bUJ5dGVzVG9TZW5kKTtcbiAgICB0aGlzLnJlYWRDb3VudCArPSBudW1CeXRlc1RvU2VuZDtcbiAgICB0aGlzLnB1c2goY2h1bmspO1xuICB9XG59XG4iXX0=