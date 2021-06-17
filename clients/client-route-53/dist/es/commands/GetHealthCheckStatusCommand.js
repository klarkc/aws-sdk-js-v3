import { __extends } from "tslib";
import { GetHealthCheckStatusRequest, GetHealthCheckStatusResponse } from "../models/models_0";
import { deserializeAws_restXmlGetHealthCheckStatusCommand, serializeAws_restXmlGetHealthCheckStatusCommand, } from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets status of a specified health check. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetHealthCheckStatusCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetHealthCheckStatusCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new GetHealthCheckStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetHealthCheckStatusCommandInput} for command's `input` shape.
 * @see {@link GetHealthCheckStatusCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetHealthCheckStatusCommand = /** @class */ (function (_super) {
    __extends(GetHealthCheckStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetHealthCheckStatusCommand(input) {
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
    GetHealthCheckStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "GetHealthCheckStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetHealthCheckStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetHealthCheckStatusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetHealthCheckStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlGetHealthCheckStatusCommand(input, context);
    };
    GetHealthCheckStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlGetHealthCheckStatusCommand(output, context);
    };
    return GetHealthCheckStatusCommand;
}($Command));
export { GetHealthCheckStatusCommand };
//# sourceMappingURL=GetHealthCheckStatusCommand.js.map