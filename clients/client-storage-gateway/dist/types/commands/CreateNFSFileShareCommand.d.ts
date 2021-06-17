import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { CreateNFSFileShareInput, CreateNFSFileShareOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateNFSFileShareCommandInput extends CreateNFSFileShareInput {
}
export interface CreateNFSFileShareCommandOutput extends CreateNFSFileShareOutput, __MetadataBearer {
}
/**
 * <p>Creates a Network File System (NFS) file share on an existing file gateway. In Storage
 *          Gateway, a file share is a file system mount point backed by Amazon S3 cloud storage.
 *          Storage Gateway exposes file shares using an NFS interface. This operation is only
 *          supported for file gateways.</p>
 *
 *          <important>
 *             <p>File gateway requires AWS Security Token Service (AWS STS) to be activated to enable
 *             you to create a file share. Make sure AWS STS is activated in the AWS Region you are
 *             creating your file gateway in. If AWS STS is not activated in the AWS Region, activate
 *             it. For information about how to activate AWS STS, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and
 *                deactivating AWS STS in an AWS Region</a> in the <i>AWS Identity and
 *                Access Management User Guide</i>.</p>
 *
 *             <p>File gateway does not support creating hard or symbolic links on a file share.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, CreateNFSFileShareCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, CreateNFSFileShareCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new CreateNFSFileShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateNFSFileShareCommandInput} for command's `input` shape.
 * @see {@link CreateNFSFileShareCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateNFSFileShareCommand extends $Command<CreateNFSFileShareCommandInput, CreateNFSFileShareCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: CreateNFSFileShareCommandInput;
    constructor(input: CreateNFSFileShareCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateNFSFileShareCommandInput, CreateNFSFileShareCommandOutput>;
    private serialize;
    private deserialize;
}
