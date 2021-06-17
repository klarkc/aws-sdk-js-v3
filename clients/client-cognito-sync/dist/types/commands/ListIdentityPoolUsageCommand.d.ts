import { CognitoSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoSyncClient";
import { ListIdentityPoolUsageRequest, ListIdentityPoolUsageResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListIdentityPoolUsageCommandInput extends ListIdentityPoolUsageRequest {
}
export interface ListIdentityPoolUsageCommandOutput extends ListIdentityPoolUsageResponse, __MetadataBearer {
}
/**
 * <p>Gets a list of identity pools registered with Cognito.</p>
 *       <p>ListIdentityPoolUsage can only be called with developer credentials. You
 *          cannot make this API call with the temporary user credentials provided by Cognito
 *          Identity.</p>
 *       <examples>
 *          <example>
 *             <name>ListIdentityPoolUsage</name>
 *             <description>The following examples have been edited for readability.</description>
 *             <request>
 * POST / HTTP/1.1
 * CONTENT-TYPE: application/json
 * X-AMZN-REQUESTID: 9be7c425-ef05-48c0-aef3-9f0ff2fe17d3
 * X-AMZ-TARGET: com.amazonaws.cognito.sync.model.AWSCognitoSyncService.ListIdentityPoolUsage
 * HOST: cognito-sync.us-east-1.amazonaws.com:443
 * X-AMZ-DATE: 20141111T211414Z
 * AUTHORIZATION: AWS4-HMAC-SHA256 Credential=<credential>, SignedHeaders=content-type;host;x-amz-date;x-amz-target;x-amzn-requestid, Signature=<signature>
 *
 * {
 *     "Operation": "com.amazonaws.cognito.sync.model#ListIdentityPoolUsage",
 *     "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
 *     "Input":
 *     {
 *         "MaxResults": "2"
 *     }
 * }
 *                </request>
 *             <response>
 * 1.1 200 OK
 * x-amzn-requestid: 9be7c425-ef05-48c0-aef3-9f0ff2fe17d3
 * content-type: application/json
 * content-length: 519
 * date: Tue, 11 Nov 2014 21:14:14 GMT
 *
 * {
 *     "Output":
 *     {
 *         "__type": "com.amazonaws.cognito.sync.model#ListIdentityPoolUsageResponse",
 *         "Count": 2,
 *         "IdentityPoolUsages": [
 *         {
 *             "DataStorage": 0,
 *             "IdentityPoolId": "IDENTITY_POOL_ID",
 *             "LastModifiedDate": 1.413836234607E9,
 *             "SyncSessionsCount": null
 *         },
 *         {
 *             "DataStorage": 0,
 *             "IdentityPoolId": "IDENTITY_POOL_ID",
 *             "LastModifiedDate": 1.410892165601E9,
 *             "SyncSessionsCount": null
 *         }],
 *         "MaxResults": 2,
 *         "NextToken": "dXMtZWFzdC0xOjBjMWJhMDUyLWUwOTgtNDFmYS1hNzZlLWVhYTJjMTI1Zjg2MQ=="
 *     },
 *     "Version": "1.0"
 * }
 *                </response>
 *          </example>
 *       </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoSyncClient, ListIdentityPoolUsageCommand } from "@aws-sdk/client-cognito-sync"; // ES Modules import
 * // const { CognitoSyncClient, ListIdentityPoolUsageCommand } = require("@aws-sdk/client-cognito-sync"); // CommonJS import
 * const client = new CognitoSyncClient(config);
 * const command = new ListIdentityPoolUsageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListIdentityPoolUsageCommandInput} for command's `input` shape.
 * @see {@link ListIdentityPoolUsageCommandOutput} for command's `response` shape.
 * @see {@link CognitoSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListIdentityPoolUsageCommand extends $Command<ListIdentityPoolUsageCommandInput, ListIdentityPoolUsageCommandOutput, CognitoSyncClientResolvedConfig> {
    readonly input: ListIdentityPoolUsageCommandInput;
    constructor(input: ListIdentityPoolUsageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListIdentityPoolUsageCommandInput, ListIdentityPoolUsageCommandOutput>;
    private serialize;
    private deserialize;
}
