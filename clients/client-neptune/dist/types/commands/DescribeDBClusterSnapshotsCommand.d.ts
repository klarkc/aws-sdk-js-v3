import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { DBClusterSnapshotMessage, DescribeDBClusterSnapshotsMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDBClusterSnapshotsCommandInput extends DescribeDBClusterSnapshotsMessage {
}
export interface DescribeDBClusterSnapshotsCommandOutput extends DBClusterSnapshotMessage, __MetadataBearer {
}
/**
 * <p>Returns information about DB cluster snapshots. This API action supports
 *       pagination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DescribeDBClusterSnapshotsCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DescribeDBClusterSnapshotsCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new DescribeDBClusterSnapshotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBClusterSnapshotsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBClusterSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDBClusterSnapshotsCommand extends $Command<DescribeDBClusterSnapshotsCommandInput, DescribeDBClusterSnapshotsCommandOutput, NeptuneClientResolvedConfig> {
    readonly input: DescribeDBClusterSnapshotsCommandInput;
    constructor(input: DescribeDBClusterSnapshotsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NeptuneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDBClusterSnapshotsCommandInput, DescribeDBClusterSnapshotsCommandOutput>;
    private serialize;
    private deserialize;
}
