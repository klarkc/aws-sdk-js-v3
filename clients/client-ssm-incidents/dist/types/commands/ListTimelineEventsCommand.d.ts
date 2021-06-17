import { SSMIncidentsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMIncidentsClient";
import { ListTimelineEventsInput, ListTimelineEventsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTimelineEventsCommandInput extends ListTimelineEventsInput {
}
export interface ListTimelineEventsCommandOutput extends ListTimelineEventsOutput, __MetadataBearer {
}
/**
 * <p>Lists timeline events of the specified incident record.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, ListTimelineEventsCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, ListTimelineEventsCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new ListTimelineEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTimelineEventsCommandInput} for command's `input` shape.
 * @see {@link ListTimelineEventsCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTimelineEventsCommand extends $Command<ListTimelineEventsCommandInput, ListTimelineEventsCommandOutput, SSMIncidentsClientResolvedConfig> {
    readonly input: ListTimelineEventsCommandInput;
    constructor(input: ListTimelineEventsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMIncidentsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTimelineEventsCommandInput, ListTimelineEventsCommandOutput>;
    private serialize;
    private deserialize;
}
