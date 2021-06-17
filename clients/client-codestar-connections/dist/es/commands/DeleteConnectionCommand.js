import { __extends } from "tslib";
import { DeleteConnectionInput, DeleteConnectionOutput } from "../models/models_0";
import { deserializeAws_json1_0DeleteConnectionCommand, serializeAws_json1_0DeleteConnectionCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>The connection to be deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarConnectionsClient, DeleteConnectionCommand } from "@aws-sdk/client-codestar-connections"; // ES Modules import
 * // const { CodeStarConnectionsClient, DeleteConnectionCommand } = require("@aws-sdk/client-codestar-connections"); // CommonJS import
 * const client = new CodeStarConnectionsClient(config);
 * const command = new DeleteConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteConnectionCommandInput} for command's `input` shape.
 * @see {@link DeleteConnectionCommandOutput} for command's `response` shape.
 * @see {@link CodeStarConnectionsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteConnectionCommand = /** @class */ (function (_super) {
    __extends(DeleteConnectionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteConnectionCommand(input) {
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
    DeleteConnectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeStarConnectionsClient";
        var commandName = "DeleteConnectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteConnectionInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteConnectionOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteConnectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DeleteConnectionCommand(input, context);
    };
    DeleteConnectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DeleteConnectionCommand(output, context);
    };
    return DeleteConnectionCommand;
}($Command));
export { DeleteConnectionCommand };
//# sourceMappingURL=DeleteConnectionCommand.js.map