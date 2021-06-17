import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { ListSimulationJobBatchesRequest, ListSimulationJobBatchesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListSimulationJobBatchesCommandInput extends ListSimulationJobBatchesRequest {
}
export interface ListSimulationJobBatchesCommandOutput extends ListSimulationJobBatchesResponse, __MetadataBearer {
}
/**
 * <p>Returns a list simulation job batches. You can optionally provide filters to retrieve
 *          specific simulation batch jobs. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, ListSimulationJobBatchesCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, ListSimulationJobBatchesCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new ListSimulationJobBatchesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSimulationJobBatchesCommandInput} for command's `input` shape.
 * @see {@link ListSimulationJobBatchesCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListSimulationJobBatchesCommand extends $Command<ListSimulationJobBatchesCommandInput, ListSimulationJobBatchesCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: ListSimulationJobBatchesCommandInput;
    constructor(input: ListSimulationJobBatchesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSimulationJobBatchesCommandInput, ListSimulationJobBatchesCommandOutput>;
    private serialize;
    private deserialize;
}
