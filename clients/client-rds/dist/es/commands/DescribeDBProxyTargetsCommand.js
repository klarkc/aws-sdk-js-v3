import { __extends } from "tslib";
import { DescribeDBProxyTargetsRequest, DescribeDBProxyTargetsResponse } from "../models/models_0";
import { deserializeAws_queryDescribeDBProxyTargetsCommand, serializeAws_queryDescribeDBProxyTargetsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about <code>DBProxyTarget</code> objects. This API supports pagination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBProxyTargetsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBProxyTargetsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeDBProxyTargetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBProxyTargetsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBProxyTargetsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDBProxyTargetsCommand = /** @class */ (function (_super) {
    __extends(DescribeDBProxyTargetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDBProxyTargetsCommand(input) {
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
    DescribeDBProxyTargetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "DescribeDBProxyTargetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDBProxyTargetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDBProxyTargetsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDBProxyTargetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeDBProxyTargetsCommand(input, context);
    };
    DescribeDBProxyTargetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeDBProxyTargetsCommand(output, context);
    };
    return DescribeDBProxyTargetsCommand;
}($Command));
export { DescribeDBProxyTargetsCommand };
//# sourceMappingURL=DescribeDBProxyTargetsCommand.js.map