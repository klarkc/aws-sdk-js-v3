import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { DescribeSimulationJobRequest, DescribeSimulationJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeSimulationJobCommandInput extends DescribeSimulationJobRequest {
}
export interface DescribeSimulationJobCommandOutput extends DescribeSimulationJobResponse, __MetadataBearer {
}
/**
 * <p>Describes a simulation job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DescribeSimulationJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DescribeSimulationJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new DescribeSimulationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSimulationJobCommandInput} for command's `input` shape.
 * @see {@link DescribeSimulationJobCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeSimulationJobCommand extends $Command<DescribeSimulationJobCommandInput, DescribeSimulationJobCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: DescribeSimulationJobCommandInput;
    constructor(input: DescribeSimulationJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSimulationJobCommandInput, DescribeSimulationJobCommandOutput>;
    private serialize;
    private deserialize;
}
