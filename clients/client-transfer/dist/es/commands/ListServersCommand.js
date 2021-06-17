import { __extends } from "tslib";
import { ListServersRequest, ListServersResponse } from "../models/models_0";
import { deserializeAws_json1_1ListServersCommand, serializeAws_json1_1ListServersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the file transfer protocol-enabled servers that are associated with your AWS
 *       account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, ListServersCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, ListServersCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new ListServersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListServersCommandInput} for command's `input` shape.
 * @see {@link ListServersCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListServersCommand = /** @class */ (function (_super) {
    __extends(ListServersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListServersCommand(input) {
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
    ListServersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TransferClient";
        var commandName = "ListServersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListServersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListServersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListServersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListServersCommand(input, context);
    };
    ListServersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListServersCommand(output, context);
    };
    return ListServersCommand;
}($Command));
export { ListServersCommand };
//# sourceMappingURL=ListServersCommand.js.map