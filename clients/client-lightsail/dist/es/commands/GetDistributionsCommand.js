import { __extends } from "tslib";
import { GetDistributionsRequest, GetDistributionsResult } from "../models/models_0";
import { deserializeAws_json1_1GetDistributionsCommand, serializeAws_json1_1GetDistributionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about one or more of your Amazon Lightsail content delivery network
 *       (CDN) distributions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetDistributionsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetDistributionsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetDistributionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDistributionsCommandInput} for command's `input` shape.
 * @see {@link GetDistributionsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDistributionsCommand = /** @class */ (function (_super) {
    __extends(GetDistributionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDistributionsCommand(input) {
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
    GetDistributionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetDistributionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDistributionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDistributionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDistributionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetDistributionsCommand(input, context);
    };
    GetDistributionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetDistributionsCommand(output, context);
    };
    return GetDistributionsCommand;
}($Command));
export { GetDistributionsCommand };
//# sourceMappingURL=GetDistributionsCommand.js.map