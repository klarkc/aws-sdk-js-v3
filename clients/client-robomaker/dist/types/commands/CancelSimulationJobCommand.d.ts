import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { CancelSimulationJobRequest, CancelSimulationJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CancelSimulationJobCommandInput extends CancelSimulationJobRequest {
}
export interface CancelSimulationJobCommandOutput extends CancelSimulationJobResponse, __MetadataBearer {
}
/**
 * <p>Cancels the specified simulation job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CancelSimulationJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CancelSimulationJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new CancelSimulationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelSimulationJobCommandInput} for command's `input` shape.
 * @see {@link CancelSimulationJobCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CancelSimulationJobCommand extends $Command<CancelSimulationJobCommandInput, CancelSimulationJobCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: CancelSimulationJobCommandInput;
    constructor(input: CancelSimulationJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelSimulationJobCommandInput, CancelSimulationJobCommandOutput>;
    private serialize;
    private deserialize;
}
