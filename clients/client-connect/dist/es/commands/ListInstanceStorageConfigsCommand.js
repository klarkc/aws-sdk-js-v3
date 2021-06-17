import { __extends } from "tslib";
import { ListInstanceStorageConfigsRequest, ListInstanceStorageConfigsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListInstanceStorageConfigsCommand, serializeAws_restJson1ListInstanceStorageConfigsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *
 *          <p>Returns a paginated list of storage configs for the identified instance and resource
 *    type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListInstanceStorageConfigsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListInstanceStorageConfigsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListInstanceStorageConfigsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInstanceStorageConfigsCommandInput} for command's `input` shape.
 * @see {@link ListInstanceStorageConfigsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListInstanceStorageConfigsCommand = /** @class */ (function (_super) {
    __extends(ListInstanceStorageConfigsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListInstanceStorageConfigsCommand(input) {
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
    ListInstanceStorageConfigsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "ListInstanceStorageConfigsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListInstanceStorageConfigsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListInstanceStorageConfigsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListInstanceStorageConfigsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListInstanceStorageConfigsCommand(input, context);
    };
    ListInstanceStorageConfigsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListInstanceStorageConfigsCommand(output, context);
    };
    return ListInstanceStorageConfigsCommand;
}($Command));
export { ListInstanceStorageConfigsCommand };
//# sourceMappingURL=ListInstanceStorageConfigsCommand.js.map