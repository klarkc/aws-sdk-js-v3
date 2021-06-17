import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { UpdateDeviceStatusRequest, UpdateDeviceStatusResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateDeviceStatusCommandInput extends UpdateDeviceStatusRequest {
}
export interface UpdateDeviceStatusCommandOutput extends UpdateDeviceStatusResponse, __MetadataBearer {
}
/**
 * <p>Updates the device status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, UpdateDeviceStatusCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, UpdateDeviceStatusCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new UpdateDeviceStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDeviceStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateDeviceStatusCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDeviceStatusCommand extends $Command<UpdateDeviceStatusCommandInput, UpdateDeviceStatusCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: UpdateDeviceStatusCommandInput;
    constructor(input: UpdateDeviceStatusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDeviceStatusCommandInput, UpdateDeviceStatusCommandOutput>;
    private serialize;
    private deserialize;
}
