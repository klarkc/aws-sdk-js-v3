import { __extends } from "tslib";
import { ListInstancesInput, ListInstancesOutput } from "../models/models_0";
import { deserializeAws_json1_1ListInstancesCommand, serializeAws_json1_1ListInstancesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides information for all active EC2 instances and EC2 instances terminated in the
 *          last 30 days, up to a maximum of 2,000. EC2 instances in any of the following states are
 *          considered active: AWAITING_FULFILLMENT, PROVISIONING, BOOTSTRAPPING, RUNNING.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListInstancesCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListInstancesCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new ListInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInstancesCommandInput} for command's `input` shape.
 * @see {@link ListInstancesCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListInstancesCommand = /** @class */ (function (_super) {
    __extends(ListInstancesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListInstancesCommand(input) {
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
    ListInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRClient";
        var commandName = "ListInstancesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListInstancesInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListInstancesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListInstancesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListInstancesCommand(input, context);
    };
    ListInstancesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListInstancesCommand(output, context);
    };
    return ListInstancesCommand;
}($Command));
export { ListInstancesCommand };
//# sourceMappingURL=ListInstancesCommand.js.map