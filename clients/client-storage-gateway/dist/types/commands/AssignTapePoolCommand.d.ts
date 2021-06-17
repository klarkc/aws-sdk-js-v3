import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { AssignTapePoolInput, AssignTapePoolOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssignTapePoolCommandInput extends AssignTapePoolInput {
}
export interface AssignTapePoolCommandOutput extends AssignTapePoolOutput, __MetadataBearer {
}
/**
 * <p>Assigns a tape to a tape pool for archiving. The tape assigned to a pool is archived in
 *          the S3 storage class that is associated with the pool. When you use your backup application
 *          to eject the tape, the tape is archived directly into the S3 storage class (S3 Glacier or
 *          S3 Glacier Deep Archive) that corresponds to the pool.</p>
 *
 *          <p>Valid Values: <code>GLACIER</code> | <code>DEEP_ARCHIVE</code>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, AssignTapePoolCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, AssignTapePoolCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new AssignTapePoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssignTapePoolCommandInput} for command's `input` shape.
 * @see {@link AssignTapePoolCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssignTapePoolCommand extends $Command<AssignTapePoolCommandInput, AssignTapePoolCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: AssignTapePoolCommandInput;
    constructor(input: AssignTapePoolCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssignTapePoolCommandInput, AssignTapePoolCommandOutput>;
    private serialize;
    private deserialize;
}
