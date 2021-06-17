import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";
import { UpdateSecretVersionStageRequest, UpdateSecretVersionStageResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateSecretVersionStageCommandInput extends UpdateSecretVersionStageRequest {
}
export interface UpdateSecretVersionStageCommandOutput extends UpdateSecretVersionStageResponse, __MetadataBearer {
}
/**
 * <p>Modifies the staging labels attached to a version of a secret. Staging labels are used to
 *       track a version as it progresses through the secret rotation process. You can attach a staging
 *       label to only one version of a secret at a time. If a staging label to be added is already
 *       attached to another version, then it is moved--removed from the other version first and
 *       then attached to this one. For more information about staging labels, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/terms-concepts.html#term_staging-label">Staging
 *         Labels</a> in the <i>AWS Secrets Manager User Guide</i>. </p>
 *          <p>The staging labels that you specify in the <code>VersionStage</code> parameter are added
 *       to the existing list of staging labels--they don't replace it.</p>
 *          <p>You can move the <code>AWSCURRENT</code> staging label to this version by including it in this
 *       call.</p>
 *          <note>
 *             <p>Whenever you move <code>AWSCURRENT</code>, Secrets Manager automatically moves the label <code>AWSPREVIOUS</code>
 *         to the version that <code>AWSCURRENT</code> was removed from.</p>
 *          </note>
 *          <p>If this action results in the last label being removed from a version, then the version is
 *       considered to be 'deprecated' and can be deleted by Secrets Manager.</p>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>secretsmanager:UpdateSecretVersionStage</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Related operations</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>To get the list of staging labels that are currently associated with a version of a
 *           secret, use <code>
 *                      <a>DescribeSecret</a>
 *                   </code> and examine the
 *             <code>SecretVersionsToStages</code> response value. </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, UpdateSecretVersionStageCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, UpdateSecretVersionStageCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * const client = new SecretsManagerClient(config);
 * const command = new UpdateSecretVersionStageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSecretVersionStageCommandInput} for command's `input` shape.
 * @see {@link UpdateSecretVersionStageCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateSecretVersionStageCommand extends $Command<UpdateSecretVersionStageCommandInput, UpdateSecretVersionStageCommandOutput, SecretsManagerClientResolvedConfig> {
    readonly input: UpdateSecretVersionStageCommandInput;
    constructor(input: UpdateSecretVersionStageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecretsManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateSecretVersionStageCommandInput, UpdateSecretVersionStageCommandOutput>;
    private serialize;
    private deserialize;
}
