import { KinesisAnalyticsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsV2Client";
import { AddApplicationInputRequest, AddApplicationInputResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AddApplicationInputCommandInput extends AddApplicationInputRequest {
}
export interface AddApplicationInputCommandOutput extends AddApplicationInputResponse, __MetadataBearer {
}
/**
 * <p>
 *       Adds a streaming source to your SQL-based Kinesis Data Analytics application.
 *     </p>
 *          <p>You can add a streaming source when you create an application, or you can use this
 *       operation to add a streaming source after you create an application. For more information, see
 *         <a>CreateApplication</a>.</p>
 *          <p>Any configuration update, including adding a streaming source using this operation,
 *       results in a new version of the application. You can use the <a>DescribeApplication</a> operation
 *       to find the current application version.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, AddApplicationInputCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, AddApplicationInputCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const command = new AddApplicationInputCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddApplicationInputCommandInput} for command's `input` shape.
 * @see {@link AddApplicationInputCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AddApplicationInputCommand extends $Command<AddApplicationInputCommandInput, AddApplicationInputCommandOutput, KinesisAnalyticsV2ClientResolvedConfig> {
    readonly input: AddApplicationInputCommandInput;
    constructor(input: AddApplicationInputCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisAnalyticsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddApplicationInputCommandInput, AddApplicationInputCommandOutput>;
    private serialize;
    private deserialize;
}
