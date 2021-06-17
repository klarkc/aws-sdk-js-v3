import { __extends } from "tslib";
import { ListCampaignsRequest, ListCampaignsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListCampaignsCommand, serializeAws_json1_1ListCampaignsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of campaigns that use the given solution.
 *       When a solution is not specified, all the campaigns associated with the account are listed.
 *       The response provides the properties for each campaign, including the Amazon Resource Name (ARN).
 *       For more information on campaigns, see <a>CreateCampaign</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, ListCampaignsCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, ListCampaignsCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new ListCampaignsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCampaignsCommandInput} for command's `input` shape.
 * @see {@link ListCampaignsCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListCampaignsCommand = /** @class */ (function (_super) {
    __extends(ListCampaignsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListCampaignsCommand(input) {
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
    ListCampaignsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PersonalizeClient";
        var commandName = "ListCampaignsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListCampaignsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListCampaignsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListCampaignsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListCampaignsCommand(input, context);
    };
    ListCampaignsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListCampaignsCommand(output, context);
    };
    return ListCampaignsCommand;
}($Command));
export { ListCampaignsCommand };
//# sourceMappingURL=ListCampaignsCommand.js.map