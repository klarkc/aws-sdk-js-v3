import { __extends } from "tslib";
import { DeleteCampaignRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteCampaignCommand, serializeAws_json1_1DeleteCampaignCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes a campaign by deleting the solution deployment. The solution that
 *       the campaign is based on is not deleted and can be redeployed when needed. A deleted campaign can no
 *       longer be specified in a
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a>
 *       request.
 *       For more information on campaigns, see <a>CreateCampaign</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DeleteCampaignCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DeleteCampaignCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new DeleteCampaignCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCampaignCommandInput} for command's `input` shape.
 * @see {@link DeleteCampaignCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "PersonalizeClient";
        var commandName = "DeleteCampaignCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteCampaignRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteCampaignCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteCampaignCommand(input, context);
    };
    DeleteCampaignCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteCampaignCommand(output, context);
    };
    return DeleteCampaignCommand;
}($Command));
export { DeleteCampaignCommand };
//# sourceMappingURL=DeleteCampaignCommand.js.map