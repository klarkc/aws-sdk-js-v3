import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { EnableTopicRuleRequest } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface EnableTopicRuleCommandInput extends EnableTopicRuleRequest {
}
export interface EnableTopicRuleCommandOutput extends __MetadataBearer {
}
/**
 * <p>Enables the rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, EnableTopicRuleCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, EnableTopicRuleCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new EnableTopicRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableTopicRuleCommandInput} for command's `input` shape.
 * @see {@link EnableTopicRuleCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class EnableTopicRuleCommand extends $Command<EnableTopicRuleCommandInput, EnableTopicRuleCommandOutput, IoTClientResolvedConfig> {
    readonly input: EnableTopicRuleCommandInput;
    constructor(input: EnableTopicRuleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableTopicRuleCommandInput, EnableTopicRuleCommandOutput>;
    private serialize;
    private deserialize;
}
