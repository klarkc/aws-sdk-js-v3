import { __extends } from "tslib";
import { GetCampaignRequest, GetCampaignResponse } from "../models/models_0";
import { deserializeAws_restJson1GetCampaignCommand, serializeAws_restJson1GetCampaignCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about the status, configuration, and other settings for a campaign.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetCampaignCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetCampaignCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetCampaignCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCampaignCommandInput} for command's `input` shape.
 * @see {@link GetCampaignCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCampaignCommand = /** @class */ (function (_super) {
    __extends(GetCampaignCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCampaignCommand(input) {
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
    GetCampaignCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "GetCampaignCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCampaignRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetCampaignResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCampaignCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetCampaignCommand(input, context);
    };
    GetCampaignCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetCampaignCommand(output, context);
    };
    return GetCampaignCommand;
}($Command));
export { GetCampaignCommand };
//# sourceMappingURL=GetCampaignCommand.js.map