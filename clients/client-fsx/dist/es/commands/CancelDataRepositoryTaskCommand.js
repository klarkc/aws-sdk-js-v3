import { __extends } from "tslib";
import { CancelDataRepositoryTaskRequest, CancelDataRepositoryTaskResponse } from "../models/models_0";
import { deserializeAws_json1_1CancelDataRepositoryTaskCommand, serializeAws_json1_1CancelDataRepositoryTaskCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels an existing Amazon FSx for Lustre data repository task if that task is in either the
 *             <code>PENDING</code> or <code>EXECUTING</code> state. When you cancel a task, Amazon FSx does the following.</p>
 *             <ul>
 *             <li>
 *                <p>Any files that FSx has already exported are not reverted.</p>
 *             </li>
 *             <li>
 *                <p>FSx continues to export any files that are "in-flight" when the cancel operation is received.</p>
 *             </li>
 *             <li>
 *                <p>FSx does not export any files that have not yet been exported.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, CancelDataRepositoryTaskCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, CancelDataRepositoryTaskCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new CancelDataRepositoryTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelDataRepositoryTaskCommandInput} for command's `input` shape.
 * @see {@link CancelDataRepositoryTaskCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelDataRepositoryTaskCommand = /** @class */ (function (_super) {
    __extends(CancelDataRepositoryTaskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelDataRepositoryTaskCommand(input) {
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
    CancelDataRepositoryTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FSxClient";
        var commandName = "CancelDataRepositoryTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelDataRepositoryTaskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CancelDataRepositoryTaskResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelDataRepositoryTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CancelDataRepositoryTaskCommand(input, context);
    };
    CancelDataRepositoryTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CancelDataRepositoryTaskCommand(output, context);
    };
    return CancelDataRepositoryTaskCommand;
}($Command));
export { CancelDataRepositoryTaskCommand };
//# sourceMappingURL=CancelDataRepositoryTaskCommand.js.map