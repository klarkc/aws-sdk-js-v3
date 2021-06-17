import { __extends } from "tslib";
import { DeleteTableVersionRequest, DeleteTableVersionResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteTableVersionCommand, serializeAws_json1_1DeleteTableVersionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a specified version of a table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteTableVersionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteTableVersionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new DeleteTableVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTableVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteTableVersionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTableVersionCommand = /** @class */ (function (_super) {
    __extends(DeleteTableVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteTableVersionCommand(input) {
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
    DeleteTableVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "DeleteTableVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteTableVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteTableVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteTableVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteTableVersionCommand(input, context);
    };
    DeleteTableVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteTableVersionCommand(output, context);
    };
    return DeleteTableVersionCommand;
}($Command));
export { DeleteTableVersionCommand };
//# sourceMappingURL=DeleteTableVersionCommand.js.map