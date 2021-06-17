import { KinesisAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsClient";
import { AddApplicationInputRequest, AddApplicationInputResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AddApplicationInputCommandInput extends AddApplicationInputRequest {
}
export interface AddApplicationInputCommandOutput extends AddApplicationInputResponse, __MetadataBearer {
}
/**
 * <note>
 *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
 *          </note>
 *         <p>
 *             Adds a streaming source to your Amazon Kinesis application.
 *             For conceptual information,
 *             see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.
 *         </p>
 *         <p>You can add a streaming source either when you create an application or you can use
 *             this operation to add a streaming source after you create an application. For more information, see
 *            <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_CreateApplication.html">CreateApplication</a>.</p>
 *         <p>Any configuration update, including adding a streaming source using this operation,
 *             results in a new version of the application. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation
 *             to find the current application version.
 *         </p>
 *         <p>This operation requires permissions to perform the
 *             <code>kinesisanalytics:AddApplicationInput</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsClient, AddApplicationInputCommand } from "@aws-sdk/client-kinesis-analytics"; // ES Modules import
 * // const { KinesisAnalyticsClient, AddApplicationInputCommand } = require("@aws-sdk/client-kinesis-analytics"); // CommonJS import
 * const client = new KinesisAnalyticsClient(config);
 * const command = new AddApplicationInputCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddApplicationInputCommandInput} for command's `input` shape.
 * @see {@link AddApplicationInputCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AddApplicationInputCommand extends $Command<AddApplicationInputCommandInput, AddApplicationInputCommandOutput, KinesisAnalyticsClientResolvedConfig> {
    readonly input: AddApplicationInputCommandInput;
    constructor(input: AddApplicationInputCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisAnalyticsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddApplicationInputCommandInput, AddApplicationInputCommandOutput>;
    private serialize;
    private deserialize;
}
