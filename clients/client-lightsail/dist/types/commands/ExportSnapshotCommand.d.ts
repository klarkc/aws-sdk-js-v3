import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { ExportSnapshotRequest, ExportSnapshotResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ExportSnapshotCommandInput extends ExportSnapshotRequest {
}
export interface ExportSnapshotCommandOutput extends ExportSnapshotResult, __MetadataBearer {
}
/**
 * <p>Exports an Amazon Lightsail instance or block storage disk snapshot to Amazon Elastic Compute Cloud (Amazon EC2).
 *       This operation results in an export snapshot record that can be used with the <code>create
 *         cloud formation stack</code> operation to create new Amazon EC2 instances.</p>
 *          <p>Exported instance snapshots appear in Amazon EC2 as Amazon Machine Images (AMIs), and the
 *       instance system disk appears as an Amazon Elastic Block Store (Amazon EBS) volume. Exported disk snapshots appear in
 *       Amazon EC2 as Amazon EBS volumes. Snapshots are exported to the same Amazon Web Services Region in Amazon EC2 as the
 *       source Lightsail snapshot.</p>
 *          <p></p>
 *          <p>The <code>export snapshot</code> operation supports tag-based access control via resource
 *       tags applied to the resource identified by <code>source snapshot name</code>. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 *          <note>
 *             <p>Use the <code>get instance snapshots</code> or <code>get disk snapshots</code>
 *         operations to get a list of snapshots that you can export to Amazon EC2.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, ExportSnapshotCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, ExportSnapshotCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new ExportSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportSnapshotCommandInput} for command's `input` shape.
 * @see {@link ExportSnapshotCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ExportSnapshotCommand extends $Command<ExportSnapshotCommandInput, ExportSnapshotCommandOutput, LightsailClientResolvedConfig> {
    readonly input: ExportSnapshotCommandInput;
    constructor(input: ExportSnapshotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ExportSnapshotCommandInput, ExportSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
