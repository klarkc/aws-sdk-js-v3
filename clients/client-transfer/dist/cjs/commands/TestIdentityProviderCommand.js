"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestIdentityProviderCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>If the <code>IdentityProviderType</code> of a file transfer protocol-enabled server is
 *         <code>AWS_DIRECTORY_SERVICE</code> or <code>API_Gateway</code>, tests whether your identity
 *       provider is set up successfully. We highly recommend that you call this operation to test your
 *       authentication method as soon as you create your server. By doing so, you can troubleshoot
 *       issues with the identity provider integration to ensure that your users can successfully use
 *       the service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, TestIdentityProviderCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, TestIdentityProviderCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new TestIdentityProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestIdentityProviderCommandInput} for command's `input` shape.
 * @see {@link TestIdentityProviderCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
class TestIdentityProviderCommand extends smithy_client_1.Command {
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
        const clientName = "TransferClient";
        const commandName = "TestIdentityProviderCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.TestIdentityProviderRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.TestIdentityProviderResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1TestIdentityProviderCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1TestIdentityProviderCommand(output, context);
    }
}
exports.TestIdentityProviderCommand = TestIdentityProviderCommand;
//# sourceMappingURL=TestIdentityProviderCommand.js.map