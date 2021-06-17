import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";
import { SignOutUserRequest, SignOutUserResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SignOutUserCommandInput extends SignOutUserRequest {
}
export interface SignOutUserCommandOutput extends SignOutUserResponse, __MetadataBearer {
}
/**
 * <p>Signs the user out from all of their devices. The user can sign in again if they have
 *             valid credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, SignOutUserCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, SignOutUserCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new SignOutUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SignOutUserCommandInput} for command's `input` shape.
 * @see {@link SignOutUserCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SignOutUserCommand extends $Command<SignOutUserCommandInput, SignOutUserCommandOutput, WorkLinkClientResolvedConfig> {
    readonly input: SignOutUserCommandInput;
    constructor(input: SignOutUserCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkLinkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SignOutUserCommandInput, SignOutUserCommandOutput>;
    private serialize;
    private deserialize;
}
