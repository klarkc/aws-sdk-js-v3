import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { StartActivityStreamRequest, StartActivityStreamResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartActivityStreamCommandInput extends StartActivityStreamRequest {
}
export interface StartActivityStreamCommandOutput extends StartActivityStreamResponse, __MetadataBearer {
}
/**
 * <p>Starts a database activity stream to monitor activity on the database.
 *             For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html">Database Activity Streams</a>
 *             in the <i>Amazon Aurora User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, StartActivityStreamCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, StartActivityStreamCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new StartActivityStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartActivityStreamCommandInput} for command's `input` shape.
 * @see {@link StartActivityStreamCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartActivityStreamCommand extends $Command<StartActivityStreamCommandInput, StartActivityStreamCommandOutput, RDSClientResolvedConfig> {
    readonly input: StartActivityStreamCommandInput;
    constructor(input: StartActivityStreamCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartActivityStreamCommandInput, StartActivityStreamCommandOutput>;
    private serialize;
    private deserialize;
}
