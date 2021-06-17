import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { SnapshotSchedule } from "../models/models_0";
import { ModifySnapshotScheduleMessage } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifySnapshotScheduleCommandInput extends ModifySnapshotScheduleMessage {
}
export interface ModifySnapshotScheduleCommandOutput extends SnapshotSchedule, __MetadataBearer {
}
/**
 * <p>Modifies a snapshot schedule. Any schedule associated with a cluster is modified
 *             asynchronously.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifySnapshotScheduleCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifySnapshotScheduleCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ModifySnapshotScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifySnapshotScheduleCommandInput} for command's `input` shape.
 * @see {@link ModifySnapshotScheduleCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifySnapshotScheduleCommand extends $Command<ModifySnapshotScheduleCommandInput, ModifySnapshotScheduleCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: ModifySnapshotScheduleCommandInput;
    constructor(input: ModifySnapshotScheduleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifySnapshotScheduleCommandInput, ModifySnapshotScheduleCommandOutput>;
    private serialize;
    private deserialize;
}
