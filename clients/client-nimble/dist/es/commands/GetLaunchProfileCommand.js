import { __extends } from "tslib";
import { GetLaunchProfileRequest, GetLaunchProfileResponse } from "../models/models_0";
import { deserializeAws_restJson1GetLaunchProfileCommand, serializeAws_restJson1GetLaunchProfileCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Get a launch profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, GetLaunchProfileCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, GetLaunchProfileCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new GetLaunchProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLaunchProfileCommandInput} for command's `input` shape.
 * @see {@link GetLaunchProfileCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetLaunchProfileCommand = /** @class */ (function (_super) {
    __extends(GetLaunchProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetLaunchProfileCommand(input) {
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
    GetLaunchProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NimbleClient";
        var commandName = "GetLaunchProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetLaunchProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetLaunchProfileResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetLaunchProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetLaunchProfileCommand(input, context);
    };
    GetLaunchProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetLaunchProfileCommand(output, context);
    };
    return GetLaunchProfileCommand;
}($Command));
export { GetLaunchProfileCommand };
//# sourceMappingURL=GetLaunchProfileCommand.js.map