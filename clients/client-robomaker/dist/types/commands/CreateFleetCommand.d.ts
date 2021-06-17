import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { CreateFleetRequest, CreateFleetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateFleetCommandInput extends CreateFleetRequest {
}
export interface CreateFleetCommandOutput extends CreateFleetResponse, __MetadataBearer {
}
/**
 * <p>Creates a fleet, a logical group of robots running the same robot application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CreateFleetCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CreateFleetCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new CreateFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFleetCommandInput} for command's `input` shape.
 * @see {@link CreateFleetCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateFleetCommand extends $Command<CreateFleetCommandInput, CreateFleetCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: CreateFleetCommandInput;
    constructor(input: CreateFleetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateFleetCommandInput, CreateFleetCommandOutput>;
    private serialize;
    private deserialize;
}
