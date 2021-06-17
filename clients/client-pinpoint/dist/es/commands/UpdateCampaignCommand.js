import { __extends } from "tslib";
import { UpdateCampaignRequest, UpdateCampaignResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateCampaignCommand, serializeAws_restJson1UpdateCampaignCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the configuration and other settings for a campaign.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateCampaignCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateCampaignCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateCampaignCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCampaignCommandInput} for command's `input` shape.
 * @see {@link UpdateCampaignCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateCampaignCommand = /** @class */ (function (_super) {
    __extends(UpdateCampaignCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateCampaignCommand(input) {
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
    UpdateCampaignCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "UpdateCampaignCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateCampaignRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateCampaignResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateCampaignCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateCampaignCommand(input, context);
    };
    UpdateCampaignCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateCampaignCommand(output, context);
    };
    return UpdateCampaignCommand;
}($Command));
export { UpdateCampaignCommand };
//# sourceMappingURL=UpdateCampaignCommand.js.map