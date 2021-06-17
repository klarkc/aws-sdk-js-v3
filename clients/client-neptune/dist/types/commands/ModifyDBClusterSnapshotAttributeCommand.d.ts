import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { ModifyDBClusterSnapshotAttributeMessage, ModifyDBClusterSnapshotAttributeResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyDBClusterSnapshotAttributeCommandInput extends ModifyDBClusterSnapshotAttributeMessage {
}
export interface ModifyDBClusterSnapshotAttributeCommandOutput extends ModifyDBClusterSnapshotAttributeResult, __MetadataBearer {
}
/**
 * <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB
 *       cluster snapshot.</p>
 *          <p>To share a manual DB cluster snapshot with other Amazon accounts, specify
 *       <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code>
 *       parameter to add a list of IDs of the Amazon accounts that are authorized to restore the manual
 *       DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot
 *       public, which means that it can be copied or restored by all Amazon accounts. Do not add the
 *       <code>all</code> value for any manual DB cluster snapshots that contain private information
 *       that you don't want available to all Amazon accounts. If a manual DB cluster snapshot is
 *       encrypted, it can be shared, but only by specifying a list of authorized Amazon account IDs for
 *       the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that
 *       parameter in this case.</p>
 *          <p>To view which Amazon accounts have access to copy or restore a manual DB cluster snapshot, or
 *       whether a manual DB cluster snapshot public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, ModifyDBClusterSnapshotAttributeCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, ModifyDBClusterSnapshotAttributeCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new ModifyDBClusterSnapshotAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyDBClusterSnapshotAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifyDBClusterSnapshotAttributeCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyDBClusterSnapshotAttributeCommand extends $Command<ModifyDBClusterSnapshotAttributeCommandInput, ModifyDBClusterSnapshotAttributeCommandOutput, NeptuneClientResolvedConfig> {
    readonly input: ModifyDBClusterSnapshotAttributeCommandInput;
    constructor(input: ModifyDBClusterSnapshotAttributeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NeptuneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyDBClusterSnapshotAttributeCommandInput, ModifyDBClusterSnapshotAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
