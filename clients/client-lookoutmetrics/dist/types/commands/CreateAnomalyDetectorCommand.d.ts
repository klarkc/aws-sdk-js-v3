import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { CreateAnomalyDetectorRequest, CreateAnomalyDetectorResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateAnomalyDetectorCommandInput extends CreateAnomalyDetectorRequest {
}
export interface CreateAnomalyDetectorCommandOutput extends CreateAnomalyDetectorResponse, __MetadataBearer {
}
/**
 * <p>Creates an anomaly detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, CreateAnomalyDetectorCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, CreateAnomalyDetectorCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new CreateAnomalyDetectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAnomalyDetectorCommandInput} for command's `input` shape.
 * @see {@link CreateAnomalyDetectorCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateAnomalyDetectorCommand extends $Command<CreateAnomalyDetectorCommandInput, CreateAnomalyDetectorCommandOutput, LookoutMetricsClientResolvedConfig> {
    readonly input: CreateAnomalyDetectorCommandInput;
    constructor(input: CreateAnomalyDetectorCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LookoutMetricsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAnomalyDetectorCommandInput, CreateAnomalyDetectorCommandOutput>;
    private serialize;
    private deserialize;
}
