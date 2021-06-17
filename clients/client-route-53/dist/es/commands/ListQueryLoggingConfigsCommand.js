import { __extends } from "tslib";
import { ListQueryLoggingConfigsRequest, ListQueryLoggingConfigsResponse } from "../models/models_0";
import { deserializeAws_restXmlListQueryLoggingConfigsCommand, serializeAws_restXmlListQueryLoggingConfigsCommand, } from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the configurations for DNS query logging that are associated with the current AWS account or the configuration
 * 			that is associated with a specified hosted zone.</p>
 *
 * 		       <p>For more information about DNS query logs, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateQueryLoggingConfig.html">CreateQueryLoggingConfig</a>.
 * 			Additional information, including the format of DNS query logs, appears in
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/query-logs.html">Logging DNS Queries</a>
 * 			in the <i>Amazon Route 53 Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListQueryLoggingConfigsCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListQueryLoggingConfigsCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new ListQueryLoggingConfigsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListQueryLoggingConfigsCommandInput} for command's `input` shape.
 * @see {@link ListQueryLoggingConfigsCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListQueryLoggingConfigsCommand = /** @class */ (function (_super) {
    __extends(ListQueryLoggingConfigsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListQueryLoggingConfigsCommand(input) {
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
    ListQueryLoggingConfigsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getIdNormalizerPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "ListQueryLoggingConfigsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListQueryLoggingConfigsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListQueryLoggingConfigsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListQueryLoggingConfigsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlListQueryLoggingConfigsCommand(input, context);
    };
    ListQueryLoggingConfigsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlListQueryLoggingConfigsCommand(output, context);
    };
    return ListQueryLoggingConfigsCommand;
}($Command));
export { ListQueryLoggingConfigsCommand };
//# sourceMappingURL=ListQueryLoggingConfigsCommand.js.map