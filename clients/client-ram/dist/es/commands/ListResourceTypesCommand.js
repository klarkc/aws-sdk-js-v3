import { __extends } from "tslib";
import { ListResourceTypesRequest, ListResourceTypesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListResourceTypesCommand, serializeAws_restJson1ListResourceTypesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the shareable resource types supported by AWS RAM.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, ListResourceTypesCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, ListResourceTypesCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new ListResourceTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResourceTypesCommandInput} for command's `input` shape.
 * @see {@link ListResourceTypesCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListResourceTypesCommand = /** @class */ (function (_super) {
    __extends(ListResourceTypesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListResourceTypesCommand(input) {
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
    ListResourceTypesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RAMClient";
        var commandName = "ListResourceTypesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListResourceTypesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListResourceTypesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListResourceTypesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListResourceTypesCommand(input, context);
    };
    ListResourceTypesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListResourceTypesCommand(output, context);
    };
    return ListResourceTypesCommand;
}($Command));
export { ListResourceTypesCommand };
//# sourceMappingURL=ListResourceTypesCommand.js.map