import { __extends } from "tslib";
import { TestIdentityProviderRequest, TestIdentityProviderResponse } from "../models/models_0";
import { deserializeAws_json1_1TestIdentityProviderCommand, serializeAws_json1_1TestIdentityProviderCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var TestIdentityProviderCommand = /** @class */ (function (_super) {
    __extends(TestIdentityProviderCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function TestIdentityProviderCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    TestIdentityProviderCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TransferClient";
        var commandName = "TestIdentityProviderCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: TestIdentityProviderRequest.filterSensitiveLog,
            outputFilterSensitiveLog: TestIdentityProviderResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    TestIdentityProviderCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1TestIdentityProviderCommand(input, context);
    };
    TestIdentityProviderCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1TestIdentityProviderCommand(output, context);
    };
    return TestIdentityProviderCommand;
}($Command));
export { TestIdentityProviderCommand };
//# sourceMappingURL=TestIdentityProviderCommand.js.map