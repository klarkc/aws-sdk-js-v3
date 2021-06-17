"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisassociateMembershipCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Removes the member account from the specified behavior graph. This operation can only be
 *          called by a member account that has the <code>ENABLED</code> status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, DisassociateMembershipCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, DisassociateMembershipCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const command = new DisassociateMembershipCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateMembershipCommandInput} for command's `input` shape.
 * @see {@link DisassociateMembershipCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DisassociateMembershipCommand extends smithy_client_1.Command {
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
        const commandName = "DisassociateMembershipCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DisassociateMembershipRequest.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1DisassociateMembershipCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1DisassociateMembershipCommand(output, context);
    }
}
exports.DisassociateMembershipCommand = DisassociateMembershipCommand;
//# sourceMappingURL=DisassociateMembershipCommand.js.map