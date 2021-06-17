import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListCustomMetricsRequest, ListCustomMetricsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListCustomMetricsCommandInput extends ListCustomMetricsRequest {
}
export interface ListCustomMetricsCommandOutput extends ListCustomMetricsResponse, __MetadataBearer {
}
/**
 * <p>
 *       Lists your Device Defender detect custom metrics.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListCustomMetricsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListCustomMetricsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListCustomMetricsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCustomMetricsCommandInput} for command's `input` shape.
 * @see {@link ListCustomMetricsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListCustomMetricsCommand extends $Command<ListCustomMetricsCommandInput, ListCustomMetricsCommandOutput, IoTClientResolvedConfig> {
    readonly input: ListCustomMetricsCommandInput;
    constructor(input: ListCustomMetricsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCustomMetricsCommandInput, ListCustomMetricsCommandOutput>;
    private serialize;
    private deserialize;
}
