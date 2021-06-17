import { __extends } from "tslib";
import { DescribeAcceleratorsRequest, DescribeAcceleratorsResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeAcceleratorsCommand, serializeAws_restJson1DescribeAcceleratorsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             Describes information over a provided set of accelerators belonging to an account.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticInferenceClient, DescribeAcceleratorsCommand } from "@aws-sdk/client-elastic-inference"; // ES Modules import
 * // const { ElasticInferenceClient, DescribeAcceleratorsCommand } = require("@aws-sdk/client-elastic-inference"); // CommonJS import
 * const client = new ElasticInferenceClient(config);
 * const command = new DescribeAcceleratorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAcceleratorsCommandInput} for command's `input` shape.
 * @see {@link DescribeAcceleratorsCommandOutput} for command's `response` shape.
 * @see {@link ElasticInferenceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAcceleratorsCommand = /** @class */ (function (_super) {
    __extends(DescribeAcceleratorsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAcceleratorsCommand(input) {
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
    DescribeAcceleratorsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticInferenceClient";
        var commandName = "DescribeAcceleratorsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAcceleratorsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAcceleratorsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAcceleratorsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeAcceleratorsCommand(input, context);
    };
    DescribeAcceleratorsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeAcceleratorsCommand(output, context);
    };
    return DescribeAcceleratorsCommand;
}($Command));
export { DescribeAcceleratorsCommand };
//# sourceMappingURL=DescribeAcceleratorsCommand.js.map