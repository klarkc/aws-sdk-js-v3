import { __extends } from "tslib";
import { TestAuthorizationRequest, TestAuthorizationResponse } from "../models/models_2";
import { deserializeAws_restJson1TestAuthorizationCommand, serializeAws_restJson1TestAuthorizationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Tests if a specified principal is authorized to perform an AWS IoT action on a
 *          specified resource. Use this to test and debug the authorization behavior of devices that
 *          connect to the AWS IoT device gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, TestAuthorizationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, TestAuthorizationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new TestAuthorizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestAuthorizationCommandInput} for command's `input` shape.
 * @see {@link TestAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var TestAuthorizationCommand = /** @class */ (function (_super) {
    __extends(TestAuthorizationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function TestAuthorizationCommand(input) {
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
    TestAuthorizationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "TestAuthorizationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: TestAuthorizationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: TestAuthorizationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    TestAuthorizationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1TestAuthorizationCommand(input, context);
    };
    TestAuthorizationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1TestAuthorizationCommand(output, context);
    };
    return TestAuthorizationCommand;
}($Command));
export { TestAuthorizationCommand };
//# sourceMappingURL=TestAuthorizationCommand.js.map