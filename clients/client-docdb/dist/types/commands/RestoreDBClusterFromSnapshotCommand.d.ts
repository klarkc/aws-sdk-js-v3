import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { RestoreDBClusterFromSnapshotMessage, RestoreDBClusterFromSnapshotResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RestoreDBClusterFromSnapshotCommandInput extends RestoreDBClusterFromSnapshotMessage {
}
export interface RestoreDBClusterFromSnapshotCommandOutput extends RestoreDBClusterFromSnapshotResult, __MetadataBearer {
}
/**
 * <p>Creates a new cluster from a snapshot or cluster snapshot.</p>
 *         <p>If a snapshot is specified, the target cluster is created from the source DB
 *             snapshot with a default configuration and default security group.</p>
 *         <p>If a cluster snapshot is specified, the target cluster is created from the
 *             source cluster restore point with the same configuration as the original source DB
 *             cluster, except that the new cluster is created with the default security
 *             group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, RestoreDBClusterFromSnapshotCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, RestoreDBClusterFromSnapshotCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new RestoreDBClusterFromSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreDBClusterFromSnapshotCommandInput} for command's `input` shape.
 * @see {@link RestoreDBClusterFromSnapshotCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RestoreDBClusterFromSnapshotCommand extends $Command<RestoreDBClusterFromSnapshotCommandInput, RestoreDBClusterFromSnapshotCommandOutput, DocDBClientResolvedConfig> {
    readonly input: RestoreDBClusterFromSnapshotCommandInput;
    constructor(input: RestoreDBClusterFromSnapshotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DocDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RestoreDBClusterFromSnapshotCommandInput, RestoreDBClusterFromSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
