import { __extends } from "tslib";
import { GetDistributionLatestCacheResetRequest, GetDistributionLatestCacheResetResult } from "../models/models_0";
import { deserializeAws_json1_1GetDistributionLatestCacheResetCommand, serializeAws_json1_1GetDistributionLatestCacheResetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the timestamp and status of the last cache reset of a specific Amazon Lightsail
 *       content delivery network (CDN) distribution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetDistributionLatestCacheResetCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetDistributionLatestCacheResetCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetDistributionLatestCacheResetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDistributionLatestCacheResetCommandInput} for command's `input` shape.
 * @see {@link GetDistributionLatestCacheResetCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDistributionLatestCacheResetCommand = /** @class */ (function (_super) {
    __extends(GetDistributionLatestCacheResetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDistributionLatestCacheResetCommand(input) {
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
    GetDistributionLatestCacheResetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetDistributionLatestCacheResetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDistributionLatestCacheResetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDistributionLatestCacheResetResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDistributionLatestCacheResetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetDistributionLatestCacheResetCommand(input, context);
    };
    GetDistributionLatestCacheResetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetDistributionLatestCacheResetCommand(output, context);
    };
    return GetDistributionLatestCacheResetCommand;
}($Command));
export { GetDistributionLatestCacheResetCommand };
//# sourceMappingURL=GetDistributionLatestCacheResetCommand.js.map