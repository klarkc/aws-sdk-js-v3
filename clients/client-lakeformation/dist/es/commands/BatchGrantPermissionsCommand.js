import { __extends } from "tslib";
import { BatchGrantPermissionsRequest, BatchGrantPermissionsResponse } from "../models/models_0";
import { deserializeAws_json1_1BatchGrantPermissionsCommand, serializeAws_json1_1BatchGrantPermissionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Batch operation to grant permissions to the principal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, BatchGrantPermissionsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, BatchGrantPermissionsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new BatchGrantPermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGrantPermissionsCommandInput} for command's `input` shape.
 * @see {@link BatchGrantPermissionsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchGrantPermissionsCommand = /** @class */ (function (_super) {
    __extends(BatchGrantPermissionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchGrantPermissionsCommand(input) {
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
    BatchGrantPermissionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LakeFormationClient";
        var commandName = "BatchGrantPermissionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchGrantPermissionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchGrantPermissionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchGrantPermissionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1BatchGrantPermissionsCommand(input, context);
    };
    BatchGrantPermissionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1BatchGrantPermissionsCommand(output, context);
    };
    return BatchGrantPermissionsCommand;
}($Command));
export { BatchGrantPermissionsCommand };
//# sourceMappingURL=BatchGrantPermissionsCommand.js.map