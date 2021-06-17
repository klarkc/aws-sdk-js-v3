import { __extends } from "tslib";
import { GetDistributionBundlesRequest, GetDistributionBundlesResult } from "../models/models_0";
import { deserializeAws_json1_1GetDistributionBundlesCommand, serializeAws_json1_1GetDistributionBundlesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the list bundles that can be applied to you Amazon Lightsail content delivery
 *       network (CDN) distributions.</p>
 *          <p>A distribution bundle specifies the monthly network transfer quota and monthly cost of
 *       your dsitribution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetDistributionBundlesCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetDistributionBundlesCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetDistributionBundlesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDistributionBundlesCommandInput} for command's `input` shape.
 * @see {@link GetDistributionBundlesCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDistributionBundlesCommand = /** @class */ (function (_super) {
    __extends(GetDistributionBundlesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDistributionBundlesCommand(input) {
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
    GetDistributionBundlesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetDistributionBundlesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDistributionBundlesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDistributionBundlesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDistributionBundlesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetDistributionBundlesCommand(input, context);
    };
    GetDistributionBundlesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetDistributionBundlesCommand(output, context);
    };
    return GetDistributionBundlesCommand;
}($Command));
export { GetDistributionBundlesCommand };
//# sourceMappingURL=GetDistributionBundlesCommand.js.map