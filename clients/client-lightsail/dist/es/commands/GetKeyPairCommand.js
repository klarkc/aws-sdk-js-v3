import { __extends } from "tslib";
import { GetKeyPairRequest, GetKeyPairResult } from "../models/models_1";
import { deserializeAws_json1_1GetKeyPairCommand, serializeAws_json1_1GetKeyPairCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a specific key pair.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetKeyPairCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetKeyPairCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetKeyPairCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetKeyPairCommandInput} for command's `input` shape.
 * @see {@link GetKeyPairCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetKeyPairCommand = /** @class */ (function (_super) {
    __extends(GetKeyPairCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetKeyPairCommand(input) {
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
    GetKeyPairCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetKeyPairCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetKeyPairRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetKeyPairResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetKeyPairCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetKeyPairCommand(input, context);
    };
    GetKeyPairCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetKeyPairCommand(output, context);
    };
    return GetKeyPairCommand;
}($Command));
export { GetKeyPairCommand };
//# sourceMappingURL=GetKeyPairCommand.js.map