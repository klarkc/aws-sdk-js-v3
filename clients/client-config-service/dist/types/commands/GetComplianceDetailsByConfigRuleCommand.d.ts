import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { GetComplianceDetailsByConfigRuleRequest, GetComplianceDetailsByConfigRuleResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetComplianceDetailsByConfigRuleCommandInput extends GetComplianceDetailsByConfigRuleRequest {
}
export interface GetComplianceDetailsByConfigRuleCommandOutput extends GetComplianceDetailsByConfigRuleResponse, __MetadataBearer {
}
/**
 * <p>Returns the evaluation results for the specified AWS Config
 * 			rule. The results indicate which AWS resources were evaluated by the
 * 			rule, when each resource was last evaluated, and whether each
 * 			resource complies with the rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetComplianceDetailsByConfigRuleCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetComplianceDetailsByConfigRuleCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new GetComplianceDetailsByConfigRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetComplianceDetailsByConfigRuleCommandInput} for command's `input` shape.
 * @see {@link GetComplianceDetailsByConfigRuleCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetComplianceDetailsByConfigRuleCommand extends $Command<GetComplianceDetailsByConfigRuleCommandInput, GetComplianceDetailsByConfigRuleCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: GetComplianceDetailsByConfigRuleCommandInput;
    constructor(input: GetComplianceDetailsByConfigRuleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetComplianceDetailsByConfigRuleCommandInput, GetComplianceDetailsByConfigRuleCommandOutput>;
    private serialize;
    private deserialize;
}
