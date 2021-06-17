import { __extends } from "tslib";
import { GetStaticIpRequest, GetStaticIpResult } from "../models/models_1";
import { deserializeAws_json1_1GetStaticIpCommand, serializeAws_json1_1GetStaticIpCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about an Amazon Lightsail static IP.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetStaticIpCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetStaticIpCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetStaticIpCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetStaticIpCommandInput} for command's `input` shape.
 * @see {@link GetStaticIpCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetStaticIpCommand = /** @class */ (function (_super) {
    __extends(GetStaticIpCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetStaticIpCommand(input) {
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
    GetStaticIpCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetStaticIpCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetStaticIpRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetStaticIpResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetStaticIpCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetStaticIpCommand(input, context);
    };
    GetStaticIpCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetStaticIpCommand(output, context);
    };
    return GetStaticIpCommand;
}($Command));
export { GetStaticIpCommand };
//# sourceMappingURL=GetStaticIpCommand.js.map