import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { EnableInsightRulesInput, EnableInsightRulesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface EnableInsightRulesCommandInput extends EnableInsightRulesInput {
}
export interface EnableInsightRulesCommandOutput extends EnableInsightRulesOutput, __MetadataBearer {
}
/**
 * <p>Enables the specified Contributor Insights rules. When rules are enabled, they immediately begin analyzing log data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, EnableInsightRulesCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, EnableInsightRulesCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new EnableInsightRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableInsightRulesCommandInput} for command's `input` shape.
 * @see {@link EnableInsightRulesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class EnableInsightRulesCommand extends $Command<EnableInsightRulesCommandInput, EnableInsightRulesCommandOutput, CloudWatchClientResolvedConfig> {
    readonly input: EnableInsightRulesCommandInput;
    constructor(input: EnableInsightRulesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableInsightRulesCommandInput, EnableInsightRulesCommandOutput>;
    private serialize;
    private deserialize;
}
