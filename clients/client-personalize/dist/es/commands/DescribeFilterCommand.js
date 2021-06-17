import { __extends } from "tslib";
import { DescribeFilterRequest, DescribeFilterResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeFilterCommand, serializeAws_json1_1DescribeFilterCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a filter's properties.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeFilterCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeFilterCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new DescribeFilterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFilterCommandInput} for command's `input` shape.
 * @see {@link DescribeFilterCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeFilterCommand = /** @class */ (function (_super) {
    __extends(DescribeFilterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeFilterCommand(input) {
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
    DescribeFilterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PersonalizeClient";
        var commandName = "DescribeFilterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeFilterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeFilterResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeFilterCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeFilterCommand(input, context);
    };
    DescribeFilterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeFilterCommand(output, context);
    };
    return DescribeFilterCommand;
}($Command));
export { DescribeFilterCommand };
//# sourceMappingURL=DescribeFilterCommand.js.map