"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromoteResourceShareCreatedFromPolicyCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Resource shares that were created by attaching a policy to a resource are visible only to
 * 			the resource share owner, and the resource share cannot be modified in AWS RAM.</p>
 *
 *     	    <p>Use this API action to promote the resource share. When you promote the resource share,
 * 			it becomes:</p>
 *     	    <ul>
 *             <li>
 *     			        <p>Visible to all principals that it is shared with.</p>
 *     		      </li>
 *             <li>
 *     			        <p>Modifiable in AWS RAM.</p>
 *     		      </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, PromoteResourceShareCreatedFromPolicyCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, PromoteResourceShareCreatedFromPolicyCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new PromoteResourceShareCreatedFromPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PromoteResourceShareCreatedFromPolicyCommandInput} for command's `input` shape.
 * @see {@link PromoteResourceShareCreatedFromPolicyCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PromoteResourceShareCreatedFromPolicyCommand extends smithy_client_1.Command {
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
        const clientName = "RAMClient";
        const commandName = "PromoteResourceShareCreatedFromPolicyCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PromoteResourceShareCreatedFromPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.PromoteResourceShareCreatedFromPolicyResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1PromoteResourceShareCreatedFromPolicyCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1PromoteResourceShareCreatedFromPolicyCommand(output, context);
    }
}
exports.PromoteResourceShareCreatedFromPolicyCommand = PromoteResourceShareCreatedFromPolicyCommand;
//# sourceMappingURL=PromoteResourceShareCreatedFromPolicyCommand.js.map