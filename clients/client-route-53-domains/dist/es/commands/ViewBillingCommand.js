import { __extends } from "tslib";
import { ViewBillingRequest, ViewBillingResponse } from "../models/models_0";
import { deserializeAws_json1_1ViewBillingCommand, serializeAws_json1_1ViewBillingCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns all the domain-related billing records for the current AWS account for a specified period</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, ViewBillingCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, ViewBillingCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new ViewBillingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ViewBillingCommandInput} for command's `input` shape.
 * @see {@link ViewBillingCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ViewBillingCommand = /** @class */ (function (_super) {
    __extends(ViewBillingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ViewBillingCommand(input) {
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
    ViewBillingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53DomainsClient";
        var commandName = "ViewBillingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ViewBillingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ViewBillingResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ViewBillingCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ViewBillingCommand(input, context);
    };
    ViewBillingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ViewBillingCommand(output, context);
    };
    return ViewBillingCommand;
}($Command));
export { ViewBillingCommand };
//# sourceMappingURL=ViewBillingCommand.js.map