import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { CopyClusterSnapshotMessage, CopyClusterSnapshotResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CopyClusterSnapshotCommandInput extends CopyClusterSnapshotMessage {
}
export interface CopyClusterSnapshotCommandOutput extends CopyClusterSnapshotResult, __MetadataBearer {
}
/**
 * <p>Copies the specified automated cluster snapshot to a new manual cluster snapshot.
 *             The source must be an automated snapshot and it must be in the available
 *             state.</p>
 *         <p>When you delete a cluster, Amazon Redshift deletes any automated snapshots of the
 *             cluster. Also, when the retention period of the snapshot expires, Amazon Redshift
 *             automatically deletes it. If you want to keep an automated snapshot for a longer period,
 *             you can make a manual copy of the snapshot. Manual snapshots are retained until you
 *             delete them.</p>
 *         <p>
 * For more information about working with snapshots, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CopyClusterSnapshotCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CopyClusterSnapshotCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new CopyClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopyClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link CopyClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CopyClusterSnapshotCommand extends $Command<CopyClusterSnapshotCommandInput, CopyClusterSnapshotCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: CopyClusterSnapshotCommandInput;
    constructor(input: CopyClusterSnapshotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CopyClusterSnapshotCommandInput, CopyClusterSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
