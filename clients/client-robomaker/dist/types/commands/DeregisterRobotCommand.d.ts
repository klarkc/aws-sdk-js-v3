import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { DeregisterRobotRequest, DeregisterRobotResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeregisterRobotCommandInput extends DeregisterRobotRequest {
}
export interface DeregisterRobotCommandOutput extends DeregisterRobotResponse, __MetadataBearer {
}
/**
 * <p>Deregisters a robot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DeregisterRobotCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DeregisterRobotCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new DeregisterRobotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterRobotCommandInput} for command's `input` shape.
 * @see {@link DeregisterRobotCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeregisterRobotCommand extends $Command<DeregisterRobotCommandInput, DeregisterRobotCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: DeregisterRobotCommandInput;
    constructor(input: DeregisterRobotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterRobotCommandInput, DeregisterRobotCommandOutput>;
    private serialize;
    private deserialize;
}
