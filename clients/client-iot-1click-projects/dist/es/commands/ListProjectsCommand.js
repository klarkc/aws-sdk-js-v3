import { __extends } from "tslib";
import { ListProjectsRequest, ListProjectsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListProjectsCommand, serializeAws_restJson1ListProjectsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the AWS IoT 1-Click project(s) associated with your AWS account and region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickProjectsClient, ListProjectsCommand } from "@aws-sdk/client-iot-1click-projects"; // ES Modules import
 * // const { IoT1ClickProjectsClient, ListProjectsCommand } = require("@aws-sdk/client-iot-1click-projects"); // CommonJS import
 * const client = new IoT1ClickProjectsClient(config);
 * const command = new ListProjectsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProjectsCommandInput} for command's `input` shape.
 * @see {@link ListProjectsCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickProjectsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListProjectsCommand = /** @class */ (function (_super) {
    __extends(ListProjectsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListProjectsCommand(input) {
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
    ListProjectsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoT1ClickProjectsClient";
        var commandName = "ListProjectsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListProjectsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListProjectsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListProjectsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListProjectsCommand(input, context);
    };
    ListProjectsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListProjectsCommand(output, context);
    };
    return ListProjectsCommand;
}($Command));
export { ListProjectsCommand };
//# sourceMappingURL=ListProjectsCommand.js.map