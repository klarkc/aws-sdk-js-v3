import { __extends } from "tslib";
import { DeletePlacementRequest, DeletePlacementResponse } from "../models/models_0";
import { deserializeAws_restJson1DeletePlacementCommand, serializeAws_restJson1DeletePlacementCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a placement. To delete a placement, it must not have any devices associated with
 *       it.</p>
 *          <note>
 *             <p>When you delete a placement, all associated data becomes irretrievable.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickProjectsClient, DeletePlacementCommand } from "@aws-sdk/client-iot-1click-projects"; // ES Modules import
 * // const { IoT1ClickProjectsClient, DeletePlacementCommand } = require("@aws-sdk/client-iot-1click-projects"); // CommonJS import
 * const client = new IoT1ClickProjectsClient(config);
 * const command = new DeletePlacementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePlacementCommandInput} for command's `input` shape.
 * @see {@link DeletePlacementCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickProjectsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeletePlacementCommand = /** @class */ (function (_super) {
    __extends(DeletePlacementCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeletePlacementCommand(input) {
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
    DeletePlacementCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoT1ClickProjectsClient";
        var commandName = "DeletePlacementCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeletePlacementRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeletePlacementResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeletePlacementCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeletePlacementCommand(input, context);
    };
    DeletePlacementCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeletePlacementCommand(output, context);
    };
    return DeletePlacementCommand;
}($Command));
export { DeletePlacementCommand };
//# sourceMappingURL=DeletePlacementCommand.js.map