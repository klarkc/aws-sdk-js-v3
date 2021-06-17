import { __extends } from "tslib";
import { TestInvokeAuthorizerRequest, TestInvokeAuthorizerResponse } from "../models/models_2";
import { deserializeAws_restJson1TestInvokeAuthorizerCommand, serializeAws_restJson1TestInvokeAuthorizerCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Tests a custom authorization behavior by invoking a specified custom authorizer. Use
 *          this to test and debug the custom authorization behavior of devices that connect to the AWS
 *          IoT device gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, TestInvokeAuthorizerCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, TestInvokeAuthorizerCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new TestInvokeAuthorizerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestInvokeAuthorizerCommandInput} for command's `input` shape.
 * @see {@link TestInvokeAuthorizerCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var TestInvokeAuthorizerCommand = /** @class */ (function (_super) {
    __extends(TestInvokeAuthorizerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function TestInvokeAuthorizerCommand(input) {
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
    TestInvokeAuthorizerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "TestInvokeAuthorizerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: TestInvokeAuthorizerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: TestInvokeAuthorizerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    TestInvokeAuthorizerCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1TestInvokeAuthorizerCommand(input, context);
    };
    TestInvokeAuthorizerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1TestInvokeAuthorizerCommand(output, context);
    };
    return TestInvokeAuthorizerCommand;
}($Command));
export { TestInvokeAuthorizerCommand };
//# sourceMappingURL=TestInvokeAuthorizerCommand.js.map