import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteJobExecutionRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteJobExecutionCommandInput extends DeleteJobExecutionRequest {
}
export interface DeleteJobExecutionCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a job execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteJobExecutionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteJobExecutionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteJobExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteJobExecutionCommandInput} for command's `input` shape.
 * @see {@link DeleteJobExecutionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteJobExecutionCommand extends $Command<DeleteJobExecutionCommandInput, DeleteJobExecutionCommandOutput, IoTClientResolvedConfig> {
    readonly input: DeleteJobExecutionCommandInput;
    constructor(input: DeleteJobExecutionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteJobExecutionCommandInput, DeleteJobExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
