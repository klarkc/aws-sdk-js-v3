import { __extends } from "tslib";
import { DescribeGatewayInformationInput, DescribeGatewayInformationOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeGatewayInformationCommand, serializeAws_json1_1DescribeGatewayInformationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns metadata about a gateway such as its name, network interfaces, configured time
 *          zone, and the state (whether the gateway is running or not). To specify which gateway to
 *          describe, use the Amazon Resource Name (ARN) of the gateway in your request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeGatewayInformationCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeGatewayInformationCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeGatewayInformationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGatewayInformationCommandInput} for command's `input` shape.
 * @see {@link DescribeGatewayInformationCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeGatewayInformationCommand = /** @class */ (function (_super) {
    __extends(DescribeGatewayInformationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeGatewayInformationCommand(input) {
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
    DescribeGatewayInformationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "DescribeGatewayInformationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeGatewayInformationInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeGatewayInformationOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeGatewayInformationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeGatewayInformationCommand(input, context);
    };
    DescribeGatewayInformationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeGatewayInformationCommand(output, context);
    };
    return DescribeGatewayInformationCommand;
}($Command));
export { DescribeGatewayInformationCommand };
//# sourceMappingURL=DescribeGatewayInformationCommand.js.map