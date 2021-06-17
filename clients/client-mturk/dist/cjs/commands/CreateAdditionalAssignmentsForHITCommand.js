"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAdditionalAssignmentsForHITCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class CreateAdditionalAssignmentsForHITCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "MTurkClient";
        const commandName = "CreateAdditionalAssignmentsForHITCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateAdditionalAssignmentsForHITRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateAdditionalAssignmentsForHITResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateAdditionalAssignmentsForHITCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateAdditionalAssignmentsForHITCommand(output, context);
    }
}
exports.CreateAdditionalAssignmentsForHITCommand = CreateAdditionalAssignmentsForHITCommand;
//# sourceMappingURL=CreateAdditionalAssignmentsForHITCommand.js.map