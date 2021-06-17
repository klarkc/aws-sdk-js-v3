import { __extends } from "tslib";
import { CreateCampaignRequest, CreateCampaignResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateCampaignCommand, serializeAws_restJson1CreateCampaignCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new campaign for an application or updates the settings of an existing campaign for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, CreateCampaignCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, CreateCampaignCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new CreateCampaignCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCampaignCommandInput} for command's `input` shape.
 * @see {@link CreateCampaignCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateCampaignCommand = /** @class */ (function (_super) {
    __extends(CreateCampaignCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateCampaignCommand(input) {
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
    CreateCampaignCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "CreateCampaignCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateCampaignRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateCampaignResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateCampaignCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateCampaignCommand(input, context);
    };
    CreateCampaignCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateCampaignCommand(output, context);
    };
    return CreateCampaignCommand;
}($Command));
export { CreateCampaignCommand };
//# sourceMappingURL=CreateCampaignCommand.js.map