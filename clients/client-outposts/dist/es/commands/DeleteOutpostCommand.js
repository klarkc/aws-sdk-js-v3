import { __extends } from "tslib";
import { DeleteOutpostInput, DeleteOutpostOutput } from "../models/models_0";
import { deserializeAws_restJson1DeleteOutpostCommand, serializeAws_restJson1DeleteOutpostCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the Outpost.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, DeleteOutpostCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, DeleteOutpostCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * const client = new OutpostsClient(config);
 * const command = new DeleteOutpostCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteOutpostCommandInput} for command's `input` shape.
 * @see {@link DeleteOutpostCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteOutpostCommand = /** @class */ (function (_super) {
    __extends(DeleteOutpostCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteOutpostCommand(input) {
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
    DeleteOutpostCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OutpostsClient";
        var commandName = "DeleteOutpostCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteOutpostInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteOutpostOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteOutpostCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteOutpostCommand(input, context);
    };
    DeleteOutpostCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteOutpostCommand(output, context);
    };
    return DeleteOutpostCommand;
}($Command));
export { DeleteOutpostCommand };
//# sourceMappingURL=DeleteOutpostCommand.js.map