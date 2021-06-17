import { __extends } from "tslib";
import { StopEdgePackagingJobRequest } from "../models/models_2";
import { deserializeAws_json1_1StopEdgePackagingJobCommand, serializeAws_json1_1StopEdgePackagingJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Request to stop an edge packaging job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopEdgePackagingJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopEdgePackagingJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new StopEdgePackagingJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopEdgePackagingJobCommandInput} for command's `input` shape.
 * @see {@link StopEdgePackagingJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopEdgePackagingJobCommand = /** @class */ (function (_super) {
    __extends(StopEdgePackagingJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopEdgePackagingJobCommand(input) {
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
    StopEdgePackagingJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "StopEdgePackagingJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopEdgePackagingJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopEdgePackagingJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopEdgePackagingJobCommand(input, context);
    };
    StopEdgePackagingJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopEdgePackagingJobCommand(output, context);
    };
    return StopEdgePackagingJobCommand;
}($Command));
export { StopEdgePackagingJobCommand };
//# sourceMappingURL=StopEdgePackagingJobCommand.js.map