import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { EnableMFADeviceRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface EnableMFADeviceCommandInput extends EnableMFADeviceRequest {
}
export interface EnableMFADeviceCommandOutput extends __MetadataBearer {
}
/**
 * <p>Enables the specified MFA device and associates it with the specified IAM user. When
 *             enabled, the MFA device is required for every subsequent login by the IAM user
 *             associated with the device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, EnableMFADeviceCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, EnableMFADeviceCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new EnableMFADeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableMFADeviceCommandInput} for command's `input` shape.
 * @see {@link EnableMFADeviceCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class EnableMFADeviceCommand extends $Command<EnableMFADeviceCommandInput, EnableMFADeviceCommandOutput, IAMClientResolvedConfig> {
    readonly input: EnableMFADeviceCommandInput;
    constructor(input: EnableMFADeviceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableMFADeviceCommandInput, EnableMFADeviceCommandOutput>;
    private serialize;
    private deserialize;
}
