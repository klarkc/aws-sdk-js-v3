import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ReplaceTopicRuleRequest } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ReplaceTopicRuleCommandInput extends ReplaceTopicRuleRequest {
}
export interface ReplaceTopicRuleCommandOutput extends __MetadataBearer {
}
/**
 * <p>Replaces the rule. You must specify all parameters for the new rule. Creating rules
 *          is an administrator-level action. Any user who has permission to create rules will be able
 *          to access data processed by the rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ReplaceTopicRuleCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ReplaceTopicRuleCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ReplaceTopicRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReplaceTopicRuleCommandInput} for command's `input` shape.
 * @see {@link ReplaceTopicRuleCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ReplaceTopicRuleCommand extends $Command<ReplaceTopicRuleCommandInput, ReplaceTopicRuleCommandOutput, IoTClientResolvedConfig> {
    readonly input: ReplaceTopicRuleCommandInput;
    constructor(input: ReplaceTopicRuleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ReplaceTopicRuleCommandInput, ReplaceTopicRuleCommandOutput>;
    private serialize;
    private deserialize;
}
