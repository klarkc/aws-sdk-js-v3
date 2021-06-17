import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { GetRuleGroupRequest, GetRuleGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetRuleGroupCommandInput extends GetRuleGroupRequest {
}
export interface GetRuleGroupCommandOutput extends GetRuleGroupResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the specified <a>RuleGroup</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, GetRuleGroupCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, GetRuleGroupCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new GetRuleGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRuleGroupCommandInput} for command's `input` shape.
 * @see {@link GetRuleGroupCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetRuleGroupCommand extends $Command<GetRuleGroupCommandInput, GetRuleGroupCommandOutput, WAFV2ClientResolvedConfig> {
    readonly input: GetRuleGroupCommandInput;
    constructor(input: GetRuleGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRuleGroupCommandInput, GetRuleGroupCommandOutput>;
    private serialize;
    private deserialize;
}
