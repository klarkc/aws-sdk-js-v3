import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { DeregisterFromWorkMailRequest, DeregisterFromWorkMailResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeregisterFromWorkMailCommandInput extends DeregisterFromWorkMailRequest {
}
export interface DeregisterFromWorkMailCommandOutput extends DeregisterFromWorkMailResponse, __MetadataBearer {
}
/**
 * <p>Mark a user, group, or resource as no longer used in Amazon WorkMail. This action
 *          disassociates the mailbox and schedules it for clean-up. WorkMail keeps mailboxes for 30 days
 *          before they are permanently removed. The functionality in the console is
 *             <i>Disable</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DeregisterFromWorkMailCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DeregisterFromWorkMailCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new DeregisterFromWorkMailCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterFromWorkMailCommandInput} for command's `input` shape.
 * @see {@link DeregisterFromWorkMailCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeregisterFromWorkMailCommand extends $Command<DeregisterFromWorkMailCommandInput, DeregisterFromWorkMailCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: DeregisterFromWorkMailCommandInput;
    constructor(input: DeregisterFromWorkMailCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterFromWorkMailCommandInput, DeregisterFromWorkMailCommandOutput>;
    private serialize;
    private deserialize;
}
