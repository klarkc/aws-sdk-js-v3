import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListJobExecutionsForThingRequest, ListJobExecutionsForThingResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListJobExecutionsForThingCommandInput extends ListJobExecutionsForThingRequest {
}
export interface ListJobExecutionsForThingCommandOutput extends ListJobExecutionsForThingResponse, __MetadataBearer {
}
/**
 * <p>Lists the job executions for the specified thing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListJobExecutionsForThingCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListJobExecutionsForThingCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListJobExecutionsForThingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListJobExecutionsForThingCommandInput} for command's `input` shape.
 * @see {@link ListJobExecutionsForThingCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListJobExecutionsForThingCommand extends $Command<ListJobExecutionsForThingCommandInput, ListJobExecutionsForThingCommandOutput, IoTClientResolvedConfig> {
    readonly input: ListJobExecutionsForThingCommandInput;
    constructor(input: ListJobExecutionsForThingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListJobExecutionsForThingCommandInput, ListJobExecutionsForThingCommandOutput>;
    private serialize;
    private deserialize;
}
