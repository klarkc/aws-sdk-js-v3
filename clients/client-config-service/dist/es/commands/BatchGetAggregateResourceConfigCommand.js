import { __extends } from "tslib";
import { BatchGetAggregateResourceConfigRequest, BatchGetAggregateResourceConfigResponse } from "../models/models_0";
import { deserializeAws_json1_1BatchGetAggregateResourceConfigCommand, serializeAws_json1_1BatchGetAggregateResourceConfigCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the current configuration items for resources that are present in your AWS Config aggregator. The operation also returns a list of resources that are not processed in the current request.
 * 			If there are no unprocessed resources, the operation returns an empty <code>unprocessedResourceIdentifiers</code> list. </p>
 *
 * 		       <note>
 *             <ul>
 *                <li>
 *                   <p>The API does not return results for deleted resources.</p>
 *                </li>
 *                <li>
 *                   <p> The API does not return tags and relationships.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, BatchGetAggregateResourceConfigCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, BatchGetAggregateResourceConfigCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new BatchGetAggregateResourceConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetAggregateResourceConfigCommandInput} for command's `input` shape.
 * @see {@link BatchGetAggregateResourceConfigCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchGetAggregateResourceConfigCommand = /** @class */ (function (_super) {
    __extends(BatchGetAggregateResourceConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchGetAggregateResourceConfigCommand(input) {
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
    BatchGetAggregateResourceConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "BatchGetAggregateResourceConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchGetAggregateResourceConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchGetAggregateResourceConfigResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchGetAggregateResourceConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1BatchGetAggregateResourceConfigCommand(input, context);
    };
    BatchGetAggregateResourceConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1BatchGetAggregateResourceConfigCommand(output, context);
    };
    return BatchGetAggregateResourceConfigCommand;
}($Command));
export { BatchGetAggregateResourceConfigCommand };
//# sourceMappingURL=BatchGetAggregateResourceConfigCommand.js.map