import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { DescribeSimulationApplicationRequest, DescribeSimulationApplicationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeSimulationApplicationCommandInput extends DescribeSimulationApplicationRequest {
}
export interface DescribeSimulationApplicationCommandOutput extends DescribeSimulationApplicationResponse, __MetadataBearer {
}
/**
 * <p>Describes a simulation application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DescribeSimulationApplicationCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DescribeSimulationApplicationCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new DescribeSimulationApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSimulationApplicationCommandInput} for command's `input` shape.
 * @see {@link DescribeSimulationApplicationCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeSimulationApplicationCommand extends $Command<DescribeSimulationApplicationCommandInput, DescribeSimulationApplicationCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: DescribeSimulationApplicationCommandInput;
    constructor(input: DescribeSimulationApplicationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSimulationApplicationCommandInput, DescribeSimulationApplicationCommandOutput>;
    private serialize;
    private deserialize;
}
