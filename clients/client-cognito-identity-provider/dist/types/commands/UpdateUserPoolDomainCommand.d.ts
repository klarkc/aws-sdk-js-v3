import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { UpdateUserPoolDomainRequest, UpdateUserPoolDomainResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateUserPoolDomainCommandInput extends UpdateUserPoolDomainRequest {
}
export interface UpdateUserPoolDomainCommandOutput extends UpdateUserPoolDomainResponse, __MetadataBearer {
}
/**
 * <p>Updates the Secure Sockets Layer (SSL) certificate for the custom domain for your user
 *             pool.</p>
 *         <p>You can use this operation to provide the Amazon Resource Name (ARN) of a new
 *             certificate to Amazon Cognito. You cannot use it to change the domain for a user
 *             pool.</p>
 *         <p>A custom domain is used to host the Amazon Cognito hosted UI, which provides sign-up
 *             and sign-in pages for your application. When you set up a custom domain, you provide a
 *             certificate that you manage with AWS Certificate Manager (ACM). When necessary, you can
 *             use this operation to change the certificate that you applied to your custom
 *             domain.</p>
 *         <p>Usually, this is unnecessary following routine certificate renewal with ACM. When you
 *             renew your existing certificate in ACM, the ARN for your certificate remains the same,
 *             and your custom domain uses the new certificate automatically.</p>
 *         <p>However, if you replace your existing certificate with a new one, ACM gives the new
 *             certificate a new ARN. To apply the new certificate to your custom domain, you must
 *             provide this ARN to Amazon Cognito.</p>
 *         <p>When you add your new certificate in ACM, you must choose US East (N. Virginia) as the
 *             AWS Region.</p>
 *         <p>After you submit your request, Amazon Cognito requires up to 1 hour to distribute your
 *             new certificate to your custom domain.</p>
 *         <p>For more information about adding a custom domain to your user pool, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-add-custom-domain.html">Using Your Own Domain for the Hosted UI</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, UpdateUserPoolDomainCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, UpdateUserPoolDomainCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new UpdateUserPoolDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateUserPoolDomainCommandInput} for command's `input` shape.
 * @see {@link UpdateUserPoolDomainCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateUserPoolDomainCommand extends $Command<UpdateUserPoolDomainCommandInput, UpdateUserPoolDomainCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: UpdateUserPoolDomainCommandInput;
    constructor(input: UpdateUserPoolDomainCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateUserPoolDomainCommandInput, UpdateUserPoolDomainCommandOutput>;
    private serialize;
    private deserialize;
}
