import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { LoggingStatus } from "../models/models_0";
import { EnableLoggingMessage } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface EnableLoggingCommandInput extends EnableLoggingMessage {
}
export interface EnableLoggingCommandOutput extends LoggingStatus, __MetadataBearer {
}
/**
 * <p>Starts logging information, such as queries and connection attempts, for the
 *             specified Amazon Redshift cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, EnableLoggingCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, EnableLoggingCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new EnableLoggingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableLoggingCommandInput} for command's `input` shape.
 * @see {@link EnableLoggingCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class EnableLoggingCommand extends $Command<EnableLoggingCommandInput, EnableLoggingCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: EnableLoggingCommandInput;
    constructor(input: EnableLoggingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableLoggingCommandInput, EnableLoggingCommandOutput>;
    private serialize;
    private deserialize;
}
