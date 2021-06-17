import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { ListAliasesRequest, ListAliasesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAliasesCommandInput extends ListAliasesRequest {
}
export interface ListAliasesCommandOutput extends ListAliasesResponse, __MetadataBearer {
}
/**
 * <p>Gets a list of aliases in the caller's AWS account and region. For more information about
 *       aliases, see <a>CreateAlias</a>.</p>
 *          <p>By default, the <code>ListAliases</code> operation returns all aliases in the account and
 *       region. To get only the aliases associated with a particular customer master key (CMK), use
 *       the <code>KeyId</code> parameter.</p>
 *          <p>The <code>ListAliases</code> response can include aliases that you created and associated
 *       with your customer managed CMKs, and aliases that AWS created and associated with AWS managed
 *       CMKs in your account. You can recognize AWS aliases because their names have the format
 *         <code>aws/<service-name></code>, such as <code>aws/dynamodb</code>.</p>
 *          <p>The response might also include aliases that have no <code>TargetKeyId</code> field. These
 *       are predefined aliases that AWS has created but has not yet associated with a CMK. Aliases
 *       that AWS creates in your account, including predefined aliases, do not count against your
 *         <a href="https://docs.aws.amazon.com/kms/latest/developerguide/limits.html#aliases-limit">AWS KMS aliases
 *         quota</a>.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. <code>ListAliases</code> does not
 *       return aliases in other AWS accounts.</p>
 *
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ListAliases</a> (IAM policy)</p>
 *          <p>For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-alias.html#alias-access">Controlling access to aliases</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateAlias</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteAlias</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateAlias</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, ListAliasesCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, ListAliasesCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new ListAliasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAliasesCommandInput} for command's `input` shape.
 * @see {@link ListAliasesCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAliasesCommand extends $Command<ListAliasesCommandInput, ListAliasesCommandOutput, KMSClientResolvedConfig> {
    readonly input: ListAliasesCommandInput;
    constructor(input: ListAliasesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAliasesCommandInput, ListAliasesCommandOutput>;
    private serialize;
    private deserialize;
}
