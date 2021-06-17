import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListJobExecutionsForJobRequest, ListJobExecutionsForJobResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListJobExecutionsForJobCommandInput extends ListJobExecutionsForJobRequest {
}
export interface ListJobExecutionsForJobCommandOutput extends ListJobExecutionsForJobResponse, __MetadataBearer {
}
/**
 * <p>Lists the job executions for a job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListJobExecutionsForJobCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListJobExecutionsForJobCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListJobExecutionsForJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListJobExecutionsForJobCommandInput} for command's `input` shape.
 * @see {@link ListJobExecutionsForJobCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListJobExecutionsForJobCommand extends $Command<ListJobExecutionsForJobCommandInput, ListJobExecutionsForJobCommandOutput, IoTClientResolvedConfig> {
    readonly input: ListJobExecutionsForJobCommandInput;
    constructor(input: ListJobExecutionsForJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListJobExecutionsForJobCommandInput, ListJobExecutionsForJobCommandOutput>;
    private serialize;
    private deserialize;
}
