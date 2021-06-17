import { __extends } from "tslib";
import { DeleteJobRequest, DeleteJobResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteJobCommand, serializeAws_restJson1DeleteJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified DataBrew job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, DeleteJobCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, DeleteJobCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new DeleteJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteJobCommandInput} for command's `input` shape.
 * @see {@link DeleteJobCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteJobCommand = /** @class */ (function (_super) {
    __extends(DeleteJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteJobCommand(input) {
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
    DeleteJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataBrewClient";
        var commandName = "DeleteJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteJobCommand(input, context);
    };
    DeleteJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteJobCommand(output, context);
    };
    return DeleteJobCommand;
}($Command));
export { DeleteJobCommand };
//# sourceMappingURL=DeleteJobCommand.js.map