import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { AssociateFileSystemInput, AssociateFileSystemOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateFileSystemCommandInput extends AssociateFileSystemInput {
}
export interface AssociateFileSystemCommandOutput extends AssociateFileSystemOutput, __MetadataBearer {
}
/**
 * <p>Associate an Amazon FSx file system with the Amazon FSx file gateway. After the
 *          association process is complete, the file shares on the Amazon FSx file system are
 *          available for access through the gateway. This operation only supports the Amazon FSx file
 *          gateway type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, AssociateFileSystemCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, AssociateFileSystemCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new AssociateFileSystemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateFileSystemCommandInput} for command's `input` shape.
 * @see {@link AssociateFileSystemCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateFileSystemCommand extends $Command<AssociateFileSystemCommandInput, AssociateFileSystemCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: AssociateFileSystemCommandInput;
    constructor(input: AssociateFileSystemCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateFileSystemCommandInput, AssociateFileSystemCommandOutput>;
    private serialize;
    private deserialize;
}
