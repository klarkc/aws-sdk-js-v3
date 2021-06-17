import { __extends } from "tslib";
import { DeleteClusterParameterGroupMessage } from "../models/models_0";
import { deserializeAws_queryDeleteClusterParameterGroupCommand, serializeAws_queryDeleteClusterParameterGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a specified Amazon Redshift parameter group.</p>
 *         <note>
 *             <p>You cannot delete a parameter group if it is associated with a
 *                 cluster.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeleteClusterParameterGroupCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeleteClusterParameterGroupCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DeleteClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteClusterParameterGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteClusterParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteClusterParameterGroupCommand = /** @class */ (function (_super) {
    __extends(DeleteClusterParameterGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteClusterParameterGroupCommand(input) {
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
    DeleteClusterParameterGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "DeleteClusterParameterGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteClusterParameterGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteClusterParameterGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteClusterParameterGroupCommand(input, context);
    };
    DeleteClusterParameterGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteClusterParameterGroupCommand(output, context);
    };
    return DeleteClusterParameterGroupCommand;
}($Command));
export { DeleteClusterParameterGroupCommand };
//# sourceMappingURL=DeleteClusterParameterGroupCommand.js.map