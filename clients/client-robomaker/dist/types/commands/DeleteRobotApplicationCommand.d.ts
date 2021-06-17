import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { DeleteRobotApplicationRequest, DeleteRobotApplicationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteRobotApplicationCommandInput extends DeleteRobotApplicationRequest {
}
export interface DeleteRobotApplicationCommandOutput extends DeleteRobotApplicationResponse, __MetadataBearer {
}
/**
 * <p>Deletes a robot application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DeleteRobotApplicationCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DeleteRobotApplicationCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new DeleteRobotApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRobotApplicationCommandInput} for command's `input` shape.
 * @see {@link DeleteRobotApplicationCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteRobotApplicationCommand extends $Command<DeleteRobotApplicationCommandInput, DeleteRobotApplicationCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: DeleteRobotApplicationCommandInput;
    constructor(input: DeleteRobotApplicationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRobotApplicationCommandInput, DeleteRobotApplicationCommandOutput>;
    private serialize;
    private deserialize;
}
