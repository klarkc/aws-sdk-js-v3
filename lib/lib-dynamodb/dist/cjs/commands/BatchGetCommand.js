"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchGetCommand = void 0;
const utils_1 = require("../commands/utils");
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * BatchGetItemCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
class BatchGetCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
        this.inputKeyNodes = [
            {
                key: "RequestItems",
                children: {
                    children: [{ key: "Keys" }],
                },
            },
        ];
        this.outputKeyNodes = [
            { key: "Responses", children: {} },
            {
                key: "UnprocessedKeys",
                children: {
                    children: [{ key: "Keys" }],
                },
            },
        ];
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        const { marshallOptions, unmarshallOptions } = configuration.translateConfig || {};
        const command = new client_dynamodb_1.BatchGetItemCommand(utils_1.marshallInput(this.input, this.inputKeyNodes, marshallOptions));
        const handler = command.resolveMiddleware(clientStack, configuration, options);
        return async () => {
            const data = await handler(command);
            return {
                ...data,
                output: utils_1.unmarshallOutput(data.output, this.outputKeyNodes, unmarshallOptions),
            };
        };
    }
}
exports.BatchGetCommand = BatchGetCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmF0Y2hHZXRDb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL0JhdGNoR2V0Q29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSw2Q0FBb0U7QUFDcEUsOERBS2tDO0FBQ2xDLDBEQUE2RDtBQW1DN0Q7Ozs7OztHQU1HO0FBQ0gsTUFBYSxlQUFnQixTQUFRLHVCQUlwQztJQW1CQyxZQUFxQixLQUEyQjtRQUM5QyxLQUFLLEVBQUUsQ0FBQztRQURXLFVBQUssR0FBTCxLQUFLLENBQXNCO1FBbEIvQixrQkFBYSxHQUFHO1lBQy9CO2dCQUNFLEdBQUcsRUFBRSxjQUFjO2dCQUNuQixRQUFRLEVBQUU7b0JBQ1IsUUFBUSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUM7aUJBQzVCO2FBQ0Y7U0FDRixDQUFDO1FBQ2UsbUJBQWMsR0FBRztZQUNoQyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtZQUNsQztnQkFDRSxHQUFHLEVBQUUsaUJBQWlCO2dCQUN0QixRQUFRLEVBQUU7b0JBQ1IsUUFBUSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUM7aUJBQzVCO2FBQ0Y7U0FDRixDQUFDO0lBSUYsQ0FBQztJQUVEOztPQUVHO0lBQ0gsaUJBQWlCLENBQ2YsV0FBbUUsRUFDbkUsYUFBbUQsRUFDbkQsT0FBOEI7UUFFOUIsTUFBTSxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxHQUFHLGFBQWEsQ0FBQyxlQUFlLElBQUksRUFBRSxDQUFDO1FBQ25GLE1BQU0sT0FBTyxHQUFHLElBQUkscUNBQXFCLENBQUMscUJBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUMxRyxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUUvRSxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ2hCLE1BQU0sSUFBSSxHQUFHLE1BQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BDLE9BQU87Z0JBQ0wsR0FBRyxJQUFJO2dCQUNQLE1BQU0sRUFBRSx3QkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLENBQUM7YUFDOUUsQ0FBQztRQUNKLENBQUMsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQS9DRCwwQ0ErQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEeW5hbW9EQkRvY3VtZW50Q2xpZW50UmVzb2x2ZWRDb25maWcsIFNlcnZpY2VJbnB1dFR5cGVzLCBTZXJ2aWNlT3V0cHV0VHlwZXMgfSBmcm9tIFwiLi4vRHluYW1vREJEb2N1bWVudENsaWVudFwiO1xuaW1wb3J0IHsgbWFyc2hhbGxJbnB1dCwgdW5tYXJzaGFsbE91dHB1dCB9IGZyb20gXCIuLi9jb21tYW5kcy91dGlsc1wiO1xuaW1wb3J0IHtcbiAgS2V5c0FuZEF0dHJpYnV0ZXMsXG4gIEJhdGNoR2V0SXRlbUNvbW1hbmQgYXMgX19CYXRjaEdldEl0ZW1Db21tYW5kLFxuICBCYXRjaEdldEl0ZW1Db21tYW5kSW5wdXQgYXMgX19CYXRjaEdldEl0ZW1Db21tYW5kSW5wdXQsXG4gIEJhdGNoR2V0SXRlbUNvbW1hbmRPdXRwdXQgYXMgX19CYXRjaEdldEl0ZW1Db21tYW5kT3V0cHV0LFxufSBmcm9tIFwiQGF3cy1zZGsvY2xpZW50LWR5bmFtb2RiXCI7XG5pbXBvcnQgeyBDb21tYW5kIGFzICRDb21tYW5kIH0gZnJvbSBcIkBhd3Mtc2RrL3NtaXRoeS1jbGllbnRcIjtcbmltcG9ydCB7IEhhbmRsZXIsIE1pZGRsZXdhcmVTdGFjaywgSHR0cEhhbmRsZXJPcHRpb25zIGFzIF9fSHR0cEhhbmRsZXJPcHRpb25zIH0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5pbXBvcnQgeyBOYXRpdmVBdHRyaWJ1dGVWYWx1ZSB9IGZyb20gXCJAYXdzLXNkay91dGlsLWR5bmFtb2RiXCI7XG5cbmV4cG9ydCB0eXBlIEJhdGNoR2V0Q29tbWFuZElucHV0ID0gT21pdDxfX0JhdGNoR2V0SXRlbUNvbW1hbmRJbnB1dCwgXCJSZXF1ZXN0SXRlbXNcIj4gJiB7XG4gIFJlcXVlc3RJdGVtczpcbiAgICB8IHtcbiAgICAgICAgW2tleTogc3RyaW5nXTogT21pdDxLZXlzQW5kQXR0cmlidXRlcywgXCJLZXlzXCI+ICYge1xuICAgICAgICAgIEtleXM6XG4gICAgICAgICAgICB8IHtcbiAgICAgICAgICAgICAgICBba2V5OiBzdHJpbmddOiBOYXRpdmVBdHRyaWJ1dGVWYWx1ZTtcbiAgICAgICAgICAgICAgfVtdXG4gICAgICAgICAgICB8IHVuZGVmaW5lZDtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB8IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCB0eXBlIEJhdGNoR2V0Q29tbWFuZE91dHB1dCA9IE9taXQ8X19CYXRjaEdldEl0ZW1Db21tYW5kT3V0cHV0LCBcIlJlc3BvbnNlc1wiIHwgXCJVbnByb2Nlc3NlZEtleXNcIj4gJiB7XG4gIFJlc3BvbnNlcz86IHtcbiAgICBba2V5OiBzdHJpbmddOiB7XG4gICAgICBba2V5OiBzdHJpbmddOiBOYXRpdmVBdHRyaWJ1dGVWYWx1ZTtcbiAgICB9W107XG4gIH07XG4gIFVucHJvY2Vzc2VkS2V5cz86IHtcbiAgICBba2V5OiBzdHJpbmddOiBPbWl0PEtleXNBbmRBdHRyaWJ1dGVzLCBcIktleXNcIj4gJiB7XG4gICAgICBLZXlzOlxuICAgICAgICB8IHtcbiAgICAgICAgICAgIFtrZXk6IHN0cmluZ106IE5hdGl2ZUF0dHJpYnV0ZVZhbHVlO1xuICAgICAgICAgIH1bXVxuICAgICAgICB8IHVuZGVmaW5lZDtcbiAgICB9O1xuICB9O1xufTtcblxuLyoqXG4gKiBBY2NlcHRzIG5hdGl2ZSBKYXZhU2NyaXB0IHR5cGVzIGluc3RlYWQgb2YgYEF0dHJpYnV0ZVZhbHVlYHMsIGFuZCBjYWxsc1xuICogQmF0Y2hHZXRJdGVtQ29tbWFuZCBvcGVyYXRpb24gZnJvbSB7QGxpbmsgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvQGF3cy1zZGsvY2xpZW50LWR5bmFtb2RiIEBhd3Mtc2RrL2NsaWVudC1keW5hbW9kYn0uXG4gKlxuICogSmF2YVNjcmlwdCBvYmplY3RzIHBhc3NlZCBpbiBhcyBwYXJhbWV0ZXJzIGFyZSBtYXJzaGFsbGVkIGludG8gYEF0dHJpYnV0ZVZhbHVlYCBzaGFwZXNcbiAqIHJlcXVpcmVkIGJ5IEFtYXpvbiBEeW5hbW9EQi4gUmVzcG9uc2VzIGZyb20gRHluYW1vREIgYXJlIHVubWFyc2hhbGxlZCBpbnRvIHBsYWluIEphdmFTY3JpcHQgb2JqZWN0cy5cbiAqL1xuZXhwb3J0IGNsYXNzIEJhdGNoR2V0Q29tbWFuZCBleHRlbmRzICRDb21tYW5kPFxuICBCYXRjaEdldENvbW1hbmRJbnB1dCxcbiAgQmF0Y2hHZXRDb21tYW5kT3V0cHV0LFxuICBEeW5hbW9EQkRvY3VtZW50Q2xpZW50UmVzb2x2ZWRDb25maWdcbj4ge1xuICBwcml2YXRlIHJlYWRvbmx5IGlucHV0S2V5Tm9kZXMgPSBbXG4gICAge1xuICAgICAga2V5OiBcIlJlcXVlc3RJdGVtc1wiLFxuICAgICAgY2hpbGRyZW46IHtcbiAgICAgICAgY2hpbGRyZW46IFt7IGtleTogXCJLZXlzXCIgfV0sXG4gICAgICB9LFxuICAgIH0sXG4gIF07XG4gIHByaXZhdGUgcmVhZG9ubHkgb3V0cHV0S2V5Tm9kZXMgPSBbXG4gICAgeyBrZXk6IFwiUmVzcG9uc2VzXCIsIGNoaWxkcmVuOiB7fSB9LFxuICAgIHtcbiAgICAgIGtleTogXCJVbnByb2Nlc3NlZEtleXNcIixcbiAgICAgIGNoaWxkcmVuOiB7XG4gICAgICAgIGNoaWxkcmVuOiBbeyBrZXk6IFwiS2V5c1wiIH1dLFxuICAgICAgfSxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IGlucHV0OiBCYXRjaEdldENvbW1hbmRJbnB1dCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICByZXNvbHZlTWlkZGxld2FyZShcbiAgICBjbGllbnRTdGFjazogTWlkZGxld2FyZVN0YWNrPFNlcnZpY2VJbnB1dFR5cGVzLCBTZXJ2aWNlT3V0cHV0VHlwZXM+LFxuICAgIGNvbmZpZ3VyYXRpb246IER5bmFtb0RCRG9jdW1lbnRDbGllbnRSZXNvbHZlZENvbmZpZyxcbiAgICBvcHRpb25zPzogX19IdHRwSGFuZGxlck9wdGlvbnNcbiAgKTogSGFuZGxlcjxCYXRjaEdldENvbW1hbmRJbnB1dCwgQmF0Y2hHZXRDb21tYW5kT3V0cHV0PiB7XG4gICAgY29uc3QgeyBtYXJzaGFsbE9wdGlvbnMsIHVubWFyc2hhbGxPcHRpb25zIH0gPSBjb25maWd1cmF0aW9uLnRyYW5zbGF0ZUNvbmZpZyB8fCB7fTtcbiAgICBjb25zdCBjb21tYW5kID0gbmV3IF9fQmF0Y2hHZXRJdGVtQ29tbWFuZChtYXJzaGFsbElucHV0KHRoaXMuaW5wdXQsIHRoaXMuaW5wdXRLZXlOb2RlcywgbWFyc2hhbGxPcHRpb25zKSk7XG4gICAgY29uc3QgaGFuZGxlciA9IGNvbW1hbmQucmVzb2x2ZU1pZGRsZXdhcmUoY2xpZW50U3RhY2ssIGNvbmZpZ3VyYXRpb24sIG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBoYW5kbGVyKGNvbW1hbmQpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgb3V0cHV0OiB1bm1hcnNoYWxsT3V0cHV0KGRhdGEub3V0cHV0LCB0aGlzLm91dHB1dEtleU5vZGVzLCB1bm1hcnNoYWxsT3B0aW9ucyksXG4gICAgICB9O1xuICAgIH07XG4gIH1cbn1cbiJdfQ==