import { __extends } from "tslib";
import { DeleteStudioInput } from "../models/models_0";
import { deserializeAws_json1_1DeleteStudioCommand, serializeAws_json1_1DeleteStudioCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes an Amazon EMR Studio from the Studio metadata store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, DeleteStudioCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, DeleteStudioCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new DeleteStudioCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteStudioCommandInput} for command's `input` shape.
 * @see {@link DeleteStudioCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteStudioCommand = /** @class */ (function (_super) {
    __extends(DeleteStudioCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteStudioCommand(input) {
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
    DeleteStudioCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRClient";
        var commandName = "DeleteStudioCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteStudioInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteStudioCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteStudioCommand(input, context);
    };
    DeleteStudioCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteStudioCommand(output, context);
    };
    return DeleteStudioCommand;
}($Command));
export { DeleteStudioCommand };
//# sourceMappingURL=DeleteStudioCommand.js.map