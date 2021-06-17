import { __extends } from "tslib";
import { CreateTrafficPolicyVersionRequest, CreateTrafficPolicyVersionResponse } from "../models/models_0";
import { deserializeAws_restXmlCreateTrafficPolicyVersionCommand, serializeAws_restXmlCreateTrafficPolicyVersionCommand, } from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new version of an existing traffic policy. When you create a new version of a traffic policy, you specify the ID of the
 * 			traffic policy that you want to update and a JSON-formatted document that describes the new version. You use traffic policies to create
 * 			multiple DNS resource record sets for one domain name (such as example.com) or one subdomain name (such as www.example.com). You can
 * 			create a maximum of 1000 versions of a traffic policy. If you reach the limit and need to create another version, you'll need to start a new
 * 			traffic policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, CreateTrafficPolicyVersionCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, CreateTrafficPolicyVersionCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new CreateTrafficPolicyVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTrafficPolicyVersionCommandInput} for command's `input` shape.
 * @see {@link CreateTrafficPolicyVersionCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateTrafficPolicyVersionCommand = /** @class */ (function (_super) {
    __extends(CreateTrafficPolicyVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateTrafficPolicyVersionCommand(input) {
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
    CreateTrafficPolicyVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getIdNormalizerPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "CreateTrafficPolicyVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateTrafficPolicyVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateTrafficPolicyVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateTrafficPolicyVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlCreateTrafficPolicyVersionCommand(input, context);
    };
    CreateTrafficPolicyVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlCreateTrafficPolicyVersionCommand(output, context);
    };
    return CreateTrafficPolicyVersionCommand;
}($Command));
export { CreateTrafficPolicyVersionCommand };
//# sourceMappingURL=CreateTrafficPolicyVersionCommand.js.map