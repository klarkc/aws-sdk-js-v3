import { __extends } from "tslib";
import { Client as __Client } from "@aws-sdk/smithy-client";
/**
 * The document client simplifies working with items in Amazon DynamoDB by
 * abstracting away the notion of attribute values. This abstraction annotates native
 * JavaScript types supplied as input parameters, as well as converts annotated
 * response data to native JavaScript types.
 *
 * ## Marshalling Input and Unmarshalling Response Data
 *
 * The document client affords developers the use of native JavaScript types
 * instead of `AttributeValue`s to simplify the JavaScript development
 * experience with Amazon DynamoDB. JavaScript objects passed in as parameters
 * are marshalled into `AttributeValue` shapes required by Amazon DynamoDB.
 * Responses from DynamoDB are unmarshalled into plain JavaScript objects
 * by the `DocumentClient`. The `DocumentClient` does not accept
 * `AttributeValue`s in favor of native JavaScript types.
 *
 * |          JavaScript Type          | DynamoDB AttributeValue |
 * | :-------------------------------: | ----------------------- |
 * |              String               | S                       |
 * |          Number / BigInt          | N                       |
 * |              Boolean              | BOOL                    |
 * |               null                | NULL                    |
 * |               Array               | L                       |
 * |              Object               | M                       |
 * |   Set\<Uint8Array, Blob, ...\>    | BS                      |
 * |       Set\<Number, BigInt\>       | NS                      |
 * |           Set\<String\>           | SS                      |
 * | Uint8Array, Buffer, File, Blob... | B                       |
 *
 * ### Example
 *
 * Here is an example list which is sent to DynamoDB client in an operation:
 *
 * ```json
 * { "L": [{ "NULL": true }, { "BOOL": false }, { "N": 1 }, { "S": "two" }] }
 * ```
 *
 * The DynamoDB document client abstracts the attribute values as follows in
 * both input and output:
 *
 * ```json
 * [null, false, 1, "two"]
 * ```
 *
 * @see {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}
 */
var DynamoDBDocumentClient = /** @class */ (function (_super) {
    __extends(DynamoDBDocumentClient, _super);
    function DynamoDBDocumentClient(client, translateConfig) {
        var _this = _super.call(this, client.config) || this;
        _this.config = client.config;
        _this.config.translateConfig = translateConfig;
        _this.middlewareStack = client.middlewareStack;
        return _this;
    }
    DynamoDBDocumentClient.from = function (client, translateConfig) {
        return new DynamoDBDocumentClient(client, translateConfig);
    };
    DynamoDBDocumentClient.prototype.destroy = function () {
        // A no-op, since client is passed in constructor
    };
    return DynamoDBDocumentClient;
}(__Client));
export { DynamoDBDocumentClient };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHluYW1vREJEb2N1bWVudENsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9EeW5hbW9EQkRvY3VtZW50Q2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFzQkEsT0FBTyxFQUFFLE1BQU0sSUFBSSxRQUFRLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQTZDNUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTZDRztBQUNIO0lBQTRDLDBDQUszQztJQUdDLGdDQUFzQixNQUFzQixFQUFFLGVBQWlDO1FBQS9FLFlBQ0Usa0JBQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUlyQjtRQUhDLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM1QixLQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFDOUMsS0FBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDOztJQUNoRCxDQUFDO0lBRU0sMkJBQUksR0FBWCxVQUFZLE1BQXNCLEVBQUUsZUFBaUM7UUFDbkUsT0FBTyxJQUFJLHNCQUFzQixDQUFDLE1BQU0sRUFBRSxlQUFlLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsd0NBQU8sR0FBUDtRQUNFLGlEQUFpRDtJQUNuRCxDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBdEJELENBQTRDLFFBQVEsR0FzQm5EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQmF0Y2hFeGVjdXRlU3RhdGVtZW50Q29tbWFuZElucHV0LFxuICBCYXRjaEV4ZWN1dGVTdGF0ZW1lbnRDb21tYW5kT3V0cHV0LFxufSBmcm9tIFwiLi9jb21tYW5kcy9CYXRjaEV4ZWN1dGVTdGF0ZW1lbnRDb21tYW5kXCI7XG5pbXBvcnQgeyBCYXRjaEdldENvbW1hbmRJbnB1dCwgQmF0Y2hHZXRDb21tYW5kT3V0cHV0IH0gZnJvbSBcIi4vY29tbWFuZHMvQmF0Y2hHZXRDb21tYW5kXCI7XG5pbXBvcnQgeyBCYXRjaFdyaXRlQ29tbWFuZElucHV0LCBCYXRjaFdyaXRlQ29tbWFuZE91dHB1dCB9IGZyb20gXCIuL2NvbW1hbmRzL0JhdGNoV3JpdGVDb21tYW5kXCI7XG5pbXBvcnQgeyBEZWxldGVDb21tYW5kSW5wdXQsIERlbGV0ZUNvbW1hbmRPdXRwdXQgfSBmcm9tIFwiLi9jb21tYW5kcy9EZWxldGVDb21tYW5kXCI7XG5pbXBvcnQgeyBFeGVjdXRlU3RhdGVtZW50Q29tbWFuZElucHV0LCBFeGVjdXRlU3RhdGVtZW50Q29tbWFuZE91dHB1dCB9IGZyb20gXCIuL2NvbW1hbmRzL0V4ZWN1dGVTdGF0ZW1lbnRDb21tYW5kXCI7XG5pbXBvcnQgeyBFeGVjdXRlVHJhbnNhY3Rpb25Db21tYW5kSW5wdXQsIEV4ZWN1dGVUcmFuc2FjdGlvbkNvbW1hbmRPdXRwdXQgfSBmcm9tIFwiLi9jb21tYW5kcy9FeGVjdXRlVHJhbnNhY3Rpb25Db21tYW5kXCI7XG5pbXBvcnQgeyBHZXRDb21tYW5kSW5wdXQsIEdldENvbW1hbmRPdXRwdXQgfSBmcm9tIFwiLi9jb21tYW5kcy9HZXRDb21tYW5kXCI7XG5pbXBvcnQgeyBQdXRDb21tYW5kSW5wdXQsIFB1dENvbW1hbmRPdXRwdXQgfSBmcm9tIFwiLi9jb21tYW5kcy9QdXRDb21tYW5kXCI7XG5pbXBvcnQgeyBRdWVyeUNvbW1hbmRJbnB1dCwgUXVlcnlDb21tYW5kT3V0cHV0IH0gZnJvbSBcIi4vY29tbWFuZHMvUXVlcnlDb21tYW5kXCI7XG5pbXBvcnQgeyBTY2FuQ29tbWFuZElucHV0LCBTY2FuQ29tbWFuZE91dHB1dCB9IGZyb20gXCIuL2NvbW1hbmRzL1NjYW5Db21tYW5kXCI7XG5pbXBvcnQgeyBUcmFuc2FjdEdldENvbW1hbmRJbnB1dCwgVHJhbnNhY3RHZXRDb21tYW5kT3V0cHV0IH0gZnJvbSBcIi4vY29tbWFuZHMvVHJhbnNhY3RHZXRDb21tYW5kXCI7XG5pbXBvcnQgeyBUcmFuc2FjdFdyaXRlQ29tbWFuZElucHV0LCBUcmFuc2FjdFdyaXRlQ29tbWFuZE91dHB1dCB9IGZyb20gXCIuL2NvbW1hbmRzL1RyYW5zYWN0V3JpdGVDb21tYW5kXCI7XG5pbXBvcnQgeyBVcGRhdGVDb21tYW5kSW5wdXQsIFVwZGF0ZUNvbW1hbmRPdXRwdXQgfSBmcm9tIFwiLi9jb21tYW5kcy9VcGRhdGVDb21tYW5kXCI7XG5pbXBvcnQge1xuICBEeW5hbW9EQkNsaWVudCxcbiAgRHluYW1vREJDbGllbnRSZXNvbHZlZENvbmZpZyxcbiAgU2VydmljZUlucHV0VHlwZXMgYXMgX19TZXJ2aWNlSW5wdXRUeXBlcyxcbiAgU2VydmljZU91dHB1dFR5cGVzIGFzIF9fU2VydmljZU91dHB1dFR5cGVzLFxufSBmcm9tIFwiQGF3cy1zZGsvY2xpZW50LWR5bmFtb2RiXCI7XG5pbXBvcnQgeyBDbGllbnQgYXMgX19DbGllbnQgfSBmcm9tIFwiQGF3cy1zZGsvc21pdGh5LWNsaWVudFwiO1xuaW1wb3J0IHsgSHR0cEhhbmRsZXJPcHRpb25zIGFzIF9fSHR0cEhhbmRsZXJPcHRpb25zIH0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5pbXBvcnQgeyBtYXJzaGFsbE9wdGlvbnMsIHVubWFyc2hhbGxPcHRpb25zIH0gZnJvbSBcIkBhd3Mtc2RrL3V0aWwtZHluYW1vZGJcIjtcblxuZXhwb3J0IHR5cGUgU2VydmljZUlucHV0VHlwZXMgPVxuICB8IF9fU2VydmljZUlucHV0VHlwZXNcbiAgfCBCYXRjaEV4ZWN1dGVTdGF0ZW1lbnRDb21tYW5kSW5wdXRcbiAgfCBCYXRjaEdldENvbW1hbmRJbnB1dFxuICB8IEJhdGNoV3JpdGVDb21tYW5kSW5wdXRcbiAgfCBEZWxldGVDb21tYW5kSW5wdXRcbiAgfCBFeGVjdXRlU3RhdGVtZW50Q29tbWFuZElucHV0XG4gIHwgRXhlY3V0ZVRyYW5zYWN0aW9uQ29tbWFuZElucHV0XG4gIHwgR2V0Q29tbWFuZElucHV0XG4gIHwgUHV0Q29tbWFuZElucHV0XG4gIHwgUXVlcnlDb21tYW5kSW5wdXRcbiAgfCBTY2FuQ29tbWFuZElucHV0XG4gIHwgVHJhbnNhY3RHZXRDb21tYW5kSW5wdXRcbiAgfCBUcmFuc2FjdFdyaXRlQ29tbWFuZElucHV0XG4gIHwgVXBkYXRlQ29tbWFuZElucHV0O1xuXG5leHBvcnQgdHlwZSBTZXJ2aWNlT3V0cHV0VHlwZXMgPVxuICB8IF9fU2VydmljZU91dHB1dFR5cGVzXG4gIHwgQmF0Y2hFeGVjdXRlU3RhdGVtZW50Q29tbWFuZE91dHB1dFxuICB8IEJhdGNoR2V0Q29tbWFuZE91dHB1dFxuICB8IEJhdGNoV3JpdGVDb21tYW5kT3V0cHV0XG4gIHwgRGVsZXRlQ29tbWFuZE91dHB1dFxuICB8IEV4ZWN1dGVTdGF0ZW1lbnRDb21tYW5kT3V0cHV0XG4gIHwgRXhlY3V0ZVRyYW5zYWN0aW9uQ29tbWFuZE91dHB1dFxuICB8IEdldENvbW1hbmRPdXRwdXRcbiAgfCBQdXRDb21tYW5kT3V0cHV0XG4gIHwgUXVlcnlDb21tYW5kT3V0cHV0XG4gIHwgU2NhbkNvbW1hbmRPdXRwdXRcbiAgfCBUcmFuc2FjdEdldENvbW1hbmRPdXRwdXRcbiAgfCBUcmFuc2FjdFdyaXRlQ29tbWFuZE91dHB1dFxuICB8IFVwZGF0ZUNvbW1hbmRPdXRwdXQ7XG5cbmV4cG9ydCB0eXBlIFRyYW5zbGF0ZUNvbmZpZyA9IHtcbiAgbWFyc2hhbGxPcHRpb25zPzogbWFyc2hhbGxPcHRpb25zO1xuICB1bm1hcnNoYWxsT3B0aW9ucz86IHVubWFyc2hhbGxPcHRpb25zO1xufTtcblxuZXhwb3J0IHR5cGUgRHluYW1vREJEb2N1bWVudENsaWVudFJlc29sdmVkQ29uZmlnID0gRHluYW1vREJDbGllbnRSZXNvbHZlZENvbmZpZyAmIHtcbiAgdHJhbnNsYXRlQ29uZmlnPzogVHJhbnNsYXRlQ29uZmlnO1xufTtcblxuLyoqXG4gKiBUaGUgZG9jdW1lbnQgY2xpZW50IHNpbXBsaWZpZXMgd29ya2luZyB3aXRoIGl0ZW1zIGluIEFtYXpvbiBEeW5hbW9EQiBieVxuICogYWJzdHJhY3RpbmcgYXdheSB0aGUgbm90aW9uIG9mIGF0dHJpYnV0ZSB2YWx1ZXMuIFRoaXMgYWJzdHJhY3Rpb24gYW5ub3RhdGVzIG5hdGl2ZVxuICogSmF2YVNjcmlwdCB0eXBlcyBzdXBwbGllZCBhcyBpbnB1dCBwYXJhbWV0ZXJzLCBhcyB3ZWxsIGFzIGNvbnZlcnRzIGFubm90YXRlZFxuICogcmVzcG9uc2UgZGF0YSB0byBuYXRpdmUgSmF2YVNjcmlwdCB0eXBlcy5cbiAqXG4gKiAjIyBNYXJzaGFsbGluZyBJbnB1dCBhbmQgVW5tYXJzaGFsbGluZyBSZXNwb25zZSBEYXRhXG4gKlxuICogVGhlIGRvY3VtZW50IGNsaWVudCBhZmZvcmRzIGRldmVsb3BlcnMgdGhlIHVzZSBvZiBuYXRpdmUgSmF2YVNjcmlwdCB0eXBlc1xuICogaW5zdGVhZCBvZiBgQXR0cmlidXRlVmFsdWVgcyB0byBzaW1wbGlmeSB0aGUgSmF2YVNjcmlwdCBkZXZlbG9wbWVudFxuICogZXhwZXJpZW5jZSB3aXRoIEFtYXpvbiBEeW5hbW9EQi4gSmF2YVNjcmlwdCBvYmplY3RzIHBhc3NlZCBpbiBhcyBwYXJhbWV0ZXJzXG4gKiBhcmUgbWFyc2hhbGxlZCBpbnRvIGBBdHRyaWJ1dGVWYWx1ZWAgc2hhcGVzIHJlcXVpcmVkIGJ5IEFtYXpvbiBEeW5hbW9EQi5cbiAqIFJlc3BvbnNlcyBmcm9tIER5bmFtb0RCIGFyZSB1bm1hcnNoYWxsZWQgaW50byBwbGFpbiBKYXZhU2NyaXB0IG9iamVjdHNcbiAqIGJ5IHRoZSBgRG9jdW1lbnRDbGllbnRgLiBUaGUgYERvY3VtZW50Q2xpZW50YCBkb2VzIG5vdCBhY2NlcHRcbiAqIGBBdHRyaWJ1dGVWYWx1ZWBzIGluIGZhdm9yIG9mIG5hdGl2ZSBKYXZhU2NyaXB0IHR5cGVzLlxuICpcbiAqIHwgICAgICAgICAgSmF2YVNjcmlwdCBUeXBlICAgICAgICAgIHwgRHluYW1vREIgQXR0cmlidXRlVmFsdWUgfFxuICogfCA6LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLTogfCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8XG4gKiB8ICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICB8IFMgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgTnVtYmVyIC8gQmlnSW50ICAgICAgICAgIHwgTiAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgQm9vbGVhbiAgICAgICAgICAgICAgfCBCT09MICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgbnVsbCAgICAgICAgICAgICAgICB8IE5VTEwgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICBBcnJheSAgICAgICAgICAgICAgIHwgTCAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgT2JqZWN0ICAgICAgICAgICAgICAgfCBNICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgU2V0XFw8VWludDhBcnJheSwgQmxvYiwgLi4uXFw+ICAgIHwgQlMgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICBTZXRcXDxOdW1iZXIsIEJpZ0ludFxcPiAgICAgICB8IE5TICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgIFNldFxcPFN0cmluZ1xcPiAgICAgICAgICAgfCBTUyAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IFVpbnQ4QXJyYXksIEJ1ZmZlciwgRmlsZSwgQmxvYi4uLiB8IEIgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIEhlcmUgaXMgYW4gZXhhbXBsZSBsaXN0IHdoaWNoIGlzIHNlbnQgdG8gRHluYW1vREIgY2xpZW50IGluIGFuIG9wZXJhdGlvbjpcbiAqXG4gKiBgYGBqc29uXG4gKiB7IFwiTFwiOiBbeyBcIk5VTExcIjogdHJ1ZSB9LCB7IFwiQk9PTFwiOiBmYWxzZSB9LCB7IFwiTlwiOiAxIH0sIHsgXCJTXCI6IFwidHdvXCIgfV0gfVxuICogYGBgXG4gKlxuICogVGhlIER5bmFtb0RCIGRvY3VtZW50IGNsaWVudCBhYnN0cmFjdHMgdGhlIGF0dHJpYnV0ZSB2YWx1ZXMgYXMgZm9sbG93cyBpblxuICogYm90aCBpbnB1dCBhbmQgb3V0cHV0OlxuICpcbiAqIGBgYGpzb25cbiAqIFtudWxsLCBmYWxzZSwgMSwgXCJ0d29cIl1cbiAqIGBgYFxuICpcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL0Bhd3Mtc2RrL2NsaWVudC1keW5hbW9kYiBAYXdzLXNkay9jbGllbnQtZHluYW1vZGJ9XG4gKi9cbmV4cG9ydCBjbGFzcyBEeW5hbW9EQkRvY3VtZW50Q2xpZW50IGV4dGVuZHMgX19DbGllbnQ8XG4gIF9fSHR0cEhhbmRsZXJPcHRpb25zLFxuICBTZXJ2aWNlSW5wdXRUeXBlcyxcbiAgU2VydmljZU91dHB1dFR5cGVzLFxuICBEeW5hbW9EQkRvY3VtZW50Q2xpZW50UmVzb2x2ZWRDb25maWdcbj4ge1xuICByZWFkb25seSBjb25maWc6IER5bmFtb0RCRG9jdW1lbnRDbGllbnRSZXNvbHZlZENvbmZpZztcblxuICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoY2xpZW50OiBEeW5hbW9EQkNsaWVudCwgdHJhbnNsYXRlQ29uZmlnPzogVHJhbnNsYXRlQ29uZmlnKSB7XG4gICAgc3VwZXIoY2xpZW50LmNvbmZpZyk7XG4gICAgdGhpcy5jb25maWcgPSBjbGllbnQuY29uZmlnO1xuICAgIHRoaXMuY29uZmlnLnRyYW5zbGF0ZUNvbmZpZyA9IHRyYW5zbGF0ZUNvbmZpZztcbiAgICB0aGlzLm1pZGRsZXdhcmVTdGFjayA9IGNsaWVudC5taWRkbGV3YXJlU3RhY2s7XG4gIH1cblxuICBzdGF0aWMgZnJvbShjbGllbnQ6IER5bmFtb0RCQ2xpZW50LCB0cmFuc2xhdGVDb25maWc/OiBUcmFuc2xhdGVDb25maWcpIHtcbiAgICByZXR1cm4gbmV3IER5bmFtb0RCRG9jdW1lbnRDbGllbnQoY2xpZW50LCB0cmFuc2xhdGVDb25maWcpO1xuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAvLyBBIG5vLW9wLCBzaW5jZSBjbGllbnQgaXMgcGFzc2VkIGluIGNvbnN0cnVjdG9yXG4gIH1cbn1cbiJdfQ==