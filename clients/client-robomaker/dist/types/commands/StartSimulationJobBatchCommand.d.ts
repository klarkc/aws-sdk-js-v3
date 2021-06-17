import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { StartSimulationJobBatchRequest, StartSimulationJobBatchResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartSimulationJobBatchCommandInput extends StartSimulationJobBatchRequest {
}
export interface StartSimulationJobBatchCommandOutput extends StartSimulationJobBatchResponse, __MetadataBearer {
}
/**
 * <p>Starts a new simulation job batch. The batch is defined using one or more
 *             <code>SimulationJobRequest</code> objects. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, StartSimulationJobBatchCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, StartSimulationJobBatchCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new StartSimulationJobBatchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartSimulationJobBatchCommandInput} for command's `input` shape.
 * @see {@link StartSimulationJobBatchCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartSimulationJobBatchCommand extends $Command<StartSimulationJobBatchCommandInput, StartSimulationJobBatchCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: StartSimulationJobBatchCommandInput;
    constructor(input: StartSimulationJobBatchCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartSimulationJobBatchCommandInput, StartSimulationJobBatchCommandOutput>;
    private serialize;
    private deserialize;
}
