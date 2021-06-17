import { __extends } from "tslib";
import { DeleteLFTagRequest, DeleteLFTagResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteLFTagCommand, serializeAws_json1_1DeleteLFTagCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified tag key name. If the attribute key does not exist or the tag does not exist, then the operation will not do anything. If the attribute key exists, then the operation checks if any resources are tagged with this attribute key, if yes, the API throws a 400 Exception with the message "Delete not allowed" as the tag key is still attached with resources. You can consider untagging resources with this tag key.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, DeleteLFTagCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, DeleteLFTagCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new DeleteLFTagCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLFTagCommandInput} for command's `input` shape.
 * @see {@link DeleteLFTagCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteLFTagCommand = /** @class */ (function (_super) {
    __extends(DeleteLFTagCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteLFTagCommand(input) {
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
    DeleteLFTagCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LakeFormationClient";
        var commandName = "DeleteLFTagCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteLFTagRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteLFTagResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteLFTagCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteLFTagCommand(input, context);
    };
    DeleteLFTagCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteLFTagCommand(output, context);
    };
    return DeleteLFTagCommand;
}($Command));
export { DeleteLFTagCommand };
//# sourceMappingURL=DeleteLFTagCommand.js.map