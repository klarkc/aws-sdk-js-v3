import { __extends } from "tslib";
import { RegisterDBProxyTargetsRequest, RegisterDBProxyTargetsResponse } from "../models/models_1";
import { deserializeAws_queryRegisterDBProxyTargetsCommand, serializeAws_queryRegisterDBProxyTargetsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associate one or more <code>DBProxyTarget</code> data structures with a <code>DBProxyTargetGroup</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RegisterDBProxyTargetsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RegisterDBProxyTargetsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new RegisterDBProxyTargetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterDBProxyTargetsCommandInput} for command's `input` shape.
 * @see {@link RegisterDBProxyTargetsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegisterDBProxyTargetsCommand = /** @class */ (function (_super) {
    __extends(RegisterDBProxyTargetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RegisterDBProxyTargetsCommand(input) {
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
    RegisterDBProxyTargetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "RegisterDBProxyTargetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RegisterDBProxyTargetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RegisterDBProxyTargetsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RegisterDBProxyTargetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryRegisterDBProxyTargetsCommand(input, context);
    };
    RegisterDBProxyTargetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryRegisterDBProxyTargetsCommand(output, context);
    };
    return RegisterDBProxyTargetsCommand;
}($Command));
export { RegisterDBProxyTargetsCommand };
//# sourceMappingURL=RegisterDBProxyTargetsCommand.js.map