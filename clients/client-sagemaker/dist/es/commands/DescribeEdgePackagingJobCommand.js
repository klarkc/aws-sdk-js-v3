import { __extends } from "tslib";
import { DescribeEdgePackagingJobRequest, DescribeEdgePackagingJobResponse } from "../models/models_1";
import { deserializeAws_json1_1DescribeEdgePackagingJobCommand, serializeAws_json1_1DescribeEdgePackagingJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>A description of edge packaging jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeEdgePackagingJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeEdgePackagingJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeEdgePackagingJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEdgePackagingJobCommandInput} for command's `input` shape.
 * @see {@link DescribeEdgePackagingJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeEdgePackagingJobCommand = /** @class */ (function (_super) {
    __extends(DescribeEdgePackagingJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeEdgePackagingJobCommand(input) {
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
    DescribeEdgePackagingJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DescribeEdgePackagingJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeEdgePackagingJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeEdgePackagingJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeEdgePackagingJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeEdgePackagingJobCommand(input, context);
    };
    DescribeEdgePackagingJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeEdgePackagingJobCommand(output, context);
    };
    return DescribeEdgePackagingJobCommand;
}($Command));
export { DescribeEdgePackagingJobCommand };
//# sourceMappingURL=DescribeEdgePackagingJobCommand.js.map