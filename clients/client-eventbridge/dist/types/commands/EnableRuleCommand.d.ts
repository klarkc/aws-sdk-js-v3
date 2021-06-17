import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { EnableRuleRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface EnableRuleCommandInput extends EnableRuleRequest {
}
export interface EnableRuleCommandOutput extends __MetadataBearer {
}
/**
 * <p>Enables the specified rule. If the rule does not exist, the operation fails.</p>
 *
 *          <p>When you enable a rule, incoming events might not immediately start matching to a newly
 *       enabled rule. Allow a short period of time for changes to take effect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, EnableRuleCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, EnableRuleCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new EnableRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableRuleCommandInput} for command's `input` shape.
 * @see {@link EnableRuleCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class EnableRuleCommand extends $Command<EnableRuleCommandInput, EnableRuleCommandOutput, EventBridgeClientResolvedConfig> {
    readonly input: EnableRuleCommandInput;
    constructor(input: EnableRuleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EventBridgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableRuleCommandInput, EnableRuleCommandOutput>;
    private serialize;
    private deserialize;
}
