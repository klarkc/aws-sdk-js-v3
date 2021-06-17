import { __extends } from "tslib";
import { ListIntegrationsRequest, ListIntegrationsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListIntegrationsCommand, serializeAws_restJson1ListIntegrationsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all of the integrations in your domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListIntegrationsCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListIntegrationsCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new ListIntegrationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListIntegrationsCommandInput} for command's `input` shape.
 * @see {@link ListIntegrationsCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListIntegrationsCommand = /** @class */ (function (_super) {
    __extends(ListIntegrationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListIntegrationsCommand(input) {
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
    ListIntegrationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CustomerProfilesClient";
        var commandName = "ListIntegrationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListIntegrationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListIntegrationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListIntegrationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListIntegrationsCommand(input, context);
    };
    ListIntegrationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListIntegrationsCommand(output, context);
    };
    return ListIntegrationsCommand;
}($Command));
export { ListIntegrationsCommand };
//# sourceMappingURL=ListIntegrationsCommand.js.map