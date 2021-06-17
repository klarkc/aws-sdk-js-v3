import { __extends } from "tslib";
import { UpdateAssetPropertyRequest } from "../models/models_0";
import { deserializeAws_restJson1UpdateAssetPropertyCommand, serializeAws_restJson1UpdateAssetPropertyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an asset property's alias and notification state.</p>
 *          <important>
 *             <p>This operation overwrites the property's existing alias and notification state. To keep
 *         your existing property's alias or notification state, you must include the existing values
 *         in the UpdateAssetProperty request. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetProperty.html">DescribeAssetProperty</a>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, UpdateAssetPropertyCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, UpdateAssetPropertyCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new UpdateAssetPropertyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAssetPropertyCommandInput} for command's `input` shape.
 * @see {@link UpdateAssetPropertyCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAssetPropertyCommand = /** @class */ (function (_super) {
    __extends(UpdateAssetPropertyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateAssetPropertyCommand(input) {
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
    UpdateAssetPropertyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSiteWiseClient";
        var commandName = "UpdateAssetPropertyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateAssetPropertyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateAssetPropertyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateAssetPropertyCommand(input, context);
    };
    UpdateAssetPropertyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateAssetPropertyCommand(output, context);
    };
    return UpdateAssetPropertyCommand;
}($Command));
export { UpdateAssetPropertyCommand };
//# sourceMappingURL=UpdateAssetPropertyCommand.js.map