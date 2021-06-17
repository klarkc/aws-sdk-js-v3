import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { DescribeVaultInput, DescribeVaultOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeVaultCommandInput extends DescribeVaultInput {
}
export interface DescribeVaultCommandOutput extends DescribeVaultOutput, __MetadataBearer {
}
/**
 * <p>This operation returns information about a vault, including the vault's Amazon
 *          Resource Name (ARN), the date the vault was created, the number of archives it contains,
 *          and the total size of all the archives in the vault. The number of archives and their total
 *          size are as of the last inventory generation. This means that if you add or remove an
 *          archive from a vault, and then immediately use Describe Vault, the change in contents will
 *          not be immediately reflected. If you want to retrieve the latest inventory of the vault,
 *          use <a>InitiateJob</a>. Amazon S3 Glacier generates vault inventories approximately
 *          daily. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-inventory.html">Downloading a Vault Inventory in
 *             Amazon S3 Glacier</a>. </p>
 *
 *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
 *          Identity and Access Management (IAM) users don't have any permissions by default. You must
 *          grant them explicit permission to perform specific actions. For more information, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
 *             AWS Identity and Access Management (IAM)</a>.</p>
 *          <p>For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/retrieving-vault-info.html">Retrieving Vault Metadata in
 *             Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-get.html">Describe Vault </a> in the
 *             <i>Amazon Glacier Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, DescribeVaultCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, DescribeVaultCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new DescribeVaultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVaultCommandInput} for command's `input` shape.
 * @see {@link DescribeVaultCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeVaultCommand extends $Command<DescribeVaultCommandInput, DescribeVaultCommandOutput, GlacierClientResolvedConfig> {
    readonly input: DescribeVaultCommandInput;
    constructor(input: DescribeVaultCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlacierClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeVaultCommandInput, DescribeVaultCommandOutput>;
    private serialize;
    private deserialize;
}
