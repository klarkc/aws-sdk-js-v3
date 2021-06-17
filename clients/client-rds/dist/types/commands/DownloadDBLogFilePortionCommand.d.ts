import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DownloadDBLogFilePortionDetails, DownloadDBLogFilePortionMessage } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DownloadDBLogFilePortionCommandInput extends DownloadDBLogFilePortionMessage {
}
export interface DownloadDBLogFilePortionCommandOutput extends DownloadDBLogFilePortionDetails, __MetadataBearer {
}
/**
 * <p>Downloads all or a portion of the specified log file, up to 1 MB in size.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DownloadDBLogFilePortionCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DownloadDBLogFilePortionCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DownloadDBLogFilePortionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DownloadDBLogFilePortionCommandInput} for command's `input` shape.
 * @see {@link DownloadDBLogFilePortionCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DownloadDBLogFilePortionCommand extends $Command<DownloadDBLogFilePortionCommandInput, DownloadDBLogFilePortionCommandOutput, RDSClientResolvedConfig> {
    readonly input: DownloadDBLogFilePortionCommandInput;
    constructor(input: DownloadDBLogFilePortionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DownloadDBLogFilePortionCommandInput, DownloadDBLogFilePortionCommandOutput>;
    private serialize;
    private deserialize;
}
