"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchGetResourceConfigCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns the current configuration for one or more requested
 * 			resources. The operation also returns a list of resources that are
 * 			not processed in the current request. If there are no unprocessed
 * 			resources, the operation returns an empty unprocessedResourceKeys
 * 			list. </p>
 * 		       <note>
 * 			         <ul>
 *                <li>
 * 					             <p>The API does not return results for deleted
 * 						resources.</p>
 * 				           </li>
 *                <li>
 * 					             <p> The API does not return any tags for the requested
 * 						resources. This information is filtered out of the
 * 						supplementaryConfiguration section of the API
 * 						response.</p>
 * 				           </li>
 *             </ul>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, BatchGetResourceConfigCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, BatchGetResourceConfigCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new BatchGetResourceConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetResourceConfigCommandInput} for command's `input` shape.
 * @see {@link BatchGetResourceConfigCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
class BatchGetResourceConfigCommand extends smithy_client_1.Command {
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
        const commandName = "BatchGetResourceConfigCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.BatchGetResourceConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.BatchGetResourceConfigResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1BatchGetResourceConfigCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1BatchGetResourceConfigCommand(output, context);
    }
}
exports.BatchGetResourceConfigCommand = BatchGetResourceConfigCommand;
//# sourceMappingURL=BatchGetResourceConfigCommand.js.map