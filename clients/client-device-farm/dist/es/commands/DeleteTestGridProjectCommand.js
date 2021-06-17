import { __extends } from "tslib";
import { DeleteTestGridProjectRequest, DeleteTestGridProjectResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteTestGridProjectCommand, serializeAws_json1_1DeleteTestGridProjectCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Deletes a Selenium testing project and all content generated under it. </p>
 *          <important>
 *             <p>You cannot undo this operation.</p>
 *          </important>
 *          <note>
 *             <p>You cannot delete a project if it has active sessions.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, DeleteTestGridProjectCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, DeleteTestGridProjectCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new DeleteTestGridProjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTestGridProjectCommandInput} for command's `input` shape.
 * @see {@link DeleteTestGridProjectCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTestGridProjectCommand = /** @class */ (function (_super) {
    __extends(DeleteTestGridProjectCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteTestGridProjectCommand(input) {
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
    DeleteTestGridProjectCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "DeleteTestGridProjectCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteTestGridProjectRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteTestGridProjectResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteTestGridProjectCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteTestGridProjectCommand(input, context);
    };
    DeleteTestGridProjectCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteTestGridProjectCommand(output, context);
    };
    return DeleteTestGridProjectCommand;
}($Command));
export { DeleteTestGridProjectCommand };
//# sourceMappingURL=DeleteTestGridProjectCommand.js.map