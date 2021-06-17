import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { AssociateLexBotRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateLexBotCommandInput extends AssociateLexBotRequest {
}
export interface AssociateLexBotCommandOutput extends __MetadataBearer {
}
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Allows the specified Amazon Connect instance to access the specified Amazon Lex bot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, AssociateLexBotCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, AssociateLexBotCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new AssociateLexBotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateLexBotCommandInput} for command's `input` shape.
 * @see {@link AssociateLexBotCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateLexBotCommand extends $Command<AssociateLexBotCommandInput, AssociateLexBotCommandOutput, ConnectClientResolvedConfig> {
    readonly input: AssociateLexBotCommandInput;
    constructor(input: AssociateLexBotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateLexBotCommandInput, AssociateLexBotCommandOutput>;
    private serialize;
    private deserialize;
}
