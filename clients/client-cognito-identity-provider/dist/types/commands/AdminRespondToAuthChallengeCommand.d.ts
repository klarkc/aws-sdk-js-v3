import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminRespondToAuthChallengeRequest, AdminRespondToAuthChallengeResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AdminRespondToAuthChallengeCommandInput extends AdminRespondToAuthChallengeRequest {
}
export interface AdminRespondToAuthChallengeCommandOutput extends AdminRespondToAuthChallengeResponse, __MetadataBearer {
}
/**
 * <p>Responds to an authentication challenge, as an administrator.</p>
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminRespondToAuthChallengeCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminRespondToAuthChallengeCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminRespondToAuthChallengeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminRespondToAuthChallengeCommandInput} for command's `input` shape.
 * @see {@link AdminRespondToAuthChallengeCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AdminRespondToAuthChallengeCommand extends $Command<AdminRespondToAuthChallengeCommandInput, AdminRespondToAuthChallengeCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminRespondToAuthChallengeCommandInput;
    constructor(input: AdminRespondToAuthChallengeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminRespondToAuthChallengeCommandInput, AdminRespondToAuthChallengeCommandOutput>;
    private serialize;
    private deserialize;
}
