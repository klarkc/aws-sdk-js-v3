import { __extends } from "tslib";
import { DescribeGatewayRequest, DescribeGatewayResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeGatewayCommand, serializeAws_restJson1DescribeGatewayCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about a gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribeGatewayCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribeGatewayCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new DescribeGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGatewayCommandInput} for command's `input` shape.
 * @see {@link DescribeGatewayCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeGatewayCommand = /** @class */ (function (_super) {
    __extends(DescribeGatewayCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeGatewayCommand(input) {
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
    DescribeGatewayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSiteWiseClient";
        var commandName = "DescribeGatewayCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeGatewayRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeGatewayResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeGatewayCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeGatewayCommand(input, context);
    };
    DescribeGatewayCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeGatewayCommand(output, context);
    };
    return DescribeGatewayCommand;
}($Command));
export { DescribeGatewayCommand };
//# sourceMappingURL=DescribeGatewayCommand.js.map