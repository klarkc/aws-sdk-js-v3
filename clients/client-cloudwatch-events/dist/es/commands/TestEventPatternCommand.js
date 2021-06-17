import { __extends } from "tslib";
import { TestEventPatternRequest, TestEventPatternResponse } from "../models/models_0";
import { deserializeAws_json1_1TestEventPatternCommand, serializeAws_json1_1TestEventPatternCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Tests whether the specified event pattern matches the provided event.</p>
 *          <p>Most services in AWS treat : or / as the same character in Amazon Resource Names (ARNs).
 *       However, EventBridge uses an exact match in event patterns and rules. Be sure to use the
 *       correct ARN characters when creating event patterns so that they match the ARN syntax in the
 *       event you want to match.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, TestEventPatternCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, TestEventPatternCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const command = new TestEventPatternCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestEventPatternCommandInput} for command's `input` shape.
 * @see {@link TestEventPatternCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var TestEventPatternCommand = /** @class */ (function (_super) {
    __extends(TestEventPatternCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function TestEventPatternCommand(input) {
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
    TestEventPatternCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchEventsClient";
        var commandName = "TestEventPatternCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: TestEventPatternRequest.filterSensitiveLog,
            outputFilterSensitiveLog: TestEventPatternResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    TestEventPatternCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1TestEventPatternCommand(input, context);
    };
    TestEventPatternCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1TestEventPatternCommand(output, context);
    };
    return TestEventPatternCommand;
}($Command));
export { TestEventPatternCommand };
//# sourceMappingURL=TestEventPatternCommand.js.map