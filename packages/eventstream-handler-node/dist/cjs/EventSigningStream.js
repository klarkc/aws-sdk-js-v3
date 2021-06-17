"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventSigningStream = void 0;
const stream_1 = require("stream");
/**
 * A transform stream that signs the eventstream
 */
class EventSigningStream extends stream_1.Transform {
    constructor(options) {
        super({
            readableObjectMode: true,
            writableObjectMode: true,
            ...options,
        });
        this.priorSignature = options.priorSignature;
        this.eventSigner = options.eventSigner;
        this.eventMarshaller = options.eventMarshaller;
        //TODO: use 'autoDestroy' when targeting Node 11
        //reference: https://nodejs.org/dist/latest-v13.x/docs/api/stream.html#stream_new_stream_readable_options
        this.on("error", () => {
            this.destroy();
        });
        this.on("end", () => {
            this.destroy();
        });
    }
    async _transform(chunk, encoding, callback) {
        try {
            const now = new Date();
            const dateHeader = {
                ":date": { type: "timestamp", value: now },
            };
            const signature = await this.eventSigner.sign({
                payload: chunk,
                headers: this.eventMarshaller.formatHeaders(dateHeader),
            }, {
                priorSignature: this.priorSignature,
                signingDate: now,
            });
            this.priorSignature = signature;
            const serializedSigned = this.eventMarshaller.marshall({
                headers: {
                    ...dateHeader,
                    ":chunk-signature": {
                        type: "binary",
                        value: getSignatureBinary(signature),
                    },
                },
                body: chunk,
            });
            this.push(serializedSigned);
            return callback();
        }
        catch (err) {
            callback(err);
        }
    }
}
exports.EventSigningStream = EventSigningStream;
function getSignatureBinary(signature) {
    const buf = Buffer.from(signature, "hex");
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRTaWduaW5nU3RyZWFtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0V2ZW50U2lnbmluZ1N0cmVhbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxtQ0FBd0U7QUFReEU7O0dBRUc7QUFDSCxNQUFhLGtCQUFtQixTQUFRLGtCQUFTO0lBSS9DLFlBQVksT0FBa0M7UUFDNUMsS0FBSyxDQUFDO1lBQ0osa0JBQWtCLEVBQUUsSUFBSTtZQUN4QixrQkFBa0IsRUFBRSxJQUFJO1lBQ3hCLEdBQUcsT0FBTztTQUNYLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFDdkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDO1FBQy9DLGdEQUFnRDtRQUNoRCx5R0FBeUc7UUFDekcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRTtZQUNsQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFpQixFQUFFLFFBQWdCLEVBQUUsUUFBMkI7UUFDL0UsSUFBSTtZQUNGLE1BQU0sR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7WUFDdkIsTUFBTSxVQUFVLEdBQW1CO2dCQUNqQyxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7YUFDM0MsQ0FBQztZQUNGLE1BQU0sU0FBUyxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQzNDO2dCQUNFLE9BQU8sRUFBRSxLQUFLO2dCQUNkLE9BQU8sRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUM7YUFDeEQsRUFDRDtnQkFDRSxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7Z0JBQ25DLFdBQVcsRUFBRSxHQUFHO2FBQ2pCLENBQ0YsQ0FBQztZQUNGLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO1lBQ2hDLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7Z0JBQ3JELE9BQU8sRUFBRTtvQkFDUCxHQUFHLFVBQVU7b0JBQ2Isa0JBQWtCLEVBQUU7d0JBQ2xCLElBQUksRUFBRSxRQUFRO3dCQUNkLEtBQUssRUFBRSxrQkFBa0IsQ0FBQyxTQUFTLENBQUM7cUJBQ3JDO2lCQUNGO2dCQUNELElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzVCLE9BQU8sUUFBUSxFQUFFLENBQUM7U0FDbkI7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNmO0lBQ0gsQ0FBQztDQUNGO0FBeERELGdEQXdEQztBQUVELFNBQVMsa0JBQWtCLENBQUMsU0FBaUI7SUFDM0MsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNuRyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRTdHJlYW1NYXJzaGFsbGVyIGFzIEV2ZW50TWFyc2hhbGxlciB9IGZyb20gXCJAYXdzLXNkay9ldmVudHN0cmVhbS1tYXJzaGFsbGVyXCI7XG5pbXBvcnQgeyBFdmVudFNpZ25lciwgTWVzc2FnZUhlYWRlcnMgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcbmltcG9ydCB7IFRyYW5zZm9ybSwgVHJhbnNmb3JtQ2FsbGJhY2ssIFRyYW5zZm9ybU9wdGlvbnMgfSBmcm9tIFwic3RyZWFtXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRTaWduaW5nU3RyZWFtT3B0aW9ucyBleHRlbmRzIFRyYW5zZm9ybU9wdGlvbnMge1xuICBwcmlvclNpZ25hdHVyZTogc3RyaW5nO1xuICBldmVudFNpZ25lcjogRXZlbnRTaWduZXI7XG4gIGV2ZW50TWFyc2hhbGxlcjogRXZlbnRNYXJzaGFsbGVyO1xufVxuXG4vKipcbiAqIEEgdHJhbnNmb3JtIHN0cmVhbSB0aGF0IHNpZ25zIHRoZSBldmVudHN0cmVhbVxuICovXG5leHBvcnQgY2xhc3MgRXZlbnRTaWduaW5nU3RyZWFtIGV4dGVuZHMgVHJhbnNmb3JtIHtcbiAgcHJpdmF0ZSBwcmlvclNpZ25hdHVyZTogc3RyaW5nO1xuICBwcml2YXRlIGV2ZW50U2lnbmVyOiBFdmVudFNpZ25lcjtcbiAgcHJpdmF0ZSBldmVudE1hcnNoYWxsZXI6IEV2ZW50TWFyc2hhbGxlcjtcbiAgY29uc3RydWN0b3Iob3B0aW9uczogRXZlbnRTaWduaW5nU3RyZWFtT3B0aW9ucykge1xuICAgIHN1cGVyKHtcbiAgICAgIHJlYWRhYmxlT2JqZWN0TW9kZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlT2JqZWN0TW9kZTogdHJ1ZSxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfSk7XG4gICAgdGhpcy5wcmlvclNpZ25hdHVyZSA9IG9wdGlvbnMucHJpb3JTaWduYXR1cmU7XG4gICAgdGhpcy5ldmVudFNpZ25lciA9IG9wdGlvbnMuZXZlbnRTaWduZXI7XG4gICAgdGhpcy5ldmVudE1hcnNoYWxsZXIgPSBvcHRpb25zLmV2ZW50TWFyc2hhbGxlcjtcbiAgICAvL1RPRE86IHVzZSAnYXV0b0Rlc3Ryb3knIHdoZW4gdGFyZ2V0aW5nIE5vZGUgMTFcbiAgICAvL3JlZmVyZW5jZTogaHR0cHM6Ly9ub2RlanMub3JnL2Rpc3QvbGF0ZXN0LXYxMy54L2RvY3MvYXBpL3N0cmVhbS5odG1sI3N0cmVhbV9uZXdfc3RyZWFtX3JlYWRhYmxlX29wdGlvbnNcbiAgICB0aGlzLm9uKFwiZXJyb3JcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgfSk7XG4gICAgdGhpcy5vbihcImVuZFwiLCAoKSA9PiB7XG4gICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIF90cmFuc2Zvcm0oY2h1bms6IFVpbnQ4QXJyYXksIGVuY29kaW5nOiBzdHJpbmcsIGNhbGxiYWNrOiBUcmFuc2Zvcm1DYWxsYmFjayk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgZGF0ZUhlYWRlcjogTWVzc2FnZUhlYWRlcnMgPSB7XG4gICAgICAgIFwiOmRhdGVcIjogeyB0eXBlOiBcInRpbWVzdGFtcFwiLCB2YWx1ZTogbm93IH0sXG4gICAgICB9O1xuICAgICAgY29uc3Qgc2lnbmF0dXJlID0gYXdhaXQgdGhpcy5ldmVudFNpZ25lci5zaWduKFxuICAgICAgICB7XG4gICAgICAgICAgcGF5bG9hZDogY2h1bmssXG4gICAgICAgICAgaGVhZGVyczogdGhpcy5ldmVudE1hcnNoYWxsZXIuZm9ybWF0SGVhZGVycyhkYXRlSGVhZGVyKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByaW9yU2lnbmF0dXJlOiB0aGlzLnByaW9yU2lnbmF0dXJlLFxuICAgICAgICAgIHNpZ25pbmdEYXRlOiBub3csXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICB0aGlzLnByaW9yU2lnbmF0dXJlID0gc2lnbmF0dXJlO1xuICAgICAgY29uc3Qgc2VyaWFsaXplZFNpZ25lZCA9IHRoaXMuZXZlbnRNYXJzaGFsbGVyLm1hcnNoYWxsKHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIC4uLmRhdGVIZWFkZXIsXG4gICAgICAgICAgXCI6Y2h1bmstc2lnbmF0dXJlXCI6IHtcbiAgICAgICAgICAgIHR5cGU6IFwiYmluYXJ5XCIsXG4gICAgICAgICAgICB2YWx1ZTogZ2V0U2lnbmF0dXJlQmluYXJ5KHNpZ25hdHVyZSksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogY2h1bmssXG4gICAgICB9KTtcbiAgICAgIHRoaXMucHVzaChzZXJpYWxpemVkU2lnbmVkKTtcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U2lnbmF0dXJlQmluYXJ5KHNpZ25hdHVyZTogc3RyaW5nKTogVWludDhBcnJheSB7XG4gIGNvbnN0IGJ1ZiA9IEJ1ZmZlci5mcm9tKHNpZ25hdHVyZSwgXCJoZXhcIik7XG4gIHJldHVybiBuZXcgVWludDhBcnJheShidWYuYnVmZmVyLCBidWYuYnl0ZU9mZnNldCwgYnVmLmJ5dGVMZW5ndGggLyBVaW50OEFycmF5LkJZVEVTX1BFUl9FTEVNRU5UKTtcbn1cbiJdfQ==