import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UntagMFADeviceRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UntagMFADeviceCommandInput extends UntagMFADeviceRequest {
}
export interface UntagMFADeviceCommandOutput extends __MetadataBearer {
}
/**
 * <p>Removes the specified tags from the IAM virtual multi-factor authentication (MFA)
 *       device. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UntagMFADeviceCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UntagMFADeviceCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UntagMFADeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UntagMFADeviceCommandInput} for command's `input` shape.
 * @see {@link UntagMFADeviceCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UntagMFADeviceCommand extends $Command<UntagMFADeviceCommandInput, UntagMFADeviceCommandOutput, IAMClientResolvedConfig> {
    readonly input: UntagMFADeviceCommandInput;
    constructor(input: UntagMFADeviceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UntagMFADeviceCommandInput, UntagMFADeviceCommandOutput>;
    private serialize;
    private deserialize;
}
