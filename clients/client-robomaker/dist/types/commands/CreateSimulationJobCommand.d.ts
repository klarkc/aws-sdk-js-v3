import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { CreateSimulationJobRequest, CreateSimulationJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateSimulationJobCommandInput extends CreateSimulationJobRequest {
}
export interface CreateSimulationJobCommandOutput extends CreateSimulationJobResponse, __MetadataBearer {
}
/**
 * <p>Creates a simulation job.</p>
 *          <note>
 *             <p>After 90 days, simulation jobs expire and will be deleted. They will no longer be
 *             accessible. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CreateSimulationJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CreateSimulationJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new CreateSimulationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSimulationJobCommandInput} for command's `input` shape.
 * @see {@link CreateSimulationJobCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateSimulationJobCommand extends $Command<CreateSimulationJobCommandInput, CreateSimulationJobCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: CreateSimulationJobCommandInput;
    constructor(input: CreateSimulationJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSimulationJobCommandInput, CreateSimulationJobCommandOutput>;
    private serialize;
    private deserialize;
}
