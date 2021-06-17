import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { DescribeDestinationsRequest, DescribeDestinationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDestinationsCommandInput extends DescribeDestinationsRequest {
}
export interface DescribeDestinationsCommandOutput extends DescribeDestinationsResponse, __MetadataBearer {
}
/**
 * <p>Lists all your destinations. The results are ASCII-sorted by destination name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DescribeDestinationsCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DescribeDestinationsCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const command = new DescribeDestinationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDestinationsCommandInput} for command's `input` shape.
 * @see {@link DescribeDestinationsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDestinationsCommand extends $Command<DescribeDestinationsCommandInput, DescribeDestinationsCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: DescribeDestinationsCommandInput;
    constructor(input: DescribeDestinationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDestinationsCommandInput, DescribeDestinationsCommandOutput>;
    private serialize;
    private deserialize;
}
