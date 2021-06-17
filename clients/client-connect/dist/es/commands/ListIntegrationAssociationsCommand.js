import { __extends } from "tslib";
import { ListIntegrationAssociationsRequest, ListIntegrationAssociationsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListIntegrationAssociationsCommand, serializeAws_restJson1ListIntegrationAssociationsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides summary information about the AppIntegration associations for the specified Amazon Connect
 *    instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListIntegrationAssociationsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListIntegrationAssociationsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListIntegrationAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListIntegrationAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListIntegrationAssociationsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListIntegrationAssociationsCommand = /** @class */ (function (_super) {
    __extends(ListIntegrationAssociationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListIntegrationAssociationsCommand(input) {
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
    ListIntegrationAssociationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "ListIntegrationAssociationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListIntegrationAssociationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListIntegrationAssociationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListIntegrationAssociationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListIntegrationAssociationsCommand(input, context);
    };
    ListIntegrationAssociationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListIntegrationAssociationsCommand(output, context);
    };
    return ListIntegrationAssociationsCommand;
}($Command));
export { ListIntegrationAssociationsCommand };
//# sourceMappingURL=ListIntegrationAssociationsCommand.js.map