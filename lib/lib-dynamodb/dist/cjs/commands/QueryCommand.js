"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryCommand = void 0;
const utils_1 = require("../commands/utils");
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * QueryCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
class QueryCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
        this.inputKeyNodes = [
            {
                key: "KeyConditions",
                children: {
                    children: [{ key: "AttributeValueList" }],
                },
            },
            {
                key: "QueryFilter",
                children: {
                    children: [{ key: "AttributeValueList" }],
                },
            },
            { key: "ExclusiveStartKey" },
            { key: "ExpressionAttributeValues" },
        ];
        this.outputKeyNodes = [{ key: "Items" }, { key: "LastEvaluatedKey" }];
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        const { marshallOptions, unmarshallOptions } = configuration.translateConfig || {};
        const command = new client_dynamodb_1.QueryCommand(utils_1.marshallInput(this.input, this.inputKeyNodes, marshallOptions));
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
exports.QueryCommand = QueryCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVlcnlDb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL1F1ZXJ5Q29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSw2Q0FBb0U7QUFDcEUsOERBS2tDO0FBQ2xDLDBEQUE2RDtBQTZCN0Q7Ozs7OztHQU1HO0FBQ0gsTUFBYSxZQUFhLFNBQVEsdUJBSWpDO0lBbUJDLFlBQXFCLEtBQXdCO1FBQzNDLEtBQUssRUFBRSxDQUFDO1FBRFcsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFsQjVCLGtCQUFhLEdBQUc7WUFDL0I7Z0JBQ0UsR0FBRyxFQUFFLGVBQWU7Z0JBQ3BCLFFBQVEsRUFBRTtvQkFDUixRQUFRLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxvQkFBb0IsRUFBRSxDQUFDO2lCQUMxQzthQUNGO1lBQ0Q7Z0JBQ0UsR0FBRyxFQUFFLGFBQWE7Z0JBQ2xCLFFBQVEsRUFBRTtvQkFDUixRQUFRLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxvQkFBb0IsRUFBRSxDQUFDO2lCQUMxQzthQUNGO1lBQ0QsRUFBRSxHQUFHLEVBQUUsbUJBQW1CLEVBQUU7WUFDNUIsRUFBRSxHQUFHLEVBQUUsMkJBQTJCLEVBQUU7U0FDckMsQ0FBQztRQUNlLG1CQUFjLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7SUFJbEYsQ0FBQztJQUVEOztPQUVHO0lBQ0gsaUJBQWlCLENBQ2YsV0FBbUUsRUFDbkUsYUFBbUQsRUFDbkQsT0FBOEI7UUFFOUIsTUFBTSxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxHQUFHLGFBQWEsQ0FBQyxlQUFlLElBQUksRUFBRSxDQUFDO1FBQ25GLE1BQU0sT0FBTyxHQUFHLElBQUksOEJBQWMsQ0FBQyxxQkFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQ25HLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRS9FLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEdBQUcsTUFBTSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEMsT0FBTztnQkFDTCxHQUFHLElBQUk7Z0JBQ1AsTUFBTSxFQUFFLHdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQzthQUM5RSxDQUFDO1FBQ0osQ0FBQyxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBL0NELG9DQStDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IER5bmFtb0RCRG9jdW1lbnRDbGllbnRSZXNvbHZlZENvbmZpZywgU2VydmljZUlucHV0VHlwZXMsIFNlcnZpY2VPdXRwdXRUeXBlcyB9IGZyb20gXCIuLi9EeW5hbW9EQkRvY3VtZW50Q2xpZW50XCI7XG5pbXBvcnQgeyBtYXJzaGFsbElucHV0LCB1bm1hcnNoYWxsT3V0cHV0IH0gZnJvbSBcIi4uL2NvbW1hbmRzL3V0aWxzXCI7XG5pbXBvcnQge1xuICBDb25kaXRpb24sXG4gIFF1ZXJ5Q29tbWFuZCBhcyBfX1F1ZXJ5Q29tbWFuZCxcbiAgUXVlcnlDb21tYW5kSW5wdXQgYXMgX19RdWVyeUNvbW1hbmRJbnB1dCxcbiAgUXVlcnlDb21tYW5kT3V0cHV0IGFzIF9fUXVlcnlDb21tYW5kT3V0cHV0LFxufSBmcm9tIFwiQGF3cy1zZGsvY2xpZW50LWR5bmFtb2RiXCI7XG5pbXBvcnQgeyBDb21tYW5kIGFzICRDb21tYW5kIH0gZnJvbSBcIkBhd3Mtc2RrL3NtaXRoeS1jbGllbnRcIjtcbmltcG9ydCB7IEhhbmRsZXIsIE1pZGRsZXdhcmVTdGFjaywgSHR0cEhhbmRsZXJPcHRpb25zIGFzIF9fSHR0cEhhbmRsZXJPcHRpb25zIH0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5pbXBvcnQgeyBOYXRpdmVBdHRyaWJ1dGVWYWx1ZSB9IGZyb20gXCJAYXdzLXNkay91dGlsLWR5bmFtb2RiXCI7XG5cbmV4cG9ydCB0eXBlIFF1ZXJ5Q29tbWFuZElucHV0ID0gT21pdDxcbiAgX19RdWVyeUNvbW1hbmRJbnB1dCxcbiAgXCJLZXlDb25kaXRpb25zXCIgfCBcIlF1ZXJ5RmlsdGVyXCIgfCBcIkV4Y2x1c2l2ZVN0YXJ0S2V5XCIgfCBcIkV4cHJlc3Npb25BdHRyaWJ1dGVWYWx1ZXNcIlxuPiAmIHtcbiAgS2V5Q29uZGl0aW9ucz86IHtcbiAgICBba2V5OiBzdHJpbmddOiBPbWl0PENvbmRpdGlvbiwgXCJBdHRyaWJ1dGVWYWx1ZUxpc3RcIj4gJiB7XG4gICAgICBBdHRyaWJ1dGVWYWx1ZUxpc3Q/OiBOYXRpdmVBdHRyaWJ1dGVWYWx1ZVtdO1xuICAgIH07XG4gIH07XG4gIFF1ZXJ5RmlsdGVyPzoge1xuICAgIFtrZXk6IHN0cmluZ106IE9taXQ8Q29uZGl0aW9uLCBcIkF0dHJpYnV0ZVZhbHVlTGlzdFwiPiAmIHtcbiAgICAgIEF0dHJpYnV0ZVZhbHVlTGlzdD86IE5hdGl2ZUF0dHJpYnV0ZVZhbHVlW107XG4gICAgfTtcbiAgfTtcbiAgRXhjbHVzaXZlU3RhcnRLZXk/OiB7IFtrZXk6IHN0cmluZ106IE5hdGl2ZUF0dHJpYnV0ZVZhbHVlIH07XG4gIEV4cHJlc3Npb25BdHRyaWJ1dGVWYWx1ZXM/OiB7IFtrZXk6IHN0cmluZ106IE5hdGl2ZUF0dHJpYnV0ZVZhbHVlIH07XG59O1xuXG5leHBvcnQgdHlwZSBRdWVyeUNvbW1hbmRPdXRwdXQgPSBPbWl0PF9fUXVlcnlDb21tYW5kT3V0cHV0LCBcIkl0ZW1zXCIgfCBcIkxhc3RFdmFsdWF0ZWRLZXlcIj4gJiB7XG4gIEl0ZW1zPzoge1xuICAgIFtrZXk6IHN0cmluZ106IE5hdGl2ZUF0dHJpYnV0ZVZhbHVlO1xuICB9W107XG4gIExhc3RFdmFsdWF0ZWRLZXk/OiB7IFtrZXk6IHN0cmluZ106IE5hdGl2ZUF0dHJpYnV0ZVZhbHVlIH07XG59O1xuXG4vKipcbiAqIEFjY2VwdHMgbmF0aXZlIEphdmFTY3JpcHQgdHlwZXMgaW5zdGVhZCBvZiBgQXR0cmlidXRlVmFsdWVgcywgYW5kIGNhbGxzXG4gKiBRdWVyeUNvbW1hbmQgb3BlcmF0aW9uIGZyb20ge0BsaW5rIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL0Bhd3Mtc2RrL2NsaWVudC1keW5hbW9kYiBAYXdzLXNkay9jbGllbnQtZHluYW1vZGJ9LlxuICpcbiAqIEphdmFTY3JpcHQgb2JqZWN0cyBwYXNzZWQgaW4gYXMgcGFyYW1ldGVycyBhcmUgbWFyc2hhbGxlZCBpbnRvIGBBdHRyaWJ1dGVWYWx1ZWAgc2hhcGVzXG4gKiByZXF1aXJlZCBieSBBbWF6b24gRHluYW1vREIuIFJlc3BvbnNlcyBmcm9tIER5bmFtb0RCIGFyZSB1bm1hcnNoYWxsZWQgaW50byBwbGFpbiBKYXZhU2NyaXB0IG9iamVjdHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBRdWVyeUNvbW1hbmQgZXh0ZW5kcyAkQ29tbWFuZDxcbiAgUXVlcnlDb21tYW5kSW5wdXQsXG4gIFF1ZXJ5Q29tbWFuZE91dHB1dCxcbiAgRHluYW1vREJEb2N1bWVudENsaWVudFJlc29sdmVkQ29uZmlnXG4+IHtcbiAgcHJpdmF0ZSByZWFkb25seSBpbnB1dEtleU5vZGVzID0gW1xuICAgIHtcbiAgICAgIGtleTogXCJLZXlDb25kaXRpb25zXCIsXG4gICAgICBjaGlsZHJlbjoge1xuICAgICAgICBjaGlsZHJlbjogW3sga2V5OiBcIkF0dHJpYnV0ZVZhbHVlTGlzdFwiIH1dLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGtleTogXCJRdWVyeUZpbHRlclwiLFxuICAgICAgY2hpbGRyZW46IHtcbiAgICAgICAgY2hpbGRyZW46IFt7IGtleTogXCJBdHRyaWJ1dGVWYWx1ZUxpc3RcIiB9XSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7IGtleTogXCJFeGNsdXNpdmVTdGFydEtleVwiIH0sXG4gICAgeyBrZXk6IFwiRXhwcmVzc2lvbkF0dHJpYnV0ZVZhbHVlc1wiIH0sXG4gIF07XG4gIHByaXZhdGUgcmVhZG9ubHkgb3V0cHV0S2V5Tm9kZXMgPSBbeyBrZXk6IFwiSXRlbXNcIiB9LCB7IGtleTogXCJMYXN0RXZhbHVhdGVkS2V5XCIgfV07XG5cbiAgY29uc3RydWN0b3IocmVhZG9ubHkgaW5wdXQ6IFF1ZXJ5Q29tbWFuZElucHV0KSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHJlc29sdmVNaWRkbGV3YXJlKFxuICAgIGNsaWVudFN0YWNrOiBNaWRkbGV3YXJlU3RhY2s8U2VydmljZUlucHV0VHlwZXMsIFNlcnZpY2VPdXRwdXRUeXBlcz4sXG4gICAgY29uZmlndXJhdGlvbjogRHluYW1vREJEb2N1bWVudENsaWVudFJlc29sdmVkQ29uZmlnLFxuICAgIG9wdGlvbnM/OiBfX0h0dHBIYW5kbGVyT3B0aW9uc1xuICApOiBIYW5kbGVyPFF1ZXJ5Q29tbWFuZElucHV0LCBRdWVyeUNvbW1hbmRPdXRwdXQ+IHtcbiAgICBjb25zdCB7IG1hcnNoYWxsT3B0aW9ucywgdW5tYXJzaGFsbE9wdGlvbnMgfSA9IGNvbmZpZ3VyYXRpb24udHJhbnNsYXRlQ29uZmlnIHx8IHt9O1xuICAgIGNvbnN0IGNvbW1hbmQgPSBuZXcgX19RdWVyeUNvbW1hbmQobWFyc2hhbGxJbnB1dCh0aGlzLmlucHV0LCB0aGlzLmlucHV0S2V5Tm9kZXMsIG1hcnNoYWxsT3B0aW9ucykpO1xuICAgIGNvbnN0IGhhbmRsZXIgPSBjb21tYW5kLnJlc29sdmVNaWRkbGV3YXJlKGNsaWVudFN0YWNrLCBjb25maWd1cmF0aW9uLCBvcHRpb25zKTtcblxuICAgIHJldHVybiBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgaGFuZGxlcihjb21tYW5kKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmRhdGEsXG4gICAgICAgIG91dHB1dDogdW5tYXJzaGFsbE91dHB1dChkYXRhLm91dHB1dCwgdGhpcy5vdXRwdXRLZXlOb2RlcywgdW5tYXJzaGFsbE9wdGlvbnMpLFxuICAgICAgfTtcbiAgICB9O1xuICB9XG59XG4iXX0=