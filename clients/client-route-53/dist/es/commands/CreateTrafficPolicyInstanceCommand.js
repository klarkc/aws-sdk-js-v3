import { __extends } from "tslib";
import { CreateTrafficPolicyInstanceRequest, CreateTrafficPolicyInstanceResponse } from "../models/models_0";
import { deserializeAws_restXmlCreateTrafficPolicyInstanceCommand, serializeAws_restXmlCreateTrafficPolicyInstanceCommand, } from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates resource record sets in a specified hosted zone based on the settings in a specified traffic policy version.
 * 			In addition, <code>CreateTrafficPolicyInstance</code> associates the resource record sets with a specified domain name (such as example.com) or
 * 			subdomain name (such as www.example.com). Amazon Route 53 responds to DNS queries for the domain or subdomain name by using the resource record sets
 * 			that <code>CreateTrafficPolicyInstance</code> created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, CreateTrafficPolicyInstanceCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, CreateTrafficPolicyInstanceCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new CreateTrafficPolicyInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTrafficPolicyInstanceCommandInput} for command's `input` shape.
 * @see {@link CreateTrafficPolicyInstanceCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateTrafficPolicyInstanceCommand = /** @class */ (function (_super) {
    __extends(CreateTrafficPolicyInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateTrafficPolicyInstanceCommand(input) {
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
    CreateTrafficPolicyInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getIdNormalizerPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "CreateTrafficPolicyInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateTrafficPolicyInstanceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateTrafficPolicyInstanceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateTrafficPolicyInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlCreateTrafficPolicyInstanceCommand(input, context);
    };
    CreateTrafficPolicyInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlCreateTrafficPolicyInstanceCommand(output, context);
    };
    return CreateTrafficPolicyInstanceCommand;
}($Command));
export { CreateTrafficPolicyInstanceCommand };
//# sourceMappingURL=CreateTrafficPolicyInstanceCommand.js.map