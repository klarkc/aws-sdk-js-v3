import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { UnsubscribeFromEventRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UnsubscribeFromEventCommandInput extends UnsubscribeFromEventRequest {
}
export interface UnsubscribeFromEventCommandOutput extends __MetadataBearer {
}
/**
 * <p>Disables the process of sending Amazon Simple Notification Service (SNS)
 *          notifications about a specified event to a specified SNS topic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, UnsubscribeFromEventCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, UnsubscribeFromEventCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new UnsubscribeFromEventCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnsubscribeFromEventCommandInput} for command's `input` shape.
 * @see {@link UnsubscribeFromEventCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UnsubscribeFromEventCommand extends $Command<UnsubscribeFromEventCommandInput, UnsubscribeFromEventCommandOutput, InspectorClientResolvedConfig> {
    readonly input: UnsubscribeFromEventCommandInput;
    constructor(input: UnsubscribeFromEventCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UnsubscribeFromEventCommandInput, UnsubscribeFromEventCommandOutput>;
    private serialize;
    private deserialize;
}
