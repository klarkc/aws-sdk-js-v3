import { __extends } from "tslib";
import { DescribeVTLDevicesInput, DescribeVTLDevicesOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeVTLDevicesCommand, serializeAws_json1_1DescribeVTLDevicesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a description of virtual tape library (VTL) devices for the specified tape
 *          gateway. In the response, AWS Storage Gateway returns VTL device information.</p>
 *
 *          <p>This operation is only supported in the tape gateway type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeVTLDevicesCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeVTLDevicesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeVTLDevicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVTLDevicesCommandInput} for command's `input` shape.
 * @see {@link DescribeVTLDevicesCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeVTLDevicesCommand = /** @class */ (function (_super) {
    __extends(DescribeVTLDevicesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeVTLDevicesCommand(input) {
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
    DescribeVTLDevicesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "DescribeVTLDevicesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeVTLDevicesInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeVTLDevicesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeVTLDevicesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeVTLDevicesCommand(input, context);
    };
    DescribeVTLDevicesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeVTLDevicesCommand(output, context);
    };
    return DescribeVTLDevicesCommand;
}($Command));
export { DescribeVTLDevicesCommand };
//# sourceMappingURL=DescribeVTLDevicesCommand.js.map