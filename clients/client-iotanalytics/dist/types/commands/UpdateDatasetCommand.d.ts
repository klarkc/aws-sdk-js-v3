import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import { UpdateDatasetRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateDatasetCommandInput extends UpdateDatasetRequest {
}
export interface UpdateDatasetCommandOutput extends __MetadataBearer {
}
/**
 * <p>Updates the settings of a data set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, UpdateDatasetCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, UpdateDatasetCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const command = new UpdateDatasetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDatasetCommandInput} for command's `input` shape.
 * @see {@link UpdateDatasetCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDatasetCommand extends $Command<UpdateDatasetCommandInput, UpdateDatasetCommandOutput, IoTAnalyticsClientResolvedConfig> {
    readonly input: UpdateDatasetCommandInput;
    constructor(input: UpdateDatasetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTAnalyticsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDatasetCommandInput, UpdateDatasetCommandOutput>;
    private serialize;
    private deserialize;
}
