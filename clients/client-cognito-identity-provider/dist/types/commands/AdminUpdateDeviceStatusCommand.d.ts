import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminUpdateDeviceStatusRequest, AdminUpdateDeviceStatusResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AdminUpdateDeviceStatusCommandInput extends AdminUpdateDeviceStatusRequest {
}
export interface AdminUpdateDeviceStatusCommandOutput extends AdminUpdateDeviceStatusResponse, __MetadataBearer {
}
/**
 * <p>Updates the device status as an administrator.</p>
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminUpdateDeviceStatusCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminUpdateDeviceStatusCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminUpdateDeviceStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminUpdateDeviceStatusCommandInput} for command's `input` shape.
 * @see {@link AdminUpdateDeviceStatusCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AdminUpdateDeviceStatusCommand extends $Command<AdminUpdateDeviceStatusCommandInput, AdminUpdateDeviceStatusCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminUpdateDeviceStatusCommandInput;
    constructor(input: AdminUpdateDeviceStatusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminUpdateDeviceStatusCommandInput, AdminUpdateDeviceStatusCommandOutput>;
    private serialize;
    private deserialize;
}
