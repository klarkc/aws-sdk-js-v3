import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";
import { GetSecretValueRequest, GetSecretValueResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSecretValueCommandInput extends GetSecretValueRequest {
}
export interface GetSecretValueCommandOutput extends GetSecretValueResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the contents of the encrypted fields <code>SecretString</code> or
 *         <code>SecretBinary</code> from the specified version of a secret, whichever contains
 *       content.</p>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>secretsmanager:GetSecretValue</p>
 *             </li>
 *             <li>
 *                <p>kms:Decrypt - required only if you use a customer-managed AWS KMS key to encrypt the
 *           secret. You do not need this permission to use the account's default AWS managed CMK for
 *           Secrets Manager.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Related operations</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>To create a new version of the secret with different encrypted information, use <a>PutSecretValue</a>.</p>
 *             </li>
 *             <li>
 *                <p>To retrieve the non-encrypted details for the secret, use <a>DescribeSecret</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, GetSecretValueCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, GetSecretValueCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * const client = new SecretsManagerClient(config);
 * const command = new GetSecretValueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSecretValueCommandInput} for command's `input` shape.
 * @see {@link GetSecretValueCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSecretValueCommand extends $Command<GetSecretValueCommandInput, GetSecretValueCommandOutput, SecretsManagerClientResolvedConfig> {
    readonly input: GetSecretValueCommandInput;
    constructor(input: GetSecretValueCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecretsManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSecretValueCommandInput, GetSecretValueCommandOutput>;
    private serialize;
    private deserialize;
}
