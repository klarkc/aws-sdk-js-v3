import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import { DescribeDatastoreRequest, DescribeDatastoreResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDatastoreCommandInput extends DescribeDatastoreRequest {
}
export interface DescribeDatastoreCommandOutput extends DescribeDatastoreResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about a data store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, DescribeDatastoreCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, DescribeDatastoreCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const command = new DescribeDatastoreCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDatastoreCommandInput} for command's `input` shape.
 * @see {@link DescribeDatastoreCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDatastoreCommand extends $Command<DescribeDatastoreCommandInput, DescribeDatastoreCommandOutput, IoTAnalyticsClientResolvedConfig> {
    readonly input: DescribeDatastoreCommandInput;
    constructor(input: DescribeDatastoreCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTAnalyticsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDatastoreCommandInput, DescribeDatastoreCommandOutput>;
    private serialize;
    private deserialize;
}
