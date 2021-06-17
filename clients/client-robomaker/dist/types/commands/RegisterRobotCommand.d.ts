import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { RegisterRobotRequest, RegisterRobotResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RegisterRobotCommandInput extends RegisterRobotRequest {
}
export interface RegisterRobotCommandOutput extends RegisterRobotResponse, __MetadataBearer {
}
/**
 * <p>Registers a robot with a fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, RegisterRobotCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, RegisterRobotCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new RegisterRobotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterRobotCommandInput} for command's `input` shape.
 * @see {@link RegisterRobotCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RegisterRobotCommand extends $Command<RegisterRobotCommandInput, RegisterRobotCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: RegisterRobotCommandInput;
    constructor(input: RegisterRobotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterRobotCommandInput, RegisterRobotCommandOutput>;
    private serialize;
    private deserialize;
}
