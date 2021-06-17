import { __extends } from "tslib";
import { DescribeDBProxyEndpointsRequest, DescribeDBProxyEndpointsResponse } from "../models/models_0";
import { deserializeAws_queryDescribeDBProxyEndpointsCommand, serializeAws_queryDescribeDBProxyEndpointsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about DB proxy endpoints.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBProxyEndpointsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBProxyEndpointsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeDBProxyEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBProxyEndpointsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBProxyEndpointsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDBProxyEndpointsCommand = /** @class */ (function (_super) {
    __extends(DescribeDBProxyEndpointsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDBProxyEndpointsCommand(input) {
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
    DescribeDBProxyEndpointsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "DescribeDBProxyEndpointsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDBProxyEndpointsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDBProxyEndpointsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDBProxyEndpointsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeDBProxyEndpointsCommand(input, context);
    };
    DescribeDBProxyEndpointsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeDBProxyEndpointsCommand(output, context);
    };
    return DescribeDBProxyEndpointsCommand;
}($Command));
export { DescribeDBProxyEndpointsCommand };
//# sourceMappingURL=DescribeDBProxyEndpointsCommand.js.map