import { __extends } from "tslib";
import { UpdateClusterRequest, UpdateClusterResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateClusterCommand, serializeAws_json1_1UpdateClusterCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the settings for a DAX cluster. You can use this action to change one or
 *             more cluster configuration parameters by specifying the parameters and the new
 *             values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, UpdateClusterCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, UpdateClusterCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * const client = new DAXClient(config);
 * const command = new UpdateClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateClusterCommandInput} for command's `input` shape.
 * @see {@link UpdateClusterCommandOutput} for command's `response` shape.
 * @see {@link DAXClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateClusterCommand = /** @class */ (function (_super) {
    __extends(UpdateClusterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateClusterCommand(input) {
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
    UpdateClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DAXClient";
        var commandName = "UpdateClusterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateClusterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateClusterResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateClusterCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateClusterCommand(input, context);
    };
    UpdateClusterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateClusterCommand(output, context);
    };
    return UpdateClusterCommand;
}($Command));
export { UpdateClusterCommand };
//# sourceMappingURL=UpdateClusterCommand.js.map