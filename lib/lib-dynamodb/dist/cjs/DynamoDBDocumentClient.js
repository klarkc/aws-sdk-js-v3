"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamoDBDocumentClient = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class DynamoDBDocumentClient extends smithy_client_1.Client {
    constructor(client, translateConfig) {
        super(client.config);
        this.config = client.config;
        this.config.translateConfig = translateConfig;
        this.middlewareStack = client.middlewareStack;
    }
    static from(client, translateConfig) {
        return new DynamoDBDocumentClient(client, translateConfig);
    }
    destroy() {
        // A no-op, since client is passed in constructor
    }
}
exports.DynamoDBDocumentClient = DynamoDBDocumentClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHluYW1vREJEb2N1bWVudENsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9EeW5hbW9EQkRvY3VtZW50Q2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQXNCQSwwREFBNEQ7QUE2QzVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E2Q0c7QUFDSCxNQUFhLHNCQUF1QixTQUFRLHNCQUszQztJQUdDLFlBQXNCLE1BQXNCLEVBQUUsZUFBaUM7UUFDN0UsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1FBQzlDLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQztJQUNoRCxDQUFDO0lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFzQixFQUFFLGVBQWlDO1FBQ25FLE9BQU8sSUFBSSxzQkFBc0IsQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELE9BQU87UUFDTCxpREFBaUQ7SUFDbkQsQ0FBQztDQUNGO0FBdEJELHdEQXNCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJhdGNoRXhlY3V0ZVN0YXRlbWVudENvbW1hbmRJbnB1dCxcbiAgQmF0Y2hFeGVjdXRlU3RhdGVtZW50Q29tbWFuZE91dHB1dCxcbn0gZnJvbSBcIi4vY29tbWFuZHMvQmF0Y2hFeGVjdXRlU3RhdGVtZW50Q29tbWFuZFwiO1xuaW1wb3J0IHsgQmF0Y2hHZXRDb21tYW5kSW5wdXQsIEJhdGNoR2V0Q29tbWFuZE91dHB1dCB9IGZyb20gXCIuL2NvbW1hbmRzL0JhdGNoR2V0Q29tbWFuZFwiO1xuaW1wb3J0IHsgQmF0Y2hXcml0ZUNvbW1hbmRJbnB1dCwgQmF0Y2hXcml0ZUNvbW1hbmRPdXRwdXQgfSBmcm9tIFwiLi9jb21tYW5kcy9CYXRjaFdyaXRlQ29tbWFuZFwiO1xuaW1wb3J0IHsgRGVsZXRlQ29tbWFuZElucHV0LCBEZWxldGVDb21tYW5kT3V0cHV0IH0gZnJvbSBcIi4vY29tbWFuZHMvRGVsZXRlQ29tbWFuZFwiO1xuaW1wb3J0IHsgRXhlY3V0ZVN0YXRlbWVudENvbW1hbmRJbnB1dCwgRXhlY3V0ZVN0YXRlbWVudENvbW1hbmRPdXRwdXQgfSBmcm9tIFwiLi9jb21tYW5kcy9FeGVjdXRlU3RhdGVtZW50Q29tbWFuZFwiO1xuaW1wb3J0IHsgRXhlY3V0ZVRyYW5zYWN0aW9uQ29tbWFuZElucHV0LCBFeGVjdXRlVHJhbnNhY3Rpb25Db21tYW5kT3V0cHV0IH0gZnJvbSBcIi4vY29tbWFuZHMvRXhlY3V0ZVRyYW5zYWN0aW9uQ29tbWFuZFwiO1xuaW1wb3J0IHsgR2V0Q29tbWFuZElucHV0LCBHZXRDb21tYW5kT3V0cHV0IH0gZnJvbSBcIi4vY29tbWFuZHMvR2V0Q29tbWFuZFwiO1xuaW1wb3J0IHsgUHV0Q29tbWFuZElucHV0LCBQdXRDb21tYW5kT3V0cHV0IH0gZnJvbSBcIi4vY29tbWFuZHMvUHV0Q29tbWFuZFwiO1xuaW1wb3J0IHsgUXVlcnlDb21tYW5kSW5wdXQsIFF1ZXJ5Q29tbWFuZE91dHB1dCB9IGZyb20gXCIuL2NvbW1hbmRzL1F1ZXJ5Q29tbWFuZFwiO1xuaW1wb3J0IHsgU2NhbkNvbW1hbmRJbnB1dCwgU2NhbkNvbW1hbmRPdXRwdXQgfSBmcm9tIFwiLi9jb21tYW5kcy9TY2FuQ29tbWFuZFwiO1xuaW1wb3J0IHsgVHJhbnNhY3RHZXRDb21tYW5kSW5wdXQsIFRyYW5zYWN0R2V0Q29tbWFuZE91dHB1dCB9IGZyb20gXCIuL2NvbW1hbmRzL1RyYW5zYWN0R2V0Q29tbWFuZFwiO1xuaW1wb3J0IHsgVHJhbnNhY3RXcml0ZUNvbW1hbmRJbnB1dCwgVHJhbnNhY3RXcml0ZUNvbW1hbmRPdXRwdXQgfSBmcm9tIFwiLi9jb21tYW5kcy9UcmFuc2FjdFdyaXRlQ29tbWFuZFwiO1xuaW1wb3J0IHsgVXBkYXRlQ29tbWFuZElucHV0LCBVcGRhdGVDb21tYW5kT3V0cHV0IH0gZnJvbSBcIi4vY29tbWFuZHMvVXBkYXRlQ29tbWFuZFwiO1xuaW1wb3J0IHtcbiAgRHluYW1vREJDbGllbnQsXG4gIER5bmFtb0RCQ2xpZW50UmVzb2x2ZWRDb25maWcsXG4gIFNlcnZpY2VJbnB1dFR5cGVzIGFzIF9fU2VydmljZUlucHV0VHlwZXMsXG4gIFNlcnZpY2VPdXRwdXRUeXBlcyBhcyBfX1NlcnZpY2VPdXRwdXRUeXBlcyxcbn0gZnJvbSBcIkBhd3Mtc2RrL2NsaWVudC1keW5hbW9kYlwiO1xuaW1wb3J0IHsgQ2xpZW50IGFzIF9fQ2xpZW50IH0gZnJvbSBcIkBhd3Mtc2RrL3NtaXRoeS1jbGllbnRcIjtcbmltcG9ydCB7IEh0dHBIYW5kbGVyT3B0aW9ucyBhcyBfX0h0dHBIYW5kbGVyT3B0aW9ucyB9IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuaW1wb3J0IHsgbWFyc2hhbGxPcHRpb25zLCB1bm1hcnNoYWxsT3B0aW9ucyB9IGZyb20gXCJAYXdzLXNkay91dGlsLWR5bmFtb2RiXCI7XG5cbmV4cG9ydCB0eXBlIFNlcnZpY2VJbnB1dFR5cGVzID1cbiAgfCBfX1NlcnZpY2VJbnB1dFR5cGVzXG4gIHwgQmF0Y2hFeGVjdXRlU3RhdGVtZW50Q29tbWFuZElucHV0XG4gIHwgQmF0Y2hHZXRDb21tYW5kSW5wdXRcbiAgfCBCYXRjaFdyaXRlQ29tbWFuZElucHV0XG4gIHwgRGVsZXRlQ29tbWFuZElucHV0XG4gIHwgRXhlY3V0ZVN0YXRlbWVudENvbW1hbmRJbnB1dFxuICB8IEV4ZWN1dGVUcmFuc2FjdGlvbkNvbW1hbmRJbnB1dFxuICB8IEdldENvbW1hbmRJbnB1dFxuICB8IFB1dENvbW1hbmRJbnB1dFxuICB8IFF1ZXJ5Q29tbWFuZElucHV0XG4gIHwgU2NhbkNvbW1hbmRJbnB1dFxuICB8IFRyYW5zYWN0R2V0Q29tbWFuZElucHV0XG4gIHwgVHJhbnNhY3RXcml0ZUNvbW1hbmRJbnB1dFxuICB8IFVwZGF0ZUNvbW1hbmRJbnB1dDtcblxuZXhwb3J0IHR5cGUgU2VydmljZU91dHB1dFR5cGVzID1cbiAgfCBfX1NlcnZpY2VPdXRwdXRUeXBlc1xuICB8IEJhdGNoRXhlY3V0ZVN0YXRlbWVudENvbW1hbmRPdXRwdXRcbiAgfCBCYXRjaEdldENvbW1hbmRPdXRwdXRcbiAgfCBCYXRjaFdyaXRlQ29tbWFuZE91dHB1dFxuICB8IERlbGV0ZUNvbW1hbmRPdXRwdXRcbiAgfCBFeGVjdXRlU3RhdGVtZW50Q29tbWFuZE91dHB1dFxuICB8IEV4ZWN1dGVUcmFuc2FjdGlvbkNvbW1hbmRPdXRwdXRcbiAgfCBHZXRDb21tYW5kT3V0cHV0XG4gIHwgUHV0Q29tbWFuZE91dHB1dFxuICB8IFF1ZXJ5Q29tbWFuZE91dHB1dFxuICB8IFNjYW5Db21tYW5kT3V0cHV0XG4gIHwgVHJhbnNhY3RHZXRDb21tYW5kT3V0cHV0XG4gIHwgVHJhbnNhY3RXcml0ZUNvbW1hbmRPdXRwdXRcbiAgfCBVcGRhdGVDb21tYW5kT3V0cHV0O1xuXG5leHBvcnQgdHlwZSBUcmFuc2xhdGVDb25maWcgPSB7XG4gIG1hcnNoYWxsT3B0aW9ucz86IG1hcnNoYWxsT3B0aW9ucztcbiAgdW5tYXJzaGFsbE9wdGlvbnM/OiB1bm1hcnNoYWxsT3B0aW9ucztcbn07XG5cbmV4cG9ydCB0eXBlIER5bmFtb0RCRG9jdW1lbnRDbGllbnRSZXNvbHZlZENvbmZpZyA9IER5bmFtb0RCQ2xpZW50UmVzb2x2ZWRDb25maWcgJiB7XG4gIHRyYW5zbGF0ZUNvbmZpZz86IFRyYW5zbGF0ZUNvbmZpZztcbn07XG5cbi8qKlxuICogVGhlIGRvY3VtZW50IGNsaWVudCBzaW1wbGlmaWVzIHdvcmtpbmcgd2l0aCBpdGVtcyBpbiBBbWF6b24gRHluYW1vREIgYnlcbiAqIGFic3RyYWN0aW5nIGF3YXkgdGhlIG5vdGlvbiBvZiBhdHRyaWJ1dGUgdmFsdWVzLiBUaGlzIGFic3RyYWN0aW9uIGFubm90YXRlcyBuYXRpdmVcbiAqIEphdmFTY3JpcHQgdHlwZXMgc3VwcGxpZWQgYXMgaW5wdXQgcGFyYW1ldGVycywgYXMgd2VsbCBhcyBjb252ZXJ0cyBhbm5vdGF0ZWRcbiAqIHJlc3BvbnNlIGRhdGEgdG8gbmF0aXZlIEphdmFTY3JpcHQgdHlwZXMuXG4gKlxuICogIyMgTWFyc2hhbGxpbmcgSW5wdXQgYW5kIFVubWFyc2hhbGxpbmcgUmVzcG9uc2UgRGF0YVxuICpcbiAqIFRoZSBkb2N1bWVudCBjbGllbnQgYWZmb3JkcyBkZXZlbG9wZXJzIHRoZSB1c2Ugb2YgbmF0aXZlIEphdmFTY3JpcHQgdHlwZXNcbiAqIGluc3RlYWQgb2YgYEF0dHJpYnV0ZVZhbHVlYHMgdG8gc2ltcGxpZnkgdGhlIEphdmFTY3JpcHQgZGV2ZWxvcG1lbnRcbiAqIGV4cGVyaWVuY2Ugd2l0aCBBbWF6b24gRHluYW1vREIuIEphdmFTY3JpcHQgb2JqZWN0cyBwYXNzZWQgaW4gYXMgcGFyYW1ldGVyc1xuICogYXJlIG1hcnNoYWxsZWQgaW50byBgQXR0cmlidXRlVmFsdWVgIHNoYXBlcyByZXF1aXJlZCBieSBBbWF6b24gRHluYW1vREIuXG4gKiBSZXNwb25zZXMgZnJvbSBEeW5hbW9EQiBhcmUgdW5tYXJzaGFsbGVkIGludG8gcGxhaW4gSmF2YVNjcmlwdCBvYmplY3RzXG4gKiBieSB0aGUgYERvY3VtZW50Q2xpZW50YC4gVGhlIGBEb2N1bWVudENsaWVudGAgZG9lcyBub3QgYWNjZXB0XG4gKiBgQXR0cmlidXRlVmFsdWVgcyBpbiBmYXZvciBvZiBuYXRpdmUgSmF2YVNjcmlwdCB0eXBlcy5cbiAqXG4gKiB8ICAgICAgICAgIEphdmFTY3JpcHQgVHlwZSAgICAgICAgICB8IER5bmFtb0RCIEF0dHJpYnV0ZVZhbHVlIHxcbiAqIHwgOi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS06IHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gfFxuICogfCAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgfCBTICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgIE51bWJlciAvIEJpZ0ludCAgICAgICAgICB8IE4gICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgIEJvb2xlYW4gICAgICAgICAgICAgIHwgQk9PTCAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgIG51bGwgICAgICAgICAgICAgICAgfCBOVUxMICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgQXJyYXkgICAgICAgICAgICAgICB8IEwgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgIE9iamVjdCAgICAgICAgICAgICAgIHwgTSAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgIFNldFxcPFVpbnQ4QXJyYXksIEJsb2IsIC4uLlxcPiAgICB8IEJTICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgU2V0XFw8TnVtYmVyLCBCaWdJbnRcXD4gICAgICAgfCBOUyAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICBTZXRcXDxTdHJpbmdcXD4gICAgICAgICAgIHwgU1MgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCBVaW50OEFycmF5LCBCdWZmZXIsIEZpbGUsIEJsb2IuLi4gfCBCICAgICAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBIZXJlIGlzIGFuIGV4YW1wbGUgbGlzdCB3aGljaCBpcyBzZW50IHRvIER5bmFtb0RCIGNsaWVudCBpbiBhbiBvcGVyYXRpb246XG4gKlxuICogYGBganNvblxuICogeyBcIkxcIjogW3sgXCJOVUxMXCI6IHRydWUgfSwgeyBcIkJPT0xcIjogZmFsc2UgfSwgeyBcIk5cIjogMSB9LCB7IFwiU1wiOiBcInR3b1wiIH1dIH1cbiAqIGBgYFxuICpcbiAqIFRoZSBEeW5hbW9EQiBkb2N1bWVudCBjbGllbnQgYWJzdHJhY3RzIHRoZSBhdHRyaWJ1dGUgdmFsdWVzIGFzIGZvbGxvd3MgaW5cbiAqIGJvdGggaW5wdXQgYW5kIG91dHB1dDpcbiAqXG4gKiBgYGBqc29uXG4gKiBbbnVsbCwgZmFsc2UsIDEsIFwidHdvXCJdXG4gKiBgYGBcbiAqXG4gKiBAc2VlIHtAbGluayBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9AYXdzLXNkay9jbGllbnQtZHluYW1vZGIgQGF3cy1zZGsvY2xpZW50LWR5bmFtb2RifVxuICovXG5leHBvcnQgY2xhc3MgRHluYW1vREJEb2N1bWVudENsaWVudCBleHRlbmRzIF9fQ2xpZW50PFxuICBfX0h0dHBIYW5kbGVyT3B0aW9ucyxcbiAgU2VydmljZUlucHV0VHlwZXMsXG4gIFNlcnZpY2VPdXRwdXRUeXBlcyxcbiAgRHluYW1vREJEb2N1bWVudENsaWVudFJlc29sdmVkQ29uZmlnXG4+IHtcbiAgcmVhZG9ubHkgY29uZmlnOiBEeW5hbW9EQkRvY3VtZW50Q2xpZW50UmVzb2x2ZWRDb25maWc7XG5cbiAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKGNsaWVudDogRHluYW1vREJDbGllbnQsIHRyYW5zbGF0ZUNvbmZpZz86IFRyYW5zbGF0ZUNvbmZpZykge1xuICAgIHN1cGVyKGNsaWVudC5jb25maWcpO1xuICAgIHRoaXMuY29uZmlnID0gY2xpZW50LmNvbmZpZztcbiAgICB0aGlzLmNvbmZpZy50cmFuc2xhdGVDb25maWcgPSB0cmFuc2xhdGVDb25maWc7XG4gICAgdGhpcy5taWRkbGV3YXJlU3RhY2sgPSBjbGllbnQubWlkZGxld2FyZVN0YWNrO1xuICB9XG5cbiAgc3RhdGljIGZyb20oY2xpZW50OiBEeW5hbW9EQkNsaWVudCwgdHJhbnNsYXRlQ29uZmlnPzogVHJhbnNsYXRlQ29uZmlnKSB7XG4gICAgcmV0dXJuIG5ldyBEeW5hbW9EQkRvY3VtZW50Q2xpZW50KGNsaWVudCwgdHJhbnNsYXRlQ29uZmlnKTtcbiAgfVxuXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgLy8gQSBuby1vcCwgc2luY2UgY2xpZW50IGlzIHBhc3NlZCBpbiBjb25zdHJ1Y3RvclxuICB9XG59XG4iXX0=