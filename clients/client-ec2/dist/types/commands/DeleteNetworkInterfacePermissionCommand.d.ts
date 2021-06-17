import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteNetworkInterfacePermissionRequest, DeleteNetworkInterfacePermissionResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteNetworkInterfacePermissionCommandInput extends DeleteNetworkInterfacePermissionRequest {
}
export interface DeleteNetworkInterfacePermissionCommandOutput extends DeleteNetworkInterfacePermissionResult, __MetadataBearer {
}
/**
 * <p>Deletes a permission for a network interface. By default, you cannot delete the
 * 			permission if the account for which you're removing the permission has attached the
 * 			network interface to an instance. However, you can force delete the permission,
 * 			regardless of any attachment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteNetworkInterfacePermissionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteNetworkInterfacePermissionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteNetworkInterfacePermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNetworkInterfacePermissionCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkInterfacePermissionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteNetworkInterfacePermissionCommand extends $Command<DeleteNetworkInterfacePermissionCommandInput, DeleteNetworkInterfacePermissionCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteNetworkInterfacePermissionCommandInput;
    constructor(input: DeleteNetworkInterfacePermissionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteNetworkInterfacePermissionCommandInput, DeleteNetworkInterfacePermissionCommandOutput>;
    private serialize;
    private deserialize;
}
