import { __extends } from "tslib";
import { DeleteAttributesRequest, DeleteAttributesResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteAttributesCommand, serializeAws_json1_1DeleteAttributesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes one or more custom attributes from an Amazon ECS resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DeleteAttributesCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DeleteAttributesCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new DeleteAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAttributesCommandInput} for command's `input` shape.
 * @see {@link DeleteAttributesCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAttributesCommand = /** @class */ (function (_super) {
    __extends(DeleteAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAttributesCommand(input) {
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
    DeleteAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECSClient";
        var commandName = "DeleteAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAttributesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteAttributesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteAttributesCommand(input, context);
    };
    DeleteAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteAttributesCommand(output, context);
    };
    return DeleteAttributesCommand;
}($Command));
export { DeleteAttributesCommand };
//# sourceMappingURL=DeleteAttributesCommand.js.map