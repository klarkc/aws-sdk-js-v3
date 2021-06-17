"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendActivationCodeCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Sends an activation code to a contact channel. The contact can use this code to activate
 *          the contact channel in the console or with the <code>ActivateChannel</code> action.
 *          Incident Manager can't engage a contact channel until it has been activated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, SendActivationCodeCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, SendActivationCodeCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new SendActivationCodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendActivationCodeCommandInput} for command's `input` shape.
 * @see {@link SendActivationCodeCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
class SendActivationCodeCommand extends smithy_client_1.Command {
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
        const clientName = "SSMContactsClient";
        const commandName = "SendActivationCodeCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.SendActivationCodeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.SendActivationCodeResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1SendActivationCodeCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1SendActivationCodeCommand(output, context);
    }
}
exports.SendActivationCodeCommand = SendActivationCodeCommand;
//# sourceMappingURL=SendActivationCodeCommand.js.map