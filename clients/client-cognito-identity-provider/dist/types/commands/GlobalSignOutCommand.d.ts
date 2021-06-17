import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { GlobalSignOutRequest, GlobalSignOutResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GlobalSignOutCommandInput extends GlobalSignOutRequest {
}
export interface GlobalSignOutCommandOutput extends GlobalSignOutResponse, __MetadataBearer {
}
/**
 * <p>Signs out users from all devices. It also invalidates all refresh tokens issued to a
 *             user. The user's current access and Id tokens remain valid until their expiry. Access
 *             and Id tokens expire one hour after they are issued.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, GlobalSignOutCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, GlobalSignOutCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new GlobalSignOutCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GlobalSignOutCommandInput} for command's `input` shape.
 * @see {@link GlobalSignOutCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GlobalSignOutCommand extends $Command<GlobalSignOutCommandInput, GlobalSignOutCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: GlobalSignOutCommandInput;
    constructor(input: GlobalSignOutCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GlobalSignOutCommandInput, GlobalSignOutCommandOutput>;
    private serialize;
    private deserialize;
}
