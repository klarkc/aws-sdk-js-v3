import { __extends } from "tslib";
import { UpdateCampaignRequest, UpdateCampaignResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateCampaignCommand, serializeAws_json1_1UpdateCampaignCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a campaign by either deploying a new solution or changing the value of the
 *       campaign's <code>minProvisionedTPS</code> parameter.</p>
 *          <p>To update a campaign, the campaign status must be ACTIVE or CREATE FAILED.
 *       Check the campaign status using the <a>DescribeCampaign</a> API.</p>
 *          <note>
 *             <p>You must wait until the <code>status</code> of the
 *         updated campaign is <code>ACTIVE</code> before asking the campaign for recommendations.</p>
 *          </note>
 *          <p>For more information on campaigns, see <a>CreateCampaign</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, UpdateCampaignCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, UpdateCampaignCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new UpdateCampaignCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCampaignCommandInput} for command's `input` shape.
 * @see {@link UpdateCampaignCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "PersonalizeClient";
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
        return serializeAws_json1_1UpdateCampaignCommand(input, context);
    };
    UpdateCampaignCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateCampaignCommand(output, context);
    };
    return UpdateCampaignCommand;
}($Command));
export { UpdateCampaignCommand };
//# sourceMappingURL=UpdateCampaignCommand.js.map