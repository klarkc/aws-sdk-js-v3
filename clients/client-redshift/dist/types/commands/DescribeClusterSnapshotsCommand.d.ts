import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeClusterSnapshotsMessage, SnapshotMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeClusterSnapshotsCommandInput extends DescribeClusterSnapshotsMessage {
}
export interface DescribeClusterSnapshotsCommandOutput extends SnapshotMessage, __MetadataBearer {
}
/**
 * <p>Returns one or more snapshot objects, which contain metadata about your cluster
 *             snapshots. By default, this operation returns information about all snapshots of all
 *             clusters that are owned by you AWS customer account. No information is returned for
 *             snapshots owned by inactive AWS customer accounts.</p>
 *         <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 *             all snapshots that match any combination of the specified keys and values. For example,
 *             if you have <code>owner</code> and <code>environment</code> for tag keys, and
 *                 <code>admin</code> and <code>test</code> for tag values, all snapshots that have any
 *             combination of those values are returned. Only snapshots that you own are returned in
 *             the response; shared snapshots are not returned with the tag key and tag value request
 *             parameters.</p>
 *         <p>If both tag keys and values are omitted from the request, snapshots are returned
 *             regardless of whether they have tag keys or values associated with them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeClusterSnapshotsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeClusterSnapshotsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeClusterSnapshotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClusterSnapshotsCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeClusterSnapshotsCommand extends $Command<DescribeClusterSnapshotsCommandInput, DescribeClusterSnapshotsCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeClusterSnapshotsCommandInput;
    constructor(input: DescribeClusterSnapshotsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeClusterSnapshotsCommandInput, DescribeClusterSnapshotsCommandOutput>;
    private serialize;
    private deserialize;
}
