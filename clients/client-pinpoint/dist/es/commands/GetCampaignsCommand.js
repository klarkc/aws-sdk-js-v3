import { __extends } from "tslib";
import { GetCampaignsRequest, GetCampaignsResponse } from "../models/models_0";
import { deserializeAws_restJson1GetCampaignsCommand, serializeAws_restJson1GetCampaignsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about the status, configuration, and other settings for all the campaigns that are associated with an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetCampaignsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetCampaignsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetCampaignsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCampaignsCommandInput} for command's `input` shape.
 * @see {@link GetCampaignsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCampaignsCommand = /** @class */ (function (_super) {
    __extends(GetCampaignsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCampaignsCommand(input) {
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
    GetCampaignsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "GetCampaignsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCampaignsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetCampaignsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCampaignsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetCampaignsCommand(input, context);
    };
    GetCampaignsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetCampaignsCommand(output, context);
    };
    return GetCampaignsCommand;
}($Command));
export { GetCampaignsCommand };
//# sourceMappingURL=GetCampaignsCommand.js.map