import { __extends } from "tslib";
import { ListServicesRequest, ListServicesResponse } from "../models/models_0";
import { deserializeAws_json1_1ListServicesCommand, serializeAws_json1_1ListServicesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of services. You can filter the results by cluster, launch type, and
 * 			scheduling strategy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ListServicesCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ListServicesCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new ListServicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListServicesCommandInput} for command's `input` shape.
 * @see {@link ListServicesCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListServicesCommand = /** @class */ (function (_super) {
    __extends(ListServicesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListServicesCommand(input) {
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
    ListServicesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECSClient";
        var commandName = "ListServicesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListServicesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListServicesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListServicesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListServicesCommand(input, context);
    };
    ListServicesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListServicesCommand(output, context);
    };
    return ListServicesCommand;
}($Command));
export { ListServicesCommand };
//# sourceMappingURL=ListServicesCommand.js.map