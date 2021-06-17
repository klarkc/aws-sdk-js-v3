import { __extends } from "tslib";
import { GetContactReachabilityStatusRequest, GetContactReachabilityStatusResponse } from "../models/models_0";
import { deserializeAws_json1_1GetContactReachabilityStatusCommand, serializeAws_json1_1GetContactReachabilityStatusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>For operations that require confirmation that the email address for the registrant contact is valid,
 * 			such as registering a new domain, this operation returns information about whether the registrant contact has responded.</p>
 * 		       <p>If you want us to resend the email, use the <code>ResendContactReachabilityEmail</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, GetContactReachabilityStatusCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, GetContactReachabilityStatusCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new GetContactReachabilityStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContactReachabilityStatusCommandInput} for command's `input` shape.
 * @see {@link GetContactReachabilityStatusCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetContactReachabilityStatusCommand = /** @class */ (function (_super) {
    __extends(GetContactReachabilityStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetContactReachabilityStatusCommand(input) {
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
    GetContactReachabilityStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53DomainsClient";
        var commandName = "GetContactReachabilityStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetContactReachabilityStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetContactReachabilityStatusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetContactReachabilityStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetContactReachabilityStatusCommand(input, context);
    };
    GetContactReachabilityStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetContactReachabilityStatusCommand(output, context);
    };
    return GetContactReachabilityStatusCommand;
}($Command));
export { GetContactReachabilityStatusCommand };
//# sourceMappingURL=GetContactReachabilityStatusCommand.js.map