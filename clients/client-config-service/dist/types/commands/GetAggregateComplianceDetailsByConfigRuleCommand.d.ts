import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { GetAggregateComplianceDetailsByConfigRuleRequest, GetAggregateComplianceDetailsByConfigRuleResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetAggregateComplianceDetailsByConfigRuleCommandInput extends GetAggregateComplianceDetailsByConfigRuleRequest {
}
export interface GetAggregateComplianceDetailsByConfigRuleCommandOutput extends GetAggregateComplianceDetailsByConfigRuleResponse, __MetadataBearer {
}
/**
 * <p>Returns the evaluation results for the specified AWS Config
 * 			rule for a specific resource in a rule. The results indicate which
 * 			AWS resources were evaluated by the rule, when each resource was
 * 			last evaluated, and whether each resource complies with the rule. </p>
 * 		       <note>
 * 			         <p>The results can return an empty result page. But if you
 * 				have a <code>nextToken</code>, the results are displayed on the next
 * 				page.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetAggregateComplianceDetailsByConfigRuleCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetAggregateComplianceDetailsByConfigRuleCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new GetAggregateComplianceDetailsByConfigRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAggregateComplianceDetailsByConfigRuleCommandInput} for command's `input` shape.
 * @see {@link GetAggregateComplianceDetailsByConfigRuleCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAggregateComplianceDetailsByConfigRuleCommand extends $Command<GetAggregateComplianceDetailsByConfigRuleCommandInput, GetAggregateComplianceDetailsByConfigRuleCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: GetAggregateComplianceDetailsByConfigRuleCommandInput;
    constructor(input: GetAggregateComplianceDetailsByConfigRuleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAggregateComplianceDetailsByConfigRuleCommandInput, GetAggregateComplianceDetailsByConfigRuleCommandOutput>;
    private serialize;
    private deserialize;
}
