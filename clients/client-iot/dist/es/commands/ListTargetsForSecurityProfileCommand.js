import { __extends } from "tslib";
import { ListTargetsForSecurityProfileRequest, ListTargetsForSecurityProfileResponse } from "../models/models_1";
import { deserializeAws_restJson1ListTargetsForSecurityProfileCommand, serializeAws_restJson1ListTargetsForSecurityProfileCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the targets (thing groups) associated with a given Device Defender security profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListTargetsForSecurityProfileCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListTargetsForSecurityProfileCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListTargetsForSecurityProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTargetsForSecurityProfileCommandInput} for command's `input` shape.
 * @see {@link ListTargetsForSecurityProfileCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTargetsForSecurityProfileCommand = /** @class */ (function (_super) {
    __extends(ListTargetsForSecurityProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTargetsForSecurityProfileCommand(input) {
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
    ListTargetsForSecurityProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListTargetsForSecurityProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTargetsForSecurityProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTargetsForSecurityProfileResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTargetsForSecurityProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListTargetsForSecurityProfileCommand(input, context);
    };
    ListTargetsForSecurityProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListTargetsForSecurityProfileCommand(output, context);
    };
    return ListTargetsForSecurityProfileCommand;
}($Command));
export { ListTargetsForSecurityProfileCommand };
//# sourceMappingURL=ListTargetsForSecurityProfileCommand.js.map