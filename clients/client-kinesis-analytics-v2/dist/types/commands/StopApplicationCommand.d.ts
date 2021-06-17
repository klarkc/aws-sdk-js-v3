import { KinesisAnalyticsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsV2Client";
import { StopApplicationRequest, StopApplicationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopApplicationCommandInput extends StopApplicationRequest {
}
export interface StopApplicationCommandOutput extends StopApplicationResponse, __MetadataBearer {
}
/**
 * <p>Stops the application from processing data. You can stop
 *       an application only if it is in the running status, unless you set the <code>Force</code>
 *         parameter to <code>true</code>.</p>
 *          <p>You can use the <a>DescribeApplication</a> operation to find the application status.
 *        </p>
 *          <p>Kinesis Data Analytics takes a snapshot when the application is stopped, unless <code>Force</code> is set
 *           to <code>true</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, StopApplicationCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, StopApplicationCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const command = new StopApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopApplicationCommandInput} for command's `input` shape.
 * @see {@link StopApplicationCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopApplicationCommand extends $Command<StopApplicationCommandInput, StopApplicationCommandOutput, KinesisAnalyticsV2ClientResolvedConfig> {
    readonly input: StopApplicationCommandInput;
    constructor(input: StopApplicationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisAnalyticsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopApplicationCommandInput, StopApplicationCommandOutput>;
    private serialize;
    private deserialize;
}
