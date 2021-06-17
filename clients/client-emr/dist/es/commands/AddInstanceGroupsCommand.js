import { __extends } from "tslib";
import { AddInstanceGroupsInput, AddInstanceGroupsOutput } from "../models/models_0";
import { deserializeAws_json1_1AddInstanceGroupsCommand, serializeAws_json1_1AddInstanceGroupsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds one or more instance groups to a running cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, AddInstanceGroupsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, AddInstanceGroupsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new AddInstanceGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddInstanceGroupsCommandInput} for command's `input` shape.
 * @see {@link AddInstanceGroupsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddInstanceGroupsCommand = /** @class */ (function (_super) {
    __extends(AddInstanceGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddInstanceGroupsCommand(input) {
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
    AddInstanceGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRClient";
        var commandName = "AddInstanceGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddInstanceGroupsInput.filterSensitiveLog,
            outputFilterSensitiveLog: AddInstanceGroupsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddInstanceGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AddInstanceGroupsCommand(input, context);
    };
    AddInstanceGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AddInstanceGroupsCommand(output, context);
    };
    return AddInstanceGroupsCommand;
}($Command));
export { AddInstanceGroupsCommand };
//# sourceMappingURL=AddInstanceGroupsCommand.js.map