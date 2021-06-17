import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { CreateClusterSnapshotMessage, CreateClusterSnapshotResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateClusterSnapshotCommandInput extends CreateClusterSnapshotMessage {
}
export interface CreateClusterSnapshotCommandOutput extends CreateClusterSnapshotResult, __MetadataBearer {
}
/**
 * <p>Creates a manual snapshot of the specified cluster. The cluster must be in the
 *                 <code>available</code> state. </p>
 *         <p>
 * For more information about working with snapshots, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateClusterSnapshotCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateClusterSnapshotCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new CreateClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateClusterSnapshotCommand extends $Command<CreateClusterSnapshotCommandInput, CreateClusterSnapshotCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: CreateClusterSnapshotCommandInput;
    constructor(input: CreateClusterSnapshotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateClusterSnapshotCommandInput, CreateClusterSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
