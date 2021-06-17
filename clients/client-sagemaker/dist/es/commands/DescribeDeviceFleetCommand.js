import { __extends } from "tslib";
import { DescribeDeviceFleetRequest, DescribeDeviceFleetResponse } from "../models/models_1";
import { deserializeAws_json1_1DescribeDeviceFleetCommand, serializeAws_json1_1DescribeDeviceFleetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>A description of the fleet the device belongs to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeDeviceFleetCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeDeviceFleetCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeDeviceFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDeviceFleetCommandInput} for command's `input` shape.
 * @see {@link DescribeDeviceFleetCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDeviceFleetCommand = /** @class */ (function (_super) {
    __extends(DescribeDeviceFleetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDeviceFleetCommand(input) {
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
    DescribeDeviceFleetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DescribeDeviceFleetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDeviceFleetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDeviceFleetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDeviceFleetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeDeviceFleetCommand(input, context);
    };
    DescribeDeviceFleetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeDeviceFleetCommand(output, context);
    };
    return DescribeDeviceFleetCommand;
}($Command));
export { DescribeDeviceFleetCommand };
//# sourceMappingURL=DescribeDeviceFleetCommand.js.map