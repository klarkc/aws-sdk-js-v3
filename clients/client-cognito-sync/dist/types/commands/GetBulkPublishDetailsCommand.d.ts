import { CognitoSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoSyncClient";
import { GetBulkPublishDetailsRequest, GetBulkPublishDetailsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetBulkPublishDetailsCommandInput extends GetBulkPublishDetailsRequest {
}
export interface GetBulkPublishDetailsCommandOutput extends GetBulkPublishDetailsResponse, __MetadataBearer {
}
/**
 * <p>Get the status of the last BulkPublish operation for an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoSyncClient, GetBulkPublishDetailsCommand } from "@aws-sdk/client-cognito-sync"; // ES Modules import
 * // const { CognitoSyncClient, GetBulkPublishDetailsCommand } = require("@aws-sdk/client-cognito-sync"); // CommonJS import
 * const client = new CognitoSyncClient(config);
 * const command = new GetBulkPublishDetailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBulkPublishDetailsCommandInput} for command's `input` shape.
 * @see {@link GetBulkPublishDetailsCommandOutput} for command's `response` shape.
 * @see {@link CognitoSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetBulkPublishDetailsCommand extends $Command<GetBulkPublishDetailsCommandInput, GetBulkPublishDetailsCommandOutput, CognitoSyncClientResolvedConfig> {
    readonly input: GetBulkPublishDetailsCommandInput;
    constructor(input: GetBulkPublishDetailsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBulkPublishDetailsCommandInput, GetBulkPublishDetailsCommandOutput>;
    private serialize;
    private deserialize;
}
