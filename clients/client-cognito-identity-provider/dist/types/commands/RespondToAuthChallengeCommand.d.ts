import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { RespondToAuthChallengeRequest, RespondToAuthChallengeResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RespondToAuthChallengeCommandInput extends RespondToAuthChallengeRequest {
}
export interface RespondToAuthChallengeCommandOutput extends RespondToAuthChallengeResponse, __MetadataBearer {
}
/**
 * <p>Responds to the authentication challenge.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, RespondToAuthChallengeCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, RespondToAuthChallengeCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new RespondToAuthChallengeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RespondToAuthChallengeCommandInput} for command's `input` shape.
 * @see {@link RespondToAuthChallengeCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RespondToAuthChallengeCommand extends $Command<RespondToAuthChallengeCommandInput, RespondToAuthChallengeCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: RespondToAuthChallengeCommandInput;
    constructor(input: RespondToAuthChallengeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RespondToAuthChallengeCommandInput, RespondToAuthChallengeCommandOutput>;
    private serialize;
    private deserialize;
}
