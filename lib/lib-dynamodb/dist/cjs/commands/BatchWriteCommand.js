"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchWriteCommand = void 0;
const utils_1 = require("../commands/utils");
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * BatchWriteItemCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
class BatchWriteCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
        this.inputKeyNodes = [
            {
                key: "RequestItems",
                children: {
                    children: [
                        { key: "PutRequest", children: [{ key: "Item" }] },
                        { key: "DeleteRequest", children: [{ key: "Key" }] },
                    ],
                },
            },
        ];
        this.outputKeyNodes = [
            {
                key: "UnprocessedItems",
                children: {
                    children: [
                        { key: "PutRequest", children: [{ key: "Item" }] },
                        { key: "DeleteRequest", children: [{ key: "Key" }] },
                    ],
                },
            },
            {
                key: "ItemCollectionMetrics",
                children: {
                    children: [{ key: "ItemCollectionKey" }],
                },
            },
        ];
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        const { marshallOptions, unmarshallOptions } = configuration.translateConfig || {};
        const command = new client_dynamodb_1.BatchWriteItemCommand(utils_1.marshallInput(this.input, this.inputKeyNodes, marshallOptions));
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
exports.BatchWriteCommand = BatchWriteCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmF0Y2hXcml0ZUNvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvQmF0Y2hXcml0ZUNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsNkNBQW9FO0FBQ3BFLDhEQVFrQztBQUNsQywwREFBNkQ7QUF3QzdEOzs7Ozs7R0FNRztBQUNILE1BQWEsaUJBQWtCLFNBQVEsdUJBSXRDO0lBOEJDLFlBQXFCLEtBQTZCO1FBQ2hELEtBQUssRUFBRSxDQUFDO1FBRFcsVUFBSyxHQUFMLEtBQUssQ0FBd0I7UUE3QmpDLGtCQUFhLEdBQUc7WUFDL0I7Z0JBQ0UsR0FBRyxFQUFFLGNBQWM7Z0JBQ25CLFFBQVEsRUFBRTtvQkFDUixRQUFRLEVBQUU7d0JBQ1IsRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUU7d0JBQ2xELEVBQUUsR0FBRyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO3FCQUNyRDtpQkFDRjthQUNGO1NBQ0YsQ0FBQztRQUNlLG1CQUFjLEdBQUc7WUFDaEM7Z0JBQ0UsR0FBRyxFQUFFLGtCQUFrQjtnQkFDdkIsUUFBUSxFQUFFO29CQUNSLFFBQVEsRUFBRTt3QkFDUixFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRTt3QkFDbEQsRUFBRSxHQUFHLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7cUJBQ3JEO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxHQUFHLEVBQUUsdUJBQXVCO2dCQUM1QixRQUFRLEVBQUU7b0JBQ1IsUUFBUSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQztpQkFDekM7YUFDRjtTQUNGLENBQUM7SUFJRixDQUFDO0lBRUQ7O09BRUc7SUFDSCxpQkFBaUIsQ0FDZixXQUFtRSxFQUNuRSxhQUFtRCxFQUNuRCxPQUE4QjtRQUU5QixNQUFNLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLEdBQUcsYUFBYSxDQUFDLGVBQWUsSUFBSSxFQUFFLENBQUM7UUFDbkYsTUFBTSxPQUFPLEdBQUcsSUFBSSx1Q0FBdUIsQ0FBQyxxQkFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQzVHLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRS9FLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEdBQUcsTUFBTSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEMsT0FBTztnQkFDTCxHQUFHLElBQUk7Z0JBQ1AsTUFBTSxFQUFFLHdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQzthQUM5RSxDQUFDO1FBQ0osQ0FBQyxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBMURELDhDQTBEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IER5bmFtb0RCRG9jdW1lbnRDbGllbnRSZXNvbHZlZENvbmZpZywgU2VydmljZUlucHV0VHlwZXMsIFNlcnZpY2VPdXRwdXRUeXBlcyB9IGZyb20gXCIuLi9EeW5hbW9EQkRvY3VtZW50Q2xpZW50XCI7XG5pbXBvcnQgeyBtYXJzaGFsbElucHV0LCB1bm1hcnNoYWxsT3V0cHV0IH0gZnJvbSBcIi4uL2NvbW1hbmRzL3V0aWxzXCI7XG5pbXBvcnQge1xuICBEZWxldGVSZXF1ZXN0LFxuICBJdGVtQ29sbGVjdGlvbk1ldHJpY3MsXG4gIFB1dFJlcXVlc3QsXG4gIFdyaXRlUmVxdWVzdCxcbiAgQmF0Y2hXcml0ZUl0ZW1Db21tYW5kIGFzIF9fQmF0Y2hXcml0ZUl0ZW1Db21tYW5kLFxuICBCYXRjaFdyaXRlSXRlbUNvbW1hbmRJbnB1dCBhcyBfX0JhdGNoV3JpdGVJdGVtQ29tbWFuZElucHV0LFxuICBCYXRjaFdyaXRlSXRlbUNvbW1hbmRPdXRwdXQgYXMgX19CYXRjaFdyaXRlSXRlbUNvbW1hbmRPdXRwdXQsXG59IGZyb20gXCJAYXdzLXNkay9jbGllbnQtZHluYW1vZGJcIjtcbmltcG9ydCB7IENvbW1hbmQgYXMgJENvbW1hbmQgfSBmcm9tIFwiQGF3cy1zZGsvc21pdGh5LWNsaWVudFwiO1xuaW1wb3J0IHsgSGFuZGxlciwgTWlkZGxld2FyZVN0YWNrLCBIdHRwSGFuZGxlck9wdGlvbnMgYXMgX19IdHRwSGFuZGxlck9wdGlvbnMgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcbmltcG9ydCB7IE5hdGl2ZUF0dHJpYnV0ZVZhbHVlIH0gZnJvbSBcIkBhd3Mtc2RrL3V0aWwtZHluYW1vZGJcIjtcblxuZXhwb3J0IHR5cGUgQmF0Y2hXcml0ZUNvbW1hbmRJbnB1dCA9IE9taXQ8X19CYXRjaFdyaXRlSXRlbUNvbW1hbmRJbnB1dCwgXCJSZXF1ZXN0SXRlbXNcIj4gJiB7XG4gIFJlcXVlc3RJdGVtczpcbiAgICB8IHtcbiAgICAgICAgW2tleTogc3RyaW5nXTogKE9taXQ8V3JpdGVSZXF1ZXN0LCBcIlB1dFJlcXVlc3RcIiB8IFwiRGVsZXRlUmVxdWVzdFwiPiAmIHtcbiAgICAgICAgICBQdXRSZXF1ZXN0PzogT21pdDxQdXRSZXF1ZXN0LCBcIkl0ZW1cIj4gJiB7XG4gICAgICAgICAgICBJdGVtOiB7IFtrZXk6IHN0cmluZ106IE5hdGl2ZUF0dHJpYnV0ZVZhbHVlIH0gfCB1bmRlZmluZWQ7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBEZWxldGVSZXF1ZXN0PzogT21pdDxEZWxldGVSZXF1ZXN0LCBcIktleVwiPiAmIHtcbiAgICAgICAgICAgIEtleTogeyBba2V5OiBzdHJpbmddOiBOYXRpdmVBdHRyaWJ1dGVWYWx1ZSB9IHwgdW5kZWZpbmVkO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pW107XG4gICAgICB9XG4gICAgfCB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgdHlwZSBCYXRjaFdyaXRlQ29tbWFuZE91dHB1dCA9IE9taXQ8XG4gIF9fQmF0Y2hXcml0ZUl0ZW1Db21tYW5kT3V0cHV0LFxuICBcIlVucHJvY2Vzc2VkSXRlbXNcIiB8IFwiSXRlbUNvbGxlY3Rpb25NZXRyaWNzXCJcbj4gJiB7XG4gIFVucHJvY2Vzc2VkSXRlbXM/OiB7XG4gICAgW2tleTogc3RyaW5nXTogKE9taXQ8V3JpdGVSZXF1ZXN0LCBcIlB1dFJlcXVlc3RcIiB8IFwiRGVsZXRlUmVxdWVzdFwiPiAmIHtcbiAgICAgIFB1dFJlcXVlc3Q/OiBPbWl0PFB1dFJlcXVlc3QsIFwiSXRlbVwiPiAmIHtcbiAgICAgICAgSXRlbTogeyBba2V5OiBzdHJpbmddOiBOYXRpdmVBdHRyaWJ1dGVWYWx1ZSB9IHwgdW5kZWZpbmVkO1xuICAgICAgfTtcbiAgICAgIERlbGV0ZVJlcXVlc3Q/OiBPbWl0PERlbGV0ZVJlcXVlc3QsIFwiS2V5XCI+ICYge1xuICAgICAgICBLZXk6IHsgW2tleTogc3RyaW5nXTogTmF0aXZlQXR0cmlidXRlVmFsdWUgfSB8IHVuZGVmaW5lZDtcbiAgICAgIH07XG4gICAgfSlbXTtcbiAgfTtcbiAgSXRlbUNvbGxlY3Rpb25NZXRyaWNzPzoge1xuICAgIFtrZXk6IHN0cmluZ106IChPbWl0PEl0ZW1Db2xsZWN0aW9uTWV0cmljcywgXCJJdGVtQ29sbGVjdGlvbktleVwiPiAmIHtcbiAgICAgIEl0ZW1Db2xsZWN0aW9uS2V5PzogeyBba2V5OiBzdHJpbmddOiBOYXRpdmVBdHRyaWJ1dGVWYWx1ZSB9O1xuICAgIH0pW107XG4gIH07XG59O1xuXG4vKipcbiAqIEFjY2VwdHMgbmF0aXZlIEphdmFTY3JpcHQgdHlwZXMgaW5zdGVhZCBvZiBgQXR0cmlidXRlVmFsdWVgcywgYW5kIGNhbGxzXG4gKiBCYXRjaFdyaXRlSXRlbUNvbW1hbmQgb3BlcmF0aW9uIGZyb20ge0BsaW5rIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL0Bhd3Mtc2RrL2NsaWVudC1keW5hbW9kYiBAYXdzLXNkay9jbGllbnQtZHluYW1vZGJ9LlxuICpcbiAqIEphdmFTY3JpcHQgb2JqZWN0cyBwYXNzZWQgaW4gYXMgcGFyYW1ldGVycyBhcmUgbWFyc2hhbGxlZCBpbnRvIGBBdHRyaWJ1dGVWYWx1ZWAgc2hhcGVzXG4gKiByZXF1aXJlZCBieSBBbWF6b24gRHluYW1vREIuIFJlc3BvbnNlcyBmcm9tIER5bmFtb0RCIGFyZSB1bm1hcnNoYWxsZWQgaW50byBwbGFpbiBKYXZhU2NyaXB0IG9iamVjdHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBCYXRjaFdyaXRlQ29tbWFuZCBleHRlbmRzICRDb21tYW5kPFxuICBCYXRjaFdyaXRlQ29tbWFuZElucHV0LFxuICBCYXRjaFdyaXRlQ29tbWFuZE91dHB1dCxcbiAgRHluYW1vREJEb2N1bWVudENsaWVudFJlc29sdmVkQ29uZmlnXG4+IHtcbiAgcHJpdmF0ZSByZWFkb25seSBpbnB1dEtleU5vZGVzID0gW1xuICAgIHtcbiAgICAgIGtleTogXCJSZXF1ZXN0SXRlbXNcIixcbiAgICAgIGNoaWxkcmVuOiB7XG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgeyBrZXk6IFwiUHV0UmVxdWVzdFwiLCBjaGlsZHJlbjogW3sga2V5OiBcIkl0ZW1cIiB9XSB9LFxuICAgICAgICAgIHsga2V5OiBcIkRlbGV0ZVJlcXVlc3RcIiwgY2hpbGRyZW46IFt7IGtleTogXCJLZXlcIiB9XSB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9LFxuICBdO1xuICBwcml2YXRlIHJlYWRvbmx5IG91dHB1dEtleU5vZGVzID0gW1xuICAgIHtcbiAgICAgIGtleTogXCJVbnByb2Nlc3NlZEl0ZW1zXCIsXG4gICAgICBjaGlsZHJlbjoge1xuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHsga2V5OiBcIlB1dFJlcXVlc3RcIiwgY2hpbGRyZW46IFt7IGtleTogXCJJdGVtXCIgfV0gfSxcbiAgICAgICAgICB7IGtleTogXCJEZWxldGVSZXF1ZXN0XCIsIGNoaWxkcmVuOiBbeyBrZXk6IFwiS2V5XCIgfV0gfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBrZXk6IFwiSXRlbUNvbGxlY3Rpb25NZXRyaWNzXCIsXG4gICAgICBjaGlsZHJlbjoge1xuICAgICAgICBjaGlsZHJlbjogW3sga2V5OiBcIkl0ZW1Db2xsZWN0aW9uS2V5XCIgfV0sXG4gICAgICB9LFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3RydWN0b3IocmVhZG9ubHkgaW5wdXQ6IEJhdGNoV3JpdGVDb21tYW5kSW5wdXQpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcmVzb2x2ZU1pZGRsZXdhcmUoXG4gICAgY2xpZW50U3RhY2s6IE1pZGRsZXdhcmVTdGFjazxTZXJ2aWNlSW5wdXRUeXBlcywgU2VydmljZU91dHB1dFR5cGVzPixcbiAgICBjb25maWd1cmF0aW9uOiBEeW5hbW9EQkRvY3VtZW50Q2xpZW50UmVzb2x2ZWRDb25maWcsXG4gICAgb3B0aW9ucz86IF9fSHR0cEhhbmRsZXJPcHRpb25zXG4gICk6IEhhbmRsZXI8QmF0Y2hXcml0ZUNvbW1hbmRJbnB1dCwgQmF0Y2hXcml0ZUNvbW1hbmRPdXRwdXQ+IHtcbiAgICBjb25zdCB7IG1hcnNoYWxsT3B0aW9ucywgdW5tYXJzaGFsbE9wdGlvbnMgfSA9IGNvbmZpZ3VyYXRpb24udHJhbnNsYXRlQ29uZmlnIHx8IHt9O1xuICAgIGNvbnN0IGNvbW1hbmQgPSBuZXcgX19CYXRjaFdyaXRlSXRlbUNvbW1hbmQobWFyc2hhbGxJbnB1dCh0aGlzLmlucHV0LCB0aGlzLmlucHV0S2V5Tm9kZXMsIG1hcnNoYWxsT3B0aW9ucykpO1xuICAgIGNvbnN0IGhhbmRsZXIgPSBjb21tYW5kLnJlc29sdmVNaWRkbGV3YXJlKGNsaWVudFN0YWNrLCBjb25maWd1cmF0aW9uLCBvcHRpb25zKTtcblxuICAgIHJldHVybiBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgaGFuZGxlcihjb21tYW5kKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmRhdGEsXG4gICAgICAgIG91dHB1dDogdW5tYXJzaGFsbE91dHB1dChkYXRhLm91dHB1dCwgdGhpcy5vdXRwdXRLZXlOb2RlcywgdW5tYXJzaGFsbE9wdGlvbnMpLFxuICAgICAgfTtcbiAgICB9O1xuICB9XG59XG4iXX0=