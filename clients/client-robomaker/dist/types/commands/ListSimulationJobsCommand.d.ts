import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { ListSimulationJobsRequest, ListSimulationJobsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListSimulationJobsCommandInput extends ListSimulationJobsRequest {
}
export interface ListSimulationJobsCommandOutput extends ListSimulationJobsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of simulation jobs. You can optionally provide filters to retrieve
 *          specific simulation jobs. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, ListSimulationJobsCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, ListSimulationJobsCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new ListSimulationJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSimulationJobsCommandInput} for command's `input` shape.
 * @see {@link ListSimulationJobsCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListSimulationJobsCommand extends $Command<ListSimulationJobsCommandInput, ListSimulationJobsCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: ListSimulationJobsCommandInput;
    constructor(input: ListSimulationJobsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSimulationJobsCommandInput, ListSimulationJobsCommandOutput>;
    private serialize;
    private deserialize;
}
