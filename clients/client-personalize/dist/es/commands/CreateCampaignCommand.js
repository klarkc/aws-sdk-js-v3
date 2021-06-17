import { __extends } from "tslib";
import { CreateCampaignRequest, CreateCampaignResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateCampaignCommand, serializeAws_json1_1CreateCampaignCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a campaign by deploying a solution version. When a client calls the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a>
 *       and
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetPersonalizedRanking.html">GetPersonalizedRanking</a>
 *       APIs, a campaign is specified in the request.</p>
 *
 *          <p>
 *             <b>Minimum Provisioned TPS and Auto-Scaling</b>
 *          </p>
 *
 *          <p>A transaction is a single <code>GetRecommendations</code> or
 *        <code>GetPersonalizedRanking</code> call. Transactions per second (TPS) is the throughput
 *        and unit of billing for Amazon Personalize. The minimum provisioned TPS
 *        (<code>minProvisionedTPS</code>) specifies the baseline throughput provisioned by
 *        Amazon Personalize, and thus, the minimum billing charge.
 *     </p>
 *          <p>
 *        If your TPS increases beyond
 *        <code>minProvisionedTPS</code>, Amazon Personalize auto-scales the provisioned capacity up and down,
 *        but never below <code>minProvisionedTPS</code>.
 *        There's a short time delay while the capacity is increased that might cause loss of
 *        transactions.</p>
 *          <p>The actual TPS used is calculated as the average requests/second within a 5-minute window.
 *       You pay for maximum of either the minimum provisioned TPS or the actual TPS.
 *       We recommend starting with a low <code>minProvisionedTPS</code>, track
 *        your usage using Amazon CloudWatch metrics, and then increase the <code>minProvisionedTPS</code>
 *        as necessary.</p>
 *
 *          <p>
 *             <b>Status</b>
 *          </p>
 *          <p>A campaign can be in one of the following states:</p>
 *          <ul>
 *             <li>
 *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
 *             </li>
 *             <li>
 *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
 *             </li>
 *          </ul>
 *          <p>To get the campaign status, call <a>DescribeCampaign</a>.</p>
 *          <note>
 *             <p>Wait until the <code>status</code> of the campaign
 *         is <code>ACTIVE</code> before asking the campaign for recommendations.</p>
 *          </note>
 *
 *          <p class="title">
 *             <b>Related APIs</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ListCampaigns</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeCampaign</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateCampaign</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteCampaign</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, CreateCampaignCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, CreateCampaignCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new CreateCampaignCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCampaignCommandInput} for command's `input` shape.
 * @see {@link CreateCampaignCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "PersonalizeClient";
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
        return serializeAws_json1_1CreateCampaignCommand(input, context);
    };
    CreateCampaignCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateCampaignCommand(output, context);
    };
    return CreateCampaignCommand;
}($Command));
export { CreateCampaignCommand };
//# sourceMappingURL=CreateCampaignCommand.js.map