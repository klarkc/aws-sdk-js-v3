import { __extends } from "tslib";
import { DescribeActionRequest, DescribeActionResponse } from "../models/models_1";
import { deserializeAws_json1_1DescribeActionCommand, serializeAws_json1_1DescribeActionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes an action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeActionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeActionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeActionCommandInput} for command's `input` shape.
 * @see {@link DescribeActionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeActionCommand = /** @class */ (function (_super) {
    __extends(DescribeActionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeActionCommand(input) {
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
    DescribeActionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DescribeActionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeActionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeActionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeActionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeActionCommand(input, context);
    };
    DescribeActionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeActionCommand(output, context);
    };
    return DescribeActionCommand;
}($Command));
export { DescribeActionCommand };
//# sourceMappingURL=DescribeActionCommand.js.map