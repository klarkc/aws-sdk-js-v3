import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DisableTopicRuleRequest } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisableTopicRuleCommandInput extends DisableTopicRuleRequest {
}
export interface DisableTopicRuleCommandOutput extends __MetadataBearer {
}
/**
 * <p>Disables the rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DisableTopicRuleCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DisableTopicRuleCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DisableTopicRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableTopicRuleCommandInput} for command's `input` shape.
 * @see {@link DisableTopicRuleCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisableTopicRuleCommand extends $Command<DisableTopicRuleCommandInput, DisableTopicRuleCommandOutput, IoTClientResolvedConfig> {
    readonly input: DisableTopicRuleCommandInput;
    constructor(input: DisableTopicRuleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableTopicRuleCommandInput, DisableTopicRuleCommandOutput>;
    private serialize;
    private deserialize;
}
