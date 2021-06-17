import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { ListRuleNamesByTargetRequest, ListRuleNamesByTargetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListRuleNamesByTargetCommandInput extends ListRuleNamesByTargetRequest {
}
export interface ListRuleNamesByTargetCommandOutput extends ListRuleNamesByTargetResponse, __MetadataBearer {
}
/**
 * <p>Lists the rules for the specified target. You can see which of the rules in Amazon
 *       EventBridge can invoke a specific target in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, ListRuleNamesByTargetCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, ListRuleNamesByTargetCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new ListRuleNamesByTargetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRuleNamesByTargetCommandInput} for command's `input` shape.
 * @see {@link ListRuleNamesByTargetCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListRuleNamesByTargetCommand extends $Command<ListRuleNamesByTargetCommandInput, ListRuleNamesByTargetCommandOutput, EventBridgeClientResolvedConfig> {
    readonly input: ListRuleNamesByTargetCommandInput;
    constructor(input: ListRuleNamesByTargetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EventBridgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRuleNamesByTargetCommandInput, ListRuleNamesByTargetCommandOutput>;
    private serialize;
    private deserialize;
}
