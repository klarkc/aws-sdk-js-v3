"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeclineInvitationsCommand = void 0;
const models_0_1 = require("../models/models_0");
const models_1_1 = require("../models/models_1");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Declines invitations to become a member account.</p>
 *          <p>This operation is only used by accounts that are not part of an organization.
 *          Organization accounts do not receive invitations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DeclineInvitationsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DeclineInvitationsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new DeclineInvitationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeclineInvitationsCommandInput} for command's `input` shape.
 * @see {@link DeclineInvitationsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeclineInvitationsCommand extends smithy_client_1.Command {
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
        const commandName = "DeclineInvitationsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeclineInvitationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.DeclineInvitationsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1DeclineInvitationsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1DeclineInvitationsCommand(output, context);
    }
}
exports.DeclineInvitationsCommand = DeclineInvitationsCommand;
//# sourceMappingURL=DeclineInvitationsCommand.js.map