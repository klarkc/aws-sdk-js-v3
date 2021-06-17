import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { ListSimulationApplicationsRequest, ListSimulationApplicationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListSimulationApplicationsCommandInput extends ListSimulationApplicationsRequest {
}
export interface ListSimulationApplicationsCommandOutput extends ListSimulationApplicationsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of simulation applications. You can optionally provide filters to
 *          retrieve specific simulation applications. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, ListSimulationApplicationsCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, ListSimulationApplicationsCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new ListSimulationApplicationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSimulationApplicationsCommandInput} for command's `input` shape.
 * @see {@link ListSimulationApplicationsCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListSimulationApplicationsCommand extends $Command<ListSimulationApplicationsCommandInput, ListSimulationApplicationsCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: ListSimulationApplicationsCommandInput;
    constructor(input: ListSimulationApplicationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSimulationApplicationsCommandInput, ListSimulationApplicationsCommandOutput>;
    private serialize;
    private deserialize;
}
