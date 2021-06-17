import { __extends } from "tslib";
import { DeleteSubnetGroupRequest, DeleteSubnetGroupResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteSubnetGroupCommand, serializeAws_json1_1DeleteSubnetGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a subnet group.</p>
 *         <note>
 *             <p>You cannot delete a subnet group if it is associated with any DAX
 *                 clusters.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, DeleteSubnetGroupCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, DeleteSubnetGroupCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * const client = new DAXClient(config);
 * const command = new DeleteSubnetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link DAXClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteSubnetGroupCommand = /** @class */ (function (_super) {
    __extends(DeleteSubnetGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteSubnetGroupCommand(input) {
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
    DeleteSubnetGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DAXClient";
        var commandName = "DeleteSubnetGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteSubnetGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteSubnetGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteSubnetGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteSubnetGroupCommand(input, context);
    };
    DeleteSubnetGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteSubnetGroupCommand(output, context);
    };
    return DeleteSubnetGroupCommand;
}($Command));
export { DeleteSubnetGroupCommand };
//# sourceMappingURL=DeleteSubnetGroupCommand.js.map