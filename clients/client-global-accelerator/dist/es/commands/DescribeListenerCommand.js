import { __extends } from "tslib";
import { DescribeListenerRequest, DescribeListenerResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeListenerCommand, serializeAws_json1_1DescribeListenerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describe a listener. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DescribeListenerCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DescribeListenerCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new DescribeListenerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeListenerCommandInput} for command's `input` shape.
 * @see {@link DescribeListenerCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeListenerCommand = /** @class */ (function (_super) {
    __extends(DescribeListenerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeListenerCommand(input) {
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
    DescribeListenerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlobalAcceleratorClient";
        var commandName = "DescribeListenerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeListenerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeListenerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeListenerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeListenerCommand(input, context);
    };
    DescribeListenerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeListenerCommand(output, context);
    };
    return DescribeListenerCommand;
}($Command));
export { DescribeListenerCommand };
//# sourceMappingURL=DescribeListenerCommand.js.map