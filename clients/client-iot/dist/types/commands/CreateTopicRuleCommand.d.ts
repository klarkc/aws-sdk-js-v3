import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateTopicRuleRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateTopicRuleCommandInput extends CreateTopicRuleRequest {
}
export interface CreateTopicRuleCommandOutput extends __MetadataBearer {
}
/**
 * <p>Creates a rule. Creating rules is an administrator-level action. Any user who has
 *          permission to create rules will be able to access data processed by the rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateTopicRuleCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateTopicRuleCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateTopicRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTopicRuleCommandInput} for command's `input` shape.
 * @see {@link CreateTopicRuleCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateTopicRuleCommand extends $Command<CreateTopicRuleCommandInput, CreateTopicRuleCommandOutput, IoTClientResolvedConfig> {
    readonly input: CreateTopicRuleCommandInput;
    constructor(input: CreateTopicRuleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTopicRuleCommandInput, CreateTopicRuleCommandOutput>;
    private serialize;
    private deserialize;
}
