import { KinesisAnalyticsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsV2Client";
import { StartApplicationRequest, StartApplicationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartApplicationCommandInput extends StartApplicationRequest {
}
export interface StartApplicationCommandOutput extends StartApplicationResponse, __MetadataBearer {
}
/**
 * <p>Starts the specified Kinesis Data Analytics application. After creating an application, you must exclusively call this operation to
 *       start your application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, StartApplicationCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, StartApplicationCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const command = new StartApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartApplicationCommandInput} for command's `input` shape.
 * @see {@link StartApplicationCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartApplicationCommand extends $Command<StartApplicationCommandInput, StartApplicationCommandOutput, KinesisAnalyticsV2ClientResolvedConfig> {
    readonly input: StartApplicationCommandInput;
    constructor(input: StartApplicationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisAnalyticsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartApplicationCommandInput, StartApplicationCommandOutput>;
    private serialize;
    private deserialize;
}
