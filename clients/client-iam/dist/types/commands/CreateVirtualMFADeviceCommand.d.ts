import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { CreateVirtualMFADeviceRequest, CreateVirtualMFADeviceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateVirtualMFADeviceCommandInput extends CreateVirtualMFADeviceRequest {
}
export interface CreateVirtualMFADeviceCommandOutput extends CreateVirtualMFADeviceResponse, __MetadataBearer {
}
/**
 * <p>Creates a new virtual MFA device for the AWS account. After creating the virtual
 *             MFA, use <a>EnableMFADevice</a> to attach the MFA device to an IAM user.
 *             For more information about creating and working with virtual MFA devices, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Using a virtual MFA
 *                 device</a> in the <i>IAM User Guide</i>.</p>
 *         <p>For information about the maximum number of MFA devices you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS
 *                 quotas</a> in the <i>IAM User Guide</i>.</p>
 *         <important>
 *             <p>The seed information contained in the QR code and the Base32 string should be
 *                 treated like any other secret access information. In other words, protect the seed
 *                 information as you would your AWS access keys or your passwords. After you
 *                 provision your virtual device, you should ensure that the information is destroyed
 *                 following secure procedures.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreateVirtualMFADeviceCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreateVirtualMFADeviceCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new CreateVirtualMFADeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVirtualMFADeviceCommandInput} for command's `input` shape.
 * @see {@link CreateVirtualMFADeviceCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateVirtualMFADeviceCommand extends $Command<CreateVirtualMFADeviceCommandInput, CreateVirtualMFADeviceCommandOutput, IAMClientResolvedConfig> {
    readonly input: CreateVirtualMFADeviceCommandInput;
    constructor(input: CreateVirtualMFADeviceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateVirtualMFADeviceCommandInput, CreateVirtualMFADeviceCommandOutput>;
    private serialize;
    private deserialize;
}
