import { __extends } from "tslib";
import { UpdateHealthCheckRequest, UpdateHealthCheckResponse } from "../models/models_0";
import { deserializeAws_restXmlUpdateHealthCheckCommand, serializeAws_restXmlUpdateHealthCheckCommand, } from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an existing health check. Note that some values can't be updated. </p>
 * 		       <p>For more information about updating health checks, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/health-checks-creating-deleting.html">Creating, Updating, and Deleting Health Checks</a>
 * 			in the <i>Amazon Route 53 Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, UpdateHealthCheckCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, UpdateHealthCheckCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new UpdateHealthCheckCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateHealthCheckCommandInput} for command's `input` shape.
 * @see {@link UpdateHealthCheckCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateHealthCheckCommand = /** @class */ (function (_super) {
    __extends(UpdateHealthCheckCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateHealthCheckCommand(input) {
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
    UpdateHealthCheckCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "UpdateHealthCheckCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateHealthCheckRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateHealthCheckResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateHealthCheckCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlUpdateHealthCheckCommand(input, context);
    };
    UpdateHealthCheckCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlUpdateHealthCheckCommand(output, context);
    };
    return UpdateHealthCheckCommand;
}($Command));
export { UpdateHealthCheckCommand };
//# sourceMappingURL=UpdateHealthCheckCommand.js.map