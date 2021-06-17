import { __extends } from "tslib";
import { UpdateDistributionRequest, UpdateDistributionResult } from "../models/models_1";
import { deserializeAws_json1_1UpdateDistributionCommand, serializeAws_json1_1UpdateDistributionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an existing Amazon Lightsail content delivery network (CDN) distribution.</p>
 *          <p>Use this action to update the configuration of your existing distribution</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, UpdateDistributionCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, UpdateDistributionCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new UpdateDistributionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDistributionCommandInput} for command's `input` shape.
 * @see {@link UpdateDistributionCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDistributionCommand = /** @class */ (function (_super) {
    __extends(UpdateDistributionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDistributionCommand(input) {
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
    UpdateDistributionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "UpdateDistributionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDistributionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDistributionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDistributionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateDistributionCommand(input, context);
    };
    UpdateDistributionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateDistributionCommand(output, context);
    };
    return UpdateDistributionCommand;
}($Command));
export { UpdateDistributionCommand };
//# sourceMappingURL=UpdateDistributionCommand.js.map