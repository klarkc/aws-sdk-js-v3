import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { DeleteInsightRulesInput, DeleteInsightRulesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteInsightRulesCommandInput extends DeleteInsightRulesInput {
}
export interface DeleteInsightRulesCommandOutput extends DeleteInsightRulesOutput, __MetadataBearer {
}
/**
 * <p>Permanently deletes the specified Contributor Insights rules.</p>
 * 		       <p>If you create a rule, delete it, and then re-create it with the same name, historical data from the first time
 * 			the rule was created might
 * 			not be available.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DeleteInsightRulesCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DeleteInsightRulesCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new DeleteInsightRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteInsightRulesCommandInput} for command's `input` shape.
 * @see {@link DeleteInsightRulesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteInsightRulesCommand extends $Command<DeleteInsightRulesCommandInput, DeleteInsightRulesCommandOutput, CloudWatchClientResolvedConfig> {
    readonly input: DeleteInsightRulesCommandInput;
    constructor(input: DeleteInsightRulesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteInsightRulesCommandInput, DeleteInsightRulesCommandOutput>;
    private serialize;
    private deserialize;
}
