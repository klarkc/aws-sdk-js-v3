import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ConfirmTopicRuleDestinationRequest, ConfirmTopicRuleDestinationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ConfirmTopicRuleDestinationCommandInput extends ConfirmTopicRuleDestinationRequest {
}
export interface ConfirmTopicRuleDestinationCommandOutput extends ConfirmTopicRuleDestinationResponse, __MetadataBearer {
}
/**
 * <p>Confirms a topic rule destination. When you create a rule requiring a destination, AWS
 *          IoT sends a confirmation message to the endpoint or base address you specify. The message
 *          includes a token which you pass back when calling <code>ConfirmTopicRuleDestination</code>
 *          to confirm that you own or have access to the endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ConfirmTopicRuleDestinationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ConfirmTopicRuleDestinationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ConfirmTopicRuleDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ConfirmTopicRuleDestinationCommandInput} for command's `input` shape.
 * @see {@link ConfirmTopicRuleDestinationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ConfirmTopicRuleDestinationCommand extends $Command<ConfirmTopicRuleDestinationCommandInput, ConfirmTopicRuleDestinationCommandOutput, IoTClientResolvedConfig> {
    readonly input: ConfirmTopicRuleDestinationCommandInput;
    constructor(input: ConfirmTopicRuleDestinationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ConfirmTopicRuleDestinationCommandInput, ConfirmTopicRuleDestinationCommandOutput>;
    private serialize;
    private deserialize;
}
