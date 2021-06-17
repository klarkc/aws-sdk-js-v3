import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { ListRulesRequest, ListRulesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListRulesCommandInput extends ListRulesRequest {
}
export interface ListRulesCommandOutput extends ListRulesResponse, __MetadataBearer {
}
/**
 * <p>Lists your Amazon EventBridge rules. You can either list all the rules or you can provide
 *       a prefix to match to the rule names.</p>
 *
 *          <p>ListRules does not list the targets of a rule. To see the targets associated with a rule,
 *       use <a>ListTargetsByRule</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, ListRulesCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, ListRulesCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new ListRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRulesCommandInput} for command's `input` shape.
 * @see {@link ListRulesCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListRulesCommand extends $Command<ListRulesCommandInput, ListRulesCommandOutput, EventBridgeClientResolvedConfig> {
    readonly input: ListRulesCommandInput;
    constructor(input: ListRulesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EventBridgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRulesCommandInput, ListRulesCommandOutput>;
    private serialize;
    private deserialize;
}
