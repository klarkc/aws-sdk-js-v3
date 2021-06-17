import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { GetAuthorizationTokenRequest, GetAuthorizationTokenResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetAuthorizationTokenCommandInput extends GetAuthorizationTokenRequest {
}
export interface GetAuthorizationTokenCommandOutput extends GetAuthorizationTokenResponse, __MetadataBearer {
}
/**
 * <p>Retrieves an authorization token. An authorization token represents your IAM
 *             authentication credentials and can be used to access any Amazon ECR registry that your IAM
 *             principal has access to. The authorization token is valid for 12 hours.</p>
 *         <p>The <code>authorizationToken</code> returned is a base64 encoded string that can be
 *             decoded and used in a <code>docker login</code> command to authenticate to a registry.
 *             The AWS CLI offers an <code>get-login-password</code> command that simplifies the login
 *             process. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html#registry_auth">Registry
 *                 Authentication</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, GetAuthorizationTokenCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, GetAuthorizationTokenCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new GetAuthorizationTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAuthorizationTokenCommandInput} for command's `input` shape.
 * @see {@link GetAuthorizationTokenCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAuthorizationTokenCommand extends $Command<GetAuthorizationTokenCommandInput, GetAuthorizationTokenCommandOutput, ECRClientResolvedConfig> {
    readonly input: GetAuthorizationTokenCommandInput;
    constructor(input: GetAuthorizationTokenCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAuthorizationTokenCommandInput, GetAuthorizationTokenCommandOutput>;
    private serialize;
    private deserialize;
}
