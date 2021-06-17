import { SSMIncidentsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMIncidentsClient";
import { UpdateTimelineEventInput, UpdateTimelineEventOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateTimelineEventCommandInput extends UpdateTimelineEventInput {
}
export interface UpdateTimelineEventCommandOutput extends UpdateTimelineEventOutput, __MetadataBearer {
}
/**
 * <p>Updates a timeline event. You can update events of type <code>Custom
 *             Event</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, UpdateTimelineEventCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, UpdateTimelineEventCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new UpdateTimelineEventCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTimelineEventCommandInput} for command's `input` shape.
 * @see {@link UpdateTimelineEventCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateTimelineEventCommand extends $Command<UpdateTimelineEventCommandInput, UpdateTimelineEventCommandOutput, SSMIncidentsClientResolvedConfig> {
    readonly input: UpdateTimelineEventCommandInput;
    constructor(input: UpdateTimelineEventCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMIncidentsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateTimelineEventCommandInput, UpdateTimelineEventCommandOutput>;
    private serialize;
    private deserialize;
}
