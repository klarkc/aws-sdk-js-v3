import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { RetrieveTapeRecoveryPointInput, RetrieveTapeRecoveryPointOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RetrieveTapeRecoveryPointCommandInput extends RetrieveTapeRecoveryPointInput {
}
export interface RetrieveTapeRecoveryPointCommandOutput extends RetrieveTapeRecoveryPointOutput, __MetadataBearer {
}
/**
 * <p>Retrieves the recovery point for the specified virtual tape. This operation is only
 *          supported in the tape gateway type.</p>
 *
 *          <p>A recovery point is a point in time view of a virtual tape at which all the data on the
 *          tape is consistent. If your gateway crashes, virtual tapes that have recovery points can be
 *          recovered to a new gateway.</p>
 *
 *          <note>
 *             <p>The virtual tape can be retrieved to only one gateway. The retrieved tape is
 *             read-only. The virtual tape can be retrieved to only a tape gateway. There is no charge
 *             for retrieving recovery points.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, RetrieveTapeRecoveryPointCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, RetrieveTapeRecoveryPointCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new RetrieveTapeRecoveryPointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RetrieveTapeRecoveryPointCommandInput} for command's `input` shape.
 * @see {@link RetrieveTapeRecoveryPointCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RetrieveTapeRecoveryPointCommand extends $Command<RetrieveTapeRecoveryPointCommandInput, RetrieveTapeRecoveryPointCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: RetrieveTapeRecoveryPointCommandInput;
    constructor(input: RetrieveTapeRecoveryPointCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RetrieveTapeRecoveryPointCommandInput, RetrieveTapeRecoveryPointCommandOutput>;
    private serialize;
    private deserialize;
}
