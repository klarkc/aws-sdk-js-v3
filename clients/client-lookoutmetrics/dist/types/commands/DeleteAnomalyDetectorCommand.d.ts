import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { DeleteAnomalyDetectorRequest, DeleteAnomalyDetectorResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteAnomalyDetectorCommandInput extends DeleteAnomalyDetectorRequest {
}
export interface DeleteAnomalyDetectorCommandOutput extends DeleteAnomalyDetectorResponse, __MetadataBearer {
}
/**
 * <p>Deletes a detector. Deleting an anomaly detector will delete all of its corresponding resources including any
 *       configured datasets and alerts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, DeleteAnomalyDetectorCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, DeleteAnomalyDetectorCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new DeleteAnomalyDetectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAnomalyDetectorCommandInput} for command's `input` shape.
 * @see {@link DeleteAnomalyDetectorCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAnomalyDetectorCommand extends $Command<DeleteAnomalyDetectorCommandInput, DeleteAnomalyDetectorCommandOutput, LookoutMetricsClientResolvedConfig> {
    readonly input: DeleteAnomalyDetectorCommandInput;
    constructor(input: DeleteAnomalyDetectorCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LookoutMetricsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAnomalyDetectorCommandInput, DeleteAnomalyDetectorCommandOutput>;
    private serialize;
    private deserialize;
}
