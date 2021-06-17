import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { CreateSimulationApplicationVersionRequest, CreateSimulationApplicationVersionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateSimulationApplicationVersionCommandInput extends CreateSimulationApplicationVersionRequest {
}
export interface CreateSimulationApplicationVersionCommandOutput extends CreateSimulationApplicationVersionResponse, __MetadataBearer {
}
/**
 * <p>Creates a simulation application with a specific revision id.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CreateSimulationApplicationVersionCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CreateSimulationApplicationVersionCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new CreateSimulationApplicationVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSimulationApplicationVersionCommandInput} for command's `input` shape.
 * @see {@link CreateSimulationApplicationVersionCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateSimulationApplicationVersionCommand extends $Command<CreateSimulationApplicationVersionCommandInput, CreateSimulationApplicationVersionCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: CreateSimulationApplicationVersionCommandInput;
    constructor(input: CreateSimulationApplicationVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSimulationApplicationVersionCommandInput, CreateSimulationApplicationVersionCommandOutput>;
    private serialize;
    private deserialize;
}
