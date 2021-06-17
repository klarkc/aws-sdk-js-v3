import { __extends } from "tslib";
import { AssociateWebsiteAuthorizationProviderRequest, AssociateWebsiteAuthorizationProviderResponse, } from "../models/models_0";
import { deserializeAws_restJson1AssociateWebsiteAuthorizationProviderCommand, serializeAws_restJson1AssociateWebsiteAuthorizationProviderCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates a website authorization provider with a specified fleet. This is used to authorize users against associated websites in the company network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, AssociateWebsiteAuthorizationProviderCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, AssociateWebsiteAuthorizationProviderCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new AssociateWebsiteAuthorizationProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateWebsiteAuthorizationProviderCommandInput} for command's `input` shape.
 * @see {@link AssociateWebsiteAuthorizationProviderCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateWebsiteAuthorizationProviderCommand = /** @class */ (function (_super) {
    __extends(AssociateWebsiteAuthorizationProviderCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateWebsiteAuthorizationProviderCommand(input) {
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
    AssociateWebsiteAuthorizationProviderCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkLinkClient";
        var commandName = "AssociateWebsiteAuthorizationProviderCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateWebsiteAuthorizationProviderRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateWebsiteAuthorizationProviderResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateWebsiteAuthorizationProviderCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AssociateWebsiteAuthorizationProviderCommand(input, context);
    };
    AssociateWebsiteAuthorizationProviderCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AssociateWebsiteAuthorizationProviderCommand(output, context);
    };
    return AssociateWebsiteAuthorizationProviderCommand;
}($Command));
export { AssociateWebsiteAuthorizationProviderCommand };
//# sourceMappingURL=AssociateWebsiteAuthorizationProviderCommand.js.map