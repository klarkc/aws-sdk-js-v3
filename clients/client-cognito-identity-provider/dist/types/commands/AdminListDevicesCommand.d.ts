import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminListDevicesRequest, AdminListDevicesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AdminListDevicesCommandInput extends AdminListDevicesRequest {
}
export interface AdminListDevicesCommandOutput extends AdminListDevicesResponse, __MetadataBearer {
}
/**
 * <p>Lists devices, as an administrator.</p>
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminListDevicesCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminListDevicesCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminListDevicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminListDevicesCommandInput} for command's `input` shape.
 * @see {@link AdminListDevicesCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AdminListDevicesCommand extends $Command<AdminListDevicesCommandInput, AdminListDevicesCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminListDevicesCommandInput;
    constructor(input: AdminListDevicesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminListDevicesCommandInput, AdminListDevicesCommandOutput>;
    private serialize;
    private deserialize;
}
