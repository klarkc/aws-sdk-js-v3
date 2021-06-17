import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeTapeRecoveryPointsInput, DescribeTapeRecoveryPointsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeTapeRecoveryPointsCommandInput extends DescribeTapeRecoveryPointsInput {
}
export interface DescribeTapeRecoveryPointsCommandOutput extends DescribeTapeRecoveryPointsOutput, __MetadataBearer {
}
/**
 * <p>Returns a list of virtual tape recovery points that are available for the specified tape
 *          gateway.</p>
 *
 *          <p>A recovery point is a point-in-time view of a virtual tape at which all the data on the
 *          virtual tape is consistent. If your gateway crashes, virtual tapes that have recovery
 *          points can be recovered to a new gateway. This operation is only supported in the tape
 *          gateway type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeTapeRecoveryPointsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeTapeRecoveryPointsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeTapeRecoveryPointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTapeRecoveryPointsCommandInput} for command's `input` shape.
 * @see {@link DescribeTapeRecoveryPointsCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeTapeRecoveryPointsCommand extends $Command<DescribeTapeRecoveryPointsCommandInput, DescribeTapeRecoveryPointsCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DescribeTapeRecoveryPointsCommandInput;
    constructor(input: DescribeTapeRecoveryPointsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTapeRecoveryPointsCommandInput, DescribeTapeRecoveryPointsCommandOutput>;
    private serialize;
    private deserialize;
}
