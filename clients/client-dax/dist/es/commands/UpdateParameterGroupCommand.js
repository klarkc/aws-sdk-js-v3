import { __extends } from "tslib";
import { UpdateParameterGroupRequest, UpdateParameterGroupResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateParameterGroupCommand, serializeAws_json1_1UpdateParameterGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the parameters of a parameter group. You can modify up to 20
 *             parameters in a single request by submitting a list parameter name and value
 *             pairs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, UpdateParameterGroupCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, UpdateParameterGroupCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * const client = new DAXClient(config);
 * const command = new UpdateParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateParameterGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link DAXClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateParameterGroupCommand = /** @class */ (function (_super) {
    __extends(UpdateParameterGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateParameterGroupCommand(input) {
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
    UpdateParameterGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DAXClient";
        var commandName = "UpdateParameterGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateParameterGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateParameterGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateParameterGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateParameterGroupCommand(input, context);
    };
    UpdateParameterGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateParameterGroupCommand(output, context);
    };
    return UpdateParameterGroupCommand;
}($Command));
export { UpdateParameterGroupCommand };
//# sourceMappingURL=UpdateParameterGroupCommand.js.map