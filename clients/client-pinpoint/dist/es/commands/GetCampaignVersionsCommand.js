import { __extends } from "tslib";
import { GetCampaignVersionsRequest, GetCampaignVersionsResponse } from "../models/models_0";
import { deserializeAws_restJson1GetCampaignVersionsCommand, serializeAws_restJson1GetCampaignVersionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about the status, configuration, and other settings for all versions of a campaign.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetCampaignVersionsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetCampaignVersionsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetCampaignVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCampaignVersionsCommandInput} for command's `input` shape.
 * @see {@link GetCampaignVersionsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCampaignVersionsCommand = /** @class */ (function (_super) {
    __extends(GetCampaignVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCampaignVersionsCommand(input) {
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
    GetCampaignVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "GetCampaignVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCampaignVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetCampaignVersionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCampaignVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetCampaignVersionsCommand(input, context);
    };
    GetCampaignVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetCampaignVersionsCommand(output, context);
    };
    return GetCampaignVersionsCommand;
}($Command));
export { GetCampaignVersionsCommand };
//# sourceMappingURL=GetCampaignVersionsCommand.js.map