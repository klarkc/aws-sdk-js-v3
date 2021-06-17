import { __extends } from "tslib";
import { DeregisterDBProxyTargetsRequest, DeregisterDBProxyTargetsResponse } from "../models/models_0";
import { deserializeAws_queryDeregisterDBProxyTargetsCommand, serializeAws_queryDeregisterDBProxyTargetsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Remove the association between one or more <code>DBProxyTarget</code> data structures and a <code>DBProxyTargetGroup</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeregisterDBProxyTargetsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeregisterDBProxyTargetsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DeregisterDBProxyTargetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterDBProxyTargetsCommandInput} for command's `input` shape.
 * @see {@link DeregisterDBProxyTargetsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeregisterDBProxyTargetsCommand = /** @class */ (function (_super) {
    __extends(DeregisterDBProxyTargetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeregisterDBProxyTargetsCommand(input) {
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
    DeregisterDBProxyTargetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "DeregisterDBProxyTargetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeregisterDBProxyTargetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeregisterDBProxyTargetsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeregisterDBProxyTargetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeregisterDBProxyTargetsCommand(input, context);
    };
    DeregisterDBProxyTargetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeregisterDBProxyTargetsCommand(output, context);
    };
    return DeregisterDBProxyTargetsCommand;
}($Command));
export { DeregisterDBProxyTargetsCommand };
//# sourceMappingURL=DeregisterDBProxyTargetsCommand.js.map