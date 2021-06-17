import { __extends } from "tslib";
import { ListApprovedOriginsRequest, ListApprovedOriginsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListApprovedOriginsCommand, serializeAws_restJson1ListApprovedOriginsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Returns a paginated list of all approved origins associated with the instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListApprovedOriginsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListApprovedOriginsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListApprovedOriginsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListApprovedOriginsCommandInput} for command's `input` shape.
 * @see {@link ListApprovedOriginsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListApprovedOriginsCommand = /** @class */ (function (_super) {
    __extends(ListApprovedOriginsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListApprovedOriginsCommand(input) {
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
    ListApprovedOriginsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "ListApprovedOriginsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListApprovedOriginsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListApprovedOriginsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListApprovedOriginsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListApprovedOriginsCommand(input, context);
    };
    ListApprovedOriginsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListApprovedOriginsCommand(output, context);
    };
    return ListApprovedOriginsCommand;
}($Command));
export { ListApprovedOriginsCommand };
//# sourceMappingURL=ListApprovedOriginsCommand.js.map