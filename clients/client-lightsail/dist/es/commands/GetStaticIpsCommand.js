import { __extends } from "tslib";
import { GetStaticIpsRequest, GetStaticIpsResult } from "../models/models_1";
import { deserializeAws_json1_1GetStaticIpsCommand, serializeAws_json1_1GetStaticIpsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about all static IPs in the user's account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetStaticIpsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetStaticIpsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetStaticIpsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetStaticIpsCommandInput} for command's `input` shape.
 * @see {@link GetStaticIpsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetStaticIpsCommand = /** @class */ (function (_super) {
    __extends(GetStaticIpsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetStaticIpsCommand(input) {
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
    GetStaticIpsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetStaticIpsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetStaticIpsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetStaticIpsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetStaticIpsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetStaticIpsCommand(input, context);
    };
    GetStaticIpsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetStaticIpsCommand(output, context);
    };
    return GetStaticIpsCommand;
}($Command));
export { GetStaticIpsCommand };
//# sourceMappingURL=GetStaticIpsCommand.js.map