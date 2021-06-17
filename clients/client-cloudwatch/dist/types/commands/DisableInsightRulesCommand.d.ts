import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { DisableInsightRulesInput, DisableInsightRulesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisableInsightRulesCommandInput extends DisableInsightRulesInput {
}
export interface DisableInsightRulesCommandOutput extends DisableInsightRulesOutput, __MetadataBearer {
}
/**
 * <p>Disables the specified Contributor Insights rules. When rules are disabled, they do not analyze log groups and do
 * 		not incur costs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DisableInsightRulesCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DisableInsightRulesCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new DisableInsightRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableInsightRulesCommandInput} for command's `input` shape.
 * @see {@link DisableInsightRulesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisableInsightRulesCommand extends $Command<DisableInsightRulesCommandInput, DisableInsightRulesCommandOutput, CloudWatchClientResolvedConfig> {
    readonly input: DisableInsightRulesCommandInput;
    constructor(input: DisableInsightRulesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableInsightRulesCommandInput, DisableInsightRulesCommandOutput>;
    private serialize;
    private deserialize;
}
