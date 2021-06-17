import { SSMIncidentsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMIncidentsClient";
import { GetTimelineEventInput, GetTimelineEventOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetTimelineEventCommandInput extends GetTimelineEventInput {
}
export interface GetTimelineEventCommandOutput extends GetTimelineEventOutput, __MetadataBearer {
}
/**
 * <p>Retrieves a timeline event based on its ID and incident record.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, GetTimelineEventCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, GetTimelineEventCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new GetTimelineEventCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTimelineEventCommandInput} for command's `input` shape.
 * @see {@link GetTimelineEventCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetTimelineEventCommand extends $Command<GetTimelineEventCommandInput, GetTimelineEventCommandOutput, SSMIncidentsClientResolvedConfig> {
    readonly input: GetTimelineEventCommandInput;
    constructor(input: GetTimelineEventCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMIncidentsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTimelineEventCommandInput, GetTimelineEventCommandOutput>;
    private serialize;
    private deserialize;
}
