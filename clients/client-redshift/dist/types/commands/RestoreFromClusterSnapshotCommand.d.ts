import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { RestoreFromClusterSnapshotMessage, RestoreFromClusterSnapshotResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RestoreFromClusterSnapshotCommandInput extends RestoreFromClusterSnapshotMessage {
}
export interface RestoreFromClusterSnapshotCommandOutput extends RestoreFromClusterSnapshotResult, __MetadataBearer {
}
/**
 * <p>Creates a new cluster from a snapshot. By default, Amazon Redshift creates the resulting
 *             cluster with the same configuration as the original cluster from which the snapshot was
 *             created, except that the new cluster is created with the default cluster security and
 *             parameter groups. After Amazon Redshift creates the cluster, you can use the <a>ModifyCluster</a> API to associate a different security group and different
 *             parameter group with the restored cluster. If you are using a DS node type, you can also
 *             choose to change to another DS node type of the same size during restore.</p>
 *         <p>If you restore a cluster into a VPC, you must provide a cluster subnet group where
 *             you want the cluster restored.</p>
 *         <p>
 * For more information about working with snapshots, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, RestoreFromClusterSnapshotCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, RestoreFromClusterSnapshotCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new RestoreFromClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreFromClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link RestoreFromClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RestoreFromClusterSnapshotCommand extends $Command<RestoreFromClusterSnapshotCommandInput, RestoreFromClusterSnapshotCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: RestoreFromClusterSnapshotCommandInput;
    constructor(input: RestoreFromClusterSnapshotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RestoreFromClusterSnapshotCommandInput, RestoreFromClusterSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
