import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { RestartSimulationJobRequest, RestartSimulationJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RestartSimulationJobCommandInput extends RestartSimulationJobRequest {
}
export interface RestartSimulationJobCommandOutput extends RestartSimulationJobResponse, __MetadataBearer {
}
/**
 * <p>Restarts a running simulation job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, RestartSimulationJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, RestartSimulationJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new RestartSimulationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestartSimulationJobCommandInput} for command's `input` shape.
 * @see {@link RestartSimulationJobCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RestartSimulationJobCommand extends $Command<RestartSimulationJobCommandInput, RestartSimulationJobCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: RestartSimulationJobCommandInput;
    constructor(input: RestartSimulationJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RestartSimulationJobCommandInput, RestartSimulationJobCommandOutput>;
    private serialize;
    private deserialize;
}
