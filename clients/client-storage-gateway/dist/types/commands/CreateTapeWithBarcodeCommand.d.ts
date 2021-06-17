import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { CreateTapeWithBarcodeInput, CreateTapeWithBarcodeOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateTapeWithBarcodeCommandInput extends CreateTapeWithBarcodeInput {
}
export interface CreateTapeWithBarcodeCommandOutput extends CreateTapeWithBarcodeOutput, __MetadataBearer {
}
/**
 * <p>Creates a virtual tape by using your own barcode. You write data to the virtual tape and
 *          then archive the tape. A barcode is unique and cannot be reused if it has already been used
 *          on a tape. This applies to barcodes used on deleted tapes. This operation is only supported
 *          in the tape gateway type.</p>
 *
 *          <note>
 *             <p>Cache storage must be allocated to the gateway before you can create a virtual tape.
 *             Use the <a>AddCache</a> operation to add cache storage to a gateway.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, CreateTapeWithBarcodeCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, CreateTapeWithBarcodeCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new CreateTapeWithBarcodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTapeWithBarcodeCommandInput} for command's `input` shape.
 * @see {@link CreateTapeWithBarcodeCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateTapeWithBarcodeCommand extends $Command<CreateTapeWithBarcodeCommandInput, CreateTapeWithBarcodeCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: CreateTapeWithBarcodeCommandInput;
    constructor(input: CreateTapeWithBarcodeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTapeWithBarcodeCommandInput, CreateTapeWithBarcodeCommandOutput>;
    private serialize;
    private deserialize;
}
