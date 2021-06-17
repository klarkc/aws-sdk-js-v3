import { __extends } from "tslib";
import { DescribeAppRequest, DescribeAppResponse } from "../models/models_1";
import { deserializeAws_json1_1DescribeAppCommand, serializeAws_json1_1DescribeAppCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the app.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeAppCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeAppCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeAppCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAppCommandInput} for command's `input` shape.
 * @see {@link DescribeAppCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAppCommand = /** @class */ (function (_super) {
    __extends(DescribeAppCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAppCommand(input) {
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
    DescribeAppCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DescribeAppCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAppRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAppResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAppCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeAppCommand(input, context);
    };
    DescribeAppCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeAppCommand(output, context);
    };
    return DescribeAppCommand;
}($Command));
export { DescribeAppCommand };
//# sourceMappingURL=DescribeAppCommand.js.map