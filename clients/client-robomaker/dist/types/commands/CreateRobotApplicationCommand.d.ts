import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { CreateRobotApplicationRequest, CreateRobotApplicationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateRobotApplicationCommandInput extends CreateRobotApplicationRequest {
}
export interface CreateRobotApplicationCommandOutput extends CreateRobotApplicationResponse, __MetadataBearer {
}
/**
 * <p>Creates a robot application. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CreateRobotApplicationCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CreateRobotApplicationCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new CreateRobotApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRobotApplicationCommandInput} for command's `input` shape.
 * @see {@link CreateRobotApplicationCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateRobotApplicationCommand extends $Command<CreateRobotApplicationCommandInput, CreateRobotApplicationCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: CreateRobotApplicationCommandInput;
    constructor(input: CreateRobotApplicationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateRobotApplicationCommandInput, CreateRobotApplicationCommandOutput>;
    private serialize;
    private deserialize;
}
