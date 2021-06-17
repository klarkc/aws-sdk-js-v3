"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcceptInvitationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Accepts an invitation for the member account to contribute data to a behavior graph.
 *          This operation can only be called by an invited member account. </p>
 *          <p>The request provides the ARN of behavior graph.</p>
 *          <p>The member account status in the graph must be <code>INVITED</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, AcceptInvitationCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, AcceptInvitationCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const command = new AcceptInvitationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptInvitationCommandInput} for command's `input` shape.
 * @see {@link AcceptInvitationCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
class AcceptInvitationCommand extends smithy_client_1.Command {
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
        const clientName = "DetectiveClient";
        const commandName = "AcceptInvitationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AcceptInvitationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1AcceptInvitationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1AcceptInvitationCommand(output, context);
    }
}
exports.AcceptInvitationCommand = AcceptInvitationCommand;
//# sourceMappingURL=AcceptInvitationCommand.js.map