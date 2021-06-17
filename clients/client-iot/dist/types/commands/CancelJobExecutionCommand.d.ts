import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CancelJobExecutionRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CancelJobExecutionCommandInput extends CancelJobExecutionRequest {
}
export interface CancelJobExecutionCommandOutput extends __MetadataBearer {
}
/**
 * <p>Cancels the execution of a job for a given thing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CancelJobExecutionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CancelJobExecutionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CancelJobExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelJobExecutionCommandInput} for command's `input` shape.
 * @see {@link CancelJobExecutionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CancelJobExecutionCommand extends $Command<CancelJobExecutionCommandInput, CancelJobExecutionCommandOutput, IoTClientResolvedConfig> {
    readonly input: CancelJobExecutionCommandInput;
    constructor(input: CancelJobExecutionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelJobExecutionCommandInput, CancelJobExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
