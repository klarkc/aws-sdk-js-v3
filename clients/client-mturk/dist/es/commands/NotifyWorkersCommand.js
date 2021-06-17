import { __extends } from "tslib";
import { NotifyWorkersRequest, NotifyWorkersResponse } from "../models/models_0";
import { deserializeAws_json1_1NotifyWorkersCommand, serializeAws_json1_1NotifyWorkersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             The
 *             <code>NotifyWorkers</code>
 *             operation sends an email to one or more Workers that you specify with
 *             the Worker ID. You can specify up to 100 Worker IDs to send the same
 *             message with a single call to the NotifyWorkers operation. The
 *             NotifyWorkers operation will send a notification email to a Worker
 *             only if you have previously approved or rejected work from the
 *             Worker.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, NotifyWorkersCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, NotifyWorkersCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new NotifyWorkersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link NotifyWorkersCommandInput} for command's `input` shape.
 * @see {@link NotifyWorkersCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var NotifyWorkersCommand = /** @class */ (function (_super) {
    __extends(NotifyWorkersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function NotifyWorkersCommand(input) {
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
    NotifyWorkersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MTurkClient";
        var commandName = "NotifyWorkersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: NotifyWorkersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: NotifyWorkersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    NotifyWorkersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1NotifyWorkersCommand(input, context);
    };
    NotifyWorkersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1NotifyWorkersCommand(output, context);
    };
    return NotifyWorkersCommand;
}($Command));
export { NotifyWorkersCommand };
//# sourceMappingURL=NotifyWorkersCommand.js.map