import { __extends } from "tslib";
import { DeleteGraphRequest } from "../models/models_0";
import { deserializeAws_restJson1DeleteGraphCommand, serializeAws_restJson1DeleteGraphCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables the specified behavior graph and queues it to be deleted. This operation
 *          removes the graph from each member account's list of behavior graphs.</p>
 *          <p>
 *             <code>DeleteGraph</code> can only be called by the administrator account for a behavior
 *          graph.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, DeleteGraphCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, DeleteGraphCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const command = new DeleteGraphCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteGraphCommandInput} for command's `input` shape.
 * @see {@link DeleteGraphCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteGraphCommand = /** @class */ (function (_super) {
    __extends(DeleteGraphCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteGraphCommand(input) {
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
    DeleteGraphCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DetectiveClient";
        var commandName = "DeleteGraphCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteGraphRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteGraphCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteGraphCommand(input, context);
    };
    DeleteGraphCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteGraphCommand(output, context);
    };
    return DeleteGraphCommand;
}($Command));
export { DeleteGraphCommand };
//# sourceMappingURL=DeleteGraphCommand.js.map