import { __extends } from "tslib";
import { ListInstanceFleetsInput, ListInstanceFleetsOutput } from "../models/models_0";
import { deserializeAws_json1_1ListInstanceFleetsCommand, serializeAws_json1_1ListInstanceFleetsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all available details about the instance fleets in a cluster.</p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and
 *             later, excluding 5.0.x versions.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListInstanceFleetsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListInstanceFleetsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new ListInstanceFleetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInstanceFleetsCommandInput} for command's `input` shape.
 * @see {@link ListInstanceFleetsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListInstanceFleetsCommand = /** @class */ (function (_super) {
    __extends(ListInstanceFleetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListInstanceFleetsCommand(input) {
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
    ListInstanceFleetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRClient";
        var commandName = "ListInstanceFleetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListInstanceFleetsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListInstanceFleetsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListInstanceFleetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListInstanceFleetsCommand(input, context);
    };
    ListInstanceFleetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListInstanceFleetsCommand(output, context);
    };
    return ListInstanceFleetsCommand;
}($Command));
export { ListInstanceFleetsCommand };
//# sourceMappingURL=ListInstanceFleetsCommand.js.map