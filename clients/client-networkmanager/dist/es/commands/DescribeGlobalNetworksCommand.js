import { __extends } from "tslib";
import { DescribeGlobalNetworksRequest, DescribeGlobalNetworksResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeGlobalNetworksCommand, serializeAws_restJson1DescribeGlobalNetworksCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes one or more global networks. By default, all global networks are
 *             described. To describe the objects in your global network, you must use the appropriate
 *                 <code>Get*</code> action. For example, to list the transit gateways in your global
 *             network, use <a>GetTransitGatewayRegistrations</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DescribeGlobalNetworksCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DescribeGlobalNetworksCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new DescribeGlobalNetworksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGlobalNetworksCommandInput} for command's `input` shape.
 * @see {@link DescribeGlobalNetworksCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeGlobalNetworksCommand = /** @class */ (function (_super) {
    __extends(DescribeGlobalNetworksCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeGlobalNetworksCommand(input) {
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
    DescribeGlobalNetworksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkManagerClient";
        var commandName = "DescribeGlobalNetworksCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeGlobalNetworksRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeGlobalNetworksResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeGlobalNetworksCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeGlobalNetworksCommand(input, context);
    };
    DescribeGlobalNetworksCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeGlobalNetworksCommand(output, context);
    };
    return DescribeGlobalNetworksCommand;
}($Command));
export { DescribeGlobalNetworksCommand };
//# sourceMappingURL=DescribeGlobalNetworksCommand.js.map