import { __extends } from "tslib";
import { ListAccessesRequest, ListAccessesResponse } from "../models/models_0";
import { deserializeAws_json1_1ListAccessesCommand, serializeAws_json1_1ListAccessesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the details for all the accesses you have on your server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, ListAccessesCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, ListAccessesCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new ListAccessesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAccessesCommandInput} for command's `input` shape.
 * @see {@link ListAccessesCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAccessesCommand = /** @class */ (function (_super) {
    __extends(ListAccessesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAccessesCommand(input) {
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
    ListAccessesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TransferClient";
        var commandName = "ListAccessesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAccessesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAccessesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAccessesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListAccessesCommand(input, context);
    };
    ListAccessesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListAccessesCommand(output, context);
    };
    return ListAccessesCommand;
}($Command));
export { ListAccessesCommand };
//# sourceMappingURL=ListAccessesCommand.js.map