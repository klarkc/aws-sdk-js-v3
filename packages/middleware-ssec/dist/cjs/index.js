"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSsecPlugin = exports.ssecMiddlewareOptions = exports.ssecMiddleware = void 0;
function ssecMiddleware(options) {
    return (next) => async (args) => {
        let input = { ...args.input };
        const properties = [
            {
                target: "SSECustomerKey",
                hash: "SSECustomerKeyMD5",
            },
            {
                target: "CopySourceSSECustomerKey",
                hash: "CopySourceSSECustomerKeyMD5",
            },
        ];
        for (const prop of properties) {
            const value = input[prop.target];
            if (value) {
                const valueView = ArrayBuffer.isView(value)
                    ? new Uint8Array(value.buffer, value.byteOffset, value.byteLength)
                    : typeof value === "string"
                        ? options.utf8Decoder(value)
                        : new Uint8Array(value);
                const encoded = options.base64Encoder(valueView);
                const hash = new options.md5();
                hash.update(valueView);
                input = {
                    ...input,
                    [prop.target]: encoded,
                    [prop.hash]: options.base64Encoder(await hash.digest()),
                };
            }
        }
        return next({
            ...args,
            input,
        });
    };
}
exports.ssecMiddleware = ssecMiddleware;
exports.ssecMiddlewareOptions = {
    name: "ssecMiddleware",
    step: "initialize",
    tags: ["SSE"],
    override: true,
};
const getSsecPlugin = (config) => ({
    applyToStack: (clientStack) => {
        clientStack.add(ssecMiddleware(config), exports.ssecMiddlewareOptions);
    },
});
exports.getSsecPlugin = getSsecPlugin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBbUJBLFNBQWdCLGNBQWMsQ0FBQyxPQUEyQjtJQUN4RCxPQUFPLENBQWdDLElBQW9DLEVBQWtDLEVBQUUsQ0FDN0csS0FBSyxFQUFFLElBQXFDLEVBQTRDLEVBQUU7UUFDeEYsSUFBSSxLQUFLLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5QixNQUFNLFVBQVUsR0FBRztZQUNqQjtnQkFDRSxNQUFNLEVBQUUsZ0JBQWdCO2dCQUN4QixJQUFJLEVBQUUsbUJBQW1CO2FBQzFCO1lBQ0Q7Z0JBQ0UsTUFBTSxFQUFFLDBCQUEwQjtnQkFDbEMsSUFBSSxFQUFFLDZCQUE2QjthQUNwQztTQUNGLENBQUM7UUFFRixLQUFLLE1BQU0sSUFBSSxJQUFJLFVBQVUsRUFBRTtZQUM3QixNQUFNLEtBQUssR0FBNEIsS0FBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsRSxJQUFJLEtBQUssRUFBRTtnQkFDVCxNQUFNLFNBQVMsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFDekMsQ0FBQyxDQUFDLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDO29CQUNsRSxDQUFDLENBQUMsT0FBTyxLQUFLLEtBQUssUUFBUTt3QkFDM0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO3dCQUM1QixDQUFDLENBQUMsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzFCLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ2pELE1BQU0sSUFBSSxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN2QixLQUFLLEdBQUc7b0JBQ04sR0FBSSxLQUFhO29CQUNqQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxPQUFPO29CQUN0QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLENBQUMsYUFBYSxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2lCQUN4RCxDQUFDO2FBQ0g7U0FDRjtRQUVELE9BQU8sSUFBSSxDQUFDO1lBQ1YsR0FBRyxJQUFJO1lBQ1AsS0FBSztTQUNOLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztBQUNOLENBQUM7QUF2Q0Qsd0NBdUNDO0FBRVksUUFBQSxxQkFBcUIsR0FBNkI7SUFDN0QsSUFBSSxFQUFFLGdCQUFnQjtJQUN0QixJQUFJLEVBQUUsWUFBWTtJQUNsQixJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUM7SUFDYixRQUFRLEVBQUUsSUFBSTtDQUNmLENBQUM7QUFFSyxNQUFNLGFBQWEsR0FBRyxDQUFDLE1BQTBCLEVBQXVCLEVBQUUsQ0FBQyxDQUFDO0lBQ2pGLFlBQVksRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFO1FBQzVCLFdBQVcsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFLDZCQUFxQixDQUFDLENBQUM7SUFDakUsQ0FBQztDQUNGLENBQUMsQ0FBQztBQUpVLFFBQUEsYUFBYSxpQkFJdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEZWNvZGVyLFxuICBFbmNvZGVyLFxuICBIYXNoLFxuICBJbml0aWFsaXplSGFuZGxlcixcbiAgSW5pdGlhbGl6ZUhhbmRsZXJBcmd1bWVudHMsXG4gIEluaXRpYWxpemVIYW5kbGVyT3B0aW9ucyxcbiAgSW5pdGlhbGl6ZUhhbmRsZXJPdXRwdXQsXG4gIEluaXRpYWxpemVNaWRkbGV3YXJlLFxuICBNZXRhZGF0YUJlYXJlcixcbiAgUGx1Z2dhYmxlLFxuICBTb3VyY2VEYXRhLFxufSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcbmludGVyZmFjZSBQcmV2aW91c2x5UmVzb2x2ZWQge1xuICBiYXNlNjRFbmNvZGVyOiBFbmNvZGVyO1xuICBtZDU6IHsgbmV3ICgpOiBIYXNoIH07XG4gIHV0ZjhEZWNvZGVyOiBEZWNvZGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3NlY01pZGRsZXdhcmUob3B0aW9uczogUHJldmlvdXNseVJlc29sdmVkKTogSW5pdGlhbGl6ZU1pZGRsZXdhcmU8YW55LCBhbnk+IHtcbiAgcmV0dXJuIDxPdXRwdXQgZXh0ZW5kcyBNZXRhZGF0YUJlYXJlcj4obmV4dDogSW5pdGlhbGl6ZUhhbmRsZXI8YW55LCBPdXRwdXQ+KTogSW5pdGlhbGl6ZUhhbmRsZXI8YW55LCBPdXRwdXQ+ID0+XG4gICAgYXN5bmMgKGFyZ3M6IEluaXRpYWxpemVIYW5kbGVyQXJndW1lbnRzPGFueT4pOiBQcm9taXNlPEluaXRpYWxpemVIYW5kbGVyT3V0cHV0PE91dHB1dD4+ID0+IHtcbiAgICAgIGxldCBpbnB1dCA9IHsgLi4uYXJncy5pbnB1dCB9O1xuICAgICAgY29uc3QgcHJvcGVydGllcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIHRhcmdldDogXCJTU0VDdXN0b21lcktleVwiLFxuICAgICAgICAgIGhhc2g6IFwiU1NFQ3VzdG9tZXJLZXlNRDVcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRhcmdldDogXCJDb3B5U291cmNlU1NFQ3VzdG9tZXJLZXlcIixcbiAgICAgICAgICBoYXNoOiBcIkNvcHlTb3VyY2VTU0VDdXN0b21lcktleU1ENVwiLFxuICAgICAgICB9LFxuICAgICAgXTtcblxuICAgICAgZm9yIChjb25zdCBwcm9wIG9mIHByb3BlcnRpZXMpIHtcbiAgICAgICAgY29uc3QgdmFsdWU6IFNvdXJjZURhdGEgfCB1bmRlZmluZWQgPSAoaW5wdXQgYXMgYW55KVtwcm9wLnRhcmdldF07XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgIGNvbnN0IHZhbHVlVmlldyA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWx1ZSlcbiAgICAgICAgICAgID8gbmV3IFVpbnQ4QXJyYXkodmFsdWUuYnVmZmVyLCB2YWx1ZS5ieXRlT2Zmc2V0LCB2YWx1ZS5ieXRlTGVuZ3RoKVxuICAgICAgICAgICAgOiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gb3B0aW9ucy51dGY4RGVjb2Rlcih2YWx1ZSlcbiAgICAgICAgICAgIDogbmV3IFVpbnQ4QXJyYXkodmFsdWUpO1xuICAgICAgICAgIGNvbnN0IGVuY29kZWQgPSBvcHRpb25zLmJhc2U2NEVuY29kZXIodmFsdWVWaWV3KTtcbiAgICAgICAgICBjb25zdCBoYXNoID0gbmV3IG9wdGlvbnMubWQ1KCk7XG4gICAgICAgICAgaGFzaC51cGRhdGUodmFsdWVWaWV3KTtcbiAgICAgICAgICBpbnB1dCA9IHtcbiAgICAgICAgICAgIC4uLihpbnB1dCBhcyBhbnkpLFxuICAgICAgICAgICAgW3Byb3AudGFyZ2V0XTogZW5jb2RlZCxcbiAgICAgICAgICAgIFtwcm9wLmhhc2hdOiBvcHRpb25zLmJhc2U2NEVuY29kZXIoYXdhaXQgaGFzaC5kaWdlc3QoKSksXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV4dCh7XG4gICAgICAgIC4uLmFyZ3MsXG4gICAgICAgIGlucHV0LFxuICAgICAgfSk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IHNzZWNNaWRkbGV3YXJlT3B0aW9uczogSW5pdGlhbGl6ZUhhbmRsZXJPcHRpb25zID0ge1xuICBuYW1lOiBcInNzZWNNaWRkbGV3YXJlXCIsXG4gIHN0ZXA6IFwiaW5pdGlhbGl6ZVwiLFxuICB0YWdzOiBbXCJTU0VcIl0sXG4gIG92ZXJyaWRlOiB0cnVlLFxufTtcblxuZXhwb3J0IGNvbnN0IGdldFNzZWNQbHVnaW4gPSAoY29uZmlnOiBQcmV2aW91c2x5UmVzb2x2ZWQpOiBQbHVnZ2FibGU8YW55LCBhbnk+ID0+ICh7XG4gIGFwcGx5VG9TdGFjazogKGNsaWVudFN0YWNrKSA9PiB7XG4gICAgY2xpZW50U3RhY2suYWRkKHNzZWNNaWRkbGV3YXJlKGNvbmZpZyksIHNzZWNNaWRkbGV3YXJlT3B0aW9ucyk7XG4gIH0sXG59KTtcbiJdfQ==