import { __extends } from "tslib";
import { ListTagsForResourceRequest, ListTagsForResourceResponse } from "../models/models_0";
import { deserializeAws_json1_1ListTagsForResourceCommand, serializeAws_json1_1ListTagsForResourceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             Retrieves all tags that are assigned to a GameLift resource.
 *             Resource tags are used to organize AWS resources for a range of purposes.
 *             This operation handles the permissions necessary to manage tags for the following
 *             GameLift resource types:</p>
 *         <ul>
 *             <li>
 *                 <p>Build</p>
 *             </li>
 *             <li>
 *                 <p>Script</p>
 *             </li>
 *             <li>
 *                 <p>Fleet</p>
 *             </li>
 *             <li>
 *                 <p>Alias</p>
 *             </li>
 *             <li>
 *                 <p>GameSessionQueue</p>
 *             </li>
 *             <li>
 *                 <p>MatchmakingConfiguration</p>
 *             </li>
 *             <li>
 *                 <p>MatchmakingRuleSet</p>
 *             </li>
 *          </ul>
 *         <p>To list tags for a resource, specify the unique ARN value for the resource.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> in the
 *             <i>AWS General Reference</i>
 *          </p>
 *         <p>
 *             <a href="http://aws.amazon.com/answers/account-management/aws-tagging-strategies/">
 *             AWS Tagging Strategies</a>
 *          </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>TagResource</a> |
 *                     <a>UntagResource</a> |
 *                     <a>ListTagsForResource</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, ListTagsForResourceCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, ListTagsForResourceCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new ListTagsForResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTagsForResourceCommandInput} for command's `input` shape.
 * @see {@link ListTagsForResourceCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTagsForResourceCommand = /** @class */ (function (_super) {
    __extends(ListTagsForResourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTagsForResourceCommand(input) {
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
    ListTagsForResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "ListTagsForResourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTagsForResourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTagsForResourceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTagsForResourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListTagsForResourceCommand(input, context);
    };
    ListTagsForResourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListTagsForResourceCommand(output, context);
    };
    return ListTagsForResourceCommand;
}($Command));
export { ListTagsForResourceCommand };
//# sourceMappingURL=ListTagsForResourceCommand.js.map