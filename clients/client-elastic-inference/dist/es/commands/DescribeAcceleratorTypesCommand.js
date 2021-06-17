import { __extends } from "tslib";
import { DescribeAcceleratorTypesRequest, DescribeAcceleratorTypesResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeAcceleratorTypesCommand, serializeAws_restJson1DescribeAcceleratorTypesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             Describes the accelerator types available in a given region, as well as their characteristics, such as memory and throughput.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticInferenceClient, DescribeAcceleratorTypesCommand } from "@aws-sdk/client-elastic-inference"; // ES Modules import
 * // const { ElasticInferenceClient, DescribeAcceleratorTypesCommand } = require("@aws-sdk/client-elastic-inference"); // CommonJS import
 * const client = new ElasticInferenceClient(config);
 * const command = new DescribeAcceleratorTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAcceleratorTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeAcceleratorTypesCommandOutput} for command's `response` shape.
 * @see {@link ElasticInferenceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAcceleratorTypesCommand = /** @class */ (function (_super) {
    __extends(DescribeAcceleratorTypesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAcceleratorTypesCommand(input) {
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
    DescribeAcceleratorTypesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticInferenceClient";
        var commandName = "DescribeAcceleratorTypesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAcceleratorTypesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAcceleratorTypesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAcceleratorTypesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeAcceleratorTypesCommand(input, context);
    };
    DescribeAcceleratorTypesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeAcceleratorTypesCommand(output, context);
    };
    return DescribeAcceleratorTypesCommand;
}($Command));
export { DescribeAcceleratorTypesCommand };
//# sourceMappingURL=DescribeAcceleratorTypesCommand.js.map