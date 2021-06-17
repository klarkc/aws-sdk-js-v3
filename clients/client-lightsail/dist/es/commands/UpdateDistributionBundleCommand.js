import { __extends } from "tslib";
import { UpdateDistributionBundleRequest, UpdateDistributionBundleResult } from "../models/models_1";
import { deserializeAws_json1_1UpdateDistributionBundleCommand, serializeAws_json1_1UpdateDistributionBundleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the bundle of your Amazon Lightsail content delivery network (CDN)
 *       distribution.</p>
 *          <p>A distribution bundle specifies the monthly network transfer quota and monthly cost of
 *       your dsitribution.</p>
 *          <p>Update your distribution's bundle if your distribution is going over its monthly network
 *       transfer quota and is incurring an overage fee.</p>
 *          <p>You can update your distribution's bundle only one time within your monthly AWS billing
 *       cycle. To determine if you can update your distribution's bundle, use the
 *         <code>GetDistributions</code> action. The <code>ableToUpdateBundle</code> parameter in the
 *       result will indicate whether you can currently update your distribution's bundle.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, UpdateDistributionBundleCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, UpdateDistributionBundleCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new UpdateDistributionBundleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDistributionBundleCommandInput} for command's `input` shape.
 * @see {@link UpdateDistributionBundleCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDistributionBundleCommand = /** @class */ (function (_super) {
    __extends(UpdateDistributionBundleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDistributionBundleCommand(input) {
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
    UpdateDistributionBundleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "UpdateDistributionBundleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDistributionBundleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDistributionBundleResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDistributionBundleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateDistributionBundleCommand(input, context);
    };
    UpdateDistributionBundleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateDistributionBundleCommand(output, context);
    };
    return UpdateDistributionBundleCommand;
}($Command));
export { UpdateDistributionBundleCommand };
//# sourceMappingURL=UpdateDistributionBundleCommand.js.map