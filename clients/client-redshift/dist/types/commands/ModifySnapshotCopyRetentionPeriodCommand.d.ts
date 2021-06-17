import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ModifySnapshotCopyRetentionPeriodMessage, ModifySnapshotCopyRetentionPeriodResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifySnapshotCopyRetentionPeriodCommandInput extends ModifySnapshotCopyRetentionPeriodMessage {
}
export interface ModifySnapshotCopyRetentionPeriodCommandOutput extends ModifySnapshotCopyRetentionPeriodResult, __MetadataBearer {
}
/**
 * <p>Modifies the number of days to retain snapshots in the destination AWS Region after
 *             they are copied from the source AWS Region. By default, this operation only changes the
 *             retention period of copied automated snapshots. The retention periods for both new and
 *             existing copied automated snapshots are updated with the new retention period. You can
 *             set the manual option to change only the retention periods of copied manual snapshots.
 *             If you set this option, only newly copied manual snapshots have the new retention
 *             period. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifySnapshotCopyRetentionPeriodCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifySnapshotCopyRetentionPeriodCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ModifySnapshotCopyRetentionPeriodCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifySnapshotCopyRetentionPeriodCommandInput} for command's `input` shape.
 * @see {@link ModifySnapshotCopyRetentionPeriodCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifySnapshotCopyRetentionPeriodCommand extends $Command<ModifySnapshotCopyRetentionPeriodCommandInput, ModifySnapshotCopyRetentionPeriodCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: ModifySnapshotCopyRetentionPeriodCommandInput;
    constructor(input: ModifySnapshotCopyRetentionPeriodCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifySnapshotCopyRetentionPeriodCommandInput, ModifySnapshotCopyRetentionPeriodCommandOutput>;
    private serialize;
    private deserialize;
}
