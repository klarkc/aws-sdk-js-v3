import { __extends } from "tslib";
import { DeleteQueryLoggingConfigRequest, DeleteQueryLoggingConfigResponse } from "../models/models_0";
import { deserializeAws_restXmlDeleteQueryLoggingConfigCommand, serializeAws_restXmlDeleteQueryLoggingConfigCommand, } from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a configuration for DNS query logging. If you delete a configuration, Amazon Route 53 stops sending query logs to CloudWatch Logs.
 * 			Route 53 doesn't delete any logs that are already in CloudWatch Logs.</p>
 *
 * 		       <p>For more information about DNS query logs, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateQueryLoggingConfig.html">CreateQueryLoggingConfig</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DeleteQueryLoggingConfigCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DeleteQueryLoggingConfigCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new DeleteQueryLoggingConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteQueryLoggingConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteQueryLoggingConfigCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteQueryLoggingConfigCommand = /** @class */ (function (_super) {
    __extends(DeleteQueryLoggingConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteQueryLoggingConfigCommand(input) {
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
    DeleteQueryLoggingConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getIdNormalizerPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "DeleteQueryLoggingConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteQueryLoggingConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteQueryLoggingConfigResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteQueryLoggingConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlDeleteQueryLoggingConfigCommand(input, context);
    };
    DeleteQueryLoggingConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlDeleteQueryLoggingConfigCommand(output, context);
    };
    return DeleteQueryLoggingConfigCommand;
}($Command));
export { DeleteQueryLoggingConfigCommand };
//# sourceMappingURL=DeleteQueryLoggingConfigCommand.js.map