import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DisassociateFileSystemInput, DisassociateFileSystemOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateFileSystemCommandInput extends DisassociateFileSystemInput {
}
export interface DisassociateFileSystemCommandOutput extends DisassociateFileSystemOutput, __MetadataBearer {
}
/**
 * <p>Disassociates an Amazon FSx file system from the specified gateway. After the
 *          disassociation process finishes, the gateway can no longer access the Amazon FSx file
 *          system. This operation is only supported in the Amazon FSx file gateway type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DisassociateFileSystemCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DisassociateFileSystemCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DisassociateFileSystemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateFileSystemCommandInput} for command's `input` shape.
 * @see {@link DisassociateFileSystemCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateFileSystemCommand extends $Command<DisassociateFileSystemCommandInput, DisassociateFileSystemCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DisassociateFileSystemCommandInput;
    constructor(input: DisassociateFileSystemCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateFileSystemCommandInput, DisassociateFileSystemCommandOutput>;
    private serialize;
    private deserialize;
}
