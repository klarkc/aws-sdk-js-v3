import { __extends } from "tslib";
import { BatchDeleteConnectionRequest, BatchDeleteConnectionResponse } from "../models/models_0";
import { deserializeAws_json1_1BatchDeleteConnectionCommand, serializeAws_json1_1BatchDeleteConnectionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a list of connection definitions from the Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchDeleteConnectionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchDeleteConnectionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new BatchDeleteConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeleteConnectionCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteConnectionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchDeleteConnectionCommand = /** @class */ (function (_super) {
    __extends(BatchDeleteConnectionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchDeleteConnectionCommand(input) {
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
    BatchDeleteConnectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "BatchDeleteConnectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchDeleteConnectionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchDeleteConnectionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchDeleteConnectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1BatchDeleteConnectionCommand(input, context);
    };
    BatchDeleteConnectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1BatchDeleteConnectionCommand(output, context);
    };
    return BatchDeleteConnectionCommand;
}($Command));
export { BatchDeleteConnectionCommand };
//# sourceMappingURL=BatchDeleteConnectionCommand.js.map