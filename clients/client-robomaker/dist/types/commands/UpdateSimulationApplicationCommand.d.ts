import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { UpdateSimulationApplicationRequest, UpdateSimulationApplicationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateSimulationApplicationCommandInput extends UpdateSimulationApplicationRequest {
}
export interface UpdateSimulationApplicationCommandOutput extends UpdateSimulationApplicationResponse, __MetadataBearer {
}
/**
 * <p>Updates a simulation application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, UpdateSimulationApplicationCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, UpdateSimulationApplicationCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new UpdateSimulationApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSimulationApplicationCommandInput} for command's `input` shape.
 * @see {@link UpdateSimulationApplicationCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateSimulationApplicationCommand extends $Command<UpdateSimulationApplicationCommandInput, UpdateSimulationApplicationCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: UpdateSimulationApplicationCommandInput;
    constructor(input: UpdateSimulationApplicationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateSimulationApplicationCommandInput, UpdateSimulationApplicationCommandOutput>;
    private serialize;
    private deserialize;
}
