"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyListenerCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Replaces the specified properties of the specified listener. Any properties that you do
 *       not specify remain unchanged.</p>
 *          <p>Changing the protocol from HTTPS to HTTP, or from TLS to TCP, removes the security policy
 *       and default certificate properties. If you change the protocol from HTTP to HTTPS, or from TCP
 *       to TLS, you must add the security policy and default certificate properties.</p>
 *          <p>To add an item to a list, remove an item from a list, or update an item in a list, you
 *       must provide the entire list. For example, to add an action, specify a list with the current
 *       actions plus the new action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, ModifyListenerCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, ModifyListenerCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new ModifyListenerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyListenerCommandInput} for command's `input` shape.
 * @see {@link ModifyListenerCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ModifyListenerCommand extends smithy_client_1.Command {
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
        const clientName = "ElasticLoadBalancingV2Client";
        const commandName = "ModifyListenerCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ModifyListenerInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ModifyListenerOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryModifyListenerCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryModifyListenerCommand(output, context);
    }
}
exports.ModifyListenerCommand = ModifyListenerCommand;
//# sourceMappingURL=ModifyListenerCommand.js.map