import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { DeletePartnerEventSourceRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeletePartnerEventSourceCommandInput extends DeletePartnerEventSourceRequest {
}
export interface DeletePartnerEventSourceCommandOutput extends __MetadataBearer {
}
/**
 * <p>This operation is used by SaaS partners to delete a partner event source. This operation
 *       is not used by AWS customers.</p>
 *          <p>When you delete an event source, the status of the corresponding partner event bus in the
 *       AWS customer account becomes DELETED.</p>
 *          <p></p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, DeletePartnerEventSourceCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, DeletePartnerEventSourceCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new DeletePartnerEventSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePartnerEventSourceCommandInput} for command's `input` shape.
 * @see {@link DeletePartnerEventSourceCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeletePartnerEventSourceCommand extends $Command<DeletePartnerEventSourceCommandInput, DeletePartnerEventSourceCommandOutput, EventBridgeClientResolvedConfig> {
    readonly input: DeletePartnerEventSourceCommandInput;
    constructor(input: DeletePartnerEventSourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EventBridgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePartnerEventSourceCommandInput, DeletePartnerEventSourceCommandOutput>;
    private serialize;
    private deserialize;
}
