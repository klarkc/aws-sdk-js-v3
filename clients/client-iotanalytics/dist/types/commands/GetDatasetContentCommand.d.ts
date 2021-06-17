import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import { GetDatasetContentRequest, GetDatasetContentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDatasetContentCommandInput extends GetDatasetContentRequest {
}
export interface GetDatasetContentCommandOutput extends GetDatasetContentResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the contents of a data set as presigned URIs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, GetDatasetContentCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, GetDatasetContentCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const command = new GetDatasetContentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDatasetContentCommandInput} for command's `input` shape.
 * @see {@link GetDatasetContentCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDatasetContentCommand extends $Command<GetDatasetContentCommandInput, GetDatasetContentCommandOutput, IoTAnalyticsClientResolvedConfig> {
    readonly input: GetDatasetContentCommandInput;
    constructor(input: GetDatasetContentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTAnalyticsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDatasetContentCommandInput, GetDatasetContentCommandOutput>;
    private serialize;
    private deserialize;
}
