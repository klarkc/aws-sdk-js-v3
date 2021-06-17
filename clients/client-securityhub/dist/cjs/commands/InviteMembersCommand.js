"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InviteMembersCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Invites other AWS accounts to become member accounts for the Security Hub administrator account that
 *          the invitation is sent from.</p>
 *          <p>This operation is only used to invite accounts that do not belong to an organization.
 *          Organization accounts do not receive invitations.</p>
 *          <p>Before you can use this action to invite a member, you must first use the <code>
 *                <a>CreateMembers</a>
 *             </code> action to create the member account in Security Hub.</p>
 *          <p>When the account owner enables Security Hub and accepts the invitation to become a member
 *          account, the administrator account can view the findings generated from the member account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, InviteMembersCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, InviteMembersCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new InviteMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InviteMembersCommandInput} for command's `input` shape.
 * @see {@link InviteMembersCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
class InviteMembersCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "SecurityHubClient";
        const commandName = "InviteMembersCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.InviteMembersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.InviteMembersResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1InviteMembersCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1InviteMembersCommand(output, context);
    }
}
exports.InviteMembersCommand = InviteMembersCommand;
//# sourceMappingURL=InviteMembersCommand.js.map