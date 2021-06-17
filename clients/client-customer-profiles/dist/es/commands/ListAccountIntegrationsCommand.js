import { __extends } from "tslib";
import { ListAccountIntegrationsRequest, ListAccountIntegrationsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListAccountIntegrationsCommand, serializeAws_restJson1ListAccountIntegrationsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all of the integrations associated to a specific URI in the AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListAccountIntegrationsCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListAccountIntegrationsCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new ListAccountIntegrationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAccountIntegrationsCommandInput} for command's `input` shape.
 * @see {@link ListAccountIntegrationsCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAccountIntegrationsCommand = /** @class */ (function (_super) {
    __extends(ListAccountIntegrationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAccountIntegrationsCommand(input) {
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
    ListAccountIntegrationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CustomerProfilesClient";
        var commandName = "ListAccountIntegrationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAccountIntegrationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAccountIntegrationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAccountIntegrationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListAccountIntegrationsCommand(input, context);
    };
    ListAccountIntegrationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListAccountIntegrationsCommand(output, context);
    };
    return ListAccountIntegrationsCommand;
}($Command));
export { ListAccountIntegrationsCommand };
//# sourceMappingURL=ListAccountIntegrationsCommand.js.map