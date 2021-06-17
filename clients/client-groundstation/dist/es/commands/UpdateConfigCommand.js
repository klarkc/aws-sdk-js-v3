import { __extends } from "tslib";
import { ConfigIdResponse, UpdateConfigRequest } from "../models/models_0";
import { deserializeAws_restJson1UpdateConfigCommand, serializeAws_restJson1UpdateConfigCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the <code>Config</code> used when scheduling contacts.</p>
 *          <p>Updating a <code>Config</code> will not update the execution parameters
 *          for existing future contacts scheduled with this <code>Config</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, UpdateConfigCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, UpdateConfigCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new UpdateConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateConfigCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateConfigCommand = /** @class */ (function (_super) {
    __extends(UpdateConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateConfigCommand(input) {
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
    UpdateConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GroundStationClient";
        var commandName = "UpdateConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ConfigIdResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateConfigCommand(input, context);
    };
    UpdateConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateConfigCommand(output, context);
    };
    return UpdateConfigCommand;
}($Command));
export { UpdateConfigCommand };
//# sourceMappingURL=UpdateConfigCommand.js.map