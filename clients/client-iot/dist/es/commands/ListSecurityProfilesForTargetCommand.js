import { __extends } from "tslib";
import { ListSecurityProfilesForTargetRequest, ListSecurityProfilesForTargetResponse } from "../models/models_1";
import { deserializeAws_restJson1ListSecurityProfilesForTargetCommand, serializeAws_restJson1ListSecurityProfilesForTargetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the Device Defender security profiles attached to a target (thing group).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListSecurityProfilesForTargetCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListSecurityProfilesForTargetCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListSecurityProfilesForTargetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSecurityProfilesForTargetCommandInput} for command's `input` shape.
 * @see {@link ListSecurityProfilesForTargetCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSecurityProfilesForTargetCommand = /** @class */ (function (_super) {
    __extends(ListSecurityProfilesForTargetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSecurityProfilesForTargetCommand(input) {
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
    ListSecurityProfilesForTargetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListSecurityProfilesForTargetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSecurityProfilesForTargetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListSecurityProfilesForTargetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSecurityProfilesForTargetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListSecurityProfilesForTargetCommand(input, context);
    };
    ListSecurityProfilesForTargetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListSecurityProfilesForTargetCommand(output, context);
    };
    return ListSecurityProfilesForTargetCommand;
}($Command));
export { ListSecurityProfilesForTargetCommand };
//# sourceMappingURL=ListSecurityProfilesForTargetCommand.js.map