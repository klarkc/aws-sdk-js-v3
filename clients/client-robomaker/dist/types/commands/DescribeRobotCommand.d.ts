import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { DescribeRobotRequest, DescribeRobotResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeRobotCommandInput extends DescribeRobotRequest {
}
export interface DescribeRobotCommandOutput extends DescribeRobotResponse, __MetadataBearer {
}
/**
 * <p>Describes a robot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DescribeRobotCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DescribeRobotCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new DescribeRobotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRobotCommandInput} for command's `input` shape.
 * @see {@link DescribeRobotCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeRobotCommand extends $Command<DescribeRobotCommandInput, DescribeRobotCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: DescribeRobotCommandInput;
    constructor(input: DescribeRobotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeRobotCommandInput, DescribeRobotCommandOutput>;
    private serialize;
    private deserialize;
}
