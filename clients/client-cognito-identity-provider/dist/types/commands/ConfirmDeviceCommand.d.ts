import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { ConfirmDeviceRequest, ConfirmDeviceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ConfirmDeviceCommandInput extends ConfirmDeviceRequest {
}
export interface ConfirmDeviceCommandOutput extends ConfirmDeviceResponse, __MetadataBearer {
}
/**
 * <p>Confirms tracking of the device. This API call is the call that begins device
 *             tracking.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, ConfirmDeviceCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, ConfirmDeviceCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new ConfirmDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ConfirmDeviceCommandInput} for command's `input` shape.
 * @see {@link ConfirmDeviceCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ConfirmDeviceCommand extends $Command<ConfirmDeviceCommandInput, ConfirmDeviceCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: ConfirmDeviceCommandInput;
    constructor(input: ConfirmDeviceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ConfirmDeviceCommandInput, ConfirmDeviceCommandOutput>;
    private serialize;
    private deserialize;
}
