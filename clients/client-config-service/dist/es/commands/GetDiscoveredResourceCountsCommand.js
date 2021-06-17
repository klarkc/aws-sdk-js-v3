import { __extends } from "tslib";
import { GetDiscoveredResourceCountsRequest, GetDiscoveredResourceCountsResponse } from "../models/models_0";
import { deserializeAws_json1_1GetDiscoveredResourceCountsCommand, serializeAws_json1_1GetDiscoveredResourceCountsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the resource types, the number of each resource type,
 * 			and the total number of resources that AWS Config is recording in
 * 			this region for your AWS account. </p>
 * 		       <p class="title">
 *             <b>Example</b>
 *          </p>
 *          <ol>
 *             <li>
 * 				           <p>AWS Config is recording three resource types in the US
 * 					East (Ohio) Region for your account: 25 EC2 instances, 20
 * 					IAM users, and 15 S3 buckets.</p>
 * 			         </li>
 *             <li>
 * 				           <p>You make a call to the
 * 						<code>GetDiscoveredResourceCounts</code> action and
 * 					specify that you want all resource types. </p>
 * 			         </li>
 *             <li>
 * 				           <p>AWS Config returns the following:</p>
 *
 * 				           <ul>
 *                   <li>
 * 						               <p>The resource types (EC2 instances, IAM users,
 * 							and S3 buckets).</p>
 * 					             </li>
 *                   <li>
 * 						               <p>The number of each resource type (25, 20, and
 * 							15).</p>
 * 					             </li>
 *                   <li>
 * 						               <p>The total number of all resources
 * 							(60).</p>
 * 					             </li>
 *                </ul>
 *
 * 			         </li>
 *          </ol>
 *
 * 		       <p>The response is paginated. By default, AWS Config lists 100
 * 				<a>ResourceCount</a> objects on each page. You can
 * 			customize this number with the <code>limit</code> parameter. The
 * 			response includes a <code>nextToken</code> string. To get the next
 * 			page of results, run the request again and specify the string for
 * 			the <code>nextToken</code> parameter.</p>
 *
 * 		       <note>
 * 			         <p>If you make a call to the <a>GetDiscoveredResourceCounts</a> action, you might
 * 				not immediately receive resource counts in the following
 * 				situations:</p>
 *
 * 			         <ul>
 *                <li>
 * 					             <p>You are a new AWS Config customer.</p>
 * 				           </li>
 *                <li>
 * 					             <p>You just enabled resource recording.</p>
 * 				           </li>
 *             </ul>
 *
 * 			         <p>It might take a few minutes for AWS Config to record and
 * 				count your resources. Wait a few minutes and then retry the
 * 					<a>GetDiscoveredResourceCounts</a> action.
 * 			</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetDiscoveredResourceCountsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetDiscoveredResourceCountsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new GetDiscoveredResourceCountsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDiscoveredResourceCountsCommandInput} for command's `input` shape.
 * @see {@link GetDiscoveredResourceCountsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDiscoveredResourceCountsCommand = /** @class */ (function (_super) {
    __extends(GetDiscoveredResourceCountsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDiscoveredResourceCountsCommand(input) {
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
    GetDiscoveredResourceCountsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "GetDiscoveredResourceCountsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDiscoveredResourceCountsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDiscoveredResourceCountsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDiscoveredResourceCountsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetDiscoveredResourceCountsCommand(input, context);
    };
    GetDiscoveredResourceCountsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetDiscoveredResourceCountsCommand(output, context);
    };
    return GetDiscoveredResourceCountsCommand;
}($Command));
export { GetDiscoveredResourceCountsCommand };
//# sourceMappingURL=GetDiscoveredResourceCountsCommand.js.map