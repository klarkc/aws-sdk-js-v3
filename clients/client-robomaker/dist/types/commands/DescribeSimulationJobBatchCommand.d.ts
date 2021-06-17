import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { DescribeSimulationJobBatchRequest, DescribeSimulationJobBatchResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeSimulationJobBatchCommandInput extends DescribeSimulationJobBatchRequest {
}
export interface DescribeSimulationJobBatchCommandOutput extends DescribeSimulationJobBatchResponse, __MetadataBearer {
}
/**
 * <p>Describes a simulation job batch.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DescribeSimulationJobBatchCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DescribeSimulationJobBatchCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new DescribeSimulationJobBatchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSimulationJobBatchCommandInput} for command's `input` shape.
 * @see {@link DescribeSimulationJobBatchCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeSimulationJobBatchCommand extends $Command<DescribeSimulationJobBatchCommandInput, DescribeSimulationJobBatchCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: DescribeSimulationJobBatchCommandInput;
    constructor(input: DescribeSimulationJobBatchCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSimulationJobBatchCommandInput, DescribeSimulationJobBatchCommandOutput>;
    private serialize;
    private deserialize;
}
