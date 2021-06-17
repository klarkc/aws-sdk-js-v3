import { __extends } from "tslib";
import { BatchDeleteTableVersionRequest, BatchDeleteTableVersionResponse } from "../models/models_0";
import { deserializeAws_json1_1BatchDeleteTableVersionCommand, serializeAws_json1_1BatchDeleteTableVersionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a specified batch of versions of a table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchDeleteTableVersionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchDeleteTableVersionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new BatchDeleteTableVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeleteTableVersionCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteTableVersionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchDeleteTableVersionCommand = /** @class */ (function (_super) {
    __extends(BatchDeleteTableVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchDeleteTableVersionCommand(input) {
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
    BatchDeleteTableVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "BatchDeleteTableVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchDeleteTableVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchDeleteTableVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchDeleteTableVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1BatchDeleteTableVersionCommand(input, context);
    };
    BatchDeleteTableVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1BatchDeleteTableVersionCommand(output, context);
    };
    return BatchDeleteTableVersionCommand;
}($Command));
export { BatchDeleteTableVersionCommand };
//# sourceMappingURL=BatchDeleteTableVersionCommand.js.map