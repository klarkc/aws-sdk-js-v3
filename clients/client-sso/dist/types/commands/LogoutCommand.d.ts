import { SSOClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOClient";
import { LogoutRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface LogoutCommandInput extends LogoutRequest {
}
export interface LogoutCommandOutput extends __MetadataBearer {
}
/**
 * <p>Removes the client- and server-side session that is associated with the user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOClient, LogoutCommand } from "@aws-sdk/client-sso"; // ES Modules import
 * // const { SSOClient, LogoutCommand } = require("@aws-sdk/client-sso"); // CommonJS import
 * const client = new SSOClient(config);
 * const command = new LogoutCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link LogoutCommandInput} for command's `input` shape.
 * @see {@link LogoutCommandOutput} for command's `response` shape.
 * @see {@link SSOClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class LogoutCommand extends $Command<LogoutCommandInput, LogoutCommandOutput, SSOClientResolvedConfig> {
    readonly input: LogoutCommandInput;
    constructor(input: LogoutCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSOClientResolvedConfig, options?: __HttpHandlerOptions): Handler<LogoutCommandInput, LogoutCommandOutput>;
    private serialize;
    private deserialize;
}
