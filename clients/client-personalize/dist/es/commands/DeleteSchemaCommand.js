import { __extends } from "tslib";
import { DeleteSchemaRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteSchemaCommand, serializeAws_json1_1DeleteSchemaCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a schema. Before deleting a schema, you must delete all
 *       datasets referencing the schema. For more information on schemas, see
 *       <a>CreateSchema</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DeleteSchemaCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DeleteSchemaCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new DeleteSchemaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSchemaCommandInput} for command's `input` shape.
 * @see {@link DeleteSchemaCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteSchemaCommand = /** @class */ (function (_super) {
    __extends(DeleteSchemaCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteSchemaCommand(input) {
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
    DeleteSchemaCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PersonalizeClient";
        var commandName = "DeleteSchemaCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteSchemaRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteSchemaCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteSchemaCommand(input, context);
    };
    DeleteSchemaCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteSchemaCommand(output, context);
    };
    return DeleteSchemaCommand;
}($Command));
export { DeleteSchemaCommand };
//# sourceMappingURL=DeleteSchemaCommand.js.map