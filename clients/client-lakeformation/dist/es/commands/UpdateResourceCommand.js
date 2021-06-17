import { __extends } from "tslib";
import { UpdateResourceRequest, UpdateResourceResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateResourceCommand, serializeAws_json1_1UpdateResourceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the data access role used for vending access to the given (registered) resource in AWS Lake Formation. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, UpdateResourceCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, UpdateResourceCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new UpdateResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateResourceCommandInput} for command's `input` shape.
 * @see {@link UpdateResourceCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateResourceCommand = /** @class */ (function (_super) {
    __extends(UpdateResourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateResourceCommand(input) {
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
    UpdateResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LakeFormationClient";
        var commandName = "UpdateResourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateResourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateResourceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateResourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateResourceCommand(input, context);
    };
    UpdateResourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateResourceCommand(output, context);
    };
    return UpdateResourceCommand;
}($Command));
export { UpdateResourceCommand };
//# sourceMappingURL=UpdateResourceCommand.js.map