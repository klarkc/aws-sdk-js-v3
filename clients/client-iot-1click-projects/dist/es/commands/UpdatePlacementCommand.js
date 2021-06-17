import { __extends } from "tslib";
import { UpdatePlacementRequest, UpdatePlacementResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdatePlacementCommand, serializeAws_restJson1UpdatePlacementCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a placement with the given attributes. To clear an attribute, pass an empty value
 *       (i.e., "").</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickProjectsClient, UpdatePlacementCommand } from "@aws-sdk/client-iot-1click-projects"; // ES Modules import
 * // const { IoT1ClickProjectsClient, UpdatePlacementCommand } = require("@aws-sdk/client-iot-1click-projects"); // CommonJS import
 * const client = new IoT1ClickProjectsClient(config);
 * const command = new UpdatePlacementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePlacementCommandInput} for command's `input` shape.
 * @see {@link UpdatePlacementCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickProjectsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdatePlacementCommand = /** @class */ (function (_super) {
    __extends(UpdatePlacementCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdatePlacementCommand(input) {
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
    UpdatePlacementCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoT1ClickProjectsClient";
        var commandName = "UpdatePlacementCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdatePlacementRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdatePlacementResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdatePlacementCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdatePlacementCommand(input, context);
    };
    UpdatePlacementCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdatePlacementCommand(output, context);
    };
    return UpdatePlacementCommand;
}($Command));
export { UpdatePlacementCommand };
//# sourceMappingURL=UpdatePlacementCommand.js.map