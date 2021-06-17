import { __extends } from "tslib";
import { ResendContactReachabilityEmailRequest, ResendContactReachabilityEmailResponse } from "../models/models_0";
import { deserializeAws_json1_1ResendContactReachabilityEmailCommand, serializeAws_json1_1ResendContactReachabilityEmailCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>For operations that require confirmation that the email address for the registrant contact is valid,
 * 			such as registering a new domain, this operation resends the confirmation email to the current email address for the registrant contact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, ResendContactReachabilityEmailCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, ResendContactReachabilityEmailCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new ResendContactReachabilityEmailCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResendContactReachabilityEmailCommandInput} for command's `input` shape.
 * @see {@link ResendContactReachabilityEmailCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ResendContactReachabilityEmailCommand = /** @class */ (function (_super) {
    __extends(ResendContactReachabilityEmailCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ResendContactReachabilityEmailCommand(input) {
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
    ResendContactReachabilityEmailCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53DomainsClient";
        var commandName = "ResendContactReachabilityEmailCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ResendContactReachabilityEmailRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ResendContactReachabilityEmailResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ResendContactReachabilityEmailCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ResendContactReachabilityEmailCommand(input, context);
    };
    ResendContactReachabilityEmailCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ResendContactReachabilityEmailCommand(output, context);
    };
    return ResendContactReachabilityEmailCommand;
}($Command));
export { ResendContactReachabilityEmailCommand };
//# sourceMappingURL=ResendContactReachabilityEmailCommand.js.map