import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";
import { ListSecretsRequest, ListSecretsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListSecretsCommandInput extends ListSecretsRequest {
}
export interface ListSecretsCommandOutput extends ListSecretsResponse, __MetadataBearer {
}
/**
 * <p>Lists all of the secrets that are stored by Secrets Manager in the AWS account. To list the
 *       versions currently stored for a specific secret, use <a>ListSecretVersionIds</a>.
 *       The encrypted fields <code>SecretString</code> and <code>SecretBinary</code> are not included
 *       in the output. To get that information, call the <a>GetSecretValue</a>
 *       operation.</p>
 *          <note>
 *             <p>Always check the <code>NextToken</code> response parameter
 *     when calling any of the <code>List*</code> operations. These operations can occasionally return
 *     an empty or shorter than expected list of results even when there more results become available.
 *     When this happens, the <code>NextToken</code> response parameter contains a value to pass to the
 *     next call to the same API to request the next part of the list.</p>
 *          </note>
 *          <p>
 *             <b>Minimum
 *         permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>secretsmanager:ListSecrets</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Related operations</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>To list the versions attached to a secret, use <a>ListSecretVersionIds</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, ListSecretsCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, ListSecretsCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * const client = new SecretsManagerClient(config);
 * const command = new ListSecretsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSecretsCommandInput} for command's `input` shape.
 * @see {@link ListSecretsCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListSecretsCommand extends $Command<ListSecretsCommandInput, ListSecretsCommandOutput, SecretsManagerClientResolvedConfig> {
    readonly input: ListSecretsCommandInput;
    constructor(input: ListSecretsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecretsManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSecretsCommandInput, ListSecretsCommandOutput>;
    private serialize;
    private deserialize;
}
