import { KinesisAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsClient";
import { StopApplicationRequest, StopApplicationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopApplicationCommandInput extends StopApplicationRequest {
}
export interface StopApplicationCommandOutput extends StopApplicationResponse, __MetadataBearer {
}
/**
 * <note>
 *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
 *          </note>
 *         <p>Stops the application from processing input data. You can stop
 *             an application only if it is in the running state.
 *             You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to find the application state.
 *             After the application is stopped,
 *             Amazon Kinesis Analytics stops reading data from the input, the
 *             application stops processing data, and there is no output written to the destination. </p>
 *         <p>This operation requires permissions to perform the
 *             <code>kinesisanalytics:StopApplication</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsClient, StopApplicationCommand } from "@aws-sdk/client-kinesis-analytics"; // ES Modules import
 * // const { KinesisAnalyticsClient, StopApplicationCommand } = require("@aws-sdk/client-kinesis-analytics"); // CommonJS import
 * const client = new KinesisAnalyticsClient(config);
 * const command = new StopApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopApplicationCommandInput} for command's `input` shape.
 * @see {@link StopApplicationCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopApplicationCommand extends $Command<StopApplicationCommandInput, StopApplicationCommandOutput, KinesisAnalyticsClientResolvedConfig> {
    readonly input: StopApplicationCommandInput;
    constructor(input: StopApplicationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisAnalyticsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopApplicationCommandInput, StopApplicationCommandOutput>;
    private serialize;
    private deserialize;
}
