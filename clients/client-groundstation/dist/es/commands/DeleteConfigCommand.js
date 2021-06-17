import { __extends } from "tslib";
import { ConfigIdResponse, DeleteConfigRequest } from "../models/models_0";
import { deserializeAws_restJson1DeleteConfigCommand, serializeAws_restJson1DeleteConfigCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a <code>Config</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, DeleteConfigCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, DeleteConfigCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new DeleteConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteConfigCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteConfigCommand = /** @class */ (function (_super) {
    __extends(DeleteConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteConfigCommand(input) {
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
    DeleteConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GroundStationClient";
        var commandName = "DeleteConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ConfigIdResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteConfigCommand(input, context);
    };
    DeleteConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteConfigCommand(output, context);
    };
    return DeleteConfigCommand;
}($Command));
export { DeleteConfigCommand };
//# sourceMappingURL=DeleteConfigCommand.js.map