import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { DeleteInsightRequest, DeleteInsightResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteInsightCommandInput extends DeleteInsightRequest {
}
export interface DeleteInsightCommandOutput extends DeleteInsightResponse, __MetadataBearer {
}
/**
 * <p>Deletes the insight specified by the <code>InsightArn</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DeleteInsightCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DeleteInsightCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new DeleteInsightCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteInsightCommandInput} for command's `input` shape.
 * @see {@link DeleteInsightCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteInsightCommand extends $Command<DeleteInsightCommandInput, DeleteInsightCommandOutput, SecurityHubClientResolvedConfig> {
    readonly input: DeleteInsightCommandInput;
    constructor(input: DeleteInsightCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecurityHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteInsightCommandInput, DeleteInsightCommandOutput>;
    private serialize;
    private deserialize;
}
