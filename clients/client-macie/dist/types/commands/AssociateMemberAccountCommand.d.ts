import { MacieClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MacieClient";
import { AssociateMemberAccountRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateMemberAccountCommandInput extends AssociateMemberAccountRequest {
}
export interface AssociateMemberAccountCommandOutput extends __MetadataBearer {
}
/**
 * <p>Associates a specified AWS account with Amazon Macie Classic as a member
 *       account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MacieClient, AssociateMemberAccountCommand } from "@aws-sdk/client-macie"; // ES Modules import
 * // const { MacieClient, AssociateMemberAccountCommand } = require("@aws-sdk/client-macie"); // CommonJS import
 * const client = new MacieClient(config);
 * const command = new AssociateMemberAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateMemberAccountCommandInput} for command's `input` shape.
 * @see {@link AssociateMemberAccountCommandOutput} for command's `response` shape.
 * @see {@link MacieClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateMemberAccountCommand extends $Command<AssociateMemberAccountCommandInput, AssociateMemberAccountCommandOutput, MacieClientResolvedConfig> {
    readonly input: AssociateMemberAccountCommandInput;
    constructor(input: AssociateMemberAccountCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MacieClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateMemberAccountCommandInput, AssociateMemberAccountCommandOutput>;
    private serialize;
    private deserialize;
}
