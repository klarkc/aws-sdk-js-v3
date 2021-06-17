import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { AddUploadBufferInput, AddUploadBufferOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AddUploadBufferCommandInput extends AddUploadBufferInput {
}
export interface AddUploadBufferCommandOutput extends AddUploadBufferOutput, __MetadataBearer {
}
/**
 * <p>Configures one or more gateway local disks as upload buffer for a specified gateway.
 *          This operation is supported for the stored volume, cached volume, and tape gateway
 *          types.</p>
 *
 *          <p>In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to
 *          add upload buffer, and one or more disk IDs that you want to configure as upload
 *          buffer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, AddUploadBufferCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, AddUploadBufferCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new AddUploadBufferCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddUploadBufferCommandInput} for command's `input` shape.
 * @see {@link AddUploadBufferCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AddUploadBufferCommand extends $Command<AddUploadBufferCommandInput, AddUploadBufferCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: AddUploadBufferCommandInput;
    constructor(input: AddUploadBufferCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddUploadBufferCommandInput, AddUploadBufferCommandOutput>;
    private serialize;
    private deserialize;
}
