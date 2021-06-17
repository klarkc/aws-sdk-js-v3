import { __extends } from "tslib";
import { DescribeContextRequest, DescribeContextResponse } from "../models/models_1";
import { deserializeAws_json1_1DescribeContextCommand, serializeAws_json1_1DescribeContextCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a context.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeContextCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeContextCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeContextCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeContextCommandInput} for command's `input` shape.
 * @see {@link DescribeContextCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeContextCommand = /** @class */ (function (_super) {
    __extends(DescribeContextCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeContextCommand(input) {
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
    DescribeContextCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DescribeContextCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeContextRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeContextResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeContextCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeContextCommand(input, context);
    };
    DescribeContextCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeContextCommand(output, context);
    };
    return DescribeContextCommand;
}($Command));
export { DescribeContextCommand };
//# sourceMappingURL=DescribeContextCommand.js.map