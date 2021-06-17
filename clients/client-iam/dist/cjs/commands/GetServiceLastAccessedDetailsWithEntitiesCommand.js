"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetServiceLastAccessedDetailsWithEntitiesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>After you generate a group or policy report using the
 *                 <code>GenerateServiceLastAccessedDetails</code> operation, you can use the
 *                 <code>JobId</code> parameter in
 *                 <code>GetServiceLastAccessedDetailsWithEntities</code>. This operation retrieves the
 *             status of your report job and a list of entities that could have used group or policy
 *             permissions to access the specified service.</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <b>Group</b> – For a group report, this
 *                     operation returns a list of users in the group that could have used the group’s
 *                     policies in an attempt to access the service.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>Policy</b> – For a policy report, this
 *                     operation returns a list of entities (users or roles) that could have used the
 *                     policy in an attempt to access the service.</p>
 *             </li>
 *          </ul>
 *         <p>You can also use this operation for user or role reports to retrieve details about
 *             those entities.</p>
 *         <p>If the operation fails, the <code>GetServiceLastAccessedDetailsWithEntities</code>
 *             operation returns the reason that it failed.</p>
 *         <p>By default, the list of associated entities is sorted by date, with the most recent
 *             access listed first.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetServiceLastAccessedDetailsWithEntitiesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetServiceLastAccessedDetailsWithEntitiesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetServiceLastAccessedDetailsWithEntitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetServiceLastAccessedDetailsWithEntitiesCommandInput} for command's `input` shape.
 * @see {@link GetServiceLastAccessedDetailsWithEntitiesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetServiceLastAccessedDetailsWithEntitiesCommand extends smithy_client_1.Command {
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
        const clientName = "IAMClient";
        const commandName = "GetServiceLastAccessedDetailsWithEntitiesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetServiceLastAccessedDetailsWithEntitiesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetServiceLastAccessedDetailsWithEntitiesResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommand(output, context);
    }
}
exports.GetServiceLastAccessedDetailsWithEntitiesCommand = GetServiceLastAccessedDetailsWithEntitiesCommand;
//# sourceMappingURL=GetServiceLastAccessedDetailsWithEntitiesCommand.js.map