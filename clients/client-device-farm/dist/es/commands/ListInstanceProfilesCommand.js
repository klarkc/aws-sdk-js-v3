import { __extends } from "tslib";
import { ListInstanceProfilesRequest, ListInstanceProfilesResult } from "../models/models_0";
import { deserializeAws_json1_1ListInstanceProfilesCommand, serializeAws_json1_1ListInstanceProfilesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about all the instance profiles in an AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListInstanceProfilesCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListInstanceProfilesCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new ListInstanceProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInstanceProfilesCommandInput} for command's `input` shape.
 * @see {@link ListInstanceProfilesCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListInstanceProfilesCommand = /** @class */ (function (_super) {
    __extends(ListInstanceProfilesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListInstanceProfilesCommand(input) {
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
    ListInstanceProfilesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "ListInstanceProfilesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListInstanceProfilesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListInstanceProfilesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListInstanceProfilesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListInstanceProfilesCommand(input, context);
    };
    ListInstanceProfilesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListInstanceProfilesCommand(output, context);
    };
    return ListInstanceProfilesCommand;
}($Command));
export { ListInstanceProfilesCommand };
//# sourceMappingURL=ListInstanceProfilesCommand.js.map