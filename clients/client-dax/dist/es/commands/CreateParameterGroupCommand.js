import { __extends } from "tslib";
import { CreateParameterGroupRequest, CreateParameterGroupResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateParameterGroupCommand, serializeAws_json1_1CreateParameterGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new parameter group. A parameter group is a collection of parameters that
 *             you apply to all of the nodes in a DAX cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, CreateParameterGroupCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, CreateParameterGroupCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * const client = new DAXClient(config);
 * const command = new CreateParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateParameterGroupCommandInput} for command's `input` shape.
 * @see {@link CreateParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link DAXClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateParameterGroupCommand = /** @class */ (function (_super) {
    __extends(CreateParameterGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateParameterGroupCommand(input) {
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
    CreateParameterGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DAXClient";
        var commandName = "CreateParameterGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateParameterGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateParameterGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateParameterGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateParameterGroupCommand(input, context);
    };
    CreateParameterGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateParameterGroupCommand(output, context);
    };
    return CreateParameterGroupCommand;
}($Command));
export { CreateParameterGroupCommand };
//# sourceMappingURL=CreateParameterGroupCommand.js.map