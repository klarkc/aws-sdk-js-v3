import { __extends } from "tslib";
import { TestCustomDataIdentifierRequest, TestCustomDataIdentifierResponse } from "../models/models_0";
import { deserializeAws_restJson1TestCustomDataIdentifierCommand, serializeAws_restJson1TestCustomDataIdentifierCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Tests a custom data identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, TestCustomDataIdentifierCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, TestCustomDataIdentifierCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new TestCustomDataIdentifierCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestCustomDataIdentifierCommandInput} for command's `input` shape.
 * @see {@link TestCustomDataIdentifierCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var TestCustomDataIdentifierCommand = /** @class */ (function (_super) {
    __extends(TestCustomDataIdentifierCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function TestCustomDataIdentifierCommand(input) {
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
    TestCustomDataIdentifierCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Macie2Client";
        var commandName = "TestCustomDataIdentifierCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: TestCustomDataIdentifierRequest.filterSensitiveLog,
            outputFilterSensitiveLog: TestCustomDataIdentifierResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    TestCustomDataIdentifierCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1TestCustomDataIdentifierCommand(input, context);
    };
    TestCustomDataIdentifierCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1TestCustomDataIdentifierCommand(output, context);
    };
    return TestCustomDataIdentifierCommand;
}($Command));
export { TestCustomDataIdentifierCommand };
//# sourceMappingURL=TestCustomDataIdentifierCommand.js.map