import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { CreateRobotRequest, CreateRobotResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateRobotCommandInput extends CreateRobotRequest {
}
export interface CreateRobotCommandOutput extends CreateRobotResponse, __MetadataBearer {
}
/**
 * <p>Creates a robot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CreateRobotCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CreateRobotCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new CreateRobotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRobotCommandInput} for command's `input` shape.
 * @see {@link CreateRobotCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateRobotCommand extends $Command<CreateRobotCommandInput, CreateRobotCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: CreateRobotCommandInput;
    constructor(input: CreateRobotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateRobotCommandInput, CreateRobotCommandOutput>;
    private serialize;
    private deserialize;
}
