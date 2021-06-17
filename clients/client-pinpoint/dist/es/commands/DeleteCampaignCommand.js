import { __extends } from "tslib";
import { DeleteCampaignRequest, DeleteCampaignResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteCampaignCommand, serializeAws_restJson1DeleteCampaignCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a campaign from an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteCampaignCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteCampaignCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new DeleteCampaignCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCampaignCommandInput} for command's `input` shape.
 * @see {@link DeleteCampaignCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteCampaignCommand = /** @class */ (function (_super) {
    __extends(DeleteCampaignCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteCampaignCommand(input) {
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
    DeleteCampaignCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "DeleteCampaignCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteCampaignRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteCampaignResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteCampaignCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteCampaignCommand(input, context);
    };
    DeleteCampaignCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteCampaignCommand(output, context);
    };
    return DeleteCampaignCommand;
}($Command));
export { DeleteCampaignCommand };
//# sourceMappingURL=DeleteCampaignCommand.js.map