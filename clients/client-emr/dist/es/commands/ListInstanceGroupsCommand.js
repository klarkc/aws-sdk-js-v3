import { __extends } from "tslib";
import { ListInstanceGroupsInput, ListInstanceGroupsOutput } from "../models/models_0";
import { deserializeAws_json1_1ListInstanceGroupsCommand, serializeAws_json1_1ListInstanceGroupsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides all available details about the instance groups in a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListInstanceGroupsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListInstanceGroupsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new ListInstanceGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInstanceGroupsCommandInput} for command's `input` shape.
 * @see {@link ListInstanceGroupsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListInstanceGroupsCommand = /** @class */ (function (_super) {
    __extends(ListInstanceGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListInstanceGroupsCommand(input) {
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
    ListInstanceGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRClient";
        var commandName = "ListInstanceGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListInstanceGroupsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListInstanceGroupsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListInstanceGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListInstanceGroupsCommand(input, context);
    };
    ListInstanceGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListInstanceGroupsCommand(output, context);
    };
    return ListInstanceGroupsCommand;
}($Command));
export { ListInstanceGroupsCommand };
//# sourceMappingURL=ListInstanceGroupsCommand.js.map