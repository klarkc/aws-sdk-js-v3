import { __extends } from "tslib";
import { CreateTrafficPolicyRequest, CreateTrafficPolicyResponse } from "../models/models_0";
import { deserializeAws_restXmlCreateTrafficPolicyCommand, serializeAws_restXmlCreateTrafficPolicyCommand, } from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a traffic policy, which you use to create multiple DNS resource record sets for one domain name (such as example.com) or
 * 			one subdomain name (such as www.example.com).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, CreateTrafficPolicyCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, CreateTrafficPolicyCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new CreateTrafficPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTrafficPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateTrafficPolicyCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateTrafficPolicyCommand = /** @class */ (function (_super) {
    __extends(CreateTrafficPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateTrafficPolicyCommand(input) {
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
    CreateTrafficPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "CreateTrafficPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateTrafficPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateTrafficPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateTrafficPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlCreateTrafficPolicyCommand(input, context);
    };
    CreateTrafficPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlCreateTrafficPolicyCommand(output, context);
    };
    return CreateTrafficPolicyCommand;
}($Command));
export { CreateTrafficPolicyCommand };
//# sourceMappingURL=CreateTrafficPolicyCommand.js.map