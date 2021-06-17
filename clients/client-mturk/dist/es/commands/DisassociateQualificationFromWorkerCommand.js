import { __extends } from "tslib";
import { DisassociateQualificationFromWorkerRequest, DisassociateQualificationFromWorkerResponse, } from "../models/models_0";
import { deserializeAws_json1_1DisassociateQualificationFromWorkerCommand, serializeAws_json1_1DisassociateQualificationFromWorkerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             The 	<code>DisassociateQualificationFromWorker</code>
 *             revokes a previously granted Qualification from a user.
 *         </p>
 *         <p>
 *             You can provide a text message explaining why the Qualification was
 *             revoked. The user who had the Qualification can see this message.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, DisassociateQualificationFromWorkerCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, DisassociateQualificationFromWorkerCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new DisassociateQualificationFromWorkerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateQualificationFromWorkerCommandInput} for command's `input` shape.
 * @see {@link DisassociateQualificationFromWorkerCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateQualificationFromWorkerCommand = /** @class */ (function (_super) {
    __extends(DisassociateQualificationFromWorkerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateQualificationFromWorkerCommand(input) {
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
    DisassociateQualificationFromWorkerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MTurkClient";
        var commandName = "DisassociateQualificationFromWorkerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateQualificationFromWorkerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateQualificationFromWorkerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateQualificationFromWorkerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisassociateQualificationFromWorkerCommand(input, context);
    };
    DisassociateQualificationFromWorkerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisassociateQualificationFromWorkerCommand(output, context);
    };
    return DisassociateQualificationFromWorkerCommand;
}($Command));
export { DisassociateQualificationFromWorkerCommand };
//# sourceMappingURL=DisassociateQualificationFromWorkerCommand.js.map