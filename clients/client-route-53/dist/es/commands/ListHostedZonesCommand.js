import { __extends } from "tslib";
import { ListHostedZonesRequest, ListHostedZonesResponse } from "../models/models_0";
import { deserializeAws_restXmlListHostedZonesCommand, serializeAws_restXmlListHostedZonesCommand, } from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list of the public and private hosted zones that are associated with the current AWS account. The response
 * 			includes a <code>HostedZones</code> child element for each hosted zone.</p>
 * 		       <p>Amazon Route 53 returns a maximum of 100 items in each response. If you have a lot of hosted zones, you can use the
 * 			<code>maxitems</code> parameter to list them in groups of up to 100.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListHostedZonesCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListHostedZonesCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new ListHostedZonesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListHostedZonesCommandInput} for command's `input` shape.
 * @see {@link ListHostedZonesCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListHostedZonesCommand = /** @class */ (function (_super) {
    __extends(ListHostedZonesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListHostedZonesCommand(input) {
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
    ListHostedZonesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getIdNormalizerPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "ListHostedZonesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListHostedZonesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListHostedZonesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListHostedZonesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlListHostedZonesCommand(input, context);
    };
    ListHostedZonesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlListHostedZonesCommand(output, context);
    };
    return ListHostedZonesCommand;
}($Command));
export { ListHostedZonesCommand };
//# sourceMappingURL=ListHostedZonesCommand.js.map