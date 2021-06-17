import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateTopicRuleDestinationRequest, CreateTopicRuleDestinationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateTopicRuleDestinationCommandInput extends CreateTopicRuleDestinationRequest {
}
export interface CreateTopicRuleDestinationCommandOutput extends CreateTopicRuleDestinationResponse, __MetadataBearer {
}
/**
 * <p>Creates a topic rule destination. The destination must be confirmed prior to use.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateTopicRuleDestinationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateTopicRuleDestinationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateTopicRuleDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTopicRuleDestinationCommandInput} for command's `input` shape.
 * @see {@link CreateTopicRuleDestinationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateTopicRuleDestinationCommand extends $Command<CreateTopicRuleDestinationCommandInput, CreateTopicRuleDestinationCommandOutput, IoTClientResolvedConfig> {
    readonly input: CreateTopicRuleDestinationCommandInput;
    constructor(input: CreateTopicRuleDestinationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTopicRuleDestinationCommandInput, CreateTopicRuleDestinationCommandOutput>;
    private serialize;
    private deserialize;
}
