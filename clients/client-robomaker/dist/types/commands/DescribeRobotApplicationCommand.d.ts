import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { DescribeRobotApplicationRequest, DescribeRobotApplicationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeRobotApplicationCommandInput extends DescribeRobotApplicationRequest {
}
export interface DescribeRobotApplicationCommandOutput extends DescribeRobotApplicationResponse, __MetadataBearer {
}
/**
 * <p>Describes a robot application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DescribeRobotApplicationCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DescribeRobotApplicationCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new DescribeRobotApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRobotApplicationCommandInput} for command's `input` shape.
 * @see {@link DescribeRobotApplicationCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeRobotApplicationCommand extends $Command<DescribeRobotApplicationCommandInput, DescribeRobotApplicationCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: DescribeRobotApplicationCommandInput;
    constructor(input: DescribeRobotApplicationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeRobotApplicationCommandInput, DescribeRobotApplicationCommandOutput>;
    private serialize;
    private deserialize;
}
