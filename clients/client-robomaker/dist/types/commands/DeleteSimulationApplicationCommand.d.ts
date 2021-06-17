import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { DeleteSimulationApplicationRequest, DeleteSimulationApplicationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteSimulationApplicationCommandInput extends DeleteSimulationApplicationRequest {
}
export interface DeleteSimulationApplicationCommandOutput extends DeleteSimulationApplicationResponse, __MetadataBearer {
}
/**
 * <p>Deletes a simulation application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DeleteSimulationApplicationCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DeleteSimulationApplicationCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new DeleteSimulationApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSimulationApplicationCommandInput} for command's `input` shape.
 * @see {@link DeleteSimulationApplicationCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteSimulationApplicationCommand extends $Command<DeleteSimulationApplicationCommandInput, DeleteSimulationApplicationCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: DeleteSimulationApplicationCommandInput;
    constructor(input: DeleteSimulationApplicationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSimulationApplicationCommandInput, DeleteSimulationApplicationCommandOutput>;
    private serialize;
    private deserialize;
}
