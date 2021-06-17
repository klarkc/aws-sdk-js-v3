import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { CopyDBSnapshotMessage, CopyDBSnapshotResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CopyDBSnapshotCommandInput extends CopyDBSnapshotMessage {
}
export interface CopyDBSnapshotCommandOutput extends CopyDBSnapshotResult, __MetadataBearer {
}
/**
 * <p>Copies the specified DB snapshot. The source DB snapshot must be in the <code>available</code> state.</p>
 *
 *         <p>You can copy a snapshot from one AWS Region to another. In that case, the AWS Region
 *             where you call the <code>CopyDBSnapshot</code> action is the destination AWS Region for the
 *             DB snapshot copy. </p>
 *
 *         <p>For more information about copying snapshots, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CopySnapshot.html#USER_CopyDBSnapshot">Copying a DB Snapshot</a> in the <i>Amazon RDS User Guide.</i>
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CopyDBSnapshotCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CopyDBSnapshotCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CopyDBSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopyDBSnapshotCommandInput} for command's `input` shape.
 * @see {@link CopyDBSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CopyDBSnapshotCommand extends $Command<CopyDBSnapshotCommandInput, CopyDBSnapshotCommandOutput, RDSClientResolvedConfig> {
    readonly input: CopyDBSnapshotCommandInput;
    constructor(input: CopyDBSnapshotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CopyDBSnapshotCommandInput, CopyDBSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
