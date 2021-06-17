import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { CreateMetricSetRequest, CreateMetricSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateMetricSetCommandInput extends CreateMetricSetRequest {
}
export interface CreateMetricSetCommandOutput extends CreateMetricSetResponse, __MetadataBearer {
}
/**
 * <p>Creates a dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, CreateMetricSetCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, CreateMetricSetCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new CreateMetricSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMetricSetCommandInput} for command's `input` shape.
 * @see {@link CreateMetricSetCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateMetricSetCommand extends $Command<CreateMetricSetCommandInput, CreateMetricSetCommandOutput, LookoutMetricsClientResolvedConfig> {
    readonly input: CreateMetricSetCommandInput;
    constructor(input: CreateMetricSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LookoutMetricsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateMetricSetCommandInput, CreateMetricSetCommandOutput>;
    private serialize;
    private deserialize;
}
