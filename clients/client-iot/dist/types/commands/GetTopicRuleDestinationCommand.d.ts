import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { GetTopicRuleDestinationRequest, GetTopicRuleDestinationResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetTopicRuleDestinationCommandInput extends GetTopicRuleDestinationRequest {
}
export interface GetTopicRuleDestinationCommandOutput extends GetTopicRuleDestinationResponse, __MetadataBearer {
}
/**
 * <p>Gets information about a topic rule destination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetTopicRuleDestinationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetTopicRuleDestinationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new GetTopicRuleDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTopicRuleDestinationCommandInput} for command's `input` shape.
 * @see {@link GetTopicRuleDestinationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetTopicRuleDestinationCommand extends $Command<GetTopicRuleDestinationCommandInput, GetTopicRuleDestinationCommandOutput, IoTClientResolvedConfig> {
    readonly input: GetTopicRuleDestinationCommandInput;
    constructor(input: GetTopicRuleDestinationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTopicRuleDestinationCommandInput, GetTopicRuleDestinationCommandOutput>;
    private serialize;
    private deserialize;
}
