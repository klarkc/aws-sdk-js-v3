"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLifecyclePoliciesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Gets summary information about all or the specified data lifecycle policies.</p>
 * 		       <p>To get complete information about a policy, use <a>GetLifecyclePolicy</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DLMClient, GetLifecyclePoliciesCommand } from "@aws-sdk/client-dlm"; // ES Modules import
 * // const { DLMClient, GetLifecyclePoliciesCommand } = require("@aws-sdk/client-dlm"); // CommonJS import
 * const client = new DLMClient(config);
 * const command = new GetLifecyclePoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLifecyclePoliciesCommandInput} for command's `input` shape.
 * @see {@link GetLifecyclePoliciesCommandOutput} for command's `response` shape.
 * @see {@link DLMClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetLifecyclePoliciesCommand extends smithy_client_1.Command {
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
        const clientName = "DLMClient";
        const commandName = "GetLifecyclePoliciesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetLifecyclePoliciesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetLifecyclePoliciesResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1GetLifecyclePoliciesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1GetLifecyclePoliciesCommand(output, context);
    }
}
exports.GetLifecyclePoliciesCommand = GetLifecyclePoliciesCommand;
//# sourceMappingURL=GetLifecyclePoliciesCommand.js.map