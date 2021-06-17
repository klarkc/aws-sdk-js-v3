import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { DeleteRobotRequest, DeleteRobotResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteRobotCommandInput extends DeleteRobotRequest {
}
export interface DeleteRobotCommandOutput extends DeleteRobotResponse, __MetadataBearer {
}
/**
 * <p>Deletes a robot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DeleteRobotCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DeleteRobotCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new DeleteRobotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRobotCommandInput} for command's `input` shape.
 * @see {@link DeleteRobotCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteRobotCommand extends $Command<DeleteRobotCommandInput, DeleteRobotCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: DeleteRobotCommandInput;
    constructor(input: DeleteRobotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRobotCommandInput, DeleteRobotCommandOutput>;
    private serialize;
    private deserialize;
}
