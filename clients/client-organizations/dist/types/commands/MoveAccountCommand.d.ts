import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { MoveAccountRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface MoveAccountCommandInput extends MoveAccountRequest {
}
export interface MoveAccountCommandOutput extends __MetadataBearer {
}
/**
 * <p>Moves an account from its current source parent root or organizational unit (OU) to
 *             the specified destination parent root or OU.</p>
 *         <p>This operation can be called only from the organization's management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, MoveAccountCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, MoveAccountCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new MoveAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link MoveAccountCommandInput} for command's `input` shape.
 * @see {@link MoveAccountCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class MoveAccountCommand extends $Command<MoveAccountCommandInput, MoveAccountCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: MoveAccountCommandInput;
    constructor(input: MoveAccountCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<MoveAccountCommandInput, MoveAccountCommandOutput>;
    private serialize;
    private deserialize;
}
