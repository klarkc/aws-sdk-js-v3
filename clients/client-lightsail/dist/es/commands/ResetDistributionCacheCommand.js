import { __extends } from "tslib";
import { ResetDistributionCacheRequest, ResetDistributionCacheResult } from "../models/models_1";
import { deserializeAws_json1_1ResetDistributionCacheCommand, serializeAws_json1_1ResetDistributionCacheCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes currently cached content from your Amazon Lightsail content delivery network (CDN)
 *       distribution.</p>
 *          <p>After resetting the cache, the next time a content request is made, your distribution
 *       pulls, serves, and caches it from the origin.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, ResetDistributionCacheCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, ResetDistributionCacheCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new ResetDistributionCacheCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetDistributionCacheCommandInput} for command's `input` shape.
 * @see {@link ResetDistributionCacheCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ResetDistributionCacheCommand = /** @class */ (function (_super) {
    __extends(ResetDistributionCacheCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ResetDistributionCacheCommand(input) {
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
    ResetDistributionCacheCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "ResetDistributionCacheCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ResetDistributionCacheRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ResetDistributionCacheResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ResetDistributionCacheCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ResetDistributionCacheCommand(input, context);
    };
    ResetDistributionCacheCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ResetDistributionCacheCommand(output, context);
    };
    return ResetDistributionCacheCommand;
}($Command));
export { ResetDistributionCacheCommand };
//# sourceMappingURL=ResetDistributionCacheCommand.js.map