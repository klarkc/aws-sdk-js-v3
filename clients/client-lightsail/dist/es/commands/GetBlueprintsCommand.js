import { __extends } from "tslib";
import { GetBlueprintsRequest, GetBlueprintsResult } from "../models/models_0";
import { deserializeAws_json1_1GetBlueprintsCommand, serializeAws_json1_1GetBlueprintsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the list of available instance images, or <i>blueprints</i>. You can
 *       use a blueprint to create a new instance already running a specific operating system, as well
 *       as a preinstalled app or development stack. The software each instance is running depends on
 *       the blueprint image you choose.</p>
 *          <note>
 *             <p>Use active blueprints when creating new instances. Inactive blueprints are listed to
 *         support customers with existing instances and are not necessarily available to create new
 *         instances. Blueprints are marked inactive when they become outdated due to operating system
 *         updates or new application releases.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetBlueprintsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetBlueprintsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetBlueprintsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBlueprintsCommandInput} for command's `input` shape.
 * @see {@link GetBlueprintsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetBlueprintsCommand = /** @class */ (function (_super) {
    __extends(GetBlueprintsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetBlueprintsCommand(input) {
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
    GetBlueprintsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetBlueprintsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetBlueprintsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetBlueprintsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetBlueprintsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetBlueprintsCommand(input, context);
    };
    GetBlueprintsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetBlueprintsCommand(output, context);
    };
    return GetBlueprintsCommand;
}($Command));
export { GetBlueprintsCommand };
//# sourceMappingURL=GetBlueprintsCommand.js.map