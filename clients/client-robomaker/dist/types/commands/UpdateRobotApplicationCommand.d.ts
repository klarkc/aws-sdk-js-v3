import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { UpdateRobotApplicationRequest, UpdateRobotApplicationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateRobotApplicationCommandInput extends UpdateRobotApplicationRequest {
}
export interface UpdateRobotApplicationCommandOutput extends UpdateRobotApplicationResponse, __MetadataBearer {
}
/**
 * <p>Updates a robot application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, UpdateRobotApplicationCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, UpdateRobotApplicationCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new UpdateRobotApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRobotApplicationCommandInput} for command's `input` shape.
 * @see {@link UpdateRobotApplicationCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateRobotApplicationCommand extends $Command<UpdateRobotApplicationCommandInput, UpdateRobotApplicationCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: UpdateRobotApplicationCommandInput;
    constructor(input: UpdateRobotApplicationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRobotApplicationCommandInput, UpdateRobotApplicationCommandOutput>;
    private serialize;
    private deserialize;
}
