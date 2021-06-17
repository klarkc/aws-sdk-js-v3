import { __extends } from "tslib";
import { ListTerminologiesRequest, ListTerminologiesResponse } from "../models/models_0";
import { deserializeAws_json1_1ListTerminologiesCommand, serializeAws_json1_1ListTerminologiesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides a list of custom terminologies associated with your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, ListTerminologiesCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, ListTerminologiesCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * const client = new TranslateClient(config);
 * const command = new ListTerminologiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTerminologiesCommandInput} for command's `input` shape.
 * @see {@link ListTerminologiesCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTerminologiesCommand = /** @class */ (function (_super) {
    __extends(ListTerminologiesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTerminologiesCommand(input) {
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
    ListTerminologiesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TranslateClient";
        var commandName = "ListTerminologiesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTerminologiesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTerminologiesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTerminologiesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListTerminologiesCommand(input, context);
    };
    ListTerminologiesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListTerminologiesCommand(output, context);
    };
    return ListTerminologiesCommand;
}($Command));
export { ListTerminologiesCommand };
//# sourceMappingURL=ListTerminologiesCommand.js.map