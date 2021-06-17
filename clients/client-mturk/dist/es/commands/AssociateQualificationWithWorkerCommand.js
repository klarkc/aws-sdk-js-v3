import { __extends } from "tslib";
import { AssociateQualificationWithWorkerRequest, AssociateQualificationWithWorkerResponse } from "../models/models_0";
import { deserializeAws_json1_1AssociateQualificationWithWorkerCommand, serializeAws_json1_1AssociateQualificationWithWorkerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             The <code>AssociateQualificationWithWorker</code> operation gives a Worker a
 *             Qualification. <code>AssociateQualificationWithWorker</code> does not require that the Worker
 *             submit a Qualification request. It gives the Qualification directly to the Worker.
 *         </p>
 *
 *         <p>
 *             You can only assign a Qualification of a Qualification type that you created (using
 *             the <code>CreateQualificationType</code> operation).
 *         </p>
 *
 *         <note>
 *             <p>
 *                 Note: <code>AssociateQualificationWithWorker</code> does not affect any pending Qualification
 *                 requests for the Qualification by the Worker. If you assign a Qualification to a
 *                 Worker, then later grant a Qualification request made by the Worker, the granting of
 *                 the request may modify the Qualification score. To resolve a pending Qualification
 *                 request without affecting the Qualification the Worker already has, reject the
 *                 request with the <code>RejectQualificationRequest</code> operation.
 *             </p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, AssociateQualificationWithWorkerCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, AssociateQualificationWithWorkerCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new AssociateQualificationWithWorkerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateQualificationWithWorkerCommandInput} for command's `input` shape.
 * @see {@link AssociateQualificationWithWorkerCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateQualificationWithWorkerCommand = /** @class */ (function (_super) {
    __extends(AssociateQualificationWithWorkerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateQualificationWithWorkerCommand(input) {
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
    AssociateQualificationWithWorkerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MTurkClient";
        var commandName = "AssociateQualificationWithWorkerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateQualificationWithWorkerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateQualificationWithWorkerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateQualificationWithWorkerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AssociateQualificationWithWorkerCommand(input, context);
    };
    AssociateQualificationWithWorkerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AssociateQualificationWithWorkerCommand(output, context);
    };
    return AssociateQualificationWithWorkerCommand;
}($Command));
export { AssociateQualificationWithWorkerCommand };
//# sourceMappingURL=AssociateQualificationWithWorkerCommand.js.map