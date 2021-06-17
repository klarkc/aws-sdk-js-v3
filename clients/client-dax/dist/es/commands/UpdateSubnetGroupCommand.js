import { __extends } from "tslib";
import { UpdateSubnetGroupRequest, UpdateSubnetGroupResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateSubnetGroupCommand, serializeAws_json1_1UpdateSubnetGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies an existing subnet group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, UpdateSubnetGroupCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, UpdateSubnetGroupCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * const client = new DAXClient(config);
 * const command = new UpdateSubnetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link DAXClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateSubnetGroupCommand = /** @class */ (function (_super) {
    __extends(UpdateSubnetGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateSubnetGroupCommand(input) {
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
    UpdateSubnetGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DAXClient";
        var commandName = "UpdateSubnetGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateSubnetGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateSubnetGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateSubnetGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateSubnetGroupCommand(input, context);
    };
    UpdateSubnetGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateSubnetGroupCommand(output, context);
    };
    return UpdateSubnetGroupCommand;
}($Command));
export { UpdateSubnetGroupCommand };
//# sourceMappingURL=UpdateSubnetGroupCommand.js.map