import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { BackTestAnomalyDetectorRequest, BackTestAnomalyDetectorResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BackTestAnomalyDetectorCommandInput extends BackTestAnomalyDetectorRequest {
}
export interface BackTestAnomalyDetectorCommandOutput extends BackTestAnomalyDetectorResponse, __MetadataBearer {
}
/**
 * <p>Runs a backtest for anomaly detection for the specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, BackTestAnomalyDetectorCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, BackTestAnomalyDetectorCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new BackTestAnomalyDetectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BackTestAnomalyDetectorCommandInput} for command's `input` shape.
 * @see {@link BackTestAnomalyDetectorCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BackTestAnomalyDetectorCommand extends $Command<BackTestAnomalyDetectorCommandInput, BackTestAnomalyDetectorCommandOutput, LookoutMetricsClientResolvedConfig> {
    readonly input: BackTestAnomalyDetectorCommandInput;
    constructor(input: BackTestAnomalyDetectorCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LookoutMetricsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BackTestAnomalyDetectorCommandInput, BackTestAnomalyDetectorCommandOutput>;
    private serialize;
    private deserialize;
}
