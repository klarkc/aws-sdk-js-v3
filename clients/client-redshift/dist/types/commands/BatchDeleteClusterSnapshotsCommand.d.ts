import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { BatchDeleteClusterSnapshotsRequest, BatchDeleteClusterSnapshotsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchDeleteClusterSnapshotsCommandInput extends BatchDeleteClusterSnapshotsRequest {
}
export interface BatchDeleteClusterSnapshotsCommandOutput extends BatchDeleteClusterSnapshotsResult, __MetadataBearer {
}
/**
 * <p>Deletes a set of cluster snapshots.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, BatchDeleteClusterSnapshotsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, BatchDeleteClusterSnapshotsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new BatchDeleteClusterSnapshotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeleteClusterSnapshotsCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteClusterSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchDeleteClusterSnapshotsCommand extends $Command<BatchDeleteClusterSnapshotsCommandInput, BatchDeleteClusterSnapshotsCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: BatchDeleteClusterSnapshotsCommandInput;
    constructor(input: BatchDeleteClusterSnapshotsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchDeleteClusterSnapshotsCommandInput, BatchDeleteClusterSnapshotsCommandOutput>;
    private serialize;
    private deserialize;
}
