import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { RevokeSnapshotAccessMessage, RevokeSnapshotAccessResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RevokeSnapshotAccessCommandInput extends RevokeSnapshotAccessMessage {
}
export interface RevokeSnapshotAccessCommandOutput extends RevokeSnapshotAccessResult, __MetadataBearer {
}
/**
 * <p>Removes the ability of the specified AWS customer account to restore the specified
 *             snapshot. If the account is currently restoring the snapshot, the restore will run to
 *             completion.</p>
 *         <p>
 * For more information about working with snapshots, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, RevokeSnapshotAccessCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, RevokeSnapshotAccessCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new RevokeSnapshotAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RevokeSnapshotAccessCommandInput} for command's `input` shape.
 * @see {@link RevokeSnapshotAccessCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RevokeSnapshotAccessCommand extends $Command<RevokeSnapshotAccessCommandInput, RevokeSnapshotAccessCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: RevokeSnapshotAccessCommandInput;
    constructor(input: RevokeSnapshotAccessCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RevokeSnapshotAccessCommandInput, RevokeSnapshotAccessCommandOutput>;
    private serialize;
    private deserialize;
}
