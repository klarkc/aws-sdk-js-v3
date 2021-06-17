import { SSMIncidentsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMIncidentsClient";
import { DeleteTimelineEventInput, DeleteTimelineEventOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteTimelineEventCommandInput extends DeleteTimelineEventInput {
}
export interface DeleteTimelineEventCommandOutput extends DeleteTimelineEventOutput, __MetadataBearer {
}
/**
 * <p>Deletes a timeline event from an incident.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, DeleteTimelineEventCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, DeleteTimelineEventCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new DeleteTimelineEventCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTimelineEventCommandInput} for command's `input` shape.
 * @see {@link DeleteTimelineEventCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteTimelineEventCommand extends $Command<DeleteTimelineEventCommandInput, DeleteTimelineEventCommandOutput, SSMIncidentsClientResolvedConfig> {
    readonly input: DeleteTimelineEventCommandInput;
    constructor(input: DeleteTimelineEventCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMIncidentsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTimelineEventCommandInput, DeleteTimelineEventCommandOutput>;
    private serialize;
    private deserialize;
}
