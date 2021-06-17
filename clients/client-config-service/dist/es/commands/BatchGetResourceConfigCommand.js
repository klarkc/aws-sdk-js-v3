import { __extends } from "tslib";
import { BatchGetResourceConfigRequest, BatchGetResourceConfigResponse } from "../models/models_0";
import { deserializeAws_json1_1BatchGetResourceConfigCommand, serializeAws_json1_1BatchGetResourceConfigCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var BatchGetResourceConfigCommand = /** @class */ (function (_super) {
    __extends(BatchGetResourceConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchGetResourceConfigCommand(input) {
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
    BatchGetResourceConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "BatchGetResourceConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchGetResourceConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchGetResourceConfigResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchGetResourceConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1BatchGetResourceConfigCommand(input, context);
    };
    BatchGetResourceConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1BatchGetResourceConfigCommand(output, context);
    };
    return BatchGetResourceConfigCommand;
}($Command));
export { BatchGetResourceConfigCommand };
//# sourceMappingURL=BatchGetResourceConfigCommand.js.map