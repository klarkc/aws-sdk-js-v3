import { __extends } from "tslib";
import { DescribeExperimentRequest, DescribeExperimentResponse } from "../models/models_1";
import { deserializeAws_json1_1DescribeExperimentCommand, serializeAws_json1_1DescribeExperimentCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides a list of an experiment's properties.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeExperimentCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeExperimentCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeExperimentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeExperimentCommandInput} for command's `input` shape.
 * @see {@link DescribeExperimentCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeExperimentCommand = /** @class */ (function (_super) {
    __extends(DescribeExperimentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeExperimentCommand(input) {
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
    DescribeExperimentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DescribeExperimentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeExperimentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeExperimentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeExperimentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeExperimentCommand(input, context);
    };
    DescribeExperimentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeExperimentCommand(output, context);
    };
    return DescribeExperimentCommand;
}($Command));
export { DescribeExperimentCommand };
//# sourceMappingURL=DescribeExperimentCommand.js.map