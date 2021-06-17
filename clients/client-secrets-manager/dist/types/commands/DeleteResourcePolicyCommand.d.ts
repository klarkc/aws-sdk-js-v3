import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";
import { DeleteResourcePolicyRequest, DeleteResourcePolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteResourcePolicyCommandInput extends DeleteResourcePolicyRequest {
}
export interface DeleteResourcePolicyCommandOutput extends DeleteResourcePolicyResponse, __MetadataBearer {
}
/**
 * <p>Deletes the resource-based permission policy attached to the secret.</p>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>secretsmanager:DeleteResourcePolicy</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Related operations</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>To attach a resource policy to a secret, use <a>PutResourcePolicy</a>.</p>
 *             </li>
 *             <li>
 *                <p>To retrieve the current resource-based policy attached to a secret, use <a>GetResourcePolicy</a>.</p>
 *             </li>
 *             <li>
 *                <p>To list all of the currently available secrets, use <a>ListSecrets</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, DeleteResourcePolicyCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, DeleteResourcePolicyCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * const client = new SecretsManagerClient(config);
 * const command = new DeleteResourcePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteResourcePolicyCommand extends $Command<DeleteResourcePolicyCommandInput, DeleteResourcePolicyCommandOutput, SecretsManagerClientResolvedConfig> {
    readonly input: DeleteResourcePolicyCommandInput;
    constructor(input: DeleteResourcePolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecretsManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteResourcePolicyCommandInput, DeleteResourcePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
