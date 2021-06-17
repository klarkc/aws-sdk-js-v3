import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { GetTopicRuleRequest, GetTopicRuleResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetTopicRuleCommandInput extends GetTopicRuleRequest {
}
export interface GetTopicRuleCommandOutput extends GetTopicRuleResponse, __MetadataBearer {
}
/**
 * <p>Gets information about the rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetTopicRuleCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetTopicRuleCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new GetTopicRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTopicRuleCommandInput} for command's `input` shape.
 * @see {@link GetTopicRuleCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetTopicRuleCommand extends $Command<GetTopicRuleCommandInput, GetTopicRuleCommandOutput, IoTClientResolvedConfig> {
    readonly input: GetTopicRuleCommandInput;
    constructor(input: GetTopicRuleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTopicRuleCommandInput, GetTopicRuleCommandOutput>;
    private serialize;
    private deserialize;
}
