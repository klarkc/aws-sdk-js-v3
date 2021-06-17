import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteVirtualMFADeviceRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteVirtualMFADeviceCommandInput extends DeleteVirtualMFADeviceRequest {
}
export interface DeleteVirtualMFADeviceCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a virtual MFA device.</p>
 *         <note>
 *             <p> You must deactivate a user's virtual MFA device before you can delete it. For
 *                 information about deactivating MFA devices, see <a>DeactivateMFADevice</a>. </p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteVirtualMFADeviceCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteVirtualMFADeviceCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteVirtualMFADeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVirtualMFADeviceCommandInput} for command's `input` shape.
 * @see {@link DeleteVirtualMFADeviceCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteVirtualMFADeviceCommand extends $Command<DeleteVirtualMFADeviceCommandInput, DeleteVirtualMFADeviceCommandOutput, IAMClientResolvedConfig> {
    readonly input: DeleteVirtualMFADeviceCommandInput;
    constructor(input: DeleteVirtualMFADeviceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteVirtualMFADeviceCommandInput, DeleteVirtualMFADeviceCommandOutput>;
    private serialize;
    private deserialize;
}
