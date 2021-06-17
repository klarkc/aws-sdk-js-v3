import { __extends } from "tslib";
import { DescribeNamespaceRequest, DescribeNamespaceResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeNamespaceCommand, serializeAws_json1_1DescribeNamespaceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the latest version of the user's namespace and the public version that it is tracking.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, DescribeNamespaceCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, DescribeNamespaceCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new DescribeNamespaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNamespaceCommandInput} for command's `input` shape.
 * @see {@link DescribeNamespaceCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeNamespaceCommand = /** @class */ (function (_super) {
    __extends(DescribeNamespaceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeNamespaceCommand(input) {
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
    DescribeNamespaceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTThingsGraphClient";
        var commandName = "DescribeNamespaceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeNamespaceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeNamespaceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeNamespaceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeNamespaceCommand(input, context);
    };
    DescribeNamespaceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeNamespaceCommand(output, context);
    };
    return DescribeNamespaceCommand;
}($Command));
export { DescribeNamespaceCommand };
//# sourceMappingURL=DescribeNamespaceCommand.js.map