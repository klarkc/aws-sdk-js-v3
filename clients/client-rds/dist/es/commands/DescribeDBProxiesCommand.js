import { __extends } from "tslib";
import { DescribeDBProxiesRequest, DescribeDBProxiesResponse } from "../models/models_0";
import { deserializeAws_queryDescribeDBProxiesCommand, serializeAws_queryDescribeDBProxiesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about DB proxies.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBProxiesCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBProxiesCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeDBProxiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBProxiesCommandInput} for command's `input` shape.
 * @see {@link DescribeDBProxiesCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDBProxiesCommand = /** @class */ (function (_super) {
    __extends(DescribeDBProxiesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDBProxiesCommand(input) {
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
    DescribeDBProxiesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "DescribeDBProxiesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDBProxiesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDBProxiesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDBProxiesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeDBProxiesCommand(input, context);
    };
    DescribeDBProxiesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeDBProxiesCommand(output, context);
    };
    return DescribeDBProxiesCommand;
}($Command));
export { DescribeDBProxiesCommand };
//# sourceMappingURL=DescribeDBProxiesCommand.js.map