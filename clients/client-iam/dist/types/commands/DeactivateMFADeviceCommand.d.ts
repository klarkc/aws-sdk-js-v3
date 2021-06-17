import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeactivateMFADeviceRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeactivateMFADeviceCommandInput extends DeactivateMFADeviceRequest {
}
export interface DeactivateMFADeviceCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deactivates the specified MFA device and removes it from association with the user
 *             name for which it was originally enabled.</p>
 *         <p>For more information about creating and working with virtual MFA devices, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Enabling a virtual
 *                 multi-factor authentication (MFA) device</a> in the
 *                 <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeactivateMFADeviceCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeactivateMFADeviceCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeactivateMFADeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeactivateMFADeviceCommandInput} for command's `input` shape.
 * @see {@link DeactivateMFADeviceCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeactivateMFADeviceCommand extends $Command<DeactivateMFADeviceCommandInput, DeactivateMFADeviceCommandOutput, IAMClientResolvedConfig> {
    readonly input: DeactivateMFADeviceCommandInput;
    constructor(input: DeactivateMFADeviceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeactivateMFADeviceCommandInput, DeactivateMFADeviceCommandOutput>;
    private serialize;
    private deserialize;
}
