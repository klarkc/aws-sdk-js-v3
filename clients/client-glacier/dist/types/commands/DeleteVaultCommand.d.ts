import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { DeleteVaultInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteVaultCommandInput extends DeleteVaultInput {
}
export interface DeleteVaultCommandOutput extends __MetadataBearer {
}
/**
 * <p>This operation deletes a vault. Amazon S3 Glacier will delete a vault only if there are
 *          no archives in the vault as of the last inventory and there have been no writes to the
 *          vault since the last inventory. If either of these conditions is not satisfied, the vault
 *          deletion fails (that is, the vault is not removed) and Amazon S3 Glacier returns an error. You
 *          can use <a>DescribeVault</a> to return the number of archives in a vault, and
 *          you can use <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-initiate-job-post.html">Initiate a Job (POST
 *             jobs)</a> to initiate a new inventory retrieval for a vault. The inventory contains
 *          the archive IDs you use to delete archives using <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-delete.html">Delete Archive (DELETE
 *             archive)</a>.</p>
 *
 *          <p>This operation is idempotent.</p>
 *
 *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
 *          Identity and Access Management (IAM) users don't have any permissions by default. You must
 *          grant them explicit permission to perform specific actions. For more information, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
 *             AWS Identity and Access Management (IAM)</a>.</p>
 *          <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/deleting-vaults.html">Deleting a Vault in Amazon
 *             Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-delete.html">Delete Vault </a> in the
 *             <i>Amazon S3 Glacier Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, DeleteVaultCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, DeleteVaultCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new DeleteVaultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVaultCommandInput} for command's `input` shape.
 * @see {@link DeleteVaultCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteVaultCommand extends $Command<DeleteVaultCommandInput, DeleteVaultCommandOutput, GlacierClientResolvedConfig> {
    readonly input: DeleteVaultCommandInput;
    constructor(input: DeleteVaultCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlacierClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteVaultCommandInput, DeleteVaultCommandOutput>;
    private serialize;
    private deserialize;
}
