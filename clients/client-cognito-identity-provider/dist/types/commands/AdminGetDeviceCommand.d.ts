import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminGetDeviceRequest, AdminGetDeviceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AdminGetDeviceCommandInput extends AdminGetDeviceRequest {
}
export interface AdminGetDeviceCommandOutput extends AdminGetDeviceResponse, __MetadataBearer {
}
/**
 * <p>Gets the device, as an administrator.</p>
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminGetDeviceCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminGetDeviceCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminGetDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminGetDeviceCommandInput} for command's `input` shape.
 * @see {@link AdminGetDeviceCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AdminGetDeviceCommand extends $Command<AdminGetDeviceCommandInput, AdminGetDeviceCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminGetDeviceCommandInput;
    constructor(input: AdminGetDeviceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminGetDeviceCommandInput, AdminGetDeviceCommandOutput>;
    private serialize;
    private deserialize;
}
