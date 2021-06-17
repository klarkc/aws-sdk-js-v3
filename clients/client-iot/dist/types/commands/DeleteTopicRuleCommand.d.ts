import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteTopicRuleRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteTopicRuleCommandInput extends DeleteTopicRuleRequest {
}
export interface DeleteTopicRuleCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteTopicRuleCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteTopicRuleCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteTopicRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTopicRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteTopicRuleCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteTopicRuleCommand extends $Command<DeleteTopicRuleCommandInput, DeleteTopicRuleCommandOutput, IoTClientResolvedConfig> {
    readonly input: DeleteTopicRuleCommandInput;
    constructor(input: DeleteTopicRuleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTopicRuleCommandInput, DeleteTopicRuleCommandOutput>;
    private serialize;
    private deserialize;
}
