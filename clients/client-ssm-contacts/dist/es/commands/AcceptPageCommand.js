import { __extends } from "tslib";
import { AcceptPageRequest, AcceptPageResult } from "../models/models_0";
import { deserializeAws_json1_1AcceptPageCommand, serializeAws_json1_1AcceptPageCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Used to acknowledge an engagement to a contact channel during an incident.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, AcceptPageCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, AcceptPageCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new AcceptPageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptPageCommandInput} for command's `input` shape.
 * @see {@link AcceptPageCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AcceptPageCommand = /** @class */ (function (_super) {
    __extends(AcceptPageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AcceptPageCommand(input) {
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
    AcceptPageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMContactsClient";
        var commandName = "AcceptPageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AcceptPageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AcceptPageResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AcceptPageCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AcceptPageCommand(input, context);
    };
    AcceptPageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AcceptPageCommand(output, context);
    };
    return AcceptPageCommand;
}($Command));
export { AcceptPageCommand };
//# sourceMappingURL=AcceptPageCommand.js.map