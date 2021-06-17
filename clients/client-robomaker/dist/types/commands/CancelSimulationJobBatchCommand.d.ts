import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { CancelSimulationJobBatchRequest, CancelSimulationJobBatchResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CancelSimulationJobBatchCommandInput extends CancelSimulationJobBatchRequest {
}
export interface CancelSimulationJobBatchCommandOutput extends CancelSimulationJobBatchResponse, __MetadataBearer {
}
/**
 * <p>Cancels a simulation job batch. When you cancel a simulation job batch, you are also
 *          cancelling all of the active simulation jobs created as part of the batch. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CancelSimulationJobBatchCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CancelSimulationJobBatchCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new CancelSimulationJobBatchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelSimulationJobBatchCommandInput} for command's `input` shape.
 * @see {@link CancelSimulationJobBatchCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CancelSimulationJobBatchCommand extends $Command<CancelSimulationJobBatchCommandInput, CancelSimulationJobBatchCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: CancelSimulationJobBatchCommandInput;
    constructor(input: CancelSimulationJobBatchCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelSimulationJobBatchCommandInput, CancelSimulationJobBatchCommandOutput>;
    private serialize;
    private deserialize;
}
