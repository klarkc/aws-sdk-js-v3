import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { CreateInsightRequest, CreateInsightResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateInsightCommandInput extends CreateInsightRequest {
}
export interface CreateInsightCommandOutput extends CreateInsightResponse, __MetadataBearer {
}
/**
 * <p>Creates a custom insight in Security Hub. An insight is a consolidation of findings that relate
 *          to a security issue that requires attention or remediation.</p>
 *          <p>To group the related findings in the insight, use the
 *          <code>GroupByAttribute</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, CreateInsightCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, CreateInsightCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new CreateInsightCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateInsightCommandInput} for command's `input` shape.
 * @see {@link CreateInsightCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateInsightCommand extends $Command<CreateInsightCommandInput, CreateInsightCommandOutput, SecurityHubClientResolvedConfig> {
    readonly input: CreateInsightCommandInput;
    constructor(input: CreateInsightCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecurityHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateInsightCommandInput, CreateInsightCommandOutput>;
    private serialize;
    private deserialize;
}
