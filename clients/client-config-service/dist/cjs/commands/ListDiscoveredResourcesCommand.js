"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDiscoveredResourcesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Accepts a resource type and returns a list of resource
 * 			identifiers for the resources of that type. A resource identifier
 * 			includes the resource type, ID, and (if available) the custom
 * 			resource name. The results consist of resources that AWS Config has
 * 			discovered, including those that AWS Config is not currently
 * 			recording. You can narrow the results to include only resources that
 * 			have specific resource IDs or a resource name.</p>
 * 		       <note>
 * 			         <p>You can specify either resource IDs or a resource name, but
 * 				not both, in the same request.</p>
 * 		       </note>
 * 		       <p>The response is paginated. By default, AWS Config lists 100
 * 			resource identifiers on each page. You can customize this number
 * 			with the <code>limit</code> parameter. The response includes a
 * 				<code>nextToken</code> string. To get the next page of results,
 * 			run the request again and specify the string for the
 * 				<code>nextToken</code> parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, ListDiscoveredResourcesCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, ListDiscoveredResourcesCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new ListDiscoveredResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDiscoveredResourcesCommandInput} for command's `input` shape.
 * @see {@link ListDiscoveredResourcesCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListDiscoveredResourcesCommand extends smithy_client_1.Command {
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
        const commandName = "ListDiscoveredResourcesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListDiscoveredResourcesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListDiscoveredResourcesResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ListDiscoveredResourcesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ListDiscoveredResourcesCommand(output, context);
    }
}
exports.ListDiscoveredResourcesCommand = ListDiscoveredResourcesCommand;
//# sourceMappingURL=ListDiscoveredResourcesCommand.js.map