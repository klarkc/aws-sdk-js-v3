import { __extends } from "tslib";
import { GetHealthCheckCountRequest, GetHealthCheckCountResponse } from "../models/models_0";
import { deserializeAws_restXmlGetHealthCheckCountCommand, serializeAws_restXmlGetHealthCheckCountCommand, } from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the number of health checks that are associated with the current AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetHealthCheckCountCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetHealthCheckCountCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new GetHealthCheckCountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetHealthCheckCountCommandInput} for command's `input` shape.
 * @see {@link GetHealthCheckCountCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetHealthCheckCountCommand = /** @class */ (function (_super) {
    __extends(GetHealthCheckCountCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetHealthCheckCountCommand(input) {
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
    GetHealthCheckCountCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "GetHealthCheckCountCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetHealthCheckCountRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetHealthCheckCountResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetHealthCheckCountCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlGetHealthCheckCountCommand(input, context);
    };
    GetHealthCheckCountCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlGetHealthCheckCountCommand(output, context);
    };
    return GetHealthCheckCountCommand;
}($Command));
export { GetHealthCheckCountCommand };
//# sourceMappingURL=GetHealthCheckCountCommand.js.map