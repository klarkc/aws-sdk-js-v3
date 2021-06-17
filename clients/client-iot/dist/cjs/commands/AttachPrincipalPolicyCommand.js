"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachPrincipalPolicyCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * @deprecated
 *
 * <p>Attaches the specified policy to the specified principal (certificate or other
 *          credential).</p>
 *          <p>
 *             <b>Note:</b> This API is deprecated. Please use <a>AttachPolicy</a> instead.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, AttachPrincipalPolicyCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, AttachPrincipalPolicyCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new AttachPrincipalPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachPrincipalPolicyCommandInput} for command's `input` shape.
 * @see {@link AttachPrincipalPolicyCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
class AttachPrincipalPolicyCommand extends smithy_client_1.Command {
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
        const clientName = "IoTClient";
        const commandName = "AttachPrincipalPolicyCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AttachPrincipalPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1AttachPrincipalPolicyCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1AttachPrincipalPolicyCommand(output, context);
    }
}
exports.AttachPrincipalPolicyCommand = AttachPrincipalPolicyCommand;
//# sourceMappingURL=AttachPrincipalPolicyCommand.js.map