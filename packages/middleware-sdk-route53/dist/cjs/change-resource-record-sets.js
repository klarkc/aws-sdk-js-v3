"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChangeResourceRecordSetsPlugin = exports.changeResourceRecordSetsMiddlewareOptions = exports.changeResourceRecordSetsMiddleware = void 0;
const constants_1 = require("./constants");
function changeResourceRecordSetsMiddleware() {
    return (next) => async (args) => {
        const { ChangeBatch } = args.input;
        const Changes = [];
        for (const change of ChangeBatch.Changes) {
            const { AliasTarget } = change.ResourceRecordSet;
            if (AliasTarget) {
                Changes.push({
                    ...change,
                    ResourceRecordSet: {
                        ...change.ResourceRecordSet,
                        AliasTarget: {
                            ...AliasTarget,
                            HostedZoneId: AliasTarget.HostedZoneId.replace(constants_1.IDENTIFIER_PREFIX_PATTERN, ""),
                        },
                    },
                });
            }
            else {
                Changes.push(change);
            }
        }
        return next({
            ...args,
            input: {
                ...args.input,
                ChangeBatch: {
                    ...ChangeBatch,
                    Changes,
                },
            },
        });
    };
}
exports.changeResourceRecordSetsMiddleware = changeResourceRecordSetsMiddleware;
exports.changeResourceRecordSetsMiddlewareOptions = {
    step: "initialize",
    tags: ["ROUTE53_IDS", "CHANGE_RESOURCE_RECORD_SETS"],
    name: "changeResourceRecordSetsMiddleware",
    override: true,
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getChangeResourceRecordSetsPlugin = (unused) => ({
    applyToStack: (clientStack) => {
        clientStack.add(changeResourceRecordSetsMiddleware(), exports.changeResourceRecordSetsMiddlewareOptions);
    },
});
exports.getChangeResourceRecordSetsPlugin = getChangeResourceRecordSetsPlugin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXJlc291cmNlLXJlY29yZC1zZXRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NoYW5nZS1yZXNvdXJjZS1yZWNvcmQtc2V0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFVQSwyQ0FBd0Q7QUFnQnhELFNBQWdCLGtDQUFrQztJQUNoRCxPQUFPLENBQWdDLElBQW9DLEVBQWtDLEVBQUUsQ0FDN0csS0FBSyxFQUFFLElBQXFDLEVBQTRDLEVBQUU7UUFDeEYsTUFBTSxFQUFFLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDbkMsTUFBTSxPQUFPLEdBQWtCLEVBQUUsQ0FBQztRQUNsQyxLQUFLLE1BQU0sTUFBTSxJQUFJLFdBQVcsQ0FBQyxPQUFPLEVBQUU7WUFDeEMsTUFBTSxFQUFFLFdBQVcsRUFBRSxHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztZQUNqRCxJQUFJLFdBQVcsRUFBRTtnQkFDZixPQUFPLENBQUMsSUFBSSxDQUFDO29CQUNYLEdBQUcsTUFBTTtvQkFDVCxpQkFBaUIsRUFBRTt3QkFDakIsR0FBRyxNQUFNLENBQUMsaUJBQWlCO3dCQUMzQixXQUFXLEVBQUU7NEJBQ1gsR0FBRyxXQUFXOzRCQUNkLFlBQVksRUFBRSxXQUFXLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxxQ0FBeUIsRUFBRSxFQUFFLENBQUM7eUJBQzlFO3FCQUNGO2lCQUNGLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDdEI7U0FDRjtRQUVELE9BQU8sSUFBSSxDQUFDO1lBQ1YsR0FBRyxJQUFJO1lBQ1AsS0FBSyxFQUFFO2dCQUNMLEdBQUksSUFBSSxDQUFDLEtBQWE7Z0JBQ3RCLFdBQVcsRUFBRTtvQkFDWCxHQUFHLFdBQVc7b0JBQ2QsT0FBTztpQkFDUjthQUNGO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQWxDRCxnRkFrQ0M7QUFFWSxRQUFBLHlDQUF5QyxHQUE2QjtJQUNqRixJQUFJLEVBQUUsWUFBWTtJQUNsQixJQUFJLEVBQUUsQ0FBQyxhQUFhLEVBQUUsNkJBQTZCLENBQUM7SUFDcEQsSUFBSSxFQUFFLG9DQUFvQztJQUMxQyxRQUFRLEVBQUUsSUFBSTtDQUNmLENBQUM7QUFFRiw2REFBNkQ7QUFDdEQsTUFBTSxpQ0FBaUMsR0FBRyxDQUFDLE1BQVcsRUFBdUIsRUFBRSxDQUFDLENBQUM7SUFDdEYsWUFBWSxFQUFFLENBQUMsV0FBVyxFQUFFLEVBQUU7UUFDNUIsV0FBVyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsRUFBRSxFQUFFLGlEQUF5QyxDQUFDLENBQUM7SUFDbkcsQ0FBQztDQUNGLENBQUMsQ0FBQztBQUpVLFFBQUEsaUNBQWlDLHFDQUkzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluaXRpYWxpemVIYW5kbGVyLFxuICBJbml0aWFsaXplSGFuZGxlckFyZ3VtZW50cyxcbiAgSW5pdGlhbGl6ZUhhbmRsZXJPcHRpb25zLFxuICBJbml0aWFsaXplSGFuZGxlck91dHB1dCxcbiAgSW5pdGlhbGl6ZU1pZGRsZXdhcmUsXG4gIE1ldGFkYXRhQmVhcmVyLFxuICBQbHVnZ2FibGUsXG59IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuXG5pbXBvcnQgeyBJREVOVElGSUVSX1BSRUZJWF9QQVRURVJOIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhbmdlIHtcbiAgUmVzb3VyY2VSZWNvcmRTZXQ6IHtcbiAgICBBbGlhc1RhcmdldD86IHtcbiAgICAgIEhvc3RlZFpvbmVJZDogc3RyaW5nO1xuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhbmdlQmF0Y2hCZWFyZXIge1xuICBDaGFuZ2VCYXRjaDoge1xuICAgIENoYW5nZXM6IEl0ZXJhYmxlPENoYW5nZT47XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VSZXNvdXJjZVJlY29yZFNldHNNaWRkbGV3YXJlKCk6IEluaXRpYWxpemVNaWRkbGV3YXJlPGFueSwgYW55PiB7XG4gIHJldHVybiA8T3V0cHV0IGV4dGVuZHMgTWV0YWRhdGFCZWFyZXI+KG5leHQ6IEluaXRpYWxpemVIYW5kbGVyPGFueSwgT3V0cHV0Pik6IEluaXRpYWxpemVIYW5kbGVyPGFueSwgT3V0cHV0PiA9PlxuICAgIGFzeW5jIChhcmdzOiBJbml0aWFsaXplSGFuZGxlckFyZ3VtZW50czxhbnk+KTogUHJvbWlzZTxJbml0aWFsaXplSGFuZGxlck91dHB1dDxPdXRwdXQ+PiA9PiB7XG4gICAgICBjb25zdCB7IENoYW5nZUJhdGNoIH0gPSBhcmdzLmlucHV0O1xuICAgICAgY29uc3QgQ2hhbmdlczogQXJyYXk8Q2hhbmdlPiA9IFtdO1xuICAgICAgZm9yIChjb25zdCBjaGFuZ2Ugb2YgQ2hhbmdlQmF0Y2guQ2hhbmdlcykge1xuICAgICAgICBjb25zdCB7IEFsaWFzVGFyZ2V0IH0gPSBjaGFuZ2UuUmVzb3VyY2VSZWNvcmRTZXQ7XG4gICAgICAgIGlmIChBbGlhc1RhcmdldCkge1xuICAgICAgICAgIENoYW5nZXMucHVzaCh7XG4gICAgICAgICAgICAuLi5jaGFuZ2UsXG4gICAgICAgICAgICBSZXNvdXJjZVJlY29yZFNldDoge1xuICAgICAgICAgICAgICAuLi5jaGFuZ2UuUmVzb3VyY2VSZWNvcmRTZXQsXG4gICAgICAgICAgICAgIEFsaWFzVGFyZ2V0OiB7XG4gICAgICAgICAgICAgICAgLi4uQWxpYXNUYXJnZXQsXG4gICAgICAgICAgICAgICAgSG9zdGVkWm9uZUlkOiBBbGlhc1RhcmdldC5Ib3N0ZWRab25lSWQucmVwbGFjZShJREVOVElGSUVSX1BSRUZJWF9QQVRURVJOLCBcIlwiKSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgQ2hhbmdlcy5wdXNoKGNoYW5nZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5leHQoe1xuICAgICAgICAuLi5hcmdzLFxuICAgICAgICBpbnB1dDoge1xuICAgICAgICAgIC4uLihhcmdzLmlucHV0IGFzIGFueSksXG4gICAgICAgICAgQ2hhbmdlQmF0Y2g6IHtcbiAgICAgICAgICAgIC4uLkNoYW5nZUJhdGNoLFxuICAgICAgICAgICAgQ2hhbmdlcyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGNoYW5nZVJlc291cmNlUmVjb3JkU2V0c01pZGRsZXdhcmVPcHRpb25zOiBJbml0aWFsaXplSGFuZGxlck9wdGlvbnMgPSB7XG4gIHN0ZXA6IFwiaW5pdGlhbGl6ZVwiLFxuICB0YWdzOiBbXCJST1VURTUzX0lEU1wiLCBcIkNIQU5HRV9SRVNPVVJDRV9SRUNPUkRfU0VUU1wiXSxcbiAgbmFtZTogXCJjaGFuZ2VSZXNvdXJjZVJlY29yZFNldHNNaWRkbGV3YXJlXCIsXG4gIG92ZXJyaWRlOiB0cnVlLFxufTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuZXhwb3J0IGNvbnN0IGdldENoYW5nZVJlc291cmNlUmVjb3JkU2V0c1BsdWdpbiA9ICh1bnVzZWQ6IGFueSk6IFBsdWdnYWJsZTxhbnksIGFueT4gPT4gKHtcbiAgYXBwbHlUb1N0YWNrOiAoY2xpZW50U3RhY2spID0+IHtcbiAgICBjbGllbnRTdGFjay5hZGQoY2hhbmdlUmVzb3VyY2VSZWNvcmRTZXRzTWlkZGxld2FyZSgpLCBjaGFuZ2VSZXNvdXJjZVJlY29yZFNldHNNaWRkbGV3YXJlT3B0aW9ucyk7XG4gIH0sXG59KTtcbiJdfQ==