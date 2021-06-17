import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListTopicRuleDestinationsRequest, ListTopicRuleDestinationsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTopicRuleDestinationsCommandInput extends ListTopicRuleDestinationsRequest {
}
export interface ListTopicRuleDestinationsCommandOutput extends ListTopicRuleDestinationsResponse, __MetadataBearer {
}
/**
 * <p>Lists all the topic rule destinations in your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListTopicRuleDestinationsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListTopicRuleDestinationsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListTopicRuleDestinationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTopicRuleDestinationsCommandInput} for command's `input` shape.
 * @see {@link ListTopicRuleDestinationsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTopicRuleDestinationsCommand extends $Command<ListTopicRuleDestinationsCommandInput, ListTopicRuleDestinationsCommandOutput, IoTClientResolvedConfig> {
    readonly input: ListTopicRuleDestinationsCommandInput;
    constructor(input: ListTopicRuleDestinationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTopicRuleDestinationsCommandInput, ListTopicRuleDestinationsCommandOutput>;
    private serialize;
    private deserialize;
}
