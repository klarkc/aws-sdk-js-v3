"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetServiceLinkedRoleDeletionStatusCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Retrieves the status of your service-linked role deletion. After you use <a>DeleteServiceLinkedRole</a> to submit a service-linked role for deletion,
 *             you can use the <code>DeletionTaskId</code> parameter in
 *                 <code>GetServiceLinkedRoleDeletionStatus</code> to check the status of the deletion.
 *             If the deletion fails, this operation returns the reason that it failed, if that
 *             information is returned by the service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetServiceLinkedRoleDeletionStatusCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetServiceLinkedRoleDeletionStatusCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetServiceLinkedRoleDeletionStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetServiceLinkedRoleDeletionStatusCommandInput} for command's `input` shape.
 * @see {@link GetServiceLinkedRoleDeletionStatusCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetServiceLinkedRoleDeletionStatusCommand extends smithy_client_1.Command {
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
        const commandName = "GetServiceLinkedRoleDeletionStatusCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetServiceLinkedRoleDeletionStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetServiceLinkedRoleDeletionStatusResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryGetServiceLinkedRoleDeletionStatusCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryGetServiceLinkedRoleDeletionStatusCommand(output, context);
    }
}
exports.GetServiceLinkedRoleDeletionStatusCommand = GetServiceLinkedRoleDeletionStatusCommand;
//# sourceMappingURL=GetServiceLinkedRoleDeletionStatusCommand.js.map