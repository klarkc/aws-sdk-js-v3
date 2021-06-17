import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListTopicRulesRequest, ListTopicRulesResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTopicRulesCommandInput extends ListTopicRulesRequest {
}
export interface ListTopicRulesCommandOutput extends ListTopicRulesResponse, __MetadataBearer {
}
/**
 * <p>Lists the rules for the specific topic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListTopicRulesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListTopicRulesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListTopicRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTopicRulesCommandInput} for command's `input` shape.
 * @see {@link ListTopicRulesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTopicRulesCommand extends $Command<ListTopicRulesCommandInput, ListTopicRulesCommandOutput, IoTClientResolvedConfig> {
    readonly input: ListTopicRulesCommandInput;
    constructor(input: ListTopicRulesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTopicRulesCommandInput, ListTopicRulesCommandOutput>;
    private serialize;
    private deserialize;
}
