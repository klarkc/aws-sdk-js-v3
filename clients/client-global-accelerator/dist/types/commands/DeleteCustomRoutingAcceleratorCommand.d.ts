import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { DeleteCustomRoutingAcceleratorRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteCustomRoutingAcceleratorCommandInput extends DeleteCustomRoutingAcceleratorRequest {
}
export interface DeleteCustomRoutingAcceleratorCommandOutput extends __MetadataBearer {
}
/**
 * <p>Delete a custom routing accelerator. Before you can delete an accelerator, you must disable it and remove all dependent resources
 * 		(listeners and endpoint groups). To disable the accelerator, update the accelerator to set <code>Enabled</code> to false.</p>
 * 	        <important>
 *             <p>When you create a custom routing accelerator, by default, Global Accelerator provides you with a set of two static IP addresses.
 * 	</p>
 * 		          <p>The IP
 * 			addresses are assigned to your accelerator for as long as it exists, even if you disable the accelerator and
 * 			it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the
 * 			static IP addresses that are assigned to the accelerator, so you can no longer route traffic by using them.
 * 			As a best practice, ensure that you have permissions in place to avoid inadvertently deleting accelerators. You
 * 			can use IAM policies with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information,
 * 			see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/auth-and-access-control.html">Authentication and Access Control</a> in
 * 			the <i>AWS Global Accelerator Developer Guide</i>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DeleteCustomRoutingAcceleratorCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DeleteCustomRoutingAcceleratorCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new DeleteCustomRoutingAcceleratorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCustomRoutingAcceleratorCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomRoutingAcceleratorCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteCustomRoutingAcceleratorCommand extends $Command<DeleteCustomRoutingAcceleratorCommandInput, DeleteCustomRoutingAcceleratorCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: DeleteCustomRoutingAcceleratorCommandInput;
    constructor(input: DeleteCustomRoutingAcceleratorCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCustomRoutingAcceleratorCommandInput, DeleteCustomRoutingAcceleratorCommandOutput>;
    private serialize;
    private deserialize;
}
