import { __extends } from "tslib";
import { CreateAdditionalAssignmentsForHITRequest, CreateAdditionalAssignmentsForHITResponse, } from "../models/models_0";
import { deserializeAws_json1_1CreateAdditionalAssignmentsForHITCommand, serializeAws_json1_1CreateAdditionalAssignmentsForHITCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             The
 *             <code>CreateAdditionalAssignmentsForHIT</code>
 *             operation increases the maximum number of assignments of an existing HIT.
 *         </p>
 *         <p>
 *             To extend the maximum number of assignments, specify the number of additional assignments.</p>
 *         <note>
 *             <ul>
 *                <li>
 *                     <p>HITs created with fewer than 10 assignments cannot be extended to have 10 or more assignments. Attempting to add assignments in a way that brings the total number of assignments for a HIT from fewer than 10 assignments to 10 or more
 *                         assignments will result in an
 *                         <code>AWS.MechanicalTurk.InvalidMaximumAssignmentsIncrease</code>
 *                         exception.</p>
 *                 </li>
 *                <li>
 *                     <p>HITs that were created before July 22, 2015 cannot be extended. Attempting to extend HITs that were created before July 22, 2015 will result in an
 *                         <code>AWS.MechanicalTurk.HITTooOldForExtension</code>
 *                         exception.
 *                     </p>
 *                 </li>
 *             </ul>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, CreateAdditionalAssignmentsForHITCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, CreateAdditionalAssignmentsForHITCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new CreateAdditionalAssignmentsForHITCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAdditionalAssignmentsForHITCommandInput} for command's `input` shape.
 * @see {@link CreateAdditionalAssignmentsForHITCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAdditionalAssignmentsForHITCommand = /** @class */ (function (_super) {
    __extends(CreateAdditionalAssignmentsForHITCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateAdditionalAssignmentsForHITCommand(input) {
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
    CreateAdditionalAssignmentsForHITCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MTurkClient";
        var commandName = "CreateAdditionalAssignmentsForHITCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateAdditionalAssignmentsForHITRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateAdditionalAssignmentsForHITResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateAdditionalAssignmentsForHITCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateAdditionalAssignmentsForHITCommand(input, context);
    };
    CreateAdditionalAssignmentsForHITCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateAdditionalAssignmentsForHITCommand(output, context);
    };
    return CreateAdditionalAssignmentsForHITCommand;
}($Command));
export { CreateAdditionalAssignmentsForHITCommand };
//# sourceMappingURL=CreateAdditionalAssignmentsForHITCommand.js.map