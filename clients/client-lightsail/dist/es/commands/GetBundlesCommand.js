import { __extends } from "tslib";
import { GetBundlesRequest, GetBundlesResult } from "../models/models_0";
import { deserializeAws_json1_1GetBundlesCommand, serializeAws_json1_1GetBundlesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the list of bundles that are available for purchase. A bundle describes the specs
 *       for your virtual private server (or <i>instance</i>).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetBundlesCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetBundlesCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetBundlesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBundlesCommandInput} for command's `input` shape.
 * @see {@link GetBundlesCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetBundlesCommand = /** @class */ (function (_super) {
    __extends(GetBundlesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetBundlesCommand(input) {
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
    GetBundlesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetBundlesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetBundlesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetBundlesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetBundlesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetBundlesCommand(input, context);
    };
    GetBundlesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetBundlesCommand(output, context);
    };
    return GetBundlesCommand;
}($Command));
export { GetBundlesCommand };
//# sourceMappingURL=GetBundlesCommand.js.map