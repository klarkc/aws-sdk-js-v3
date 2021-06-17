"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDiscoveredResourceCountsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class GetDiscoveredResourceCountsCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "ConfigServiceClient";
        const commandName = "GetDiscoveredResourceCountsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetDiscoveredResourceCountsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetDiscoveredResourceCountsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1GetDiscoveredResourceCountsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1GetDiscoveredResourceCountsCommand(output, context);
    }
}
exports.GetDiscoveredResourceCountsCommand = GetDiscoveredResourceCountsCommand;
//# sourceMappingURL=GetDiscoveredResourceCountsCommand.js.map