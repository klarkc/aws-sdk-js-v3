import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteTopicRuleDestinationRequest, DeleteTopicRuleDestinationResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteTopicRuleDestinationCommandInput extends DeleteTopicRuleDestinationRequest {
}
export interface DeleteTopicRuleDestinationCommandOutput extends DeleteTopicRuleDestinationResponse, __MetadataBearer {
}
/**
 * <p>Deletes a topic rule destination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteTopicRuleDestinationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteTopicRuleDestinationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteTopicRuleDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTopicRuleDestinationCommandInput} for command's `input` shape.
 * @see {@link DeleteTopicRuleDestinationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteTopicRuleDestinationCommand extends $Command<DeleteTopicRuleDestinationCommandInput, DeleteTopicRuleDestinationCommandOutput, IoTClientResolvedConfig> {
    readonly input: DeleteTopicRuleDestinationCommandInput;
    constructor(input: DeleteTopicRuleDestinationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTopicRuleDestinationCommandInput, DeleteTopicRuleDestinationCommandOutput>;
    private serialize;
    private deserialize;
}
