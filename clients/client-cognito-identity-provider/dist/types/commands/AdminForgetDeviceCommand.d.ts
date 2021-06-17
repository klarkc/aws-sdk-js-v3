import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminForgetDeviceRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AdminForgetDeviceCommandInput extends AdminForgetDeviceRequest {
}
export interface AdminForgetDeviceCommandOutput extends __MetadataBearer {
}
/**
 * <p>Forgets the device, as an administrator.</p>
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminForgetDeviceCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminForgetDeviceCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminForgetDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminForgetDeviceCommandInput} for command's `input` shape.
 * @see {@link AdminForgetDeviceCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AdminForgetDeviceCommand extends $Command<AdminForgetDeviceCommandInput, AdminForgetDeviceCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminForgetDeviceCommandInput;
    constructor(input: AdminForgetDeviceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminForgetDeviceCommandInput, AdminForgetDeviceCommandOutput>;
    private serialize;
    private deserialize;
}
