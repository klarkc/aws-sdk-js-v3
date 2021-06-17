import { __extends } from "tslib";
import { CreatePlacementRequest, CreatePlacementResponse } from "../models/models_0";
import { deserializeAws_restJson1CreatePlacementCommand, serializeAws_restJson1CreatePlacementCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an empty placement.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickProjectsClient, CreatePlacementCommand } from "@aws-sdk/client-iot-1click-projects"; // ES Modules import
 * // const { IoT1ClickProjectsClient, CreatePlacementCommand } = require("@aws-sdk/client-iot-1click-projects"); // CommonJS import
 * const client = new IoT1ClickProjectsClient(config);
 * const command = new CreatePlacementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePlacementCommandInput} for command's `input` shape.
 * @see {@link CreatePlacementCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickProjectsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreatePlacementCommand = /** @class */ (function (_super) {
    __extends(CreatePlacementCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreatePlacementCommand(input) {
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
    CreatePlacementCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoT1ClickProjectsClient";
        var commandName = "CreatePlacementCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreatePlacementRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreatePlacementResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreatePlacementCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreatePlacementCommand(input, context);
    };
    CreatePlacementCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreatePlacementCommand(output, context);
    };
    return CreatePlacementCommand;
}($Command));
export { CreatePlacementCommand };
//# sourceMappingURL=CreatePlacementCommand.js.map