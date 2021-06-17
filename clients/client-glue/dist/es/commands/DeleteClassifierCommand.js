import { __extends } from "tslib";
import { DeleteClassifierRequest, DeleteClassifierResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteClassifierCommand, serializeAws_json1_1DeleteClassifierCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes a classifier from the Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteClassifierCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteClassifierCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new DeleteClassifierCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteClassifierCommandInput} for command's `input` shape.
 * @see {@link DeleteClassifierCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteClassifierCommand = /** @class */ (function (_super) {
    __extends(DeleteClassifierCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteClassifierCommand(input) {
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
    DeleteClassifierCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "DeleteClassifierCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteClassifierRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteClassifierResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteClassifierCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteClassifierCommand(input, context);
    };
    DeleteClassifierCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteClassifierCommand(output, context);
    };
    return DeleteClassifierCommand;
}($Command));
export { DeleteClassifierCommand };
//# sourceMappingURL=DeleteClassifierCommand.js.map