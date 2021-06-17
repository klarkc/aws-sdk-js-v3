import { __extends } from "tslib";
import { DisassociateWebsiteAuthorizationProviderRequest, DisassociateWebsiteAuthorizationProviderResponse, } from "../models/models_0";
import { deserializeAws_restJson1DisassociateWebsiteAuthorizationProviderCommand, serializeAws_restJson1DisassociateWebsiteAuthorizationProviderCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates a website authorization provider from a specified fleet. After the
 *             disassociation, users can't load any associated websites that require this authorization
 *             provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, DisassociateWebsiteAuthorizationProviderCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, DisassociateWebsiteAuthorizationProviderCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new DisassociateWebsiteAuthorizationProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateWebsiteAuthorizationProviderCommandInput} for command's `input` shape.
 * @see {@link DisassociateWebsiteAuthorizationProviderCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateWebsiteAuthorizationProviderCommand = /** @class */ (function (_super) {
    __extends(DisassociateWebsiteAuthorizationProviderCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateWebsiteAuthorizationProviderCommand(input) {
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
    DisassociateWebsiteAuthorizationProviderCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkLinkClient";
        var commandName = "DisassociateWebsiteAuthorizationProviderCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateWebsiteAuthorizationProviderRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateWebsiteAuthorizationProviderResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateWebsiteAuthorizationProviderCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisassociateWebsiteAuthorizationProviderCommand(input, context);
    };
    DisassociateWebsiteAuthorizationProviderCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisassociateWebsiteAuthorizationProviderCommand(output, context);
    };
    return DisassociateWebsiteAuthorizationProviderCommand;
}($Command));
export { DisassociateWebsiteAuthorizationProviderCommand };
//# sourceMappingURL=DisassociateWebsiteAuthorizationProviderCommand.js.map