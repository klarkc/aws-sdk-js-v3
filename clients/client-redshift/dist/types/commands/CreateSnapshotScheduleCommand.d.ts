import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { CreateSnapshotScheduleMessage, SnapshotSchedule } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateSnapshotScheduleCommandInput extends CreateSnapshotScheduleMessage {
}
export interface CreateSnapshotScheduleCommandOutput extends SnapshotSchedule, __MetadataBearer {
}
/**
 * <p>Create a snapshot schedule that can be associated to a cluster and which overrides the default system backup schedule. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateSnapshotScheduleCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateSnapshotScheduleCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new CreateSnapshotScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSnapshotScheduleCommandInput} for command's `input` shape.
 * @see {@link CreateSnapshotScheduleCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateSnapshotScheduleCommand extends $Command<CreateSnapshotScheduleCommandInput, CreateSnapshotScheduleCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: CreateSnapshotScheduleCommandInput;
    constructor(input: CreateSnapshotScheduleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSnapshotScheduleCommandInput, CreateSnapshotScheduleCommandOutput>;
    private serialize;
    private deserialize;
}
