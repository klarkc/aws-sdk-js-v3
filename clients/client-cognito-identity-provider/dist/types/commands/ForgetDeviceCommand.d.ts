import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { ForgetDeviceRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ForgetDeviceCommandInput extends ForgetDeviceRequest {
}
export interface ForgetDeviceCommandOutput extends __MetadataBearer {
}
/**
 * <p>Forgets the specified device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, ForgetDeviceCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, ForgetDeviceCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new ForgetDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ForgetDeviceCommandInput} for command's `input` shape.
 * @see {@link ForgetDeviceCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ForgetDeviceCommand extends $Command<ForgetDeviceCommandInput, ForgetDeviceCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: ForgetDeviceCommandInput;
    constructor(input: ForgetDeviceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ForgetDeviceCommandInput, ForgetDeviceCommandOutput>;
    private serialize;
    private deserialize;
}
