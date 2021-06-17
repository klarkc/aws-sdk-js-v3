import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { LoggingStatus } from "../models/models_0";
import { DisableLoggingMessage } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisableLoggingCommandInput extends DisableLoggingMessage {
}
export interface DisableLoggingCommandOutput extends LoggingStatus, __MetadataBearer {
}
/**
 * <p>Stops logging information, such as queries and connection attempts, for the
 *             specified Amazon Redshift cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DisableLoggingCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DisableLoggingCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DisableLoggingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableLoggingCommandInput} for command's `input` shape.
 * @see {@link DisableLoggingCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisableLoggingCommand extends $Command<DisableLoggingCommandInput, DisableLoggingCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DisableLoggingCommandInput;
    constructor(input: DisableLoggingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableLoggingCommandInput, DisableLoggingCommandOutput>;
    private serialize;
    private deserialize;
}
