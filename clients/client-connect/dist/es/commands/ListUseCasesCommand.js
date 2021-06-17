import { __extends } from "tslib";
import { ListUseCasesRequest, ListUseCasesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListUseCasesCommand, serializeAws_restJson1ListUseCasesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the use cases. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListUseCasesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListUseCasesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListUseCasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListUseCasesCommandInput} for command's `input` shape.
 * @see {@link ListUseCasesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListUseCasesCommand = /** @class */ (function (_super) {
    __extends(ListUseCasesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListUseCasesCommand(input) {
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
    ListUseCasesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "ListUseCasesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListUseCasesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListUseCasesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListUseCasesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListUseCasesCommand(input, context);
    };
    ListUseCasesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListUseCasesCommand(output, context);
    };
    return ListUseCasesCommand;
}($Command));
export { ListUseCasesCommand };
//# sourceMappingURL=ListUseCasesCommand.js.map