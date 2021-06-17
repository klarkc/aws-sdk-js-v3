import { __extends } from "tslib";
import { GetHealthCheckRequest, GetHealthCheckResponse } from "../models/models_0";
import { deserializeAws_restXmlGetHealthCheckCommand, serializeAws_restXmlGetHealthCheckCommand, } from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a specified health check.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetHealthCheckCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetHealthCheckCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new GetHealthCheckCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetHealthCheckCommandInput} for command's `input` shape.
 * @see {@link GetHealthCheckCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetHealthCheckCommand = /** @class */ (function (_super) {
    __extends(GetHealthCheckCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetHealthCheckCommand(input) {
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
    GetHealthCheckCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "GetHealthCheckCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetHealthCheckRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetHealthCheckResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetHealthCheckCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlGetHealthCheckCommand(input, context);
    };
    GetHealthCheckCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlGetHealthCheckCommand(output, context);
    };
    return GetHealthCheckCommand;
}($Command));
export { GetHealthCheckCommand };
//# sourceMappingURL=GetHealthCheckCommand.js.map