import { __extends } from "tslib";
import { DeleteHostInput, DeleteHostOutput } from "../models/models_0";
import { deserializeAws_json1_0DeleteHostCommand, serializeAws_json1_0DeleteHostCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>The host to be deleted. Before you delete a host, all connections associated to the host must be deleted.</p>
 *          <note>
 *             <p>A host cannot be deleted if it is in the VPC_CONFIG_INITIALIZING or VPC_CONFIG_DELETING state.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarConnectionsClient, DeleteHostCommand } from "@aws-sdk/client-codestar-connections"; // ES Modules import
 * // const { CodeStarConnectionsClient, DeleteHostCommand } = require("@aws-sdk/client-codestar-connections"); // CommonJS import
 * const client = new CodeStarConnectionsClient(config);
 * const command = new DeleteHostCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteHostCommandInput} for command's `input` shape.
 * @see {@link DeleteHostCommandOutput} for command's `response` shape.
 * @see {@link CodeStarConnectionsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteHostCommand = /** @class */ (function (_super) {
    __extends(DeleteHostCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteHostCommand(input) {
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
    DeleteHostCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeStarConnectionsClient";
        var commandName = "DeleteHostCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteHostInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteHostOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteHostCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DeleteHostCommand(input, context);
    };
    DeleteHostCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DeleteHostCommand(output, context);
    };
    return DeleteHostCommand;
}($Command));
export { DeleteHostCommand };
//# sourceMappingURL=DeleteHostCommand.js.map