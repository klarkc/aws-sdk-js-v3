import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { UpdateFileSystemAssociationInput, UpdateFileSystemAssociationOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateFileSystemAssociationCommandInput extends UpdateFileSystemAssociationInput {
}
export interface UpdateFileSystemAssociationCommandOutput extends UpdateFileSystemAssociationOutput, __MetadataBearer {
}
/**
 * <p>Updates a file system association. This operation is only supported in the Amazon FSx
 *          file gateway type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateFileSystemAssociationCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateFileSystemAssociationCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new UpdateFileSystemAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFileSystemAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdateFileSystemAssociationCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateFileSystemAssociationCommand extends $Command<UpdateFileSystemAssociationCommandInput, UpdateFileSystemAssociationCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: UpdateFileSystemAssociationCommandInput;
    constructor(input: UpdateFileSystemAssociationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateFileSystemAssociationCommandInput, UpdateFileSystemAssociationCommandOutput>;
    private serialize;
    private deserialize;
}
