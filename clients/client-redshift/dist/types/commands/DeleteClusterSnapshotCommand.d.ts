import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DeleteClusterSnapshotMessage, DeleteClusterSnapshotResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteClusterSnapshotCommandInput extends DeleteClusterSnapshotMessage {
}
export interface DeleteClusterSnapshotCommandOutput extends DeleteClusterSnapshotResult, __MetadataBearer {
}
/**
 * <p>Deletes the specified manual snapshot. The snapshot must be in the
 *                 <code>available</code> state, with no other users authorized to access the snapshot. </p>
 *         <p>Unlike automated snapshots, manual snapshots are retained even after you delete
 *             your cluster. Amazon Redshift does not delete your manual snapshots. You must delete manual
 *             snapshot explicitly to avoid getting charged. If other accounts are authorized to access
 *             the snapshot, you must revoke all of the authorizations before you can delete the
 *             snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeleteClusterSnapshotCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeleteClusterSnapshotCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DeleteClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeleteClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteClusterSnapshotCommand extends $Command<DeleteClusterSnapshotCommandInput, DeleteClusterSnapshotCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DeleteClusterSnapshotCommandInput;
    constructor(input: DeleteClusterSnapshotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteClusterSnapshotCommandInput, DeleteClusterSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
