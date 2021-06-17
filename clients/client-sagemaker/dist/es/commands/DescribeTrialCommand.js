import { __extends } from "tslib";
import { DescribeTrialRequest, DescribeTrialResponse } from "../models/models_1";
import { deserializeAws_json1_1DescribeTrialCommand, serializeAws_json1_1DescribeTrialCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides a list of a trial's properties.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeTrialCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeTrialCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeTrialCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTrialCommandInput} for command's `input` shape.
 * @see {@link DescribeTrialCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTrialCommand = /** @class */ (function (_super) {
    __extends(DescribeTrialCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeTrialCommand(input) {
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
    DescribeTrialCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DescribeTrialCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeTrialRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeTrialResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeTrialCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeTrialCommand(input, context);
    };
    DescribeTrialCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeTrialCommand(output, context);
    };
    return DescribeTrialCommand;
}($Command));
export { DescribeTrialCommand };
//# sourceMappingURL=DescribeTrialCommand.js.map