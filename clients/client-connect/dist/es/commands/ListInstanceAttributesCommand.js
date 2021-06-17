import { __extends } from "tslib";
import { ListInstanceAttributesRequest, ListInstanceAttributesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListInstanceAttributesCommand, serializeAws_restJson1ListInstanceAttributesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Returns a paginated list of all attribute types for the given instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListInstanceAttributesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListInstanceAttributesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListInstanceAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInstanceAttributesCommandInput} for command's `input` shape.
 * @see {@link ListInstanceAttributesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListInstanceAttributesCommand = /** @class */ (function (_super) {
    __extends(ListInstanceAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListInstanceAttributesCommand(input) {
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
    ListInstanceAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "ListInstanceAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListInstanceAttributesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListInstanceAttributesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListInstanceAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListInstanceAttributesCommand(input, context);
    };
    ListInstanceAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListInstanceAttributesCommand(output, context);
    };
    return ListInstanceAttributesCommand;
}($Command));
export { ListInstanceAttributesCommand };
//# sourceMappingURL=ListInstanceAttributesCommand.js.map