"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetPasswordCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Allows the administrator to reset the password for a user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, ResetPasswordCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, ResetPasswordCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new ResetPasswordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetPasswordCommandInput} for command's `input` shape.
 * @see {@link ResetPasswordCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ResetPasswordCommand extends smithy_client_1.Command {
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
        const clientName = "WorkMailClient";
        const commandName = "ResetPasswordCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ResetPasswordRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ResetPasswordResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ResetPasswordCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ResetPasswordCommand(output, context);
    }
}
exports.ResetPasswordCommand = ResetPasswordCommand;
//# sourceMappingURL=ResetPasswordCommand.js.map