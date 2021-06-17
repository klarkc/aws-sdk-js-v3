import { __extends } from "tslib";
import { DescribeAlgorithmRequest, DescribeAlgorithmResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeAlgorithmCommand, serializeAws_json1_1DescribeAlgorithmCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the given algorithm.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeAlgorithmCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeAlgorithmCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new DescribeAlgorithmCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAlgorithmCommandInput} for command's `input` shape.
 * @see {@link DescribeAlgorithmCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAlgorithmCommand = /** @class */ (function (_super) {
    __extends(DescribeAlgorithmCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAlgorithmCommand(input) {
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
    DescribeAlgorithmCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PersonalizeClient";
        var commandName = "DescribeAlgorithmCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAlgorithmRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAlgorithmResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAlgorithmCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeAlgorithmCommand(input, context);
    };
    DescribeAlgorithmCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeAlgorithmCommand(output, context);
    };
    return DescribeAlgorithmCommand;
}($Command));
export { DescribeAlgorithmCommand };
//# sourceMappingURL=DescribeAlgorithmCommand.js.map