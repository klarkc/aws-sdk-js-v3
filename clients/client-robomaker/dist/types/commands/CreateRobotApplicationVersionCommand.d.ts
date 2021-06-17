import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { CreateRobotApplicationVersionRequest, CreateRobotApplicationVersionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateRobotApplicationVersionCommandInput extends CreateRobotApplicationVersionRequest {
}
export interface CreateRobotApplicationVersionCommandOutput extends CreateRobotApplicationVersionResponse, __MetadataBearer {
}
/**
 * <p>Creates a version of a robot application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CreateRobotApplicationVersionCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CreateRobotApplicationVersionCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new CreateRobotApplicationVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRobotApplicationVersionCommandInput} for command's `input` shape.
 * @see {@link CreateRobotApplicationVersionCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateRobotApplicationVersionCommand extends $Command<CreateRobotApplicationVersionCommandInput, CreateRobotApplicationVersionCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: CreateRobotApplicationVersionCommandInput;
    constructor(input: CreateRobotApplicationVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateRobotApplicationVersionCommandInput, CreateRobotApplicationVersionCommandOutput>;
    private serialize;
    private deserialize;
}
