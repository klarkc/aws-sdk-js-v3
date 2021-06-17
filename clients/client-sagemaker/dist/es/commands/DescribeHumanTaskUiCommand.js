import { __extends } from "tslib";
import { DescribeHumanTaskUiRequest, DescribeHumanTaskUiResponse } from "../models/models_1";
import { deserializeAws_json1_1DescribeHumanTaskUiCommand, serializeAws_json1_1DescribeHumanTaskUiCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the requested human task user interface (worker task template).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeHumanTaskUiCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeHumanTaskUiCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeHumanTaskUiCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeHumanTaskUiCommandInput} for command's `input` shape.
 * @see {@link DescribeHumanTaskUiCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeHumanTaskUiCommand = /** @class */ (function (_super) {
    __extends(DescribeHumanTaskUiCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeHumanTaskUiCommand(input) {
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
    DescribeHumanTaskUiCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DescribeHumanTaskUiCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeHumanTaskUiRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeHumanTaskUiResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeHumanTaskUiCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeHumanTaskUiCommand(input, context);
    };
    DescribeHumanTaskUiCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeHumanTaskUiCommand(output, context);
    };
    return DescribeHumanTaskUiCommand;
}($Command));
export { DescribeHumanTaskUiCommand };
//# sourceMappingURL=DescribeHumanTaskUiCommand.js.map