import { __extends } from "tslib";
import { DeleteIpGroupRequest, DeleteIpGroupResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteIpGroupCommand, serializeAws_json1_1DeleteIpGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified IP access control group.</p>
 *          <p>You cannot delete an IP access control group that is associated with a directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DeleteIpGroupCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DeleteIpGroupCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new DeleteIpGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteIpGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteIpGroupCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteIpGroupCommand = /** @class */ (function (_super) {
    __extends(DeleteIpGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteIpGroupCommand(input) {
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
    DeleteIpGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "DeleteIpGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteIpGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteIpGroupResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteIpGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteIpGroupCommand(input, context);
    };
    DeleteIpGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteIpGroupCommand(output, context);
    };
    return DeleteIpGroupCommand;
}($Command));
export { DeleteIpGroupCommand };
//# sourceMappingURL=DeleteIpGroupCommand.js.map