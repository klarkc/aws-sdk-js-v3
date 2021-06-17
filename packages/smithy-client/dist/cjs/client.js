"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const middleware_stack_1 = require("@aws-sdk/middleware-stack");
class Client {
    constructor(config) {
        this.middlewareStack = middleware_stack_1.constructStack();
        this.config = config;
    }
    send(command, optionsOrCb, cb) {
        const options = typeof optionsOrCb !== "function" ? optionsOrCb : undefined;
        const callback = typeof optionsOrCb === "function" ? optionsOrCb : cb;
        const handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
        if (callback) {
            handler(command)
                .then((result) => callback(null, result.output), (err) => callback(err))
                .catch(
            // prevent any errors thrown in the callback from triggering an
            // unhandled promise rejection
            () => { });
        }
        else {
            return handler(command).then((result) => result.output);
        }
    }
    destroy() {
        if (this.config.requestHandler.destroy)
            this.config.requestHandler.destroy();
    }
}
exports.Client = Client;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxnRUFBMkQ7QUFlM0QsTUFBYSxNQUFNO0lBU2pCLFlBQVksTUFBbUM7UUFGeEMsb0JBQWUsR0FBRyxpQ0FBYyxFQUE2QixDQUFDO1FBR25FLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFjRCxJQUFJLENBQ0YsT0FBK0csRUFDL0csV0FBc0UsRUFDdEUsRUFBMEM7UUFFMUMsTUFBTSxPQUFPLEdBQUcsT0FBTyxXQUFXLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUM1RSxNQUFNLFFBQVEsR0FBRyxPQUFPLFdBQVcsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFFLFdBQXFELENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNqSCxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGVBQXNCLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM3RixJQUFJLFFBQVEsRUFBRTtZQUNaLE9BQU8sQ0FBQyxPQUFPLENBQUM7aUJBQ2IsSUFBSSxDQUNILENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFDekMsQ0FBQyxHQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FDNUI7aUJBQ0EsS0FBSztZQUNKLCtEQUErRDtZQUMvRCw4QkFBOEI7WUFDOUIsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUNULENBQUM7U0FDTDthQUFNO1lBQ0wsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDekQ7SUFDSCxDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTztZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQy9FLENBQUM7Q0FDRjtBQXBERCx3QkFvREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25zdHJ1Y3RTdGFjayB9IGZyb20gXCJAYXdzLXNkay9taWRkbGV3YXJlLXN0YWNrXCI7XG5pbXBvcnQgeyBDbGllbnQgYXMgSUNsaWVudCwgQ29tbWFuZCwgTWV0YWRhdGFCZWFyZXIsIFJlcXVlc3RIYW5kbGVyIH0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU21pdGh5Q29uZmlndXJhdGlvbjxIYW5kbGVyT3B0aW9ucz4ge1xuICByZXF1ZXN0SGFuZGxlcjogUmVxdWVzdEhhbmRsZXI8YW55LCBhbnksIEhhbmRsZXJPcHRpb25zPjtcbiAgLyoqXG4gICAqIFRoZSBBUEkgdmVyc2lvbiBzZXQgaW50ZXJuYWxseSBieSB0aGUgU0RLLCBhbmQgaXNcbiAgICogbm90IHBsYW5uZWQgdG8gYmUgdXNlZCBieSBjdXN0b21lciBjb2RlLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHJlYWRvbmx5IGFwaVZlcnNpb246IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgU21pdGh5UmVzb2x2ZWRDb25maWd1cmF0aW9uPEhhbmRsZXJPcHRpb25zPiA9IFNtaXRoeUNvbmZpZ3VyYXRpb248SGFuZGxlck9wdGlvbnM+O1xuXG5leHBvcnQgY2xhc3MgQ2xpZW50PFxuICBIYW5kbGVyT3B0aW9ucyxcbiAgQ2xpZW50SW5wdXQgZXh0ZW5kcyBvYmplY3QsXG4gIENsaWVudE91dHB1dCBleHRlbmRzIE1ldGFkYXRhQmVhcmVyLFxuICBSZXNvbHZlZENsaWVudENvbmZpZ3VyYXRpb24gZXh0ZW5kcyBTbWl0aHlSZXNvbHZlZENvbmZpZ3VyYXRpb248SGFuZGxlck9wdGlvbnM+XG4+IGltcGxlbWVudHMgSUNsaWVudDxDbGllbnRJbnB1dCwgQ2xpZW50T3V0cHV0LCBSZXNvbHZlZENsaWVudENvbmZpZ3VyYXRpb24+XG57XG4gIHB1YmxpYyBtaWRkbGV3YXJlU3RhY2sgPSBjb25zdHJ1Y3RTdGFjazxDbGllbnRJbnB1dCwgQ2xpZW50T3V0cHV0PigpO1xuICByZWFkb25seSBjb25maWc6IFJlc29sdmVkQ2xpZW50Q29uZmlndXJhdGlvbjtcbiAgY29uc3RydWN0b3IoY29uZmlnOiBSZXNvbHZlZENsaWVudENvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgfVxuICBzZW5kPElucHV0VHlwZSBleHRlbmRzIENsaWVudElucHV0LCBPdXRwdXRUeXBlIGV4dGVuZHMgQ2xpZW50T3V0cHV0PihcbiAgICBjb21tYW5kOiBDb21tYW5kPENsaWVudElucHV0LCBJbnB1dFR5cGUsIENsaWVudE91dHB1dCwgT3V0cHV0VHlwZSwgU21pdGh5UmVzb2x2ZWRDb25maWd1cmF0aW9uPEhhbmRsZXJPcHRpb25zPj4sXG4gICAgb3B0aW9ucz86IEhhbmRsZXJPcHRpb25zXG4gICk6IFByb21pc2U8T3V0cHV0VHlwZT47XG4gIHNlbmQ8SW5wdXRUeXBlIGV4dGVuZHMgQ2xpZW50SW5wdXQsIE91dHB1dFR5cGUgZXh0ZW5kcyBDbGllbnRPdXRwdXQ+KFxuICAgIGNvbW1hbmQ6IENvbW1hbmQ8Q2xpZW50SW5wdXQsIElucHV0VHlwZSwgQ2xpZW50T3V0cHV0LCBPdXRwdXRUeXBlLCBTbWl0aHlSZXNvbHZlZENvbmZpZ3VyYXRpb248SGFuZGxlck9wdGlvbnM+PixcbiAgICBjYjogKGVycjogYW55LCBkYXRhPzogT3V0cHV0VHlwZSkgPT4gdm9pZFxuICApOiB2b2lkO1xuICBzZW5kPElucHV0VHlwZSBleHRlbmRzIENsaWVudElucHV0LCBPdXRwdXRUeXBlIGV4dGVuZHMgQ2xpZW50T3V0cHV0PihcbiAgICBjb21tYW5kOiBDb21tYW5kPENsaWVudElucHV0LCBJbnB1dFR5cGUsIENsaWVudE91dHB1dCwgT3V0cHV0VHlwZSwgU21pdGh5UmVzb2x2ZWRDb25maWd1cmF0aW9uPEhhbmRsZXJPcHRpb25zPj4sXG4gICAgb3B0aW9uczogSGFuZGxlck9wdGlvbnMsXG4gICAgY2I6IChlcnI6IGFueSwgZGF0YT86IE91dHB1dFR5cGUpID0+IHZvaWRcbiAgKTogdm9pZDtcbiAgc2VuZDxJbnB1dFR5cGUgZXh0ZW5kcyBDbGllbnRJbnB1dCwgT3V0cHV0VHlwZSBleHRlbmRzIENsaWVudE91dHB1dD4oXG4gICAgY29tbWFuZDogQ29tbWFuZDxDbGllbnRJbnB1dCwgSW5wdXRUeXBlLCBDbGllbnRPdXRwdXQsIE91dHB1dFR5cGUsIFNtaXRoeVJlc29sdmVkQ29uZmlndXJhdGlvbjxIYW5kbGVyT3B0aW9ucz4+LFxuICAgIG9wdGlvbnNPckNiPzogSGFuZGxlck9wdGlvbnMgfCAoKGVycjogYW55LCBkYXRhPzogT3V0cHV0VHlwZSkgPT4gdm9pZCksXG4gICAgY2I/OiAoZXJyOiBhbnksIGRhdGE/OiBPdXRwdXRUeXBlKSA9PiB2b2lkXG4gICk6IFByb21pc2U8T3V0cHV0VHlwZT4gfCB2b2lkIHtcbiAgICBjb25zdCBvcHRpb25zID0gdHlwZW9mIG9wdGlvbnNPckNiICE9PSBcImZ1bmN0aW9uXCIgPyBvcHRpb25zT3JDYiA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBjYWxsYmFjayA9IHR5cGVvZiBvcHRpb25zT3JDYiA9PT0gXCJmdW5jdGlvblwiID8gKG9wdGlvbnNPckNiIGFzIChlcnI6IGFueSwgZGF0YT86IE91dHB1dFR5cGUpID0+IHZvaWQpIDogY2I7XG4gICAgY29uc3QgaGFuZGxlciA9IGNvbW1hbmQucmVzb2x2ZU1pZGRsZXdhcmUodGhpcy5taWRkbGV3YXJlU3RhY2sgYXMgYW55LCB0aGlzLmNvbmZpZywgb3B0aW9ucyk7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBoYW5kbGVyKGNvbW1hbmQpXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgIChyZXN1bHQpID0+IGNhbGxiYWNrKG51bGwsIHJlc3VsdC5vdXRwdXQpLFxuICAgICAgICAgIChlcnI6IGFueSkgPT4gY2FsbGJhY2soZXJyKVxuICAgICAgICApXG4gICAgICAgIC5jYXRjaChcbiAgICAgICAgICAvLyBwcmV2ZW50IGFueSBlcnJvcnMgdGhyb3duIGluIHRoZSBjYWxsYmFjayBmcm9tIHRyaWdnZXJpbmcgYW5cbiAgICAgICAgICAvLyB1bmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb25cbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaGFuZGxlcihjb21tYW5kKS50aGVuKChyZXN1bHQpID0+IHJlc3VsdC5vdXRwdXQpO1xuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLnJlcXVlc3RIYW5kbGVyLmRlc3Ryb3kpIHRoaXMuY29uZmlnLnJlcXVlc3RIYW5kbGVyLmRlc3Ryb3koKTtcbiAgfVxufVxuIl19