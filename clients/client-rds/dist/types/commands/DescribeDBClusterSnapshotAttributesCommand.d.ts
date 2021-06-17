import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeDBClusterSnapshotAttributesMessage, DescribeDBClusterSnapshotAttributesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDBClusterSnapshotAttributesCommandInput extends DescribeDBClusterSnapshotAttributesMessage {
}
export interface DescribeDBClusterSnapshotAttributesCommandOutput extends DescribeDBClusterSnapshotAttributesResult, __MetadataBearer {
}
/**
 * <p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.</p>
 *         <p>When sharing snapshots with other AWS accounts, <code>DescribeDBClusterSnapshotAttributes</code>
 *             returns the <code>restore</code> attribute and a list of IDs for the AWS accounts that are
 *             authorized to copy or restore the manual DB cluster snapshot. If <code>all</code> is included in the list of
 *             values for the <code>restore</code> attribute, then the manual DB cluster snapshot is public and
 *             can be copied or restored by all AWS accounts.</p>
 *         <p>To add or remove access for an AWS account to copy or restore a manual DB cluster snapshot, or to make the
 *             manual DB cluster snapshot public or private, use the <code>ModifyDBClusterSnapshotAttribute</code> API action.</p>
 *         <note>
 *             <p>This action only applies to Aurora DB clusters.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBClusterSnapshotAttributesCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBClusterSnapshotAttributesCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeDBClusterSnapshotAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBClusterSnapshotAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeDBClusterSnapshotAttributesCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDBClusterSnapshotAttributesCommand extends $Command<DescribeDBClusterSnapshotAttributesCommandInput, DescribeDBClusterSnapshotAttributesCommandOutput, RDSClientResolvedConfig> {
    readonly input: DescribeDBClusterSnapshotAttributesCommandInput;
    constructor(input: DescribeDBClusterSnapshotAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDBClusterSnapshotAttributesCommandInput, DescribeDBClusterSnapshotAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
