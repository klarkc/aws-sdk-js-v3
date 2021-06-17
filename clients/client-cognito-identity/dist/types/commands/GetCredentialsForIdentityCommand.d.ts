import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { GetCredentialsForIdentityInput, GetCredentialsForIdentityResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetCredentialsForIdentityCommandInput extends GetCredentialsForIdentityInput {
}
export interface GetCredentialsForIdentityCommandOutput extends GetCredentialsForIdentityResponse, __MetadataBearer {
}
/**
 * <p>Returns credentials for the provided identity ID. Any provided logins will be
 *          validated against supported login providers. If the token is for
 *          cognito-identity.amazonaws.com, it will be passed through to AWS Security Token Service
 *          with the appropriate role for the token.</p>
 *          <p>This is a public API. You do not need any credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, GetCredentialsForIdentityCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, GetCredentialsForIdentityCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const command = new GetCredentialsForIdentityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCredentialsForIdentityCommandInput} for command's `input` shape.
 * @see {@link GetCredentialsForIdentityCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetCredentialsForIdentityCommand extends $Command<GetCredentialsForIdentityCommandInput, GetCredentialsForIdentityCommandOutput, CognitoIdentityClientResolvedConfig> {
    readonly input: GetCredentialsForIdentityCommandInput;
    constructor(input: GetCredentialsForIdentityCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCredentialsForIdentityCommandInput, GetCredentialsForIdentityCommandOutput>;
    private serialize;
    private deserialize;
}
