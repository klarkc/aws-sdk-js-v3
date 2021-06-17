import { __extends } from "tslib";
import { BatchGetTriggersRequest, BatchGetTriggersResponse } from "../models/models_0";
import { deserializeAws_json1_1BatchGetTriggersCommand, serializeAws_json1_1BatchGetTriggersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of resource metadata for a given list of trigger names. After calling the <code>ListTriggers</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchGetTriggersCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchGetTriggersCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new BatchGetTriggersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetTriggersCommandInput} for command's `input` shape.
 * @see {@link BatchGetTriggersCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchGetTriggersCommand = /** @class */ (function (_super) {
    __extends(BatchGetTriggersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchGetTriggersCommand(input) {
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
    BatchGetTriggersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "BatchGetTriggersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchGetTriggersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchGetTriggersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchGetTriggersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1BatchGetTriggersCommand(input, context);
    };
    BatchGetTriggersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1BatchGetTriggersCommand(output, context);
    };
    return BatchGetTriggersCommand;
}($Command));
export { BatchGetTriggersCommand };
//# sourceMappingURL=BatchGetTriggersCommand.js.map