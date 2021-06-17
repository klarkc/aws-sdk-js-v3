import { __extends } from "tslib";
import { DeleteDBClusterParameterGroupMessage } from "../models/models_0";
import { deserializeAws_queryDeleteDBClusterParameterGroupCommand, serializeAws_queryDeleteDBClusterParameterGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a specified DB cluster parameter group. The DB cluster parameter group to be
 *       deleted can't be associated with any DB clusters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DeleteDBClusterParameterGroupCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DeleteDBClusterParameterGroupCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new DeleteDBClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDBClusterParameterGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteDBClusterParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDBClusterParameterGroupCommand = /** @class */ (function (_super) {
    __extends(DeleteDBClusterParameterGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDBClusterParameterGroupCommand(input) {
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
    DeleteDBClusterParameterGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NeptuneClient";
        var commandName = "DeleteDBClusterParameterGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDBClusterParameterGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDBClusterParameterGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteDBClusterParameterGroupCommand(input, context);
    };
    DeleteDBClusterParameterGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteDBClusterParameterGroupCommand(output, context);
    };
    return DeleteDBClusterParameterGroupCommand;
}($Command));
export { DeleteDBClusterParameterGroupCommand };
//# sourceMappingURL=DeleteDBClusterParameterGroupCommand.js.map