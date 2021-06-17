import { __extends } from "tslib";
import { GetLaunchProfileInitializationRequest, GetLaunchProfileInitializationResponse } from "../models/models_0";
import { deserializeAws_restJson1GetLaunchProfileInitializationCommand, serializeAws_restJson1GetLaunchProfileInitializationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Get a launch profile initialization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, GetLaunchProfileInitializationCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, GetLaunchProfileInitializationCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new GetLaunchProfileInitializationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLaunchProfileInitializationCommandInput} for command's `input` shape.
 * @see {@link GetLaunchProfileInitializationCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetLaunchProfileInitializationCommand = /** @class */ (function (_super) {
    __extends(GetLaunchProfileInitializationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetLaunchProfileInitializationCommand(input) {
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
    GetLaunchProfileInitializationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NimbleClient";
        var commandName = "GetLaunchProfileInitializationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetLaunchProfileInitializationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetLaunchProfileInitializationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetLaunchProfileInitializationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetLaunchProfileInitializationCommand(input, context);
    };
    GetLaunchProfileInitializationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetLaunchProfileInitializationCommand(output, context);
    };
    return GetLaunchProfileInitializationCommand;
}($Command));
export { GetLaunchProfileInitializationCommand };
//# sourceMappingURL=GetLaunchProfileInitializationCommand.js.map