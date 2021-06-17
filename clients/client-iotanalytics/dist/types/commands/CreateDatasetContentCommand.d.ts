import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import { CreateDatasetContentRequest, CreateDatasetContentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDatasetContentCommandInput extends CreateDatasetContentRequest {
}
export interface CreateDatasetContentCommandOutput extends CreateDatasetContentResponse, __MetadataBearer {
}
/**
 * <p>Creates the content of a data set by applying a <code>queryAction</code> (a SQL query) or
 *       a <code>containerAction</code> (executing a containerized application).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, CreateDatasetContentCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, CreateDatasetContentCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const command = new CreateDatasetContentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDatasetContentCommandInput} for command's `input` shape.
 * @see {@link CreateDatasetContentCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDatasetContentCommand extends $Command<CreateDatasetContentCommandInput, CreateDatasetContentCommandOutput, IoTAnalyticsClientResolvedConfig> {
    readonly input: CreateDatasetContentCommandInput;
    constructor(input: CreateDatasetContentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTAnalyticsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDatasetContentCommandInput, CreateDatasetContentCommandOutput>;
    private serialize;
    private deserialize;
}
