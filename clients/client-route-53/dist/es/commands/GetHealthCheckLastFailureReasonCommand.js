import { __extends } from "tslib";
import { GetHealthCheckLastFailureReasonRequest, GetHealthCheckLastFailureReasonResponse } from "../models/models_0";
import { deserializeAws_restXmlGetHealthCheckLastFailureReasonCommand, serializeAws_restXmlGetHealthCheckLastFailureReasonCommand, } from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the reason that a specified health check failed most recently.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetHealthCheckLastFailureReasonCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetHealthCheckLastFailureReasonCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new GetHealthCheckLastFailureReasonCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetHealthCheckLastFailureReasonCommandInput} for command's `input` shape.
 * @see {@link GetHealthCheckLastFailureReasonCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetHealthCheckLastFailureReasonCommand = /** @class */ (function (_super) {
    __extends(GetHealthCheckLastFailureReasonCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetHealthCheckLastFailureReasonCommand(input) {
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
    GetHealthCheckLastFailureReasonCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "GetHealthCheckLastFailureReasonCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetHealthCheckLastFailureReasonRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetHealthCheckLastFailureReasonResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetHealthCheckLastFailureReasonCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlGetHealthCheckLastFailureReasonCommand(input, context);
    };
    GetHealthCheckLastFailureReasonCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlGetHealthCheckLastFailureReasonCommand(output, context);
    };
    return GetHealthCheckLastFailureReasonCommand;
}($Command));
export { GetHealthCheckLastFailureReasonCommand };
//# sourceMappingURL=GetHealthCheckLastFailureReasonCommand.js.map