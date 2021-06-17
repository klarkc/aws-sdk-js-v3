import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { RegisterToWorkMailRequest, RegisterToWorkMailResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RegisterToWorkMailCommandInput extends RegisterToWorkMailRequest {
}
export interface RegisterToWorkMailCommandOutput extends RegisterToWorkMailResponse, __MetadataBearer {
}
/**
 * <p>Registers an existing and disabled user, group, or resource for Amazon WorkMail use by
 *          associating a mailbox and calendaring capabilities. It performs no change if the user,
 *          group, or resource is enabled and fails if the user, group, or resource is deleted. This
 *          operation results in the accumulation of costs. For more information, see <a href="https://aws.amazon.com/workmail/pricing">Pricing</a>. The equivalent console
 *          functionality for this operation is <i>Enable</i>. </p>
 *          <p>Users can either be created by calling the <a>CreateUser</a> API operation
 *          or they can be synchronized from your directory. For more information, see <a>DeregisterFromWorkMail</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, RegisterToWorkMailCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, RegisterToWorkMailCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new RegisterToWorkMailCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterToWorkMailCommandInput} for command's `input` shape.
 * @see {@link RegisterToWorkMailCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RegisterToWorkMailCommand extends $Command<RegisterToWorkMailCommandInput, RegisterToWorkMailCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: RegisterToWorkMailCommandInput;
    constructor(input: RegisterToWorkMailCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterToWorkMailCommandInput, RegisterToWorkMailCommandOutput>;
    private serialize;
    private deserialize;
}
