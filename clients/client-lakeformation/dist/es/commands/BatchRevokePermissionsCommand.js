import { __extends } from "tslib";
import { BatchRevokePermissionsRequest, BatchRevokePermissionsResponse } from "../models/models_0";
import { deserializeAws_json1_1BatchRevokePermissionsCommand, serializeAws_json1_1BatchRevokePermissionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Batch operation to revoke permissions from the principal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, BatchRevokePermissionsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, BatchRevokePermissionsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new BatchRevokePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchRevokePermissionsCommandInput} for command's `input` shape.
 * @see {@link BatchRevokePermissionsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchRevokePermissionsCommand = /** @class */ (function (_super) {
    __extends(BatchRevokePermissionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchRevokePermissionsCommand(input) {
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
    BatchRevokePermissionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LakeFormationClient";
        var commandName = "BatchRevokePermissionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchRevokePermissionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchRevokePermissionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchRevokePermissionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1BatchRevokePermissionsCommand(input, context);
    };
    BatchRevokePermissionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1BatchRevokePermissionsCommand(output, context);
    };
    return BatchRevokePermissionsCommand;
}($Command));
export { BatchRevokePermissionsCommand };
//# sourceMappingURL=BatchRevokePermissionsCommand.js.map