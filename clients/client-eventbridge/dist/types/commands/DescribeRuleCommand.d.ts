import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { DescribeRuleRequest, DescribeRuleResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeRuleCommandInput extends DescribeRuleRequest {
}
export interface DescribeRuleCommandOutput extends DescribeRuleResponse, __MetadataBearer {
}
/**
 * <p>Describes the specified rule.</p>
 *          <p>DescribeRule does not list the targets of a rule. To see the targets associated with a
 *       rule, use <a>ListTargetsByRule</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, DescribeRuleCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, DescribeRuleCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new DescribeRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRuleCommandInput} for command's `input` shape.
 * @see {@link DescribeRuleCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeRuleCommand extends $Command<DescribeRuleCommandInput, DescribeRuleCommandOutput, EventBridgeClientResolvedConfig> {
    readonly input: DescribeRuleCommandInput;
    constructor(input: DescribeRuleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EventBridgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeRuleCommandInput, DescribeRuleCommandOutput>;
    private serialize;
    private deserialize;
}
