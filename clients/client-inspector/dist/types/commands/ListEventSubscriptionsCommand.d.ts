import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { ListEventSubscriptionsRequest, ListEventSubscriptionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListEventSubscriptionsCommandInput extends ListEventSubscriptionsRequest {
}
export interface ListEventSubscriptionsCommandOutput extends ListEventSubscriptionsResponse, __MetadataBearer {
}
/**
 * <p>Lists all the event subscriptions for the assessment template that is specified by
 *          the ARN of the assessment template. For more information, see <a>SubscribeToEvent</a> and <a>UnsubscribeFromEvent</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, ListEventSubscriptionsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, ListEventSubscriptionsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new ListEventSubscriptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEventSubscriptionsCommandInput} for command's `input` shape.
 * @see {@link ListEventSubscriptionsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListEventSubscriptionsCommand extends $Command<ListEventSubscriptionsCommandInput, ListEventSubscriptionsCommandOutput, InspectorClientResolvedConfig> {
    readonly input: ListEventSubscriptionsCommandInput;
    constructor(input: ListEventSubscriptionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListEventSubscriptionsCommandInput, ListEventSubscriptionsCommandOutput>;
    private serialize;
    private deserialize;
}
