import { __extends } from "tslib";
import { AssociateTargetsWithJobRequest, AssociateTargetsWithJobResponse } from "../models/models_0";
import { deserializeAws_restJson1AssociateTargetsWithJobCommand, serializeAws_restJson1AssociateTargetsWithJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates a group with a continuous job. The following criteria must be met: </p>
 *         <ul>
 *             <li>
 *                 <p>The job must have been created with the <code>targetSelection</code> field set to
 *                     "CONTINUOUS".</p>
 *             </li>
 *             <li>
 *                 <p>The job status must currently be "IN_PROGRESS".</p>
 *             </li>
 *             <li>
 *                 <p>The total number of targets associated with a job must not exceed 100.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, AssociateTargetsWithJobCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, AssociateTargetsWithJobCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new AssociateTargetsWithJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateTargetsWithJobCommandInput} for command's `input` shape.
 * @see {@link AssociateTargetsWithJobCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateTargetsWithJobCommand = /** @class */ (function (_super) {
    __extends(AssociateTargetsWithJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateTargetsWithJobCommand(input) {
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
    AssociateTargetsWithJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "AssociateTargetsWithJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateTargetsWithJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateTargetsWithJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateTargetsWithJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AssociateTargetsWithJobCommand(input, context);
    };
    AssociateTargetsWithJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AssociateTargetsWithJobCommand(output, context);
    };
    return AssociateTargetsWithJobCommand;
}($Command));
export { AssociateTargetsWithJobCommand };
//# sourceMappingURL=AssociateTargetsWithJobCommand.js.map