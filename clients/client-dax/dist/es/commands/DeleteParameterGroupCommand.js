import { __extends } from "tslib";
import { DeleteParameterGroupRequest, DeleteParameterGroupResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteParameterGroupCommand, serializeAws_json1_1DeleteParameterGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified parameter group. You cannot delete a parameter group if it is
 *             associated with any DAX clusters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, DeleteParameterGroupCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, DeleteParameterGroupCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * const client = new DAXClient(config);
 * const command = new DeleteParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteParameterGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link DAXClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteParameterGroupCommand = /** @class */ (function (_super) {
    __extends(DeleteParameterGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteParameterGroupCommand(input) {
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
    DeleteParameterGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DAXClient";
        var commandName = "DeleteParameterGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteParameterGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteParameterGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteParameterGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteParameterGroupCommand(input, context);
    };
    DeleteParameterGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteParameterGroupCommand(output, context);
    };
    return DeleteParameterGroupCommand;
}($Command));
export { DeleteParameterGroupCommand };
//# sourceMappingURL=DeleteParameterGroupCommand.js.map