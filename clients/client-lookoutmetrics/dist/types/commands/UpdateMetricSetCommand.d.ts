import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { UpdateMetricSetRequest, UpdateMetricSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateMetricSetCommandInput extends UpdateMetricSetRequest {
}
export interface UpdateMetricSetCommandOutput extends UpdateMetricSetResponse, __MetadataBearer {
}
/**
 * <p>Updates a dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, UpdateMetricSetCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, UpdateMetricSetCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new UpdateMetricSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMetricSetCommandInput} for command's `input` shape.
 * @see {@link UpdateMetricSetCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateMetricSetCommand extends $Command<UpdateMetricSetCommandInput, UpdateMetricSetCommandOutput, LookoutMetricsClientResolvedConfig> {
    readonly input: UpdateMetricSetCommandInput;
    constructor(input: UpdateMetricSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LookoutMetricsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateMetricSetCommandInput, UpdateMetricSetCommandOutput>;
    private serialize;
    private deserialize;
}
