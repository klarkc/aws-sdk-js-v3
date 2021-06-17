import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { DescribeFleetRequest, DescribeFleetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeFleetCommandInput extends DescribeFleetRequest {
}
export interface DescribeFleetCommandOutput extends DescribeFleetResponse, __MetadataBearer {
}
/**
 * <p>Describes a fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DescribeFleetCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DescribeFleetCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new DescribeFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFleetCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeFleetCommand extends $Command<DescribeFleetCommandInput, DescribeFleetCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: DescribeFleetCommandInput;
    constructor(input: DescribeFleetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeFleetCommandInput, DescribeFleetCommandOutput>;
    private serialize;
    private deserialize;
}
