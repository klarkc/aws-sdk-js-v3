import { MacieClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MacieClient";
import { DisassociateMemberAccountRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateMemberAccountCommandInput extends DisassociateMemberAccountRequest {
}
export interface DisassociateMemberAccountCommandOutput extends __MetadataBearer {
}
/**
 * <p>Removes the specified member account from Amazon Macie Classic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MacieClient, DisassociateMemberAccountCommand } from "@aws-sdk/client-macie"; // ES Modules import
 * // const { MacieClient, DisassociateMemberAccountCommand } = require("@aws-sdk/client-macie"); // CommonJS import
 * const client = new MacieClient(config);
 * const command = new DisassociateMemberAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateMemberAccountCommandInput} for command's `input` shape.
 * @see {@link DisassociateMemberAccountCommandOutput} for command's `response` shape.
 * @see {@link MacieClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateMemberAccountCommand extends $Command<DisassociateMemberAccountCommandInput, DisassociateMemberAccountCommandOutput, MacieClientResolvedConfig> {
    readonly input: DisassociateMemberAccountCommandInput;
    constructor(input: DisassociateMemberAccountCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MacieClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateMemberAccountCommandInput, DisassociateMemberAccountCommandOutput>;
    private serialize;
    private deserialize;
}
