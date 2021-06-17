import { __extends } from "tslib";
import { ListWebsiteAuthorizationProvidersRequest, ListWebsiteAuthorizationProvidersResponse, } from "../models/models_0";
import { deserializeAws_restJson1ListWebsiteAuthorizationProvidersCommand, serializeAws_restJson1ListWebsiteAuthorizationProvidersCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list of website authorization providers associated with a specified fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, ListWebsiteAuthorizationProvidersCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, ListWebsiteAuthorizationProvidersCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new ListWebsiteAuthorizationProvidersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWebsiteAuthorizationProvidersCommandInput} for command's `input` shape.
 * @see {@link ListWebsiteAuthorizationProvidersCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListWebsiteAuthorizationProvidersCommand = /** @class */ (function (_super) {
    __extends(ListWebsiteAuthorizationProvidersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListWebsiteAuthorizationProvidersCommand(input) {
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
    ListWebsiteAuthorizationProvidersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkLinkClient";
        var commandName = "ListWebsiteAuthorizationProvidersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListWebsiteAuthorizationProvidersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListWebsiteAuthorizationProvidersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListWebsiteAuthorizationProvidersCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListWebsiteAuthorizationProvidersCommand(input, context);
    };
    ListWebsiteAuthorizationProvidersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListWebsiteAuthorizationProvidersCommand(output, context);
    };
    return ListWebsiteAuthorizationProvidersCommand;
}($Command));
export { ListWebsiteAuthorizationProvidersCommand };
//# sourceMappingURL=ListWebsiteAuthorizationProvidersCommand.js.map