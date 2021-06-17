import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { GetAnomalyGroupRequest, GetAnomalyGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetAnomalyGroupCommandInput extends GetAnomalyGroupRequest {
}
export interface GetAnomalyGroupCommandOutput extends GetAnomalyGroupResponse, __MetadataBearer {
}
/**
 * <p>Returns details about a group of anomalous metrics.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, GetAnomalyGroupCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, GetAnomalyGroupCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new GetAnomalyGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAnomalyGroupCommandInput} for command's `input` shape.
 * @see {@link GetAnomalyGroupCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAnomalyGroupCommand extends $Command<GetAnomalyGroupCommandInput, GetAnomalyGroupCommandOutput, LookoutMetricsClientResolvedConfig> {
    readonly input: GetAnomalyGroupCommandInput;
    constructor(input: GetAnomalyGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LookoutMetricsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAnomalyGroupCommandInput, GetAnomalyGroupCommandOutput>;
    private serialize;
    private deserialize;
}
