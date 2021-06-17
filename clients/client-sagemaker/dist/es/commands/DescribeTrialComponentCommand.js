import { __extends } from "tslib";
import { DescribeTrialComponentRequest, DescribeTrialComponentResponse } from "../models/models_1";
import { deserializeAws_json1_1DescribeTrialComponentCommand, serializeAws_json1_1DescribeTrialComponentCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides a list of a trials component's properties.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeTrialComponentCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeTrialComponentCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeTrialComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTrialComponentCommandInput} for command's `input` shape.
 * @see {@link DescribeTrialComponentCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTrialComponentCommand = /** @class */ (function (_super) {
    __extends(DescribeTrialComponentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeTrialComponentCommand(input) {
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
    DescribeTrialComponentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DescribeTrialComponentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeTrialComponentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeTrialComponentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeTrialComponentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeTrialComponentCommand(input, context);
    };
    DescribeTrialComponentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeTrialComponentCommand(output, context);
    };
    return DescribeTrialComponentCommand;
}($Command));
export { DescribeTrialComponentCommand };
//# sourceMappingURL=DescribeTrialComponentCommand.js.map