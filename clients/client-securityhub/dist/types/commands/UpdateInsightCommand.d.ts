import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { UpdateInsightRequest, UpdateInsightResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateInsightCommandInput extends UpdateInsightRequest {
}
export interface UpdateInsightCommandOutput extends UpdateInsightResponse, __MetadataBearer {
}
/**
 * <p>Updates the Security Hub insight identified by the specified insight ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, UpdateInsightCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, UpdateInsightCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new UpdateInsightCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateInsightCommandInput} for command's `input` shape.
 * @see {@link UpdateInsightCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateInsightCommand extends $Command<UpdateInsightCommandInput, UpdateInsightCommandOutput, SecurityHubClientResolvedConfig> {
    readonly input: UpdateInsightCommandInput;
    constructor(input: UpdateInsightCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecurityHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateInsightCommandInput, UpdateInsightCommandOutput>;
    private serialize;
    private deserialize;
}
