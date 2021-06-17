import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { StopActivityStreamRequest, StopActivityStreamResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopActivityStreamCommandInput extends StopActivityStreamRequest {
}
export interface StopActivityStreamCommandOutput extends StopActivityStreamResponse, __MetadataBearer {
}
/**
 * <p>Stops a database activity stream that was started using the AWS console,
 *             the <code>start-activity-stream</code> AWS CLI command, or the <code>StartActivityStream</code> action.</p>
 *         <p>For more information, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html">Database Activity Streams</a>
 *             in the <i>Amazon Aurora User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, StopActivityStreamCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, StopActivityStreamCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new StopActivityStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopActivityStreamCommandInput} for command's `input` shape.
 * @see {@link StopActivityStreamCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopActivityStreamCommand extends $Command<StopActivityStreamCommandInput, StopActivityStreamCommandOutput, RDSClientResolvedConfig> {
    readonly input: StopActivityStreamCommandInput;
    constructor(input: StopActivityStreamCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopActivityStreamCommandInput, StopActivityStreamCommandOutput>;
    private serialize;
    private deserialize;
}
