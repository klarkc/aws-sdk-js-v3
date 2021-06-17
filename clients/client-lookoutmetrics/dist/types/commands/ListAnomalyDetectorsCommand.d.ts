import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { ListAnomalyDetectorsRequest, ListAnomalyDetectorsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAnomalyDetectorsCommandInput extends ListAnomalyDetectorsRequest {
}
export interface ListAnomalyDetectorsCommandOutput extends ListAnomalyDetectorsResponse, __MetadataBearer {
}
/**
 * <p>Lists the detectors in the current AWS Region.</p>
 *          <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource
 *       immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, ListAnomalyDetectorsCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, ListAnomalyDetectorsCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new ListAnomalyDetectorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAnomalyDetectorsCommandInput} for command's `input` shape.
 * @see {@link ListAnomalyDetectorsCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAnomalyDetectorsCommand extends $Command<ListAnomalyDetectorsCommandInput, ListAnomalyDetectorsCommandOutput, LookoutMetricsClientResolvedConfig> {
    readonly input: ListAnomalyDetectorsCommandInput;
    constructor(input: ListAnomalyDetectorsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LookoutMetricsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAnomalyDetectorsCommandInput, ListAnomalyDetectorsCommandOutput>;
    private serialize;
    private deserialize;
}
