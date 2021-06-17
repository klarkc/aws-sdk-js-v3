import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { RetrieveTapeArchiveInput, RetrieveTapeArchiveOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RetrieveTapeArchiveCommandInput extends RetrieveTapeArchiveInput {
}
export interface RetrieveTapeArchiveCommandOutput extends RetrieveTapeArchiveOutput, __MetadataBearer {
}
/**
 * <p>Retrieves an archived virtual tape from the virtual tape shelf (VTS) to a tape gateway.
 *          Virtual tapes archived in the VTS are not associated with any gateway. However after a tape
 *          is retrieved, it is associated with a gateway, even though it is also listed in the VTS,
 *          that is, archive. This operation is only supported in the tape gateway type.</p>
 *
 *          <p>Once a tape is successfully retrieved to a gateway, it cannot be retrieved again to
 *          another gateway. You must archive the tape again before you can retrieve it to another
 *          gateway. This operation is only supported in the tape gateway type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, RetrieveTapeArchiveCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, RetrieveTapeArchiveCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new RetrieveTapeArchiveCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RetrieveTapeArchiveCommandInput} for command's `input` shape.
 * @see {@link RetrieveTapeArchiveCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RetrieveTapeArchiveCommand extends $Command<RetrieveTapeArchiveCommandInput, RetrieveTapeArchiveCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: RetrieveTapeArchiveCommandInput;
    constructor(input: RetrieveTapeArchiveCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RetrieveTapeArchiveCommandInput, RetrieveTapeArchiveCommandOutput>;
    private serialize;
    private deserialize;
}
