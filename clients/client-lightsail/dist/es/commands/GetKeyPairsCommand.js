import { __extends } from "tslib";
import { GetKeyPairsRequest, GetKeyPairsResult } from "../models/models_1";
import { deserializeAws_json1_1GetKeyPairsCommand, serializeAws_json1_1GetKeyPairsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about all key pairs in the user's account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetKeyPairsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetKeyPairsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetKeyPairsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetKeyPairsCommandInput} for command's `input` shape.
 * @see {@link GetKeyPairsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetKeyPairsCommand = /** @class */ (function (_super) {
    __extends(GetKeyPairsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetKeyPairsCommand(input) {
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
    GetKeyPairsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetKeyPairsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetKeyPairsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetKeyPairsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetKeyPairsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetKeyPairsCommand(input, context);
    };
    GetKeyPairsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetKeyPairsCommand(output, context);
    };
    return GetKeyPairsCommand;
}($Command));
export { GetKeyPairsCommand };
//# sourceMappingURL=GetKeyPairsCommand.js.map