import { __extends } from "tslib";
import { ListSecurityKeysRequest, ListSecurityKeysResponse } from "../models/models_0";
import { deserializeAws_restJson1ListSecurityKeysCommand, serializeAws_restJson1ListSecurityKeysCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Returns a paginated list of all security keys associated with the instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListSecurityKeysCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListSecurityKeysCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListSecurityKeysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSecurityKeysCommandInput} for command's `input` shape.
 * @see {@link ListSecurityKeysCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSecurityKeysCommand = /** @class */ (function (_super) {
    __extends(ListSecurityKeysCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSecurityKeysCommand(input) {
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
    ListSecurityKeysCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "ListSecurityKeysCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSecurityKeysRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListSecurityKeysResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSecurityKeysCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListSecurityKeysCommand(input, context);
    };
    ListSecurityKeysCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListSecurityKeysCommand(output, context);
    };
    return ListSecurityKeysCommand;
}($Command));
export { ListSecurityKeysCommand };
//# sourceMappingURL=ListSecurityKeysCommand.js.map