import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { DisassociateLexBotRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateLexBotCommandInput extends DisassociateLexBotRequest {
}
export interface DisassociateLexBotCommandOutput extends __MetadataBearer {
}
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Revokes authorization from the specified instance to access the specified Amazon Lex bot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DisassociateLexBotCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DisassociateLexBotCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DisassociateLexBotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateLexBotCommandInput} for command's `input` shape.
 * @see {@link DisassociateLexBotCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateLexBotCommand extends $Command<DisassociateLexBotCommandInput, DisassociateLexBotCommandOutput, ConnectClientResolvedConfig> {
    readonly input: DisassociateLexBotCommandInput;
    constructor(input: DisassociateLexBotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateLexBotCommandInput, DisassociateLexBotCommandOutput>;
    private serialize;
    private deserialize;
}
