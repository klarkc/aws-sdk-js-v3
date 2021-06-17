import { __extends } from "tslib";
import { ListProtectionsRequest, ListProtectionsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListProtectionsCommand, serializeAws_json1_1ListProtectionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all <a>Protection</a> objects for the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, ListProtectionsCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, ListProtectionsCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new ListProtectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProtectionsCommandInput} for command's `input` shape.
 * @see {@link ListProtectionsCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListProtectionsCommand = /** @class */ (function (_super) {
    __extends(ListProtectionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListProtectionsCommand(input) {
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
    ListProtectionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ShieldClient";
        var commandName = "ListProtectionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListProtectionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListProtectionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListProtectionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListProtectionsCommand(input, context);
    };
    ListProtectionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListProtectionsCommand(output, context);
    };
    return ListProtectionsCommand;
}($Command));
export { ListProtectionsCommand };
//# sourceMappingURL=ListProtectionsCommand.js.map