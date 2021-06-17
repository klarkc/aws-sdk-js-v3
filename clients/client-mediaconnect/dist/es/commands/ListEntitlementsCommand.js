import { __extends } from "tslib";
import { ListEntitlementsRequest, ListEntitlementsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListEntitlementsCommand, serializeAws_restJson1ListEntitlementsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Displays a list of all entitlements that have been granted to this account. This request returns 20 results per page.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, ListEntitlementsCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, ListEntitlementsCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new ListEntitlementsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEntitlementsCommandInput} for command's `input` shape.
 * @see {@link ListEntitlementsCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListEntitlementsCommand = /** @class */ (function (_super) {
    __extends(ListEntitlementsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListEntitlementsCommand(input) {
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
    ListEntitlementsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaConnectClient";
        var commandName = "ListEntitlementsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListEntitlementsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListEntitlementsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListEntitlementsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListEntitlementsCommand(input, context);
    };
    ListEntitlementsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListEntitlementsCommand(output, context);
    };
    return ListEntitlementsCommand;
}($Command));
export { ListEntitlementsCommand };
//# sourceMappingURL=ListEntitlementsCommand.js.map