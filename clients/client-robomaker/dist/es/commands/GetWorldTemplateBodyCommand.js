import { __extends } from "tslib";
import { GetWorldTemplateBodyRequest, GetWorldTemplateBodyResponse } from "../models/models_0";
import { deserializeAws_restJson1GetWorldTemplateBodyCommand, serializeAws_restJson1GetWorldTemplateBodyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the world template body.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, GetWorldTemplateBodyCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, GetWorldTemplateBodyCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new GetWorldTemplateBodyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWorldTemplateBodyCommandInput} for command's `input` shape.
 * @see {@link GetWorldTemplateBodyCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetWorldTemplateBodyCommand = /** @class */ (function (_super) {
    __extends(GetWorldTemplateBodyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetWorldTemplateBodyCommand(input) {
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
    GetWorldTemplateBodyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "GetWorldTemplateBodyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetWorldTemplateBodyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetWorldTemplateBodyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetWorldTemplateBodyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetWorldTemplateBodyCommand(input, context);
    };
    GetWorldTemplateBodyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetWorldTemplateBodyCommand(output, context);
    };
    return GetWorldTemplateBodyCommand;
}($Command));
export { GetWorldTemplateBodyCommand };
//# sourceMappingURL=GetWorldTemplateBodyCommand.js.map