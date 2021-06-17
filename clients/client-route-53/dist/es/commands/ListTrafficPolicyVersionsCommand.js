import { __extends } from "tslib";
import { ListTrafficPolicyVersionsRequest, ListTrafficPolicyVersionsResponse } from "../models/models_0";
import { deserializeAws_restXmlListTrafficPolicyVersionsCommand, serializeAws_restXmlListTrafficPolicyVersionsCommand, } from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about all of the versions for a specified traffic policy.</p>
 * 		       <p>Traffic policy versions are listed in numerical order by <code>VersionNumber</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListTrafficPolicyVersionsCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListTrafficPolicyVersionsCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new ListTrafficPolicyVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTrafficPolicyVersionsCommandInput} for command's `input` shape.
 * @see {@link ListTrafficPolicyVersionsCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTrafficPolicyVersionsCommand = /** @class */ (function (_super) {
    __extends(ListTrafficPolicyVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTrafficPolicyVersionsCommand(input) {
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
    ListTrafficPolicyVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getIdNormalizerPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "ListTrafficPolicyVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTrafficPolicyVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTrafficPolicyVersionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTrafficPolicyVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlListTrafficPolicyVersionsCommand(input, context);
    };
    ListTrafficPolicyVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlListTrafficPolicyVersionsCommand(output, context);
    };
    return ListTrafficPolicyVersionsCommand;
}($Command));
export { ListTrafficPolicyVersionsCommand };
//# sourceMappingURL=ListTrafficPolicyVersionsCommand.js.map