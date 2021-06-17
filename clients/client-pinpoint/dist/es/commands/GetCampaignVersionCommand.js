import { __extends } from "tslib";
import { GetCampaignVersionRequest, GetCampaignVersionResponse } from "../models/models_0";
import { deserializeAws_restJson1GetCampaignVersionCommand, serializeAws_restJson1GetCampaignVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about the status, configuration, and other settings for a specific version of a campaign.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetCampaignVersionCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetCampaignVersionCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetCampaignVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCampaignVersionCommandInput} for command's `input` shape.
 * @see {@link GetCampaignVersionCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCampaignVersionCommand = /** @class */ (function (_super) {
    __extends(GetCampaignVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCampaignVersionCommand(input) {
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
    GetCampaignVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "GetCampaignVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCampaignVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetCampaignVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCampaignVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetCampaignVersionCommand(input, context);
    };
    GetCampaignVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetCampaignVersionCommand(output, context);
    };
    return GetCampaignVersionCommand;
}($Command));
export { GetCampaignVersionCommand };
//# sourceMappingURL=GetCampaignVersionCommand.js.map