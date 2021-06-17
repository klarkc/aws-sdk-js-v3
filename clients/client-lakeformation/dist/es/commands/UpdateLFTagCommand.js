import { __extends } from "tslib";
import { UpdateLFTagRequest, UpdateLFTagResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateLFTagCommand, serializeAws_json1_1UpdateLFTagCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the list of possible values for the specified tag key. If the tag does not exist, the operation throws an EntityNotFoundException. The values in the delete key values will be deleted from list of possible values. If any value in the delete key values is attached to a resource, then API errors out with a 400 Exception - "Update not allowed". Untag the attribute before deleting the tag key's value.  </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, UpdateLFTagCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, UpdateLFTagCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new UpdateLFTagCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLFTagCommandInput} for command's `input` shape.
 * @see {@link UpdateLFTagCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateLFTagCommand = /** @class */ (function (_super) {
    __extends(UpdateLFTagCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateLFTagCommand(input) {
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
    UpdateLFTagCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LakeFormationClient";
        var commandName = "UpdateLFTagCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateLFTagRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateLFTagResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateLFTagCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateLFTagCommand(input, context);
    };
    UpdateLFTagCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateLFTagCommand(output, context);
    };
    return UpdateLFTagCommand;
}($Command));
export { UpdateLFTagCommand };
//# sourceMappingURL=UpdateLFTagCommand.js.map