import { __extends } from "tslib";
import { DescribeAppImageConfigRequest, DescribeAppImageConfigResponse } from "../models/models_1";
import { deserializeAws_json1_1DescribeAppImageConfigCommand, serializeAws_json1_1DescribeAppImageConfigCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes an AppImageConfig.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeAppImageConfigCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeAppImageConfigCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeAppImageConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAppImageConfigCommandInput} for command's `input` shape.
 * @see {@link DescribeAppImageConfigCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAppImageConfigCommand = /** @class */ (function (_super) {
    __extends(DescribeAppImageConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAppImageConfigCommand(input) {
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
    DescribeAppImageConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DescribeAppImageConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAppImageConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAppImageConfigResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAppImageConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeAppImageConfigCommand(input, context);
    };
    DescribeAppImageConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeAppImageConfigCommand(output, context);
    };
    return DescribeAppImageConfigCommand;
}($Command));
export { DescribeAppImageConfigCommand };
//# sourceMappingURL=DescribeAppImageConfigCommand.js.map