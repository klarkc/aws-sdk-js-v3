import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { RestoreFromSnapshotRequest, RestoreFromSnapshotResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RestoreFromSnapshotCommandInput extends RestoreFromSnapshotRequest {
}
export interface RestoreFromSnapshotCommandOutput extends RestoreFromSnapshotResult, __MetadataBearer {
}
/**
 * <p>Restores a directory using an existing directory snapshot.</p>
 *          <p>When you restore a directory from a snapshot, any changes made to the directory after the snapshot date are overwritten.</p>
 *          <p>This action returns as soon as the restore operation is initiated. You can monitor the
 *          progress of the restore operation by calling the <a>DescribeDirectories</a> operation with
 *          the directory identifier. When the <b>DirectoryDescription.Stage</b> value changes to
 *             <code>Active</code>, the restore operation is complete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, RestoreFromSnapshotCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, RestoreFromSnapshotCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new RestoreFromSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreFromSnapshotCommandInput} for command's `input` shape.
 * @see {@link RestoreFromSnapshotCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RestoreFromSnapshotCommand extends $Command<RestoreFromSnapshotCommandInput, RestoreFromSnapshotCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: RestoreFromSnapshotCommandInput;
    constructor(input: RestoreFromSnapshotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RestoreFromSnapshotCommandInput, RestoreFromSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
