"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetHostnameSuggestionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Gets a generated host name for the specified layer, based on the current host name theme.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, GetHostnameSuggestionCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, GetHostnameSuggestionCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new GetHostnameSuggestionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetHostnameSuggestionCommandInput} for command's `input` shape.
 * @see {@link GetHostnameSuggestionCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetHostnameSuggestionCommand extends smithy_client_1.Command {
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
        const clientName = "OpsWorksClient";
        const commandName = "GetHostnameSuggestionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetHostnameSuggestionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetHostnameSuggestionResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1GetHostnameSuggestionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1GetHostnameSuggestionCommand(output, context);
    }
}
exports.GetHostnameSuggestionCommand = GetHostnameSuggestionCommand;
//# sourceMappingURL=GetHostnameSuggestionCommand.js.map