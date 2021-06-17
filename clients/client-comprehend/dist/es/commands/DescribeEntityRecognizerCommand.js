import { __extends } from "tslib";
import { DescribeEntityRecognizerRequest, DescribeEntityRecognizerResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeEntityRecognizerCommand, serializeAws_json1_1DescribeEntityRecognizerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides details about an entity recognizer including status, S3 buckets containing
 *       training data, recognizer metadata, metrics, and so on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DescribeEntityRecognizerCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DescribeEntityRecognizerCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new DescribeEntityRecognizerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEntityRecognizerCommandInput} for command's `input` shape.
 * @see {@link DescribeEntityRecognizerCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeEntityRecognizerCommand = /** @class */ (function (_super) {
    __extends(DescribeEntityRecognizerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeEntityRecognizerCommand(input) {
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
    DescribeEntityRecognizerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComprehendClient";
        var commandName = "DescribeEntityRecognizerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeEntityRecognizerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeEntityRecognizerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeEntityRecognizerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeEntityRecognizerCommand(input, context);
    };
    DescribeEntityRecognizerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeEntityRecognizerCommand(output, context);
    };
    return DescribeEntityRecognizerCommand;
}($Command));
export { DescribeEntityRecognizerCommand };
//# sourceMappingURL=DescribeEntityRecognizerCommand.js.map