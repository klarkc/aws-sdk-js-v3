import { __extends } from "tslib";
import { GetCampaignActivitiesRequest, GetCampaignActivitiesResponse } from "../models/models_0";
import { deserializeAws_restJson1GetCampaignActivitiesCommand, serializeAws_restJson1GetCampaignActivitiesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about all the activities for a campaign.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetCampaignActivitiesCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetCampaignActivitiesCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetCampaignActivitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCampaignActivitiesCommandInput} for command's `input` shape.
 * @see {@link GetCampaignActivitiesCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCampaignActivitiesCommand = /** @class */ (function (_super) {
    __extends(GetCampaignActivitiesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCampaignActivitiesCommand(input) {
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
    GetCampaignActivitiesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "GetCampaignActivitiesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCampaignActivitiesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetCampaignActivitiesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCampaignActivitiesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetCampaignActivitiesCommand(input, context);
    };
    GetCampaignActivitiesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetCampaignActivitiesCommand(output, context);
    };
    return GetCampaignActivitiesCommand;
}($Command));
export { GetCampaignActivitiesCommand };
//# sourceMappingURL=GetCampaignActivitiesCommand.js.map