import { __extends } from "tslib";
import { ListReusableDelegationSetsRequest, ListReusableDelegationSetsResponse } from "../models/models_0";
import { deserializeAws_restXmlListReusableDelegationSetsCommand, serializeAws_restXmlListReusableDelegationSetsCommand, } from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list of the reusable delegation sets that are associated with the current AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListReusableDelegationSetsCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListReusableDelegationSetsCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new ListReusableDelegationSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListReusableDelegationSetsCommandInput} for command's `input` shape.
 * @see {@link ListReusableDelegationSetsCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListReusableDelegationSetsCommand = /** @class */ (function (_super) {
    __extends(ListReusableDelegationSetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListReusableDelegationSetsCommand(input) {
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
    ListReusableDelegationSetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "ListReusableDelegationSetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListReusableDelegationSetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListReusableDelegationSetsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListReusableDelegationSetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlListReusableDelegationSetsCommand(input, context);
    };
    ListReusableDelegationSetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlListReusableDelegationSetsCommand(output, context);
    };
    return ListReusableDelegationSetsCommand;
}($Command));
export { ListReusableDelegationSetsCommand };
//# sourceMappingURL=ListReusableDelegationSetsCommand.js.map